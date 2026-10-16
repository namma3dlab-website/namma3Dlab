/**
 * Namma 3D Lab — Client-Side 3D Mesh Parser (STL & OBJ)
 * Computes bounding box dimensions, exact mesh volume via signed tetrahedron divergence theorem,
 * and derives mass & print time estimates based on engineering materials.
 */

export const MATERIAL_DENSITIES = {
  // Density in g/cm³
  'pla': 1.24,
  'petg': 1.27,
  'abs': 1.05,
  'tpu': 1.21,
  'resin': 1.15
};

export const MATERIAL_RATES = {
  // Base rate per gram in INR
  'pla': 4.5,
  'petg': 6.0,
  'abs': 6.5,
  'tpu': 9.0,
  'resin': 14.0
};

/**
 * Parses an ArrayBuffer of an STL file (binary or ASCII)
 * @param {ArrayBuffer} buffer
 * @returns {Promise<MeshAnalysisResult>}
 */
export async function parseSTL(buffer) {
  const isBinary = isBinarySTL(buffer);

  if (isBinary) {
    const dataView = new DataView(buffer);
    return parseBinarySTL(dataView);
  } else {
    const text = new TextDecoder('utf-8').decode(buffer);
    return parseAsciiSTL(text);
  }
}

/**
 * Basic heuristic to detect binary vs ASCII STL
 */
function isBinarySTL(buffer) {
  if (buffer.byteLength < 84) return false;
  const headerView = new Uint8Array(buffer, 0, 80);
  const headerStr = String.fromCharCode.apply(null, Array.from(headerView.slice(0, 5)));
  if (headerStr.toLowerCase() !== 'solid') {
    return true;
  }
  // If starts with "solid", verify file size matches binary triangle count header
  const dataView = new DataView(buffer);
  const numTriangles = dataView.getUint32(80, true);
  const expectedSize = 84 + numTriangles * 50;
  return buffer.byteLength === expectedSize;
}

/**
 * Parses binary STL
 */
function parseBinarySTL(dataView) {
  const numTriangles = dataView.getUint32(80, true);
  let totalSignedVolume = 0;

  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;
  let minZ = Infinity, maxZ = -Infinity;

  let offset = 84;
  for (let i = 0; i < numTriangles; i++) {
    // Vertex 1
    const v1x = dataView.getFloat32(offset + 12, true);
    const v1y = dataView.getFloat32(offset + 16, true);
    const v1z = dataView.getFloat32(offset + 20, true);

    // Vertex 2
    const v2x = dataView.getFloat32(offset + 24, true);
    const v2y = dataView.getFloat32(offset + 28, true);
    const v2z = dataView.getFloat32(offset + 32, true);

    // Vertex 3
    const v3x = dataView.getFloat32(offset + 36, true);
    const v3y = dataView.getFloat32(offset + 40, true);
    const v3z = dataView.getFloat32(offset + 44, true);

    // Update bounds
    if (v1x < minX) minX = v1x; if (v1x > maxX) maxX = v1x;
    if (v2x < minX) minX = v2x; if (v2x > maxX) maxX = v2x;
    if (v3x < minX) minX = v3x; if (v3x > maxX) maxX = v3x;

    if (v1y < minY) minY = v1y; if (v1y > maxY) maxY = v1y;
    if (v2y < minY) minY = v2y; if (v2y > maxY) maxY = v2y;
    if (v3y < minY) minY = v3y; if (v3y > maxY) maxY = v3y;

    if (v1z < minZ) minZ = v1z; if (v1z > maxZ) maxZ = v1z;
    if (v2z < minZ) minZ = v2z; if (v2z > maxZ) maxZ = v2z;
    if (v3z < minZ) minZ = v3z; if (v3z > maxZ) maxZ = v3z;

    // Signed tetrahedron volume calculation: (v1 . (v2 x v3)) / 6
    const crossX = v2y * v3z - v2z * v3y;
    const crossY = v2z * v3x - v2x * v3z;
    const crossZ = v2x * v3y - v2y * v3x;
    const signedVolume = (v1x * crossX + v1y * crossY + v1z * crossZ) / 6.0;

    totalSignedVolume += signedVolume;
    offset += 50;
  }

  // Volume in mm³ converted to cm³ (1 cm³ = 1000 mm³)
  const volumeCm3 = Math.abs(totalSignedVolume) / 1000.0;

  return {
    triangles: numTriangles,
    volumeCm3: Math.max(0.1, Number(volumeCm3.toFixed(2))),
    dimensions: {
      x: Math.max(1, Number((maxX - minX).toFixed(1))),
      y: Math.max(1, Number((maxY - minY).toFixed(1))),
      z: Math.max(1, Number((maxZ - minZ).toFixed(1)))
    }
  };
}

/**
 * Parses ASCII STL
 */
function parseAsciiSTL(text) {
  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;
  let minZ = Infinity, maxZ = -Infinity;

  let totalSignedVolume = 0;
  let triangleCount = 0;

  const vertexRegex = /vertex\s+([-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)\s+([-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)\s+([-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)/gi;

  let currentFacet = [];
  let match;

  while ((match = vertexRegex.exec(text)) !== null) {
    const x = parseFloat(match[1]);
    const y = parseFloat(match[2]);
    const z = parseFloat(match[3]);

    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
    if (z < minZ) minZ = z; if (z > maxZ) maxZ = z;

    currentFacet.push({ x, y, z });

    if (currentFacet.length === 3) {
      triangleCount++;
      const [v1, v2, v3] = currentFacet;
      const crossX = v2.y * v3.z - v2.z * v3.y;
      const crossY = v2.z * v3.x - v2.x * v3.z;
      const crossZ = v2.x * v3.y - v2.y * v3.x;
      const signedVolume = (v1.x * crossX + v1.y * crossY + v1.z * crossZ) / 6.0;
      totalSignedVolume += signedVolume;
      currentFacet = [];
    }
  }

  const volumeCm3 = Math.abs(totalSignedVolume) / 1000.0;

  return {
    triangles: triangleCount,
    volumeCm3: Math.max(0.1, Number(volumeCm3.toFixed(2))),
    dimensions: {
      x: Math.max(1, Number((maxX - minX).toFixed(1))),
      y: Math.max(1, Number((maxY - minY).toFixed(1))),
      z: Math.max(1, Number((maxZ - minZ).toFixed(1)))
    }
  };
}

/**
 * Parses OBJ format text (vertices and faces)
 */
export function parseOBJ(text) {
  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;
  let minZ = Infinity, maxZ = -Infinity;

  const vertices = [];
  let faceCount = 0;
  const lines = text.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('v ')) {
      const parts = line.split(/\s+/);
      const x = parseFloat(parts[1]);
      const y = parseFloat(parts[2]);
      const z = parseFloat(parts[3]);

      if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
        vertices.push({ x, y, z });
        if (x < minX) minX = x; if (x > maxX) maxX = x;
        if (y < minY) minY = y; if (y > maxY) maxY = y;
        if (z < minZ) minZ = z; if (z > maxZ) maxZ = z;
      }
    } else if (line.startsWith('f ')) {
      faceCount++;
    }
  }

  const dimX = Math.max(1, maxX - minX);
  const dimY = Math.max(1, maxY - minY);
  const dimZ = Math.max(1, maxZ - minZ);

  // Approximate volume using bounding box fill factor (~35% default for typical organic/mechanical models)
  const boundingVolumeCm3 = (dimX * dimY * dimZ) / 1000.0;
  const estimatedVolumeCm3 = Math.max(0.5, boundingVolumeCm3 * 0.35);

  return {
    triangles: faceCount || vertices.length,
    volumeCm3: Number(estimatedVolumeCm3.toFixed(2)),
    dimensions: {
      x: Number(dimX.toFixed(1)),
      y: Number(dimY.toFixed(1)),
      z: Number(dimZ.toFixed(1))
    }
  };
}

/**
 * Computes weight, pricing range, and print time given geometry and settings
 */
export function calculatePrintCost(volumeCm3, materialKey = 'pla', infillPercent = 20, technology = 'fdm', quantity = 1) {
  const density = MATERIAL_DENSITIES[materialKey] || 1.24;
  const ratePerGram = MATERIAL_RATES[materialKey] || 4.5;

  // Solid perimeter shell (~30% of model) + internal infill matrix
  const effectiveDensityFactor = 0.30 + (infillPercent / 100) * 0.70;
  const singleWeightGrams = Math.max(5, Math.round(volumeCm3 * density * effectiveDensityFactor));
  const totalWeightGrams = singleWeightGrams * quantity;

  // Machine print time estimation (~25 grams per hour on high speed coreXY)
  const printHours = Math.max(0.8, Number((totalWeightGrams / 24).toFixed(1)));

  // Cost components
  const materialCost = totalWeightGrams * ratePerGram;
  const machineRatePerHour = technology === 'sla' ? 120 : 80;
  const machineCost = printHours * machineRatePerHour;
  const setupFee = 80; // Slicing, bed prep

  const basePrice = (materialCost + machineCost + setupFee);
  const minPrice = Math.round(basePrice * 1.15);
  const maxPrice = Math.round(minPrice * 1.28);

  return {
    singleWeightGrams,
    totalWeightGrams,
    printHours,
    minPrice,
    maxPrice,
    advance50Percent: Math.round(minPrice * 0.5)
  };
}
