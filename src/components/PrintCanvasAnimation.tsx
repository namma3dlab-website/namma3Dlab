'use client';

import React, { useEffect, useRef } from 'react';

export function PrintCanvasAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // 3D Object: Cylindrical polygon with twisted ribs (3D printed precision geometry)
    const totalLayers = 300;
    let currentLayerProgress = 50;
    let angle = 0;
    let nozzleAngle = 0;

    let isDragging = false;
    let lastX = 0;
    let manualRotY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastX = e.clientX;
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastX;
      manualRotY += dx * 0.01;
      lastX = e.clientX;
    };
    const handleMouseUp = () => {
      isDragging = false;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    const render = () => {
      if (!ctx || width === 0 || height === 0) return;

      // Smooth progression
      currentLayerProgress += 0.26;
      if (currentLayerProgress > totalLayers) currentLayerProgress = 12;
      nozzleAngle += 0.075;
      if (!isDragging) {
        angle += 0.006;
      }

      const activeLayer = Math.floor(currentLayerProgress);

      // Transparent clear to blend seamlessly with the website background
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2 + 35;
      const rotY = angle + manualRotY;
      const rotX = 0.42; // Subtle isometric angle

      // 3D Isometric Projection
      const project = (x: number, y: number, z: number) => {
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;

        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        const fov = 480;
        const scale = fov / (fov + z2);
        return {
          px: centerX + x1 * scale,
          py: centerY + y2 * scale,
          scale,
        };
      };

      // 1. Subtle, Clean Isometric Grid Bed (blends with light theme)
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.22)';
      const gridSize = 160;
      const gridStep = 40;
      for (let g = -gridSize; g <= gridSize; g += gridStep) {
        const p1 = project(g, 65, -gridSize);
        const p2 = project(g, 65, gridSize);
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();

        const p3 = project(-gridSize, 65, g);
        const p4 = project(gridSize, 65, g);
        ctx.beginPath();
        ctx.moveTo(p3.px, p3.py);
        ctx.lineTo(p4.px, p4.py);
        ctx.stroke();
      }

      // 2. Printed Geometry Layers
      const sides = 8;
      const layerStepHeight = 0.58;
      const baseRadius = 78;

      const getLayerPoints = (layerIdx: number) => {
        const t = layerIdx / totalLayers;
        const y = 55 - layerIdx * layerStepHeight;
        const radius = baseRadius * (0.82 + 0.32 * Math.sin(t * Math.PI * 2.2));
        const twist = t * 1.8;

        const pts = [];
        for (let s = 0; s < sides; s++) {
          const a = (s / sides) * Math.PI * 2 + twist;
          const px = Math.cos(a) * radius;
          const pz = Math.sin(a) * radius;
          pts.push(project(px, y, pz));
        }
        return { pts, y, radius, twist };
      };

      // Draw accumulated layers
      const step = 4;
      for (let l = 2; l <= activeLayer; l += step) {
        const isCurrent = l >= activeLayer - step;
        const { pts } = getLayerPoints(l);

        ctx.beginPath();
        ctx.moveTo(pts[0].px, pts[0].py);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].px, pts[i].py);
        }
        ctx.closePath();

        if (isCurrent) {
          // Active layer: Bright precision green
          ctx.strokeStyle = '#07875D';
          ctx.lineWidth = 2.4;
          ctx.shadowColor = 'rgba(7, 135, 93, 0.45)';
          ctx.shadowBlur = 10;
          ctx.stroke();
          ctx.shadowBlur = 0;
        } else {
          // Settled layers: Clean, light-theme compatible emerald lines
          const progress = l / totalLayers;
          const alpha = 0.22 + progress * 0.55;
          ctx.strokeStyle = `rgba(7, 135, 93, ${alpha})`;
          ctx.lineWidth = 1.1;
          ctx.stroke();
        }
      }

      // 3. Subtle Vertical Structural Ribs
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(100, 116, 139, 0.25)';
      for (let s = 0; s < sides; s += 2) {
        ctx.beginPath();
        for (let l = 2; l <= activeLayer; l += 8) {
          const { pts } = getLayerPoints(l);
          if (l === 2) ctx.moveTo(pts[s].px, pts[s].py);
          else ctx.lineTo(pts[s].px, pts[s].py);
        }
        ctx.stroke();
      }

      // 4. Moving Print Head & Toolpath
      const curData = getLayerPoints(activeLayer);
      const nozzleX = Math.cos(nozzleAngle + curData.twist) * curData.radius;
      const nozzleZ = Math.sin(nozzleAngle + curData.twist) * curData.radius;
      const nozzleProj = project(nozzleX, curData.y, nozzleZ);

      // Toolhead Hotend (Sleek minimalist cone in dark graphite)
      const hotendLeft = project(nozzleX - 11, curData.y - 26, nozzleZ);
      const hotendRight = project(nozzleX + 11, curData.y - 26, nozzleZ);

      ctx.beginPath();
      ctx.moveTo(hotendLeft.px, hotendLeft.py);
      ctx.lineTo(hotendRight.px, hotendRight.py);
      ctx.lineTo(nozzleProj.px, nozzleProj.py);
      ctx.closePath();
      ctx.fillStyle = '#0F172A';
      ctx.fill();
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Laser / Hotend Extrusion Point
      ctx.beginPath();
      ctx.arc(nozzleProj.px, nozzleProj.py, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#10B981';
      ctx.shadowColor = '#10B981';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Fine Crosshair Axis Guide
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.35)';
      ctx.setLineDash([3, 4]);
      const beamL = project(-130, curData.y, nozzleZ);
      const beamR = project(130, curData.y, nozzleZ);
      ctx.moveTo(beamL.px, beamL.py);
      ctx.lineTo(beamR.px, beamR.py);
      ctx.stroke();
      ctx.setLineDash([]);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="hero-canvas-wrap">
      <canvas
        ref={canvasRef}
        className="hero-inline-canvas"
        title="Interactive 3D Simulation — Click and drag to inspect"
      />
    </div>
  );
}
