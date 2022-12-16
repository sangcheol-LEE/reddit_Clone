"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/auth.tsx":
/*!******************************!*\
  !*** ./src/context/auth.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"DispatchContext\": function() { return /* binding */ DispatchContext; },\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useAuthDispatch\": function() { return /* binding */ useAuthDispatch; },\n/* harmony export */   \"useAuthState\": function() { return /* binding */ useAuthState; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\nconst StateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    authenticated: false,\n    user: undefined,\n    loading: true\n});\nconst DispatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst userReducer = (state, param)=>{\n    let { type , payload  } = param;\n    switch(type){\n        case \"LOGIN\":\n            return {\n                ...state,\n                authenticated: true,\n                user: payload\n            };\n        case \"LOGOUT\":\n            return {\n                ...state,\n                authenticated: false,\n                user: undefined\n            };\n        case \"STOP_LOADING\":\n            return {\n                ...state,\n                loading: false\n            };\n        default:\n            throw new Error(\"Unknown action type :\".concat(type));\n    }\n};\nconst AuthProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [state, defaultDispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(userReducer, {\n        user: undefined,\n        authenticated: false,\n        loading: true\n    });\n    const dispatch = (type, payload)=>{\n        defaultDispatch({\n            type,\n            payload\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function loadUser() {\n            try {} catch (e) {}\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DispatchContext.Provider, {\n        value: dispatch,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StateContext.Provider, {\n            value: state,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/context/auth.tsx\",\n            lineNumber: 74,\n            columnNumber: 10\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/context/auth.tsx\",\n        lineNumber: 73,\n        columnNumber: 7\n    }, undefined);\n};\n_s(AuthProvider, \"BZzZCKHfezeVlzDc57RwDoMwoSM=\");\n_c = AuthProvider;\nconst useAuthState = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StateContext);\n};\n_s1(useAuthState, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst useAuthDispatch = ()=>{\n    _s2();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DispatchContext);\n};\n_s2(useAuthDispatch, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hdXRoLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUU7QUFXbEUsTUFBTUksNkJBQWVKLG9EQUFhQSxDQUFRO0lBQzlDSyxlQUFnQixLQUFLO0lBQ3JCQyxNQUFPQztJQUNQQyxTQUFVLElBQUk7QUFDakIsR0FBRTtBQUVLLE1BQU1DLGdDQUFrQlQsb0RBQWFBLENBQU0sSUFBSSxFQUFFO0FBT3hELE1BQU1VLGNBQWMsQ0FBQ0MsZUFBd0M7UUFBMUIsRUFBQ0MsS0FBSSxFQUFDQyxRQUFPLEVBQVE7SUFDckQsT0FBT0Q7UUFDSixLQUFLO1lBQ0YsT0FBTztnQkFDSixHQUFHRCxLQUFLO2dCQUNSTixlQUFnQixJQUFJO2dCQUNwQkMsTUFBT087WUFDVjtRQUNILEtBQUs7WUFDRixPQUFPO2dCQUNKLEdBQUdGLEtBQUs7Z0JBQ1JOLGVBQWdCLEtBQUs7Z0JBQ3JCQyxNQUFPQztZQUNWO1FBQ0gsS0FBSztZQUNGLE9BQU87Z0JBQ0osR0FBR0ksS0FBSztnQkFDUkgsU0FBVSxLQUFLO1lBQ2xCO1FBQ0g7WUFDRyxNQUFNLElBQUlNLE1BQU0sd0JBQTZCLE9BQUxGLE9BQU87SUFDckQ7QUFDSDtBQUdPLE1BQU1HLGVBQWUsU0FBOEM7UUFBN0MsRUFBQ0MsU0FBUSxFQUErQjs7SUFFbEUsTUFBTSxDQUFDTCxPQUFPTSxnQkFBZ0IsR0FBR2YsaURBQVVBLENBQUNRLGFBQWE7UUFDdERKLE1BQU1DO1FBQ05GLGVBQWdCLEtBQUs7UUFDckJHLFNBQVUsSUFBSTtJQUNqQjtJQUVBLE1BQU1VLFdBQVcsQ0FBQ04sTUFBZUMsVUFBa0I7UUFDaERJLGdCQUFnQjtZQUFDTDtZQUFNQztRQUFPO0lBQ2pDO0lBRUFWLGdEQUFTQSxDQUFDLElBQU07UUFDYixlQUFlZ0IsV0FBVztZQUN2QixJQUFJLENBRUosRUFBQyxPQUFNQyxHQUFHLENBRVY7UUFDSDtJQUNILEdBQUcsRUFBRTtJQUVMLHFCQUNHLDhEQUFDWCxnQkFBZ0JZLFFBQVE7UUFBQ0MsT0FBT0o7a0JBQzlCLDRFQUFDZCxhQUFhaUIsUUFBUTtZQUFDQyxPQUFPWDtzQkFBUUs7Ozs7Ozs7Ozs7O0FBRy9DLEVBQUM7R0EzQllEO0tBQUFBO0FBNkJOLE1BQU1RLGVBQWUsSUFBTXRCOztJQUFBQSxPQUFBQSxpREFBVUEsQ0FBQ0c7QUFBWSxFQUFFO0lBQTlDbUI7QUFDTixNQUFNQyxrQkFBa0IsSUFBTXZCOztJQUFBQSxPQUFBQSxpREFBVUEsQ0FBQ1E7QUFBZSxFQUFFO0lBQXBEZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9hdXRoLnRzeD80ZWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vdHlwZXNcIlxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICAgYXV0aGVudGljYXRlZCA6IGJvb2xlYW4sXG4gICB1c2VyIDogVXNlciB8IHVuZGVmaW5lZCxcbiAgIGxvYWRpbmcgOiBib29sZWFuXG59XG5cblxuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U3RhdGU+KHtcbiAgIGF1dGhlbnRpY2F0ZWQgOiBmYWxzZSxcbiAgIHVzZXIgOiB1bmRlZmluZWQsXG4gICBsb2FkaW5nIDogdHJ1ZVxufSlcblxuZXhwb3J0IGNvbnN0IERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55PihudWxsKTtcblxuaW50ZXJmYWNlIEFjdGlvbiB7XG4gICB0eXBlOiBzdHJpbmcsXG4gICBwYXlsb2FkIDogYW55XG59XG5cbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlOiBTdGF0ZSwge3R5cGUscGF5bG9hZH06QWN0aW9uKSA9PiB7XG4gICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSBcIkxPR0lOXCIgOlxuICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgYXV0aGVudGljYXRlZCA6IHRydWUsXG4gICAgICAgICAgICB1c2VyIDogcGF5bG9hZCxcbiAgICAgICAgIH1cbiAgICAgIGNhc2UgXCJMT0dPVVRcIiA6XG4gICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhdXRoZW50aWNhdGVkIDogZmFsc2UsXG4gICAgICAgICAgICB1c2VyIDogdW5kZWZpbmVkLFxuICAgICAgICAgfVxuICAgICAgY2FzZSBcIlNUT1BfTE9BRElOR1wiIDpcbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGxvYWRpbmcgOiBmYWxzZVxuICAgICAgICAgfVxuICAgICAgZGVmYXVsdCA6XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gYWN0aW9uIHR5cGUgOiR7dHlwZX1gKVxuICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoe2NoaWxkcmVufSA6IHtjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlfSkgPT4ge1xuXG4gICBjb25zdCBbc3RhdGUsIGRlZmF1bHREaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHVzZXJSZWR1Y2VyLCB7XG4gICAgICB1c2VyOiB1bmRlZmluZWQsXG4gICAgICBhdXRoZW50aWNhdGVkIDogZmFsc2UsXG4gICAgICBsb2FkaW5nIDogdHJ1ZVxuICAgfSlcblxuICAgY29uc3QgZGlzcGF0Y2ggPSAodHlwZTogc3RyaW5nICwgcGF5bG9hZD86IGFueSkgPT4ge1xuICAgICAgZGVmYXVsdERpc3BhdGNoKHt0eXBlLCBwYXlsb2FkfSlcbiAgIH1cblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRVc2VyKCkge1xuICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgfWNhdGNoKGUpIHtcblxuICAgICAgICAgfVxuICAgICAgfVxuICAgfSwgW10pXG5cbiAgIHJldHVybiAoXG4gICAgICA8RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XG4gICAgICAgICA8U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+e2NoaWxkcmVufTwvU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPC9EaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XG4gICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoU3RhdGUgPSAoKSA9PiB1c2VDb250ZXh0KFN0YXRlQ29udGV4dCk7XG5leHBvcnQgY29uc3QgdXNlQXV0aERpc3BhdGNoID0gKCkgPT4gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlUmVkdWNlciIsInVzZUVmZmVjdCIsIlN0YXRlQ29udGV4dCIsImF1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwidW5kZWZpbmVkIiwibG9hZGluZyIsIkRpc3BhdGNoQ29udGV4dCIsInVzZXJSZWR1Y2VyIiwic3RhdGUiLCJ0eXBlIiwicGF5bG9hZCIsIkVycm9yIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkZWZhdWx0RGlzcGF0Y2giLCJkaXNwYXRjaCIsImxvYWRVc2VyIiwiZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoU3RhdGUiLCJ1c2VBdXRoRGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/auth.tsx\n"));

/***/ })

});