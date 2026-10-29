module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/pos/src/context/POSContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POSProvider",
    ()=>POSProvider,
    "usePOS",
    ()=>usePOS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pos$2f$src$2f$lib$2f$posData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pos/src/lib/posData.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const POSContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function POSProvider({ children }) {
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return __TURBOPACK__imported__module__$5b$project$5d2f$pos$2f$src$2f$lib$2f$posData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_POS_PRODUCTS"];
    });
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return [];
    });
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return [];
    });
    const [shift, setShift] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return __TURBOPACK__imported__module__$5b$project$5d2f$pos$2f$src$2f$lib$2f$posData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SHIFT"];
    });
    // LocalStorage sync
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        products
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        cart
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        transactions
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        shift
    ]);
    const addToCart = (product, variant)=>{
        setCart((prev)=>{
            const existing = prev.find((item)=>item.id === product.id && item.variant === variant);
            if (existing) {
                return prev.map((item)=>item.id === product.id && item.variant === variant ? {
                        ...item,
                        qty: item.qty + 1
                    } : item);
            }
            return [
                ...prev,
                {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    qty: 1,
                    variant
                }
            ];
        });
    };
    const updateQty = (id, delta)=>{
        setCart((prev)=>prev.map((item)=>{
                if (item.id === id) {
                    const newQty = item.qty + delta;
                    return newQty > 0 ? {
                        ...item,
                        qty: newQty
                    } : null;
                }
                return item;
            }).filter(Boolean));
    };
    const removeFromCart = (id)=>{
        setCart((prev)=>prev.filter((item)=>item.id !== id));
    };
    const clearCart = ()=>{
        setCart([]);
    };
    const addCustomItem = (name, price)=>{
        const customId = `custom-token-${Date.now()}`;
        setCart((prev)=>[
                ...prev,
                {
                    id: customId,
                    name: name || 'Custom 3D Print',
                    price,
                    qty: 1
                }
            ]);
    };
    const subtotal = cart.reduce((sum, item)=>sum + item.price * item.qty, 0);
    const totalItemsCount = cart.reduce((sum, item)=>sum + item.qty, 0);
    const completeTransaction = (paymentMethod, cashTendered, customerPhone)=>{
        const orderNumber = transactions.length + 1;
        const id = `STALL-${String(orderNumber).padStart(3, '0')}`;
        const timestamp = new Date().toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit'
        });
        const changeDue = cashTendered && cashTendered > subtotal ? cashTendered - subtotal : 0;
        const newTx = {
            id,
            orderNumber,
            timestamp,
            items: [
                ...cart
            ],
            totalAmount: subtotal,
            paymentMethod,
            cashTendered: cashTendered || (paymentMethod === 'CASH' ? subtotal : undefined),
            changeDue,
            customerPhone,
            stallName: shift.stallName
        };
        // Deduct stock for sold items
        setProducts((prev)=>prev.map((p)=>{
                const soldInCart = cart.find((ci)=>ci.id === p.id);
                if (soldInCart) {
                    return {
                        ...p,
                        stockQty: Math.max(0, p.stockQty - soldInCart.qty)
                    };
                }
                return p;
            }));
        setTransactions((prev)=>[
                newTx,
                ...prev
            ]);
        clearCart();
        return newTx;
    };
    const updateShift = (updates)=>{
        setShift((prev)=>({
                ...prev,
                ...updates
            }));
    };
    const resetAllTransactions = ()=>{
        setTransactions([]);
        setShift((prev)=>({
                ...prev,
                startedAt: new Date().toLocaleTimeString('en-IN', {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(POSContext.Provider, {
        value: {
            products,
            cart,
            transactions,
            shift,
            addToCart,
            updateQty,
            removeFromCart,
            clearCart,
            addCustomItem,
            completeTransaction,
            updateShift,
            resetAllTransactions,
            subtotal,
            totalItemsCount
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/pos/src/context/POSContext.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
function usePOS() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(POSContext);
    if (!context) {
        throw new Error('usePOS must be used within a POSProvider');
    }
    return context;
}
}),
"[project]/pos/src/lib/posData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_SHIFT",
    ()=>DEFAULT_SHIFT,
    "INITIAL_POS_PRODUCTS",
    ()=>INITIAL_POS_PRODUCTS
]);
const INITIAL_POS_PRODUCTS = [
    {
        id: 'pos-keychain-single',
        name: 'Single 3D Typographic Keychain',
        category: 'edc',
        price: 99,
        stockQty: 85,
        imageUrl: '/images/products/bespoke_keychains.jpg',
        color: '#8DC63F'
    },
    {
        id: 'pos-keychain-3pack',
        name: 'Custom Typographic Keychains (Pack of 3)',
        category: 'edc',
        price: 299,
        stockQty: 40,
        imageUrl: '/images/products/bespoke_keychains.jpg',
        color: '#0EA5E9'
    },
    {
        id: 'pos-hex',
        name: 'Hex Modular Desk Organizer',
        category: 'tech',
        price: 349,
        stockQty: 24,
        imageUrl: '/images/products/hex_desk_organizer.jpg',
        color: '#059669'
    },
    {
        id: 'pos-vase',
        name: 'Geometric Spiral Fluted Vase',
        category: 'decor',
        price: 449,
        stockQty: 18,
        imageUrl: '/images/products/spiral_fluted_vase.jpg',
        color: '#D97706'
    },
    {
        id: 'pos-stand',
        name: 'Parametric Headphone Stand',
        category: 'tech',
        price: 749,
        stockQty: 12,
        imageUrl: '/images/products/modular_headphone_stand.jpg',
        color: '#0F172A'
    },
    {
        id: 'pos-idol',
        name: 'Divine Ganesha Temple Idol',
        category: 'sacred',
        price: 899,
        stockQty: 15,
        imageUrl: '/images/products/cultural_deity_idol.jpg',
        color: '#B45309'
    },
    {
        id: 'pos-lamp',
        name: 'Voronoi Ambient Desk Lamp (LED)',
        category: 'decor',
        price: 1299,
        stockQty: 8,
        imageUrl: '/images/products/voronoi_ambient_lamp.jpg',
        color: '#4D7C0F'
    },
    {
        id: 'pos-litho',
        name: 'Lithophane Backlit Memory Box',
        category: 'decor',
        price: 1499,
        stockQty: 6,
        imageUrl: '/images/products/lithophane_photo_box.jpg',
        color: '#4338CA'
    }
];
const DEFAULT_SHIFT = {
    stallName: 'Namma 3D Lab Pop-up Stall',
    eventVenue: 'College Tech Fest 2026 (Bangalore)',
    attendant: 'Akshay / Volunteer',
    startedAt: new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit'
    }),
    openingCashFloat: 1000,
    isActive: true
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1xm2rirs8m3x7._.js.map