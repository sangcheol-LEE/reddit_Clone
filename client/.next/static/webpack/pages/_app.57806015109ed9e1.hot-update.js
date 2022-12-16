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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"DispatchContext\": function() { return /* binding */ DispatchContext; },\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useAuthDispatch\": function() { return /* binding */ useAuthDispatch; },\n/* harmony export */   \"useAuthState\": function() { return /* binding */ useAuthState; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\nconst StateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    authenticated: false,\n    user: undefined,\n    loading: true\n});\nconst DispatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst userReducer = (state, param)=>{\n    let { type , payload  } = param;\n    switch(type){\n        case \"LOGIN\":\n            return {\n                ...state,\n                authenticated: true,\n                user: payload\n            };\n        case \"LOGOUT\":\n            return {\n                ...state,\n                authenticated: false,\n                user: undefined\n            };\n        case \"STOP_LOADING\":\n            return {\n                ...state,\n                loading: false\n            };\n        default:\n            throw new Error(\"Unknown action type :\".concat(type));\n    }\n};\nconst AuthProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [state, defaultDispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(userReducer, {\n        user: undefined,\n        authenticated: false,\n        loading: true\n    });\n    const dispatch = (type, payload)=>{\n        defaultDispatch({\n            type,\n            payload\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function loadUser() {\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/auth/me\");\n                dispatch(\"LOGIN\", response.data);\n            } catch (e) {\n                console.log(\"loadUser\", e);\n            } finally{\n                dispatch(\"STOP_LOADING\");\n            }\n        }\n        loadUser();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DispatchContext.Provider, {\n        value: dispatch,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StateContext.Provider, {\n            value: state,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/context/auth.tsx\",\n            lineNumber: 78,\n            columnNumber: 10\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/context/auth.tsx\",\n        lineNumber: 77,\n        columnNumber: 7\n    }, undefined);\n};\n_s(AuthProvider, \"BZzZCKHfezeVlzDc57RwDoMwoSM=\");\n_c = AuthProvider;\nconst useAuthState = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StateContext);\n};\n_s1(useAuthState, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst useAuthDispatch = ()=>{\n    _s2();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DispatchContext);\n};\n_s2(useAuthDispatch, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hdXRoLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXlFO0FBRS9DO0FBU25CLE1BQU1LLDZCQUFlTCxvREFBYUEsQ0FBUTtJQUM5Q00sZUFBZ0IsS0FBSztJQUNyQkMsTUFBT0M7SUFDUEMsU0FBVSxJQUFJO0FBQ2pCLEdBQUU7QUFFSyxNQUFNQyxnQ0FBa0JWLG9EQUFhQSxDQUFNLElBQUksRUFBRTtBQU94RCxNQUFNVyxjQUFjLENBQUNDLGVBQXdDO1FBQTFCLEVBQUNDLEtBQUksRUFBQ0MsUUFBTyxFQUFRO0lBQ3JELE9BQU9EO1FBQ0osS0FBSztZQUNGLE9BQU87Z0JBQ0osR0FBR0QsS0FBSztnQkFDUk4sZUFBZ0IsSUFBSTtnQkFDcEJDLE1BQU9PO1lBQ1Y7UUFDSCxLQUFLO1lBQ0YsT0FBTztnQkFDSixHQUFHRixLQUFLO2dCQUNSTixlQUFnQixLQUFLO2dCQUNyQkMsTUFBT0M7WUFDVjtRQUNILEtBQUs7WUFDRixPQUFPO2dCQUNKLEdBQUdJLEtBQUs7Z0JBQ1JILFNBQVUsS0FBSztZQUNsQjtRQUNIO1lBQ0csTUFBTSxJQUFJTSxNQUFNLHdCQUE2QixPQUFMRixPQUFPO0lBQ3JEO0FBQ0g7QUFHTyxNQUFNRyxlQUFlLFNBQThDO1FBQTdDLEVBQUNDLFNBQVEsRUFBK0I7O0lBRWxFLE1BQU0sQ0FBQ0wsT0FBT00sZ0JBQWdCLEdBQUdoQixpREFBVUEsQ0FBQ1MsYUFBYTtRQUN0REosTUFBTUM7UUFDTkYsZUFBZ0IsS0FBSztRQUNyQkcsU0FBVSxJQUFJO0lBQ2pCO0lBRUEsTUFBTVUsV0FBVyxDQUFDTixNQUFlQyxVQUFrQjtRQUNoREksZ0JBQWdCO1lBQUNMO1lBQU1DO1FBQU87SUFDakM7SUFFQVgsZ0RBQVNBLENBQUMsSUFBTTtRQUNiLGVBQWVpQixXQUFXO1lBQ3ZCLElBQUk7Z0JBQ0QsTUFBTUMsV0FBVyxNQUFNakIsaURBQVMsQ0FBQztnQkFDakNlLFNBQVMsU0FBU0UsU0FBU0UsSUFBSTtZQUNsQyxFQUFDLE9BQU1DLEdBQUc7Z0JBQ1BDLFFBQVFDLEdBQUcsQ0FBQyxZQUFXRjtZQUMxQixTQUFTO2dCQUNOTCxTQUFTO1lBQ1o7UUFDSDtRQUNBQztJQUNILEdBQUcsRUFBRTtJQUVMLHFCQUNHLDhEQUFDVixnQkFBZ0JpQixRQUFRO1FBQUNDLE9BQU9UO2tCQUM5Qiw0RUFBQ2QsYUFBYXNCLFFBQVE7WUFBQ0MsT0FBT2hCO3NCQUFRSzs7Ozs7Ozs7Ozs7QUFHL0MsRUFBQztHQS9CWUQ7S0FBQUE7QUFpQ04sTUFBTWEsZUFBZSxJQUFNNUI7O0lBQUFBLE9BQUFBLGlEQUFVQSxDQUFDSTtBQUFZLEVBQUU7SUFBOUN3QjtBQUNOLE1BQU1DLGtCQUFrQixJQUFNN0I7O0lBQUFBLE9BQUFBLGlEQUFVQSxDQUFDUztBQUFlLEVBQUU7SUFBcERvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9hdXRoLnRzeD80ZWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vdHlwZXNcIlxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICAgYXV0aGVudGljYXRlZCA6IGJvb2xlYW4sXG4gICB1c2VyIDogVXNlciB8IHVuZGVmaW5lZCxcbiAgIGxvYWRpbmcgOiBib29sZWFuXG59XG5cblxuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U3RhdGU+KHtcbiAgIGF1dGhlbnRpY2F0ZWQgOiBmYWxzZSxcbiAgIHVzZXIgOiB1bmRlZmluZWQsXG4gICBsb2FkaW5nIDogdHJ1ZVxufSlcblxuZXhwb3J0IGNvbnN0IERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55PihudWxsKTtcblxuaW50ZXJmYWNlIEFjdGlvbiB7XG4gICB0eXBlOiBzdHJpbmcsXG4gICBwYXlsb2FkIDogYW55XG59XG5cbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlOiBTdGF0ZSwge3R5cGUscGF5bG9hZH06QWN0aW9uKSA9PiB7XG4gICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSBcIkxPR0lOXCIgOlxuICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgYXV0aGVudGljYXRlZCA6IHRydWUsXG4gICAgICAgICAgICB1c2VyIDogcGF5bG9hZCxcbiAgICAgICAgIH1cbiAgICAgIGNhc2UgXCJMT0dPVVRcIiA6XG4gICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhdXRoZW50aWNhdGVkIDogZmFsc2UsXG4gICAgICAgICAgICB1c2VyIDogdW5kZWZpbmVkLFxuICAgICAgICAgfVxuICAgICAgY2FzZSBcIlNUT1BfTE9BRElOR1wiIDpcbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGxvYWRpbmcgOiBmYWxzZVxuICAgICAgICAgfVxuICAgICAgZGVmYXVsdCA6XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gYWN0aW9uIHR5cGUgOiR7dHlwZX1gKVxuICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoe2NoaWxkcmVufSA6IHtjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlfSkgPT4ge1xuXG4gICBjb25zdCBbc3RhdGUsIGRlZmF1bHREaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHVzZXJSZWR1Y2VyLCB7XG4gICAgICB1c2VyOiB1bmRlZmluZWQsXG4gICAgICBhdXRoZW50aWNhdGVkIDogZmFsc2UsXG4gICAgICBsb2FkaW5nIDogdHJ1ZVxuICAgfSlcblxuICAgY29uc3QgZGlzcGF0Y2ggPSAodHlwZTogc3RyaW5nICwgcGF5bG9hZD86IGFueSkgPT4ge1xuICAgICAgZGVmYXVsdERpc3BhdGNoKHt0eXBlLCBwYXlsb2FkfSlcbiAgIH1cblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRVc2VyKCkge1xuICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MuZ2V0KFwiL2F1dGgvbWVcIik7XG4gICAgICAgICAgICBkaXNwYXRjaChcIkxPR0lOXCIsIHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICB9Y2F0Y2goZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkVXNlclwiLGUpXG4gICAgICAgICB9ZmluYWxseSB7XG4gICAgICAgICAgICBkaXNwYXRjaChcIlNUT1BfTE9BRElOR1wiKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxvYWRVc2VyKClcbiAgIH0sIFtdKVxuXG4gICByZXR1cm4gKFxuICAgICAgPERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxuICAgICAgICAgPFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PntjaGlsZHJlbn08L1N0YXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgIDwvRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aFN0YXRlID0gKCkgPT4gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xuZXhwb3J0IGNvbnN0IHVzZUF1dGhEaXNwYXRjaCA9ICgpID0+IHVzZUNvbnRleHQoRGlzcGF0Y2hDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJ1c2VFZmZlY3QiLCJBeGlvcyIsIlN0YXRlQ29udGV4dCIsImF1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwidW5kZWZpbmVkIiwibG9hZGluZyIsIkRpc3BhdGNoQ29udGV4dCIsInVzZXJSZWR1Y2VyIiwic3RhdGUiLCJ0eXBlIiwicGF5bG9hZCIsIkVycm9yIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkZWZhdWx0RGlzcGF0Y2giLCJkaXNwYXRjaCIsImxvYWRVc2VyIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aFN0YXRlIiwidXNlQXV0aERpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/auth.tsx\n"));

/***/ })

});