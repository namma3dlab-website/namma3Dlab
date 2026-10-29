module.exports = [
(()=>{"use strict";return[
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 48,
    height: 48
};
}),
"[project]/src/app/products/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__next_create_empty_gsp_error",
    ()=>__next_create_empty_gsp_error,
    "default",
    ()=>ProductDetailPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductDetailClient.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CATALOG_PRODUCTS"].map((product)=>({
            slug: product.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductBySlug"])(slug);
    if (!product) {
        return {
            title: 'Product Not Found | Namma 3D Lab'
        };
    }
    return {
        title: `${product.name} | Namma 3D Lab`,
        description: product.description,
        openGraph: {
            title: `${product.name} — ₹${product.price}`,
            description: product.description
        }
    };
}
async function ProductDetailPage({ params }) {
    const { slug } = await params;
    const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductBySlug"])(slug);
    if (!product) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    // Get related products from the same or other categories
    const relatedProducts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CATALOG_PRODUCTS"].filter((p)=>p.id !== product.id).slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            background: 'var(--paper)',
            minHeight: '100vh',
            paddingTop: '28px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductDetailClient"], {
                product: product,
                relatedProducts: relatedProducts
            }, void 0, false, {
                fileName: "[project]/src/app/products/[slug]/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/src/app/products/[slug]/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/[slug]/page.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
const __next_create_empty_gsp_error = function generateStaticParams() {
    return new Error('When using Cache Components, all `generateStaticParams` functions must return at least one result. This is to ensure that we can perform build-time validation that there is no other dynamic accesses that would cause a runtime error.\n\nLearn more: https://nextjs.org/docs/messages/empty-generate-static-params');
};
}),
"[project]/src/components/Footer.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Footer() from the server but Footer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Footer.tsx", "Footer");
}),
"[project]/src/components/Footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/ProductDetailClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductDetailClient",
    ()=>ProductDetailClient
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProductDetailClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductDetailClient() from the server but ProductDetailClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ProductDetailClient.tsx", "ProductDetailClient");
}),
"[project]/src/components/ProductDetailClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ProductDetailClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CAPABILITIES",
    ()=>CAPABILITIES,
    "CATALOG_PRODUCTS",
    ()=>CATALOG_PRODUCTS,
    "MATERIALS_MATRIX",
    ()=>MATERIALS_MATRIX,
    "getProductBySlug",
    ()=>getProductBySlug
]);
const CATALOG_PRODUCTS = [
    {
        id: 'prod-vase',
        slug: 'geometric-spiral-fluted-vase',
        name: 'Geometric Spiral Fluted Vase',
        category: 'decor',
        price: 449,
        originalPrice: 599,
        material: 'Silk PLA+',
        dimensions: '180 × 110 × 110 mm',
        leadTime: '24 Hours',
        description: 'Watertight parametric vase with spiral ribbing and metallic silk shimmer reflection. Crafted using continuous single-perimeter vase mode for flawless layer transition without seam lines.',
        colorGradient: 'linear-gradient(135deg, #0284C7, #38BDF8)',
        iconName: 'Feather',
        imageUrl: '/images/products/spiral_fluted_vase.jpg',
        colors: [
            'Silk Gold',
            'Arctic Silver',
            'Emerald Green',
            'Matte Black'
        ],
        inStock: true,
        badge: 'Bestseller',
        rating: 4.9,
        reviewsCount: 38,
        features: [
            'Watertight single-perimeter spiral extrusion',
            'Reflective metallic silk finish',
            'Includes silicone non-scratch desk pads',
            'Optimized for dried botanicals and fresh stems'
        ],
        specs: {
            'Print Technology': 'FDM (Fused Deposition Modeling)',
            'Layer Resolution': '0.16 mm Ultra-Smooth',
            'Material Grade': 'Silk PLA+ Biopolymer',
            'Net Weight': '145 grams',
            'Waterproof': 'Yes (Hydrostatic tested 24h)'
        }
    },
    {
        id: 'prod-idol',
        slug: 'intricate-cultural-deity-idol',
        name: 'Intricate Cultural Deity Idol',
        category: 'idols',
        price: 799,
        originalPrice: 1099,
        material: 'Ultra-Fine SLA Resin',
        dimensions: '120 × 75 × 65 mm',
        leadTime: '24–48 Hours',
        description: 'Museum-grade 0.05mm layer resolution with antique bronze cured acrylic finish. Printed on 8K monochrome LCD resin engines to capture microscopic facial features and intricate ornaments.',
        colorGradient: 'linear-gradient(135deg, #D97706, #FBBF24)',
        iconName: 'Sun',
        imageUrl: '/images/products/cultural_deity_idol.jpg',
        colors: [
            'Antique Bronze',
            'Marble White',
            'Obsidian Gold'
        ],
        inStock: true,
        badge: '8K Ultra Detail',
        rating: 5.0,
        reviewsCount: 52,
        features: [
            '8K High-Definition MSLA Resin curing',
            '0.05 mm invisible layer lines',
            'Post-cured in dual-wavelength UV chambers',
            'Hand-finished antique bronze patina'
        ],
        specs: {
            'Print Technology': 'SLA / MSLA (Photopolymer Resin)',
            'Layer Resolution': '0.05 mm (50 Microns)',
            'Material Grade': 'High-Impact Engineering Tough Resin',
            'Net Weight': '180 grams solid',
            'Surface Finish': 'Matte Acrylic Sealed'
        }
    },
    {
        id: 'prod-lamp',
        slug: 'voronoi-ambient-desk-lamp',
        name: 'Voronoi Ambient Desk Lamp',
        category: 'decor',
        price: 1299,
        originalPrice: 1699,
        material: 'Tough PLA / Wood Composite',
        dimensions: '210 × 130 × 130 mm',
        leadTime: '48 Hours',
        description: 'Biomorphic Voronoi cell geometry creating dramatic ambient light refraction. Includes an energy-efficient warm USB LED puck light with inline on/off toggle.',
        colorGradient: 'linear-gradient(135deg, #16A34A, #4ADE80)',
        iconName: 'Lamp',
        imageUrl: '/images/products/voronoi_ambient_lamp.jpg',
        colors: [
            'Wood Composite',
            'Matte White',
            'Charcoal'
        ],
        inStock: true,
        badge: 'Includes LED',
        rating: 4.8,
        reviewsCount: 24,
        features: [
            'Parametric Voronoi geometric cellular lattice',
            'Warm white 3000K USB LED puck included',
            'Low thermal emission, safe for overnight desk use',
            'Braided 1.5m USB cable with switch'
        ],
        specs: {
            'Print Technology': 'High-Speed CoreXY FDM',
            'Layer Resolution': '0.20 mm Adaptive',
            'Material Grade': 'Heat-Resistant Tough PLA',
            'Power Supply': '5V USB Type-A (Universal)',
            'Cable Length': '1.5 Meters Braided'
        }
    },
    {
        id: 'prod-keychain',
        slug: 'bespoke-dual-tone-keychains',
        name: 'Bespoke Dual-Tone Keychains',
        category: 'gifts',
        price: 199,
        originalPrice: 299,
        material: 'PETG Impact Resistant',
        dimensions: '70 × 24 × 5 mm',
        leadTime: 'Same Day',
        description: 'Industrial dual-color fused typography. Impervious to pocket wear, car keys, and water. Perfect everyday carry accessory or personalized token.',
        colorGradient: 'linear-gradient(135deg, #DB2777, #F472B6)',
        iconName: 'Key',
        imageUrl: '/images/products/bespoke_keychains.jpg',
        colors: [
            'Black / Neon Lime',
            'Navy / White',
            'Red / Black'
        ],
        inStock: true,
        badge: 'Same Day Dispatch',
        rating: 4.9,
        reviewsCount: 89,
        features: [
            'Dual-extrusion lettering fused into the base (not painted)',
            'Includes stainless steel split ring and carabiner',
            'Impact-proof PETG polymer construction',
            'Scratch and water resistant'
        ],
        specs: {
            'Print Technology': 'Multi-Material FDM Co-extrusion',
            'Layer Resolution': '0.12 mm Fine',
            'Material Grade': 'PETG Copolymer',
            'Hardware': '304 Stainless Steel Ring',
            'Weight': '18 grams'
        }
    },
    {
        id: 'prod-stand',
        slug: 'modular-headphone-phone-stand',
        name: 'Modular Headphone & Phone Stand',
        category: 'gadgets',
        price: 649,
        originalPrice: 899,
        material: 'Matte PETG + Weighted Base',
        dimensions: '240 × 120 × 140 mm',
        leadTime: '24 Hours',
        description: 'Ergonomic acoustic headphone cradle with concealed cable routing and anti-slip rubber pads. Holds any over-ear headphones while simultaneously docking your smartphone at an optimal video angle.',
        colorGradient: 'linear-gradient(135deg, #4F46E5, #818CF8)',
        iconName: 'Headphones',
        imageUrl: '/images/products/modular_headphone_stand.jpg',
        colors: [
            'Matte Obsidian',
            'Stealth Grey',
            'Cyberpunk Lime'
        ],
        inStock: true,
        badge: 'Popular',
        rating: 4.9,
        reviewsCount: 41,
        features: [
            'Contoured arc cradles headband without stretching padding',
            'Dual phone slant dock with charging cable notch',
            'Anti-tip weighted internal base structure',
            'Precision matte anti-glare finish'
        ],
        specs: {
            'Print Technology': 'Precision CoreXY FDM',
            'Layer Resolution': '0.20 mm Structural',
            'Material Grade': 'High-Yield PETG',
            'Base Weight': '260 grams weighted',
            'Compatibility': 'All standard over-ear & on-ear headphones'
        }
    },
    {
        id: 'prod-litho',
        slug: 'custom-lithophane-photo-box',
        name: 'Custom Lithophane Photo Box',
        category: 'gifts',
        price: 1499,
        originalPrice: 1999,
        material: 'Optical Translucent PLA',
        dimensions: '150 × 150 × 40 mm',
        leadTime: '48 Hours',
        description: 'Transforms your favorite portrait into a 3D relief that reveals high-definition imagery when backlit. Crafted from translucent optical biopolymer with calibrated grayscale thickness grading.',
        colorGradient: 'linear-gradient(135deg, #D97706, #FDE68A)',
        iconName: 'Moon',
        imageUrl: '/images/products/lithophane_photo_box.jpg',
        colors: [
            'Warm Backlight',
            'Pure White LED'
        ],
        inStock: true,
        badge: 'Personalized',
        rating: 5.0,
        reviewsCount: 31,
        features: [
            'Sub-millimeter optical thickness grading',
            'Integrated backlighting light engine included',
            'Handcrafted shadow box frame',
            'Includes custom gift packaging'
        ],
        specs: {
            'Print Technology': 'Vertical 0.08 mm Micro-FDM',
            'Layer Resolution': '0.08 mm (80 Microns)',
            'Material Grade': 'Optical Grade Translucent PLA',
            'Light Source': 'Internal 5V USB LED Matrix',
            'Input Photo': 'Any high-res JPEG/PNG'
        }
    },
    {
        id: 'prod-organizer',
        slug: 'hexagonal-desktop-cable-organizer',
        name: 'Hexagonal Desktop Cable Organizer',
        category: 'gadgets',
        price: 349,
        originalPrice: 499,
        material: 'PLA+ Matte Obsidian',
        dimensions: '110 × 95 × 30 mm',
        leadTime: '24 Hours',
        description: 'Magnetic snap modular organizing cells for USB-C, lightning cables, and SD cards. Keep your workspace clean with tactile geometric modularity.',
        colorGradient: 'linear-gradient(135deg, #059669, #34D399)',
        iconName: 'Grid',
        imageUrl: '/images/products/hex_desk_organizer.jpg',
        colors: [
            'Matte Obsidian',
            'Slate Grey',
            'Mint Green'
        ],
        inStock: true,
        rating: 4.7,
        reviewsCount: 19,
        features: [
            'Modular magnetic interlocking hexagonal bays',
            'Fits cables up to 6mm diameter',
            'Dedicated SD card and flash drive slots',
            'Weighted silicone footings'
        ],
        specs: {
            'Print Technology': 'FDM Additive',
            'Layer Resolution': '0.16 mm',
            'Material Grade': 'PLA+ Reinforced',
            'Weight': '85 grams'
        }
    },
    {
        id: 'prod-sign',
        slug: 'executive-nameplate-desk-wedge',
        name: 'Executive Nameplate & Desk Wedge',
        category: 'gifts',
        price: 599,
        originalPrice: 799,
        material: 'Dual Extrusion Obsidian / Lime',
        dimensions: '220 × 55 × 35 mm',
        leadTime: '24 Hours',
        description: 'Personalized embossed desk title with dual-color lettering and integrated slant wedge. Professional, modern, and built to stand out on executive office tables.',
        colorGradient: 'linear-gradient(135deg, #84CC16, #BEF264)',
        iconName: 'Sparkles',
        imageUrl: '/images/products/executive_nameplate.jpg',
        colors: [
            'Obsidian / Lime',
            'Black / Gold',
            'Walnut / White'
        ],
        inStock: true,
        badge: 'Custom Name',
        rating: 4.9,
        reviewsCount: 63,
        features: [
            'Embossed 3D lettering fused seamlessly into heavy wedge',
            'Personalized with your name & designation',
            'Anti-slip silicone desk grip pads',
            'Choice of dual-tone executive color schemes'
        ],
        specs: {
            'Print Technology': 'Dual-Extruder Direct FDM',
            'Layer Resolution': '0.12 mm',
            'Material Grade': 'High-Density Structural PETG',
            'Weight': '190 grams weighted'
        }
    }
];
function getProductBySlug(slug) {
    return CATALOG_PRODUCTS.find((p)=>p.slug === slug || p.id === slug);
}
const CAPABILITIES = [
    {
        id: 'cap-fdm',
        title: 'High-Speed FDM Additive Manufacturing',
        subtitle: 'CoreXY Fleet • Rapid Functional Prototyping',
        technology: 'Fused Deposition Modeling (FDM / FFF)',
        tolerance: '±0.10 mm calibrated',
        layerHeight: '0.08 mm – 0.28 mm',
        description: 'Multi-head fleet of high-speed Bambu Lab and Voron motion systems capable of 500mm/s print velocity without compromising layer adhesion.',
        benefits: [
            'Zero tooling setup fee or MOQ',
            'Wide material breadth: PLA, PETG, ABS, ASA, TPU, PC',
            'Large build volume up to 300 × 300 × 300 mm',
            'Dual-color and multi-material co-extrusion'
        ],
        equipment: 'Bambu Lab X1-Carbon, P1S Fleet, Voron 2.4'
    },
    {
        id: 'cap-sla',
        title: 'Ultra-High Detail SLA Resin Printing',
        subtitle: 'Micron Precision • Mirror Surface Finish',
        technology: 'Stereolithography (MSLA / LCD)',
        tolerance: '±0.03 mm optical precision',
        layerHeight: '0.02 mm – 0.05 mm',
        description: 'Photopolymer liquid resin cured by 8K monochrome UV light engines for injection-mold quality parts with invisible layer lines.',
        benefits: [
            'Glass-smooth surface finish ready for master molds',
            'Intricate geometries, microscopic threads, and jewelry filigree',
            'High-impact engineering resin formulations',
            'Post-cured with thermal UV chambers'
        ],
        equipment: 'Elegoo Saturn 8K, Anycubic M5s Industrial'
    },
    {
        id: 'cap-cad',
        title: 'Parametric CAD & Reverse Engineering',
        subtitle: 'From Concept / Broken Part to Production',
        technology: 'Parametric Solid Modeling & Mesh Topology',
        tolerance: 'Digital Precision 0.001 mm',
        layerHeight: 'N/A (3D CAD Deliverable)',
        description: 'Have a broken machine component, hand sketch, or idea? Our mechanical design engineers measure, model, and optimize parts for additive manufacturing (DfAM).',
        benefits: [
            'Caliper & optical scanning verification',
            'Internal weight-reducing lattice structures',
            'Export in STEP, IGES, STL, and native CAD formats',
            'Finite Element Analysis (FEA) stress validation'
        ],
        equipment: 'Autodesk Fusion 360, SolidWorks, MeshMixer'
    },
    {
        id: 'cap-batch',
        title: 'Low-Volume Production & B2B Runs',
        subtitle: 'Bridge Manufacturing • 10 to 1,000 Units',
        technology: 'Automated Farm Continuous Slicing',
        tolerance: '±0.10 mm batch repeatability',
        layerHeight: '0.16 mm – 0.24 mm',
        description: 'Bypass costly injection molds. Produce 10 to 1,000 production units within days with tiered commercial pricing and GST invoicing.',
        benefits: [
            'Cost-effective bridge to mass injection molding',
            'Design iterations can be updated mid-batch without scrapped tooling',
            'Automated batch inspection with macro photo verification',
            'Direct Bangalore courier dispatch with tracked delivery'
        ],
        equipment: '8-Unit Calibrated Farm Network'
    }
];
const MATERIALS_MATRIX = [
    {
        name: 'PLA & PLA+ Pro',
        code: 'PLA',
        type: 'Biopolymer',
        density: '1.24 g/cm³',
        tempResistance: '55°C',
        tensileStrength: '50 MPa',
        finish: 'Smooth Satin / Gloss',
        pricePerGram: 4.5,
        badge: 'Most Popular',
        badgeType: 'popular',
        recommendedFor: 'Rapid concept prototypes, architectural models, decorative items, and consumer giftwares.'
    },
    {
        name: 'PETG Structural',
        code: 'PETG',
        type: 'Copolyester',
        density: '1.27 g/cm³',
        tempResistance: '75°C',
        tensileStrength: '53 MPa',
        finish: 'Glossy & Semi-Ductile',
        pricePerGram: 6.0,
        badge: 'Impact Proof',
        badgeType: 'durable',
        recommendedFor: 'Mechanical brackets, snap-fit enclosures, outdoor housings, and chemical exposure.'
    },
    {
        name: 'ABS / ASA Industrial',
        code: 'ABS/ASA',
        type: 'Thermoplastic',
        density: '1.05 g/cm³',
        tempResistance: '95°C',
        tensileStrength: '45 MPa',
        finish: 'Matte Industrial / UV Stable',
        pricePerGram: 6.5,
        badge: 'High Heat',
        badgeType: 'hightemp',
        recommendedFor: 'Automotive engine bays, electronics enclosures, outdoor fixtures subject to solar UV.'
    },
    {
        name: 'TPU 95A Flexible',
        code: 'TPU',
        type: 'Polyurethane Elastomer',
        density: '1.21 g/cm³',
        tempResistance: '80°C',
        tensileStrength: '35 MPa (450% Elongation)',
        finish: 'Rubberized Tactile',
        pricePerGram: 9.0,
        badge: 'Flexible',
        badgeType: 'flexible',
        recommendedFor: 'Shock-absorbing gaskets, protective bumpers, drone vibration dampeners, and ergonomic grips.'
    },
    {
        name: 'Tough SLA Resin',
        code: 'SLA Resin',
        type: 'Photopolymer',
        density: '1.15 g/cm³',
        tempResistance: '65°C',
        tensileStrength: '65 MPa',
        finish: 'Glass-Smooth 0.05mm',
        pricePerGram: 14.0,
        badge: 'Ultra Detail',
        badgeType: 'resin',
        recommendedFor: 'High-detail character figurines, dental study models, mold master patterns, and micro mechanics.'
    },
    {
        name: 'Carbon Fiber PETG-CF',
        code: 'PETG-CF',
        type: 'Composite Fiber',
        density: '1.29 g/cm³',
        tempResistance: '82°C',
        tensileStrength: '72 MPa',
        finish: 'Matte Textured Carbon',
        pricePerGram: 12.0,
        badge: 'Aerospace Grade',
        badgeType: 'cf',
        recommendedFor: 'Drone arms, robotics chassis, lightweight high-rigidity structural jigs and fixtures.'
    }
];
}),
]})(),
"[externals]/next/dist/server/app-render/module-loading/track-module-loading.external.js [external] (next/dist/server/app-render/module-loading/track-module-loading.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/module-loading/track-module-loading.external.js", () => require("next/dist/server/app-render/module-loading/track-module-loading.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.117ezoe8m31dk.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/products/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/products/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0-niimvhxeb90._.js.map