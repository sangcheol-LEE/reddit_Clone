"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/r/[sub]/[identifier]/[slug]";
exports.ids = ["pages/r/[sub]/[identifier]/[slug]"];
exports.modules = {

/***/ "./src/pages/r/[sub]/[identifier]/[slug].tsx":
/*!***************************************************!*\
  !*** ./src/pages/r/[sub]/[identifier]/[slug].tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__]);\nswr__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst PostPage = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { identifier , sub , slug  } = router.query;\n    const { data: post , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(identifier && slug ? `/posts/${identifier}/${slug}` : null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"PostPage\"\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n        lineNumber: 15,\n        columnNumber: 7\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvci9bc3ViXS9baWRlbnRpZmllcl0vW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ2Q7QUFFRDtBQUd6QixNQUFNRyxXQUFXLElBQU07SUFFcEIsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sRUFBQ0ssV0FBVSxFQUFFQyxJQUFHLEVBQUdDLEtBQUksRUFBQyxHQUFHSCxPQUFPSSxLQUFLO0lBRzdDLE1BQU0sRUFBQ0MsTUFBT0MsS0FBSSxFQUFFQyxNQUFLLEVBQUMsR0FBR1QsK0NBQU1BLENBQU9HLGNBQWNFLE9BQU8sQ0FBQyxPQUFPLEVBQUVGLFdBQVcsQ0FBQyxFQUFFRSxLQUFLLENBQUMsR0FBRyxJQUFJO0lBQ3BHLHFCQUNHLDhEQUFDSztrQkFBSTs7Ozs7O0FBSVg7QUFFQSxpRUFBZVQsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9wYWdlcy9yL1tzdWJdL1tpZGVudGlmaWVyXS9bc2x1Z10udHN4PzljMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcyc7XG5cbmNvbnN0IFBvc3RQYWdlID0gKCkgPT4ge1xuXG4gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgY29uc3Qge2lkZW50aWZpZXIsIHN1YiAsIHNsdWd9ID0gcm91dGVyLnF1ZXJ5XG5cblxuICAgY29uc3Qge2RhdGEgOiBwb3N0LCBlcnJvcn0gPSB1c2VTV1I8UG9zdD4oaWRlbnRpZmllciAmJiBzbHVnID8gYC9wb3N0cy8ke2lkZW50aWZpZXJ9LyR7c2x1Z31gIDogbnVsbClcbiAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgUG9zdFBhZ2VcbiAgICAgIDwvZGl2PlxuICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0UGFnZVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU1dSIiwiUG9zdFBhZ2UiLCJyb3V0ZXIiLCJpZGVudGlmaWVyIiwic3ViIiwic2x1ZyIsInF1ZXJ5IiwiZGF0YSIsInBvc3QiLCJlcnJvciIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/r/[sub]/[identifier]/[slug].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/r/[sub]/[identifier]/[slug].tsx"));
module.exports = __webpack_exports__;

})();