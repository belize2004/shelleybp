(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_95e8b4._.js", {

"[project]/src/lib/const.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "API_BASE_URL": (()=>API_BASE_URL),
    "API_KEY": (()=>API_KEY),
    "IMAGE_BASE_URL": (()=>IMAGE_BASE_URL)
});
const API_BASE_URL = // process.env.NODE_ENV === "development"
// ? "http://localhost:1337/api"
// :
"https://cms.shelleyandblaine.com/api";
const IMAGE_BASE_URL = // process.env.NODE_ENV === "development"
// ? "http://localhost:1337"
// :
"https://cms.shelleyandblaine.com";
const API_KEY = "a081a87bb7e7e60794a31bceed5f835cd9261ecd45b37875c9486a0daa89a6a645838c4de112f3d4049710d3dbe0df93e8067d446ce3c9ed73a8ea50ef1754fe3c5f5db0269bea2b75475b8c8d4eabef92a71e9ed8334f3b1a8c41922f9d008bda3341ced48d3d58283f4029457e64d346b08d905a1bc12a0c56da5295741f70";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/api/instance.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "axiosInstance": (()=>axiosInstance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$const$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/const.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$7$2e$9$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/axios@1.7.9/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
;
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$7$2e$9$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$const$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"],
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$const$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_KEY"]}`
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/api/home.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "homeOptions": (()=>homeOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$instance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/api/instance.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$queryOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.0_react@19.0.0/node_modules/@tanstack/react-query/build/modern/queryOptions.js [app-client] (ecmascript)");
;
;
const homeOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$queryOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryOptions"])({
    queryKey: [
        "homess"
    ],
    queryFn: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$instance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/homes?populate[gallery_item][populate]=*&populate[blogs][populate]=*`);
        console.log(response.data);
        return response.data;
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/blog/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BlogCard": (()=>BlogCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_babel-plugin-react-compiler@19.0.0-beta-e552027-20250112_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_babel-plugin-react-compiler@19.0.0-beta-e552027-20250112_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$const$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/const.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_babel-plugin-react-compiler@19.0.0-beta-e552027-20250112_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_babel-plugin-react-compiler@19.0.0-beta-e552027-20250112_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
function BlogCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "5114f2881a84539d4346542dee3d029c55f3f5020ad36c5242e83ef3668ed602") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5114f2881a84539d4346542dee3d029c55f3f5020ad36c5242e83ef3668ed602";
    }
    const { blogPost } = t0;
    console.log(blogPost);
    let t1;
    if ($[1] !== blogPost.cover) {
        t1 = blogPost.cover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$const$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGE_BASE_URL"] + blogPost.cover?.url,
            width: 1000,
            height: 1000,
            alt: "Image",
            className: " w-full h-60 object-cover  rounded-t-xl"
        }, void 0, false, {
            fileName: "[project]/src/components/blog/card.tsx",
            lineNumber: 20,
            columnNumber: 28
        }, this);
        $[1] = blogPost.cover;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== blogPost.title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "px-4 text-2xl font-bold",
            children: blogPost.title
        }, void 0, false, {
            fileName: "[project]/src/components/blog/card.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = blogPost.title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== blogPost.desc) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "px-4 line-clamp-2 text-zinc-500",
            children: blogPost.desc
        }, void 0, false, {
            fileName: "[project]/src/components/blog/card.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[5] = blogPost.desc;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const t4 = `/blog/${blogPost.documentId}`;
    let t5;
    if ($[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            asChild: true,
            className: "w-fit",
            variant: "link",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: t4,
                children: "Read more"
            }, void 0, false, {
                fileName: "[project]/src/components/blog/card.tsx",
                lineNumber: 45,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/blog/card.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t1 || $[10] !== t2 || $[11] !== t3 || $[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white flex flex-col rounded-xl gap-4 pb-4 border shadow-md",
            children: [
                t1,
                t2,
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/blog/card.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[9] = t1;
        $[10] = t2;
        $[11] = t3;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    return t6;
}
_c = BlogCard;
var _c;
__turbopack_refresh__.register(_c, "BlogCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.client.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PageClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_babel-plugin-react-compiler@19.0.0-beta-e552027-20250112_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_babel-plugin-react-compiler@19.0.0-beta-e552027-20250112_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$masonry$2d$css$40$1$2e$0$2e$16_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$masonry$2d$css$2f$dist$2f$react$2d$masonry$2d$css$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-masonry-css@1.0.16_react@19.0.0/node_modules/react-masonry-css/dist/react-masonry-css.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$const$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/const.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/api/home.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/blog/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useSuspenseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.0_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
function PageClient({ isMobile }) {
    _s();
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useSuspenseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSuspenseQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["homeOptions"]);
    const breakpointColumnsObj = {
        default: 3,
        1440: 4,
        1100: 3,
        700: 2,
        500: 1
    };
    const imagesSorted = data.data[0].gallery_item?.filter((image)=>image.order);
    const imagesUnSorted = data.data[0].gallery_item?.filter((image_0)=>!image_0.order);
    const ImageComponent = ({ image: image_1, index })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$const$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGE_BASE_URL"] + (image_1.image?.url || ""),
                width: image_1.image?.width || 1000,
                height: image_1.image?.height || 1000,
                alt: image_1.image?.alt || "Gallery image",
                className: "rounded-xl w-full h-auto",
                priority: index < 4,
                loading: index < 4 ? "eager" : "lazy"
            }, void 0, false, {
                fileName: "[project]/src/app/page.client.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        }, `image${image_1.id}`, false, {
            fileName: "[project]/src/app/page.client.tsx",
            lineNumber: 27,
            columnNumber: 9
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isMobile ? // <div className="flex flex-col gap-4">
            //   {/* <Image
            //     src="/ratings.webp"
            //     width={2000}
            //     height={2000}
            //     alt="Ratings"
            //     className="my-8 w-full"
            //   /> */}
            //   {imagesSorted
            //     .sort((a, b) => a.order - b.order)
            //     .map((image, idx) => (
            //       <ImageComponent key={image.id} image={image} index={idx} />
            //     ))}
            //   {imagesUnSorted.map((image, idx) => (
            //     <ImageComponent key={image.id} image={image} index={idx} />
            //   ))}
            // </div>
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$masonry$2d$css$40$1$2e$0$2e$16_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$masonry$2d$css$2f$dist$2f$react$2d$masonry$2d$css$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                breakpointCols: {
                    default: 2,
                    500: 2
                },
                className: "flex w-auto",
                columnClassName: "bg-clip-padding px-2",
                children: [
                    imagesSorted.sort((a, b)=>a.order - b.order).map((image_2, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageComponent, {
                            image: image_2,
                            index: idx
                        }, image_2.id, false, {
                            fileName: "[project]/src/app/page.client.tsx",
                            lineNumber: 61,
                            columnNumber: 81
                        }, this)),
                    imagesUnSorted.map((image_3, idx_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageComponent, {
                            image: image_3,
                            index: idx_0
                        }, image_3.id, false, {
                            fileName: "[project]/src/app/page.client.tsx",
                            lineNumber: 62,
                            columnNumber: 51
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.client.tsx",
                lineNumber: 49,
                columnNumber: 5
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$masonry$2d$css$40$1$2e$0$2e$16_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$masonry$2d$css$2f$dist$2f$react$2d$masonry$2d$css$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                breakpointCols: breakpointColumnsObj,
                className: "flex w-auto",
                columnClassName: "bg-clip-padding px-2",
                children: [
                    imagesSorted.sort((a_0, b_0)=>a_0.order - b_0.order).map((image_4, idx_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageComponent, {
                            image: image_4,
                            index: idx_1
                        }, image_4.id, false, {
                            fileName: "[project]/src/app/page.client.tsx",
                            lineNumber: 71,
                            columnNumber: 91
                        }, this)),
                    imagesUnSorted.map((image_5, idx_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageComponent, {
                            image: image_5,
                            index: idx_2
                        }, image_5.id, false, {
                            fileName: "[project]/src/app/page.client.tsx",
                            lineNumber: 72,
                            columnNumber: 51
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.client.tsx",
                lineNumber: 63,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col p-8 gap-8",
                children: data.data[0].blogs.map((b_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$0$2e$0$2d$beta$2d$e552027$2d$20250112_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlogCard"], {
                        blogPost: b_1
                    }, b_1.id, false, {
                        fileName: "[project]/src/app/page.client.tsx",
                        lineNumber: 75,
                        columnNumber: 40
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.client.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(PageClient, "DUKmBw8IMivYlyFT8XMYqk8Sv6g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useSuspenseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSuspenseQuery"]
    ];
});
_c = PageClient;
var _c;
__turbopack_refresh__.register(_c, "PageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_95e8b4._.js.map