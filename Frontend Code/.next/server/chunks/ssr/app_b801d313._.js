module.exports = {

"[project]/app/components/ui/BackArrow.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
;
;
;
const BackArrow = ()=>{
    const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "cursor-pointer flex justify-end",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowRight"], {
            size: 20,
            onClick: ()=>route.back()
        }, void 0, false, {
            fileName: "[project]/app/components/ui/BackArrow.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/ui/BackArrow.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BackArrow;
}),
"[project]/app/constants/colors.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "COLORS": ()=>COLORS
});
const COLORS = {
    BRAND_PRIMARY: "#1CAA77",
    PRIMARY_HOVER: "#117954",
    TEXT: "#2D3633",
    GRAY: "#999999",
    WHITE: "#FFFFFF",
    STROKE: "rgba(153, 153, 153, 0.32)"
};
}),
"[project]/app/constants/shadows.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SHADOWS": ()=>SHADOWS
});
const SHADOWS = {
    DROP: "0px 4px 8px rgba(0, 0, 0, 0.25)"
};
}),
"[project]/app/constants/layout.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "LAYOUT": ()=>LAYOUT
});
const LAYOUT = {
    GRID_COLUMNS: 1,
    GRID_TYPE: "stretch",
    PAGE_MARGIN: 16
};
}),
"[project]/app/constants/typography.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "FONT_FAMILY": ()=>FONT_FAMILY,
    "FONT_WEIGHT": ()=>FONT_WEIGHT,
    "HEADINGS": ()=>HEADINGS,
    "TEXT_STYLES": ()=>TEXT_STYLES
});
const FONT_FAMILY = {
    READEX_PRO: "'Readex Pro', sans-serif"
};
const FONT_WEIGHT = {
    MEDIUM: 500,
    SEMIBOLD: 600,
    BOLD: 700
};
const HEADINGS = {
    H1: {
        fontSize: "48px",
        lineHeight: "auto"
    },
    H2: {
        fontSize: "40px",
        lineHeight: "auto"
    },
    H3: {
        fontSize: "32px",
        lineHeight: "auto"
    },
    H4: {
        fontSize: "24px",
        lineHeight: "auto"
    },
    H5: {
        fontSize: "20px",
        lineHeight: "auto"
    },
    H6: {
        fontSize: "16px",
        lineHeight: "auto"
    },
    H7: {
        fontSize: "14px",
        lineHeight: "auto"
    },
    H8: {
        fontSize: "10px",
        lineHeight: "16px"
    }
};
const TEXT_STYLES = {
    // Grouping by font family
    READEX_PRO: {
        // Grouping by font weight
        MEDIUM: {
            H1: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.MEDIUM,
                fontSize: HEADINGS.H1.fontSize,
                lineHeight: HEADINGS.H1.lineHeight
            },
            H2: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.MEDIUM,
                fontSize: HEADINGS.H2.fontSize,
                lineHeight: HEADINGS.H2.lineHeight
            },
            H3: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.MEDIUM,
                fontSize: HEADINGS.H3.fontSize,
                lineHeight: HEADINGS.H3.lineHeight
            },
            H4: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.MEDIUM,
                fontSize: HEADINGS.H4.fontSize,
                lineHeight: HEADINGS.H4.lineHeight
            },
            H5: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.MEDIUM,
                fontSize: HEADINGS.H5.fontSize,
                lineHeight: HEADINGS.H5.lineHeight
            },
            H6: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.MEDIUM,
                fontSize: HEADINGS.H6.fontSize,
                lineHeight: HEADINGS.H6.lineHeight
            },
            H7: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.MEDIUM,
                fontSize: HEADINGS.H7.fontSize,
                lineHeight: HEADINGS.H7.lineHeight
            },
            H8: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.MEDIUM,
                fontSize: HEADINGS.H8.fontSize,
                lineHeight: HEADINGS.H8.lineHeight
            }
        },
        SEMIBOLD: {
            H1: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.SEMIBOLD,
                fontSize: HEADINGS.H1.fontSize,
                lineHeight: HEADINGS.H1.lineHeight
            },
            H2: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.SEMIBOLD,
                fontSize: HEADINGS.H2.fontSize,
                lineHeight: HEADINGS.H2.lineHeight
            },
            H3: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.SEMIBOLD,
                fontSize: HEADINGS.H3.fontSize,
                lineHeight: HEADINGS.H3.lineHeight
            },
            H4: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.SEMIBOLD,
                fontSize: HEADINGS.H4.fontSize,
                lineHeight: HEADINGS.H4.lineHeight
            },
            H5: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.SEMIBOLD,
                fontSize: HEADINGS.H5.fontSize,
                lineHeight: HEADINGS.H5.lineHeight
            },
            H6: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.SEMIBOLD,
                fontSize: HEADINGS.H6.fontSize,
                lineHeight: HEADINGS.H6.lineHeight
            },
            H7: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.SEMIBOLD,
                fontSize: HEADINGS.H7.fontSize,
                lineHeight: HEADINGS.H7.lineHeight
            },
            H8: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.SEMIBOLD,
                fontSize: HEADINGS.H8.fontSize,
                lineHeight: HEADINGS.H8.lineHeight
            }
        },
        BOLD: {
            H1: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.BOLD,
                fontSize: HEADINGS.H1.fontSize,
                lineHeight: HEADINGS.H1.lineHeight
            },
            H2: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.BOLD,
                fontSize: HEADINGS.H2.fontSize,
                lineHeight: HEADINGS.H2.lineHeight
            },
            H3: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.BOLD,
                fontSize: HEADINGS.H3.fontSize,
                lineHeight: HEADINGS.H3.lineHeight
            },
            H4: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.BOLD,
                fontSize: HEADINGS.H4.fontSize,
                lineHeight: HEADINGS.H4.lineHeight
            },
            H5: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.BOLD,
                fontSize: HEADINGS.H5.fontSize,
                lineHeight: HEADINGS.H5.lineHeight
            },
            H6: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.BOLD,
                fontSize: HEADINGS.H6.fontSize,
                lineHeight: HEADINGS.H6.lineHeight
            },
            H7: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.BOLD,
                fontSize: HEADINGS.H7.fontSize,
                lineHeight: HEADINGS.H7.lineHeight
            },
            H8: {
                fontFamily: FONT_FAMILY.READEX_PRO,
                fontWeight: FONT_WEIGHT.BOLD,
                fontSize: HEADINGS.H8.fontSize,
                lineHeight: HEADINGS.H8.lineHeight
            }
        }
    }
};
}),
"[project]/app/constants/urls.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "API_BASE_URL": ()=>API_BASE_URL,
    "API_ENDPOINTS": ()=>API_ENDPOINTS
});
const API_BASE_URL = "http://localhost:3000/api/";
const API_ENDPOINTS = {
    AUTH: {
        REGISTER: `${API_BASE_URL}users/register`,
        VERIFY_EMAIL: `${API_BASE_URL}/sers/verify-email`,
        LOGIN: `${API_BASE_URL}users/login`
    },
    EMAIL: {
        SEND_RESET_CODE: `${API_BASE_URL}email/send-reset-code`,
        VERIFY_RESET_CODE: `${API_BASE_URL}email/verify-reset-code`,
        UPDATE_PASSWORD: `${API_BASE_URL}email/update-password`
    }
};
}),
"[project]/app/constants/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$shadows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/shadows.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$layout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/layout.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/urls.ts [app-ssr] (ecmascript)");
;
;
;
;
;
}),
"[project]/app/constants/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$shadows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/shadows.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$layout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/layout.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/urls.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/constants/index.ts [app-ssr] (ecmascript) <locals>");
}),
"[project]/app/components/ui/Button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/constants/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const Button = ({ isMain, text, onClick })=>{
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const buttonStyle = {
        backgroundColor: isMain ? isHovered ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY_HOVER : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].BRAND_PRIMARY : "transparent",
        color: isMain ? "white" : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].BRAND_PRIMARY,
        border: isMain ? "none" : `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].BRAND_PRIMARY}`,
        transition: "all 300ms ease-in-out"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `flex justify-center items-center w-full py-3 rounded-lg cursor-pointer`,
        style: {
            ...buttonStyle,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT_STYLES"].READEX_PRO.MEDIUM.H6
        },
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        onClick: onClick,
        children: text
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Button.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Button;
}),
"[project]/app/(auth)/confirm-forget-pass/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$BackArrow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/BackArrow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/constants/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/typography.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const OtpPage = ()=>{
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        "",
        "",
        "",
        ""
    ]);
    const [timer, setTimer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(150); // 2:30 in seconds
    // countdown
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (timer <= 0) return;
        const interval = setInterval(()=>setTimer((t)=>t - 1), 1000);
        return ()=>clearInterval(interval);
    }, [
        timer
    ]);
    const handleChange = (value, index)=>{
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [
                ...otp
            ];
            newOtp[index] = value;
            setOtp(newOtp);
            // auto focus next input
            if (value && index < otp.length - 1) {
                const next = document.getElementById(`otp-${index + 1}`);
                next?.focus();
            }
        }
    };
    const formatTime = (seconds)=>{
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, "0")}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col justify-between h-screen px-6 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$BackArrow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/(auth)/confirm-forget-pass/page.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/(auth)/confirm-forget-pass/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                headline: "تغيير كلمة المرور؟",
                placeholder: "ادخل الرمز التعريفي المرسل الي البريد الالكتروني",
                isInput: false,
                isPassInput: false
            }, void 0, false, {
                fileName: "[project]/app/(auth)/confirm-forget-pass/page.tsx",
                lineNumber: 46,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT_STYLES"].READEX_PRO.SEMIBOLD.H4,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].TEXT
                        },
                        children: "تغيير كلمة المرور"
                    }, void 0, false, {
                        fileName: "[project]/app/(auth)/confirm-forget-pass/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT_STYLES"].READEX_PRO.MEDIUM.H7,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].TEXT
                        },
                        className: "mt-2",
                        children: "ادخل الرمز التعريفي المرسل الي البريد الالكتروني"
                    }, void 0, false, {
                        fileName: "[project]/app/(auth)/confirm-forget-pass/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(auth)/confirm-forget-pass/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-4 mt-8",
                children: otp.map((digit, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: `otp-${i}`,
                        type: "text",
                        maxLength: 1,
                        value: digit,
                        onChange: (e)=>handleChange(e.target.value, i),
                        className: "w-14 h-14 text-center border-2 border-gray-300 rounded-md text-xl outline-none focus:border-green-500"
                    }, i, false, {
                        fileName: "[project]/app/(auth)/confirm-forget-pass/page.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/(auth)/confirm-forget-pass/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mt-4 text-sm text-gray-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: formatTime(timer)
                    }, void 0, false, {
                        fileName: "[project]/app/(auth)/confirm-forget-pass/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-green-600 underline disabled:text-gray-400",
                        disabled: timer > 0,
                        onClick: ()=>setTimer(150),
                        children: "اعِد ارسال الرمز التعريفي"
                    }, void 0, false, {
                        fileName: "[project]/app/(auth)/confirm-forget-pass/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(auth)/confirm-forget-pass/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isMain: true,
                    text: "ارسال",
                    onClick: ()=>console.log("OTP:", otp.join(""))
                }, void 0, false, {
                    fileName: "[project]/app/(auth)/confirm-forget-pass/page.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/(auth)/confirm-forget-pass/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(auth)/confirm-forget-pass/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = OtpPage;
}),

};

//# sourceMappingURL=app_b801d313._.js.map