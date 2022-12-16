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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/auth.tsx":
/*!******************************!*\
  !*** ./src/context/auth.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"DispatchContext\": () => (/* binding */ DispatchContext),\n/* harmony export */   \"StateContext\": () => (/* binding */ StateContext),\n/* harmony export */   \"useAuthDispatch\": () => (/* binding */ useAuthDispatch),\n/* harmony export */   \"useAuthState\": () => (/* binding */ useAuthState)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst StateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    authenticated: false,\n    user: undefined,\n    loading: true\n});\nconst DispatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst userReducer = (state, { type , payload  })=>{\n    switch(type){\n        case \"LOGIN\":\n            return {\n                ...state,\n                authenticated: true,\n                user: payload\n            };\n        case \"LOGOUT\":\n            return {\n                ...state,\n                authenticated: false,\n                user: undefined\n            };\n        case \"STOP_LOADING\":\n            return {\n                ...state,\n                loading: false\n            };\n        default:\n            throw new Error(`Unknown action type :${type}`);\n    }\n};\nconst AuthProvider = ({ children  })=>{\n    const [state, defaultDispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(userReducer, {\n        user: undefined,\n        authenticated: false,\n        loading: true\n    });\n    const dispatch = (type, payload)=>{\n        defaultDispatch({\n            type,\n            payload\n        });\n    };\n    console.log(\"state\", state);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DispatchContext.Provider, {\n        value: dispatch,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StateContext.Provider, {\n            value: state,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/context/auth.tsx\",\n            lineNumber: 64,\n            columnNumber: 10\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/context/auth.tsx\",\n        lineNumber: 63,\n        columnNumber: 7\n    }, undefined);\n};\nconst useAuthState = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StateContext);\nconst useAuthDispatch = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DispatchContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hdXRoLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE4RDtBQVd2RCxNQUFNRyw2QkFBZUgsb0RBQWFBLENBQVE7SUFDOUNJLGVBQWdCLEtBQUs7SUFDckJDLE1BQU9DO0lBQ1BDLFNBQVUsSUFBSTtBQUNqQixHQUFFO0FBRUssTUFBTUMsZ0NBQWtCUixvREFBYUEsQ0FBTSxJQUFJLEVBQUU7QUFPeEQsTUFBTVMsY0FBYyxDQUFDQyxPQUFjLEVBQUNDLEtBQUksRUFBQ0MsUUFBTyxFQUFRLEdBQUs7SUFDMUQsT0FBT0Q7UUFDSixLQUFLO1lBQ0YsT0FBTztnQkFDSixHQUFHRCxLQUFLO2dCQUNSTixlQUFnQixJQUFJO2dCQUNwQkMsTUFBT087WUFDVjtRQUNILEtBQUs7WUFDRixPQUFPO2dCQUNKLEdBQUdGLEtBQUs7Z0JBQ1JOLGVBQWdCLEtBQUs7Z0JBQ3JCQyxNQUFPQztZQUNWO1FBQ0gsS0FBSztZQUNGLE9BQU87Z0JBQ0osR0FBR0ksS0FBSztnQkFDUkgsU0FBVSxLQUFLO1lBQ2xCO1FBQ0g7WUFDRyxNQUFNLElBQUlNLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRUYsS0FBSyxDQUFDLEVBQUM7SUFDckQ7QUFDSDtBQUdPLE1BQU1HLGVBQWUsQ0FBQyxFQUFDQyxTQUFRLEVBQStCLEdBQUs7SUFFdkUsTUFBTSxDQUFDTCxPQUFPTSxnQkFBZ0IsR0FBR2QsaURBQVVBLENBQUNPLGFBQWE7UUFDdERKLE1BQU1DO1FBQ05GLGVBQWdCLEtBQUs7UUFDckJHLFNBQVUsSUFBSTtJQUNqQjtJQUVBLE1BQU1VLFdBQVcsQ0FBQ04sTUFBZUMsVUFBa0I7UUFDaERJLGdCQUFnQjtZQUFDTDtZQUFNQztRQUFPO0lBQ2pDO0lBQ0FNLFFBQVFDLEdBQUcsQ0FBQyxTQUFRVDtJQUNwQixxQkFDRyw4REFBQ0YsZ0JBQWdCWSxRQUFRO1FBQUNDLE9BQU9KO2tCQUM5Qiw0RUFBQ2QsYUFBYWlCLFFBQVE7WUFBQ0MsT0FBT1g7c0JBQVFLOzs7Ozs7Ozs7OztBQUcvQyxFQUFDO0FBRU0sTUFBTU8sZUFBZSxJQUFNckIsaURBQVVBLENBQUNFLGNBQWM7QUFDcEQsTUFBTW9CLGtCQUFrQixJQUFNdEIsaURBQVVBLENBQUNPLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9jb250ZXh0L2F1dGgudHN4PzRlYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vdHlwZXNcIlxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICAgYXV0aGVudGljYXRlZCA6IGJvb2xlYW4sXG4gICB1c2VyIDogVXNlciB8IHVuZGVmaW5lZCxcbiAgIGxvYWRpbmcgOiBib29sZWFuXG59XG5cblxuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U3RhdGU+KHtcbiAgIGF1dGhlbnRpY2F0ZWQgOiBmYWxzZSxcbiAgIHVzZXIgOiB1bmRlZmluZWQsXG4gICBsb2FkaW5nIDogdHJ1ZVxufSlcblxuZXhwb3J0IGNvbnN0IERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55PihudWxsKTtcblxuaW50ZXJmYWNlIEFjdGlvbiB7XG4gICB0eXBlOiBzdHJpbmcsXG4gICBwYXlsb2FkIDogYW55XG59XG5cbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlOiBTdGF0ZSwge3R5cGUscGF5bG9hZH06QWN0aW9uKSA9PiB7XG4gICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSBcIkxPR0lOXCIgOlxuICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgYXV0aGVudGljYXRlZCA6IHRydWUsXG4gICAgICAgICAgICB1c2VyIDogcGF5bG9hZCxcbiAgICAgICAgIH1cbiAgICAgIGNhc2UgXCJMT0dPVVRcIiA6XG4gICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhdXRoZW50aWNhdGVkIDogZmFsc2UsXG4gICAgICAgICAgICB1c2VyIDogdW5kZWZpbmVkLFxuICAgICAgICAgfVxuICAgICAgY2FzZSBcIlNUT1BfTE9BRElOR1wiIDpcbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGxvYWRpbmcgOiBmYWxzZVxuICAgICAgICAgfVxuICAgICAgZGVmYXVsdCA6XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gYWN0aW9uIHR5cGUgOiR7dHlwZX1gKVxuICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoe2NoaWxkcmVufSA6IHtjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlfSkgPT4ge1xuXG4gICBjb25zdCBbc3RhdGUsIGRlZmF1bHREaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHVzZXJSZWR1Y2VyLCB7XG4gICAgICB1c2VyOiB1bmRlZmluZWQsXG4gICAgICBhdXRoZW50aWNhdGVkIDogZmFsc2UsXG4gICAgICBsb2FkaW5nIDogdHJ1ZVxuICAgfSlcblxuICAgY29uc3QgZGlzcGF0Y2ggPSAodHlwZTogc3RyaW5nICwgcGF5bG9hZD86IGFueSkgPT4ge1xuICAgICAgZGVmYXVsdERpc3BhdGNoKHt0eXBlLCBwYXlsb2FkfSlcbiAgIH1cbiAgIGNvbnNvbGUubG9nKFwic3RhdGVcIixzdGF0ZSlcbiAgIHJldHVybiAoXG4gICAgICA8RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XG4gICAgICAgICA8U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+e2NoaWxkcmVufTwvU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPC9EaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XG4gICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoU3RhdGUgPSAoKSA9PiB1c2VDb250ZXh0KFN0YXRlQ29udGV4dCk7XG5leHBvcnQgY29uc3QgdXNlQXV0aERpc3BhdGNoID0gKCkgPT4gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlUmVkdWNlciIsIlN0YXRlQ29udGV4dCIsImF1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwidW5kZWZpbmVkIiwibG9hZGluZyIsIkRpc3BhdGNoQ29udGV4dCIsInVzZXJSZWR1Y2VyIiwic3RhdGUiLCJ0eXBlIiwicGF5bG9hZCIsIkVycm9yIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkZWZhdWx0RGlzcGF0Y2giLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aFN0YXRlIiwidXNlQXV0aERpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/auth.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/auth */ \"./src/context/auth.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.baseURL = \"http://localhost:4000\" + \"/api\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_auth__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, {\n        children: [\n            \"\\xcd\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 7\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBRUo7QUFDcUI7QUFDaEMsU0FBU0UsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlESiw4REFBc0IsR0FBR08sdUJBQXVDLEdBQUc7SUFDakUscUJBQ0UsOERBQUNOLHVEQUFZQTs7WUFBQzswQkFDWCw4REFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBSWpDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvYXV0aCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBBeGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VSVkVSX0JBU0VfVVJMICsgXCIvYXBpXCI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICAgIMONPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgKVxuXG59XG4iXSwibmFtZXMiOlsiQXhpb3MiLCJBdXRoUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0VSVkVSX0JBU0VfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();