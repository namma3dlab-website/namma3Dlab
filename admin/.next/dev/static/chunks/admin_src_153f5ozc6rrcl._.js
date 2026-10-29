(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/admin/src/components/AddProductModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddProductModal",
    ()=>AddProductModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$src$2f$context$2f$AdminDataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin/src/context/AdminDataContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const PRESET_IMAGES = [
    {
        label: 'Spiral Vase',
        url: '/images/products/spiral_fluted_vase.jpg'
    },
    {
        label: 'Deity Idol',
        url: '/images/products/cultural_deity_idol.jpg'
    },
    {
        label: 'Voronoi Lamp',
        url: '/images/products/voronoi_ambient_lamp.jpg'
    },
    {
        label: 'Headphone Stand',
        url: '/images/products/modular_headphone_stand.jpg'
    },
    {
        label: 'Lithophane Box',
        url: '/images/products/lithophane_photo_box.jpg'
    },
    {
        label: 'Hex Organizer',
        url: '/images/products/hex_desk_organizer.jpg'
    },
    {
        label: 'Bespoke Keychains',
        url: '/images/products/bespoke_keychains.jpg'
    }
];
function AddProductModal({ onClose }) {
    _s();
    const { addProduct } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$src$2f$context$2f$AdminDataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminData"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('decor');
    const [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(499);
    const [originalPrice, setOriginalPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(699);
    const [material, setMaterial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('PLA+ Matte Reinforced');
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('160 × 80 × 80 mm');
    const [leadTime, setLeadTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('24 Hours');
    const [stockQuantity, setStockQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(30);
    const [badge, setBadge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('New Release');
    const [colorsInput, setColorsInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Silk Gold, Matte White, Obsidian Black');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [imageUrl, setImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('/images/products/spiral_fluted_vase.jpg');
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!name.trim()) return;
        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const colors = colorsInput.split(',').map((c)=>c.trim()).filter(Boolean);
        addProduct({
            slug,
            name,
            category,
            price: Number(price),
            originalPrice: Number(originalPrice) || undefined,
            material,
            dimensions,
            leadTime,
            description: description || `Precision additive manufactured ${name} engineered with industrial accuracy.`,
            colorGradient: 'linear-gradient(135deg, #0A0D14, #1E293B)',
            iconName: 'Sparkles',
            imageUrl,
            colors: colors.length > 0 ? colors : [
                'Standard'
            ],
            inStock: true,
            badge,
            rating: 5.0,
            reviewsCount: 1,
            stockQuantity: Number(stockQuantity)
        });
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-content",
            onClick: (e)=>e.stopPropagation(),
            style: {
                maxWidth: '780px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '24px 28px',
                        borderBottom: '1px solid var(--line)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        margin: 0,
                                        fontSize: '18px',
                                        color: 'var(--navy)'
                                    },
                                    children: "Add New Product to Store Catalog"
                                }, void 0, false, {
                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: '4px 0 0',
                                        fontSize: '12px',
                                        color: 'var(--slate)'
                                    },
                                    children: "Configure 3D printing specifications, material grade, and inventory pricing."
                                }, void 0, false, {
                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            style: {
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: 'var(--surface-alt)',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 18,
                                color: "var(--slate-dark)"
                            }, void 0, false, {
                                fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    style: {
                        padding: '28px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: '1.2fr 1fr',
                                gap: '28px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label",
                                                    children: "Product Title *"
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    placeholder: "e.g. Torus Spiral Kinetic Planter",
                                                    value: name,
                                                    onChange: (e)=>setName(e.target.value),
                                                    style: {
                                                        width: '100%'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: '1fr 1fr',
                                                gap: '12px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label",
                                                            children: "Category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: category,
                                                            onChange: (e)=>setCategory(e.target.value),
                                                            style: {
                                                                width: '100%'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "decor",
                                                                    children: "Desk Decor"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                                    lineNumber: 123,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "lighting",
                                                                    children: "Lamps & Lighting"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                                    lineNumber: 124,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "sacred",
                                                                    children: "Sacred & Cultural"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                                    lineNumber: 125,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "accessories",
                                                                    children: "Tech & Accessories"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                                    lineNumber: 126,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "gifts",
                                                                    children: "Gifts & Tokens"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                                    lineNumber: 127,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label",
                                                            children: "Badge Tag"
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "e.g. Best Seller, Popular",
                                                            value: badge,
                                                            onChange: (e)=>setBadge(e.target.value),
                                                            style: {
                                                                width: '100%'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: '1fr 1fr',
                                                gap: '12px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label",
                                                            children: "Selling Price (₹) *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            required: true,
                                                            min: 49,
                                                            value: price,
                                                            onChange: (e)=>setPrice(Number(e.target.value)),
                                                            style: {
                                                                width: '100%',
                                                                fontWeight: 700
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label",
                                                            children: "Original Price (₹)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            min: 49,
                                                            value: originalPrice,
                                                            onChange: (e)=>setOriginalPrice(Number(e.target.value)),
                                                            style: {
                                                                width: '100%'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: '1fr 1fr',
                                                gap: '12px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label",
                                                            children: "Material Grade"
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: material,
                                                            onChange: (e)=>setMaterial(e.target.value),
                                                            style: {
                                                                width: '100%'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label",
                                                            children: "Print Lead Time"
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: leadTime,
                                                            onChange: (e)=>setLeadTime(e.target.value),
                                                            style: {
                                                                width: '100%'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: '1fr 1fr',
                                                gap: '12px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label",
                                                            children: "Dimensions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: dimensions,
                                                            onChange: (e)=>setDimensions(e.target.value),
                                                            style: {
                                                                width: '100%'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label",
                                                            children: "Initial Stock Qty"
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            min: 0,
                                                            value: stockQuantity,
                                                            onChange: (e)=>setStockQuantity(Number(e.target.value)),
                                                            style: {
                                                                width: '100%'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label",
                                                    children: "Color Finish Options (Comma separated)"
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: colorsInput,
                                                    onChange: (e)=>setColorsInput(e.target.value),
                                                    style: {
                                                        width: '100%'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label",
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: 3,
                                                    placeholder: "Describe generative design, infill density, application...",
                                                    value: description,
                                                    onChange: (e)=>setDescription(e.target.value),
                                                    style: {
                                                        width: '100%',
                                                        resize: 'none'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "form-label",
                                            children: "Select Product Photography"
                                        }, void 0, false, {
                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(3, 1fr)',
                                                gap: '8px',
                                                marginBottom: '16px'
                                            },
                                            children: PRESET_IMAGES.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setImageUrl(img.url),
                                                    style: {
                                                        aspectRatio: '1',
                                                        borderRadius: '8px',
                                                        overflow: 'hidden',
                                                        border: imageUrl === img.url ? '2px solid var(--lime)' : '1px solid var(--line)',
                                                        boxShadow: imageUrl === img.url ? '0 0 0 2px var(--navy)' : 'none',
                                                        padding: 0,
                                                        cursor: 'pointer',
                                                        position: 'relative'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: img.url,
                                                            alt: img.label,
                                                            style: {
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit: 'cover'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 21
                                                        }, this),
                                                        imageUrl === img.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: 'absolute',
                                                                top: '4px',
                                                                right: '4px',
                                                                background: 'var(--lime)',
                                                                color: '#0A0D14',
                                                                borderRadius: '50%',
                                                                width: '18px',
                                                                height: '18px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 12,
                                                                strokeWidth: 3
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                border: '1px solid var(--line)',
                                                borderRadius: '14px',
                                                padding: '14px',
                                                background: '#FFFFFF',
                                                boxShadow: '0 4px 14px rgba(10, 13, 20, 0.05)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "badge badge-emerald",
                                                    style: {
                                                        marginBottom: '8px',
                                                        fontSize: '10px'
                                                    },
                                                    children: "Live Storefront Preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        aspectRatio: '1.2',
                                                        borderRadius: '10px',
                                                        overflow: 'hidden',
                                                        background: '#F8FAFC',
                                                        marginBottom: '10px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: imageUrl,
                                                        alt: "preview",
                                                        style: {
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    style: {
                                                        fontSize: '14px',
                                                        color: 'var(--navy)',
                                                        display: 'block',
                                                        marginBottom: '2px'
                                                    },
                                                    children: name || 'New Product Title'
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '11px',
                                                        color: 'var(--slate)',
                                                        display: 'block',
                                                        marginBottom: '6px'
                                                    },
                                                    children: [
                                                        material,
                                                        " • ",
                                                        leadTime
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'baseline',
                                                        gap: '6px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            style: {
                                                                fontSize: '16px',
                                                                color: 'var(--navy)'
                                                            },
                                                            children: [
                                                                "₹",
                                                                price
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 19
                                                        }, this),
                                                        originalPrice && originalPrice > price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '12px',
                                                                color: 'var(--slate-light)',
                                                                textDecoration: 'line-through'
                                                            },
                                                            children: [
                                                                "₹",
                                                                originalPrice
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'flex-end',
                                gap: '12px',
                                marginTop: '24px',
                                paddingTop: '20px',
                                borderTop: '1px solid var(--line)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "btn btn-light",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "btn btn-lime",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                            lineNumber: 298,
                                            columnNumber: 15
                                        }, this),
                                        " Publish Product to Catalog"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/admin/src/components/AddProductModal.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/admin/src/components/AddProductModal.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/admin/src/components/AddProductModal.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/admin/src/components/AddProductModal.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(AddProductModal, "U9BT7zfPcK+pXD9bZlTZ6y52UWM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$src$2f$context$2f$AdminDataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminData"]
    ];
});
_c = AddProductModal;
var _c;
__turbopack_context__.k.register(_c, "AddProductModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/admin/src/components/AdminHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminHeader",
    ()=>AdminHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.mjs [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$src$2f$context$2f$AdminDataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin/src/context/AdminDataContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$src$2f$components$2f$AddProductModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin/src/components/AddProductModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AdminHeader() {
    _s();
    const { orders, enquiries, printers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$src$2f$context$2f$AdminDataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminData"])();
    const [isAddProductOpen, setIsAddProductOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pendingOrders = orders.filter((o)=>o.orderStatus === 'Pending' || o.orderStatus === 'Slicing').length;
    const newEnquiries = enquiries.filter((e)=>e.status === 'New Quote').length;
    const totalAlerts = pendingOrders + newEnquiries;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    height: '70px',
                    background: '#FFFFFF',
                    borderBottom: '1px solid var(--line)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 36px',
                    position: 'sticky',
                    top: 0,
                    zIndex: 40
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            flex: 1,
                            maxWidth: '440px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                width: '100%'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    size: 16,
                                    color: "var(--slate-light)",
                                    style: {
                                        position: 'absolute',
                                        left: '14px',
                                        top: '50%',
                                        transform: 'translateY(-50%)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/admin/src/components/AdminHeader.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search products, orders #, customer phone, or STL files...",
                                    className: "form-input",
                                    style: {
                                        width: '100%',
                                        paddingLeft: '38px',
                                        fontSize: '13px',
                                        borderRadius: '10px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/admin/src/components/AdminHeader.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/admin/src/components/AdminHeader.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/admin/src/components/AdminHeader.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsAddProductOpen(true),
                                className: "btn btn-lime",
                                style: {
                                    fontSize: '12.5px',
                                    padding: '9px 16px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/admin/src/components/AdminHeader.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    " Add New Product"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/admin/src/components/AdminHeader.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '10px',
                                    border: '1px solid var(--line)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--slate-dark)',
                                    position: 'relative',
                                    cursor: 'pointer'
                                },
                                title: `${totalAlerts} pending tasks`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/admin/src/components/AdminHeader.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    totalAlerts > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            position: 'absolute',
                                            top: '7px',
                                            right: '7px',
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            background: '#EF4444',
                                            boxShadow: '0 0 6px #EF4444'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/admin/src/components/AdminHeader.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/admin/src/components/AdminHeader.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    paddingLeft: '8px',
                                    borderLeft: '1px solid var(--line)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '50%',
                                            background: 'var(--navy)',
                                            color: 'var(--lime)',
                                            fontWeight: 800,
                                            fontSize: '13px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        },
                                        children: "AK"
                                    }, void 0, false, {
                                        fileName: "[project]/admin/src/components/AdminHeader.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                style: {
                                                    fontSize: '13px',
                                                    color: 'var(--navy)',
                                                    display: 'block',
                                                    lineHeight: 1.2
                                                },
                                                children: "Akshay Kumar"
                                            }, void 0, false, {
                                                fileName: "[project]/admin/src/components/AdminHeader.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '11px',
                                                    color: 'var(--slate)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '4px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                        size: 12,
                                                        color: "var(--green-ink)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/admin/src/components/AdminHeader.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Super Admin"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/admin/src/components/AdminHeader.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/admin/src/components/AdminHeader.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/admin/src/components/AdminHeader.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/admin/src/components/AdminHeader.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/admin/src/components/AdminHeader.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            isAddProductOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$src$2f$components$2f$AddProductModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddProductModal"], {
                onClose: ()=>setIsAddProductOpen(false)
            }, void 0, false, {
                fileName: "[project]/admin/src/components/AdminHeader.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/admin/src/components/AdminHeader.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(AdminHeader, "qqREAMY11QJ3u0z2YCWqz7x0jCc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$src$2f$context$2f$AdminDataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminData"]
    ];
});
_c = AdminHeader;
var _c;
__turbopack_context__.k.register(_c, "AdminHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/admin/src/components/AdminSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminSidebar",
    ()=>AdminSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.mjs [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.mjs [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code.mjs [app-client] (ecmascript) <export default as FileCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.mjs [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.mjs [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$src$2f$context$2f$AdminDataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin/src/context/AdminDataContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AdminSidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { orders, enquiries, printers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$src$2f$context$2f$AdminDataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminData"])();
    const pendingOrders = orders.filter((o)=>o.orderStatus === 'Pending' || o.orderStatus === 'Slicing').length;
    const newEnquiries = enquiries.filter((e)=>e.status === 'New Quote' || e.status === 'CAD Reviewing').length;
    const activePrinters = printers.filter((p)=>p.status === 'Printing').length;
    const navLinks = [
        {
            name: 'Overview & Metrics',
            href: '/',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this)
        },
        {
            name: 'Products & Inventory',
            href: '/products',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this)
        },
        {
            name: 'Store Orders',
            href: '/orders',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            badge: pendingOrders > 0 ? `${pendingOrders} queue` : undefined,
            badgeColor: 'amber'
        },
        {
            name: 'Custom CAD Enquiries',
            href: '/custom-enquiries',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            badge: newEnquiries > 0 ? `${newEnquiries} new` : undefined,
            badgeColor: 'emerald'
        },
        {
            name: 'Payment & Finance',
            href: '/payments',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this)
        },
        {
            name: '3D Print Farm Fleet',
            href: '/fleet',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            badge: `${activePrinters} active`,
            badgeColor: 'lime'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        style: {
            width: '260px',
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            background: 'var(--admin-sidebar-bg)',
            borderRight: '1px solid #1E293B',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 50
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '24px 20px',
                    borderBottom: '1px solid #1E293B'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '36px',
                                height: '36px',
                                borderRadius: '8px',
                                background: 'var(--lime)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#0A0D14',
                                boxShadow: '0 0 16px rgba(141, 198, 63, 0.4)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                size: 20,
                                strokeWidth: 2.5
                            }, void 0, false, {
                                fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: '#FFFFFF',
                                        fontSize: '15px',
                                        letterSpacing: '-0.02em',
                                        display: 'block'
                                    },
                                    children: "Namma 3D Lab"
                                }, void 0, false, {
                                    fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '10px',
                                        color: 'var(--lime)',
                                        fontWeight: 800,
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase'
                                    },
                                    children: "Mission Control • Admin"
                                }, void 0, false, {
                                    fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    padding: '20px 14px',
                    flex: 1,
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '10px',
                            fontWeight: 800,
                            color: '#64748B',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            padding: '0 10px 8px'
                        },
                        children: "Management"
                    }, void 0, false, {
                        fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    navLinks.map((link)=>{
                        const isActive = pathname === link.href;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '11px 14px',
                                borderRadius: '10px',
                                fontSize: '13px',
                                fontWeight: isActive ? 700 : 500,
                                color: isActive ? '#FFFFFF' : '#94A3B8',
                                background: isActive ? 'rgba(141, 198, 63, 0.12)' : 'transparent',
                                borderLeft: isActive ? '3px solid var(--lime)' : '3px solid transparent',
                                transition: 'all 0.15s ease'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: isActive ? 'var(--lime)' : '#64748B'
                                            },
                                            children: link.icon
                                        }, void 0, false, {
                                            fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: link.name
                                        }, void 0, false, {
                                            fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this),
                                link.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '10px',
                                        fontWeight: 800,
                                        padding: '2px 8px',
                                        borderRadius: '10px',
                                        background: link.badgeColor === 'amber' ? 'rgba(245, 158, 11, 0.2)' : link.badgeColor === 'emerald' ? 'rgba(7, 135, 93, 0.25)' : 'rgba(141, 198, 63, 0.25)',
                                        color: link.badgeColor === 'amber' ? '#FBBF24' : link.badgeColor === 'emerald' ? '#34D399' : '#BEF264'
                                    },
                                    children: link.badge
                                }, void 0, false, {
                                    fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                                    lineNumber: 145,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, link.href, true, {
                            fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '10px',
                            fontWeight: 800,
                            color: '#64748B',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            padding: '20px 10px 8px'
                        },
                        children: "Storefront Link"
                    }, void 0, false, {
                        fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "http://localhost:3000",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '11px 14px',
                            borderRadius: '10px',
                            fontSize: '13px',
                            fontWeight: 500,
                            color: '#94A3B8',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px dashed #334155',
                            transition: 'all 0.15s ease'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        size: 16,
                                        color: "var(--lime)"
                                    }, void 0, false, {
                                        fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Customer Website"
                                    }, void 0, false, {
                                        fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                size: 14,
                                color: "#64748B"
                            }, void 0, false, {
                                fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '16px',
                    margin: '14px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: '6px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: '#22C55E',
                                    boxShadow: '0 0 8px #22C55E'
                                }
                            }, void 0, false, {
                                fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    fontSize: '12px',
                                    color: '#FFFFFF'
                                },
                                children: "Indiranagar Lab Hub"
                            }, void 0, false, {
                                fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '11px',
                            color: '#94A3B8'
                        },
                        children: "6 3D Printers Active • Low latency"
                    }, void 0, false, {
                        fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/admin/src/components/AdminSidebar.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/admin/src/components/AdminSidebar.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(AdminSidebar, "Sol4CPMFa3Lbb51ITrZkeKjFcss=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$src$2f$context$2f$AdminDataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminData"]
    ];
});
_c = AdminSidebar;
var _c;
__turbopack_context__.k.register(_c, "AdminSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/admin/src/context/AdminDataContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminDataProvider",
    ()=>AdminDataProvider,
    "useAdminData",
    ()=>useAdminData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$src$2f$lib$2f$adminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin/src/lib/adminData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const AdminDataContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AdminDataProvider({ children }) {
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AdminDataProvider.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem('n3d_admin_products');
                if (saved) {
                    try {
                        return JSON.parse(saved);
                    } catch (e) {}
                }
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$src$2f$lib$2f$adminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_PRODUCTS"];
        }
    }["AdminDataProvider.useState"]);
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AdminDataProvider.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem('n3d_admin_orders');
                if (saved) {
                    try {
                        return JSON.parse(saved);
                    } catch (e) {}
                }
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$src$2f$lib$2f$adminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_ORDERS"];
        }
    }["AdminDataProvider.useState"]);
    const [enquiries, setEnquiries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AdminDataProvider.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem('n3d_admin_enquiries');
                if (saved) {
                    try {
                        return JSON.parse(saved);
                    } catch (e) {}
                }
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$src$2f$lib$2f$adminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_ENQUIRIES"];
        }
    }["AdminDataProvider.useState"]);
    const [paymentSettings, setPaymentSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AdminDataProvider.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem('n3d_admin_payment_settings');
                if (saved) {
                    try {
                        return JSON.parse(saved);
                    } catch (e) {}
                }
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$src$2f$lib$2f$adminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_PAYMENT_SETTINGS"];
        }
    }["AdminDataProvider.useState"]);
    const [printers, setPrinters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AdminDataProvider.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem('n3d_admin_printers');
                if (saved) {
                    try {
                        return JSON.parse(saved);
                    } catch (e) {}
                }
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$src$2f$lib$2f$adminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_PRINTERS"];
        }
    }["AdminDataProvider.useState"]);
    // Save to localStorage whenever states change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDataProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem('n3d_admin_products', JSON.stringify(products));
            }
        }
    }["AdminDataProvider.useEffect"], [
        products
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDataProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem('n3d_admin_orders', JSON.stringify(orders));
            }
        }
    }["AdminDataProvider.useEffect"], [
        orders
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDataProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem('n3d_admin_enquiries', JSON.stringify(enquiries));
            }
        }
    }["AdminDataProvider.useEffect"], [
        enquiries
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDataProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem('n3d_admin_payment_settings', JSON.stringify(paymentSettings));
            }
        }
    }["AdminDataProvider.useEffect"], [
        paymentSettings
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDataProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem('n3d_admin_printers', JSON.stringify(printers));
            }
        }
    }["AdminDataProvider.useEffect"], [
        printers
    ]);
    const addProduct = (newProd)=>{
        const id = `prod-custom-${Date.now()}`;
        const product = {
            ...newProd,
            id,
            salesCount: 0
        };
        setProducts((prev)=>[
                product,
                ...prev
            ]);
    };
    const updateProduct = (id, updates)=>{
        setProducts((prev)=>prev.map((p)=>p.id === id ? {
                    ...p,
                    ...updates
                } : p));
    };
    const deleteProduct = (id)=>{
        setProducts((prev)=>prev.filter((p)=>p.id !== id));
    };
    const toggleProductStock = (id)=>{
        setProducts((prev)=>prev.map((p)=>p.id === id ? {
                    ...p,
                    inStock: !p.inStock
                } : p));
    };
    const updateOrderStatus = (orderId, status, printAssignedTo)=>{
        setOrders((prev)=>prev.map((o)=>{
                if (o.id === orderId) {
                    return {
                        ...o,
                        orderStatus: status,
                        ...printAssignedTo ? {
                            printAssignedTo
                        } : {}
                    };
                }
                return o;
            }));
    };
    const updateEnquiryStatus = (enquiryId, status, quotedPrice)=>{
        setEnquiries((prev)=>prev.map((e)=>{
                if (e.id === enquiryId) {
                    return {
                        ...e,
                        status,
                        ...quotedPrice !== undefined ? {
                            quotedPrice
                        } : {}
                    };
                }
                return e;
            }));
    };
    const updatePaymentSettings = (updates)=>{
        setPaymentSettings((prev)=>({
                ...prev,
                ...updates
            }));
    };
    const updatePrinterStatus = (printerId, updates)=>{
        setPrinters((prev)=>prev.map((p)=>p.id === printerId ? {
                    ...p,
                    ...updates
                } : p));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminDataContext.Provider, {
        value: {
            products,
            orders,
            enquiries,
            paymentSettings,
            printers,
            addProduct,
            updateProduct,
            deleteProduct,
            toggleProductStock,
            updateOrderStatus,
            updateEnquiryStatus,
            updatePaymentSettings,
            updatePrinterStatus
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/admin/src/context/AdminDataContext.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
_s(AdminDataProvider, "kGdgyrsY5xcpe2jHMFlD1S3dgS0=");
_c = AdminDataProvider;
function useAdminData() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AdminDataContext);
    if (!context) {
        throw new Error('useAdminData must be used within an AdminDataProvider');
    }
    return context;
}
_s1(useAdminData, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AdminDataProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/admin/src/lib/adminData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INITIAL_ENQUIRIES",
    ()=>INITIAL_ENQUIRIES,
    "INITIAL_ORDERS",
    ()=>INITIAL_ORDERS,
    "INITIAL_PAYMENT_SETTINGS",
    ()=>INITIAL_PAYMENT_SETTINGS,
    "INITIAL_PRINTERS",
    ()=>INITIAL_PRINTERS,
    "INITIAL_PRODUCTS",
    ()=>INITIAL_PRODUCTS
]);
const INITIAL_PRODUCTS = [
    {
        id: 'prod-vase',
        slug: 'geometric-spiral-fluted-vase',
        name: 'Geometric Spiral Fluted Vase',
        category: 'decor',
        price: 449,
        originalPrice: 699,
        material: 'PLA+ Matte Finish',
        dimensions: '180 × 85 × 85 mm',
        leadTime: '24 Hours',
        description: 'Generative algorithm fluted vase with continuous spiral toolpaths. Watertight design calibrated for dried botanicals and minimalist interior desks.',
        colorGradient: 'linear-gradient(135deg, #0A0D14, #1E293B)',
        iconName: 'Feather',
        imageUrl: '/images/products/spiral_fluted_vase.jpg',
        colors: [
            'Silk Gold',
            'Matte White',
            'Obsidian Black',
            'Sage Green'
        ],
        inStock: true,
        badge: 'Popular',
        rating: 4.9,
        reviewsCount: 38,
        stockQuantity: 42,
        salesCount: 148
    },
    {
        id: 'prod-idol',
        slug: 'divine-ganesha-sacred-sculpture',
        name: 'Divine Ganesha Sacred Sculpture',
        category: 'sacred',
        price: 899,
        originalPrice: 1299,
        material: 'Marble PLA / Ultra Tough Resin',
        dimensions: '120 × 95 × 80 mm',
        leadTime: '24 Hours',
        description: 'Sub-millimeter micro-layer geometry capturing sacred temple iconographic details. Available in authentic stone texture and premium warm brass sheen.',
        colorGradient: 'linear-gradient(135deg, #D97706, #F59E0B)',
        iconName: 'Sun',
        imageUrl: '/images/products/cultural_deity_idol.jpg',
        colors: [
            'Stone White',
            'Brass Sheen',
            'Matte Sandstone'
        ],
        inStock: true,
        badge: 'Best Seller',
        rating: 5.0,
        reviewsCount: 74,
        stockQuantity: 28,
        salesCount: 295
    },
    {
        id: 'prod-lamp',
        slug: 'voronoi-ambient-desk-lamp',
        name: 'Voronoi Ambient Desk Lamp',
        category: 'lighting',
        price: 1299,
        originalPrice: 1799,
        material: 'Translucent PETG & Warm LED',
        dimensions: '210 × 110 × 110 mm',
        leadTime: '48 Hours',
        description: 'Cellular lattice structure designed with mathematical Voronoi tessellations. Casts calming geometric radial shadow projections with integrated USB-C warm LED light core.',
        colorGradient: 'linear-gradient(135deg, #84CC16, #4D7C0F)',
        iconName: 'Lamp',
        imageUrl: '/images/products/voronoi_ambient_lamp.jpg',
        colors: [
            'Pure White LED',
            'Warm Amber LED'
        ],
        inStock: true,
        badge: 'Featured',
        rating: 4.8,
        reviewsCount: 52,
        stockQuantity: 15,
        salesCount: 112
    },
    {
        id: 'prod-stand',
        slug: 'parametric-cantilever-headphone-stand',
        name: 'Parametric Cantilever Headphone Stand',
        category: 'accessories',
        price: 749,
        originalPrice: 999,
        material: 'Reinforced Carbon PLA+',
        dimensions: '260 × 130 × 110 mm',
        leadTime: '24 Hours',
        description: 'High-rigidity counterbalanced arch engineered to cradle audio headphones without headband foam compression. Integrated underside cable spool organizer.',
        colorGradient: 'linear-gradient(135deg, #0F172A, #334155)',
        iconName: 'Headphones',
        imageUrl: '/images/products/modular_headphone_stand.jpg',
        colors: [
            'Matte Obsidian',
            'Stealth Grey',
            'Cyberpunk Lime'
        ],
        inStock: true,
        badge: 'Industrial Grade',
        rating: 4.9,
        reviewsCount: 45,
        stockQuantity: 34,
        salesCount: 96
    },
    {
        id: 'prod-litho',
        slug: 'custom-lithophane-backlit-memory-box',
        name: 'Custom Lithophane Backlit Memory Box',
        category: 'gifts',
        price: 1499,
        originalPrice: 1999,
        material: 'Precision Optical White Resin',
        dimensions: '150 × 110 × 45 mm',
        leadTime: '48 Hours',
        description: 'Photographic relief sculpture that transforms into high-resolution illuminated portraits when backlit. USB-C powered with calibrated grayscale thickness grading.',
        colorGradient: 'linear-gradient(135deg, #1E1B4B, #4338CA)',
        iconName: 'Moon',
        imageUrl: '/images/products/lithophane_photo_box.jpg',
        colors: [
            'Warm Backlight',
            'Pure White LED'
        ],
        inStock: true,
        badge: 'Memorable Gift',
        rating: 5.0,
        reviewsCount: 91,
        stockQuantity: 20,
        salesCount: 184
    },
    {
        id: 'prod-hex',
        slug: 'hexagonal-modular-desk-organizer',
        name: 'Hexagonal Modular Desk Organizer',
        category: 'accessories',
        price: 349,
        originalPrice: 499,
        material: 'Bio-Polymer PLA',
        dimensions: '140 × 120 × 90 mm',
        leadTime: '24 Hours',
        description: 'Interlocking honeycomb modules for stationery, SD cards, USB drives, and calipers. Magnetic side docking for infinite desk layout modularity.',
        colorGradient: 'linear-gradient(135deg, #065F46, #047857)',
        iconName: 'Grid',
        imageUrl: '/images/products/hex_desk_organizer.jpg',
        colors: [
            'Matte Obsidian',
            'Slate Grey',
            'Mint Green'
        ],
        inStock: true,
        badge: 'Best Value',
        rating: 4.7,
        reviewsCount: 29,
        stockQuantity: 60,
        salesCount: 210
    },
    {
        id: 'prod-keychain',
        slug: 'custom-embossed-typographic-keychains',
        name: 'Custom Typographic Keychains (Pack of 3)',
        category: 'gifts',
        price: 299,
        originalPrice: 399,
        material: 'Dual-Color Fused PETG',
        dimensions: '65 × 18 × 6 mm each',
        leadTime: '24 Hours',
        description: 'Industrial dual-color fused typography. Impervious to pocket wear, car keys, and water. Perfect everyday carry accessory or personalized token.',
        colorGradient: 'linear-gradient(135deg, #0284C7, #0EA5E9)',
        iconName: 'Key',
        imageUrl: '/images/products/bespoke_keychains.jpg',
        colors: [
            'Matte Black / Lime',
            'Navy / White',
            'Red / White'
        ],
        inStock: true,
        badge: 'Express Print',
        rating: 4.8,
        reviewsCount: 82,
        stockQuantity: 120,
        salesCount: 340
    }
];
const INITIAL_ORDERS = [
    {
        id: 'ORD-N3D-948102',
        date: '29 Oct 2026',
        customerName: 'Aditya Venkatesh',
        customerPhone: '+91 98451 22890',
        customerEmail: 'aditya.v@techcorp.in',
        shippingAddress: '#402, Embassy Golf Links Business Park, Domlur',
        city: 'Bangalore',
        pincode: '560071',
        notes: 'Please double box for corporate gifting handover.',
        items: [
            {
                id: 'prod-lamp',
                name: 'Voronoi Ambient Desk Lamp',
                variant: 'Warm Amber LED',
                price: 1299,
                qty: 1,
                imageUrl: '/images/products/voronoi_ambient_lamp.jpg'
            },
            {
                id: 'prod-stand',
                name: 'Parametric Cantilever Headphone Stand',
                variant: 'Matte Obsidian',
                price: 749,
                qty: 1,
                imageUrl: '/images/products/modular_headphone_stand.jpg'
            }
        ],
        subtotal: 2048,
        deliveryFee: 0,
        grandTotal: 2048,
        paymentMethod: 'UPI',
        paymentStatus: 'Paid',
        orderStatus: 'In Print Queue',
        printAssignedTo: 'Bambu Lab X1-Carbon #01',
        trackingNumber: 'DTDC-BLR-883921'
    },
    {
        id: 'ORD-N3D-812049',
        date: '29 Oct 2026',
        customerName: 'Priya Sundaram',
        customerPhone: '+91 97312 44501',
        customerEmail: 'priya.s@designcraft.org',
        shippingAddress: 'Flat 3B, Sobha Iris, Outer Ring Road, Bellandur',
        city: 'Bangalore',
        pincode: '560103',
        items: [
            {
                id: 'prod-idol',
                name: 'Divine Ganesha Sacred Sculpture',
                variant: 'Brass Sheen',
                price: 899,
                qty: 2,
                imageUrl: '/images/products/cultural_deity_idol.jpg'
            }
        ],
        subtotal: 1798,
        deliveryFee: 0,
        grandTotal: 1798,
        paymentMethod: 'Card',
        paymentStatus: 'Paid',
        orderStatus: 'Quality Inspected',
        printAssignedTo: 'Formlabs Form 3+ SLA #03',
        trackingNumber: 'BLUEDART-551029'
    },
    {
        id: 'ORD-N3D-761204',
        date: '28 Oct 2026',
        customerName: 'Karthik Rao',
        customerPhone: '+91 99008 77215',
        customerEmail: 'karthik.rao@gmail.com',
        shippingAddress: 'Plot 18, 12th Main, Indiranagar 2nd Stage',
        city: 'Bangalore',
        pincode: '560038',
        notes: 'Call on arrival before gate security.',
        items: [
            {
                id: 'prod-vase',
                name: 'Geometric Spiral Fluted Vase',
                variant: 'Silk Gold',
                price: 449,
                qty: 1,
                imageUrl: '/images/products/spiral_fluted_vase.jpg'
            }
        ],
        subtotal: 449,
        deliveryFee: 50,
        grandTotal: 499,
        paymentMethod: 'COD',
        paymentStatus: 'COD Pending',
        orderStatus: 'Dispatched',
        trackingNumber: 'DUNZO-EXPRESS-9921'
    },
    {
        id: 'ORD-N3D-654921',
        date: '28 Oct 2026',
        customerName: 'Deepa Narayan',
        customerPhone: '+91 98860 11234',
        customerEmail: 'deepa.n@innovate.co',
        shippingAddress: '#12, 4th Cross, Malleshwaram West',
        city: 'Bangalore',
        pincode: '560003',
        items: [
            {
                id: 'prod-litho',
                name: 'Custom Lithophane Backlit Memory Box',
                variant: 'Pure White LED',
                price: 1499,
                qty: 1,
                imageUrl: '/images/products/lithophane_photo_box.jpg'
            }
        ],
        subtotal: 1499,
        deliveryFee: 0,
        grandTotal: 1499,
        paymentMethod: 'UPI',
        paymentStatus: 'Paid',
        orderStatus: 'Delivered',
        trackingNumber: 'DTDC-BLR-774012'
    }
];
const INITIAL_ENQUIRIES = [
    {
        id: 'ENQ-N3D-4019',
        date: '29 Oct 2026',
        customerName: 'Vikram Joshi (EV Automations)',
        customerPhone: '+91 98450 33912',
        customerEmail: 'vikram.j@evautomations.com',
        fileAttachmentName: 'battery_enclosure_bracket_v4.step',
        fileSize: '14.2 MB',
        estimatedGrams: 280,
        materialRequested: 'Nylon Carbon Fiber (PA-CF)',
        quantity: 15,
        projectDetails: 'Heat-resistant automotive mounting bracket prototype for electric 2-wheeler chassis testing. Needs 0.16mm layer height and solid 40% gyroid infill.',
        status: 'CAD Reviewing',
        quotedPrice: 4200,
        googleSheetsSynced: true
    },
    {
        id: 'ENQ-N3D-3982',
        date: '29 Oct 2026',
        customerName: 'Sneha Patel (Architectural Studio)',
        customerPhone: '+91 97401 88231',
        customerEmail: 'sneha@studiolumens.in',
        fileAttachmentName: 'parametric_villa_site_model.stl',
        fileSize: '38.6 MB',
        estimatedGrams: 520,
        materialRequested: 'Architectural Stone PLA (Pure White)',
        quantity: 1,
        projectDetails: '1:100 scale physical architecture model for residential client presentation. Needs crisp facade edges and clean unpainted surface.',
        status: 'Quote Sent',
        quotedPrice: 3600,
        googleSheetsSynced: true
    },
    {
        id: 'ENQ-N3D-3940',
        date: '28 Oct 2026',
        customerName: 'Anand Kumar',
        customerPhone: '+91 99160 55410',
        customerEmail: 'anand.k@startuplab.io',
        productReference: 'geometric-spiral-fluted-vase',
        fileAttachmentName: 'custom_logo_embossed_vase.stl',
        fileSize: '8.4 MB',
        estimatedGrams: 195,
        materialRequested: 'Silk Gold Dual-Finish',
        quantity: 10,
        projectDetails: 'Company 5th anniversary memento gifts with our embossed startup emblem at the base.',
        status: 'Approved',
        quotedPrice: 5800,
        googleSheetsSynced: true
    }
];
const INITIAL_PAYMENT_SETTINGS = {
    razorpay: {
        enabled: true,
        keyId: 'rzp_live_9a8bc7d6e5f4g3',
        keySecret: '••••••••••••••••••••••••',
        testMode: false
    },
    cashfree: {
        enabled: true,
        appId: 'CF_APP_99182371',
        secretKey: '••••••••••••••••••••••••',
        testMode: false
    },
    upiDirect: {
        enabled: true,
        upiId: 'namma3dlab@icici',
        accountName: 'Namma 3D Lab Additive Tech LLP',
        qrNote: 'Zero gateway surcharge direct business account'
    },
    cod: {
        enabled: true,
        maxLimit: 3000,
        advanceRequiredPercent: 0
    },
    taxation: {
        gstEnabled: true,
        gstRatePercent: 18,
        gstin: '29AABCN3381D1ZX',
        legalBusinessName: 'Namma 3D Lab Rapid Additive Engineering'
    },
    shipping: {
        freeShippingThreshold: 499,
        standardCourierFee: 50,
        expressDeliveryFee: 120,
        dispatchCity: 'Bangalore (Indiranagar Lab)'
    }
};
const INITIAL_PRINTERS = [
    {
        id: 'p-01',
        name: 'Bambu Lab X1-Carbon #01',
        type: 'CoreXY FDM',
        buildVolume: '256 × 256 × 256 mm',
        status: 'Printing',
        currentJob: 'Voronoi Ambient Desk Lamp (Amber)',
        currentOrderRef: 'ORD-N3D-948102',
        currentProgress: 68,
        bedTemp: 60,
        targetBedTemp: 60,
        nozzleTemp: 220,
        targetNozzleTemp: 220,
        filamentRemainingPercent: 78,
        filamentType: 'PETG Translucent',
        filamentColor: 'Warm Amber',
        timeRemaining: '1h 24m'
    },
    {
        id: 'p-02',
        name: 'Voron 2.4 Custom CoreXY #02',
        type: 'CoreXY FDM',
        buildVolume: '350 × 350 × 350 mm',
        status: 'Printing',
        currentJob: 'Battery Enclosure Bracket (PA-CF)',
        currentOrderRef: 'ENQ-N3D-4019',
        currentProgress: 42,
        bedTemp: 100,
        targetBedTemp: 100,
        nozzleTemp: 285,
        targetNozzleTemp: 285,
        filamentRemainingPercent: 64,
        filamentType: 'Carbon Fiber Nylon',
        filamentColor: 'Matte Charcoal',
        timeRemaining: '3h 15m'
    },
    {
        id: 'p-03',
        name: 'Formlabs Form 3+ SLA #03',
        type: 'SLA Resin',
        buildVolume: '145 × 145 × 185 mm',
        status: 'Printing',
        currentJob: 'Divine Ganesha High-Detail Idol',
        currentOrderRef: 'ORD-N3D-812049',
        currentProgress: 89,
        bedTemp: 35,
        targetBedTemp: 35,
        nozzleTemp: 32,
        targetNozzleTemp: 32,
        filamentRemainingPercent: 82,
        filamentType: 'Tough 2000 Resin',
        filamentColor: 'Stone White',
        timeRemaining: '28m'
    },
    {
        id: 'p-04',
        name: 'Bambu Lab P1S #04',
        type: 'High-Speed FDM',
        buildVolume: '256 × 256 × 256 mm',
        status: 'Idle',
        bedTemp: 24,
        targetBedTemp: 0,
        nozzleTemp: 25,
        targetNozzleTemp: 0,
        filamentRemainingPercent: 91,
        filamentType: 'PLA+ Silk',
        filamentColor: 'Silk Gold'
    },
    {
        id: 'p-05',
        name: 'Creality K1 Max #05',
        type: 'High-Speed FDM',
        buildVolume: '300 × 300 × 300 mm',
        status: 'Idle',
        bedTemp: 24,
        targetBedTemp: 0,
        nozzleTemp: 24,
        targetNozzleTemp: 0,
        filamentRemainingPercent: 55,
        filamentType: 'PLA+ Reinforced',
        filamentColor: 'Matte Obsidian'
    },
    {
        id: 'p-06',
        name: 'Elegoo Saturn 3 Ultra #06',
        type: 'SLA Resin',
        buildVolume: '218 × 122 × 260 mm',
        status: 'Calibrating',
        bedTemp: 26,
        targetBedTemp: 30,
        nozzleTemp: 26,
        targetNozzleTemp: 30,
        filamentRemainingPercent: 95,
        filamentType: 'Standard Photopolymer',
        filamentColor: 'Clear Water'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=admin_src_153f5ozc6rrcl._.js.map