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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"DispatchContext\": function() { return /* binding */ DispatchContext; },\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useAuthDispatch\": function() { return /* binding */ useAuthDispatch; },\n/* harmony export */   \"useAuthState\": function() { return /* binding */ useAuthState; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\nconst StateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    authenticated: false,\n    user: undefined,\n    loading: true\n});\nconst DispatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst userReducer = (state, param)=>{\n    let { type , payload  } = param;\n    switch(type){\n        case \"LOGIN\":\n            return {\n                ...state,\n                authenticated: true,\n                user: payload\n            };\n        case \"LOGOUT\":\n            return {\n                ...state,\n                authenticated: false,\n                user: undefined\n            };\n        case \"STOP_LOADING\":\n            return {\n                ...state,\n                loading: false\n            };\n        default:\n            throw new Error(\"Unknown action type :\".concat(type));\n    }\n};\nconst AuthProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [state, defaultDispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(userReducer, {\n        user: undefined,\n        authenticated: false,\n        loading: true\n    });\n    const dispatch = (type, payload)=>{\n        defaultDispatch({\n            type,\n            payload\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function loadUser() {\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/auth/me\");\n                dispatch(\"LOGIN\", response.data);\n            } catch (e) {\n                console.log(e);\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DispatchContext.Provider, {\n        value: dispatch,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StateContext.Provider, {\n            value: state,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/context/auth.tsx\",\n            lineNumber: 76,\n            columnNumber: 10\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/context/auth.tsx\",\n        lineNumber: 75,\n        columnNumber: 7\n    }, undefined);\n};\n_s(AuthProvider, \"BZzZCKHfezeVlzDc57RwDoMwoSM=\");\n_c = AuthProvider;\nconst useAuthState = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StateContext);\n};\n_s1(useAuthState, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst useAuthDispatch = ()=>{\n    _s2();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DispatchContext);\n};\n_s2(useAuthDispatch, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hdXRoLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXlFO0FBRS9DO0FBU25CLE1BQU1LLDZCQUFlTCxvREFBYUEsQ0FBUTtJQUM5Q00sZUFBZ0IsS0FBSztJQUNyQkMsTUFBT0M7SUFDUEMsU0FBVSxJQUFJO0FBQ2pCLEdBQUU7QUFFSyxNQUFNQyxnQ0FBa0JWLG9EQUFhQSxDQUFNLElBQUksRUFBRTtBQU94RCxNQUFNVyxjQUFjLENBQUNDLGVBQXdDO1FBQTFCLEVBQUNDLEtBQUksRUFBQ0MsUUFBTyxFQUFRO0lBQ3JELE9BQU9EO1FBQ0osS0FBSztZQUNGLE9BQU87Z0JBQ0osR0FBR0QsS0FBSztnQkFDUk4sZUFBZ0IsSUFBSTtnQkFDcEJDLE1BQU9PO1lBQ1Y7UUFDSCxLQUFLO1lBQ0YsT0FBTztnQkFDSixHQUFHRixLQUFLO2dCQUNSTixlQUFnQixLQUFLO2dCQUNyQkMsTUFBT0M7WUFDVjtRQUNILEtBQUs7WUFDRixPQUFPO2dCQUNKLEdBQUdJLEtBQUs7Z0JBQ1JILFNBQVUsS0FBSztZQUNsQjtRQUNIO1lBQ0csTUFBTSxJQUFJTSxNQUFNLHdCQUE2QixPQUFMRixPQUFPO0lBQ3JEO0FBQ0g7QUFHTyxNQUFNRyxlQUFlLFNBQThDO1FBQTdDLEVBQUNDLFNBQVEsRUFBK0I7O0lBRWxFLE1BQU0sQ0FBQ0wsT0FBT00sZ0JBQWdCLEdBQUdoQixpREFBVUEsQ0FBQ1MsYUFBYTtRQUN0REosTUFBTUM7UUFDTkYsZUFBZ0IsS0FBSztRQUNyQkcsU0FBVSxJQUFJO0lBQ2pCO0lBRUEsTUFBTVUsV0FBVyxDQUFDTixNQUFlQyxVQUFrQjtRQUNoREksZ0JBQWdCO1lBQUNMO1lBQU1DO1FBQU87SUFDakM7SUFFQVgsZ0RBQVNBLENBQUMsSUFBTTtRQUNiLGVBQWVpQixXQUFXO1lBQ3ZCLElBQUk7Z0JBQ0QsTUFBTUMsV0FBVyxNQUFNakIsaURBQVMsQ0FBQztnQkFDakNlLFNBQVMsU0FBU0UsU0FBU0UsSUFBSTtZQUNsQyxFQUFDLE9BQU1DLEdBQUc7Z0JBQ1BDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFFZjtRQUNIO0lBQ0gsR0FBRyxFQUFFO0lBRUwscUJBQ0csOERBQUNkLGdCQUFnQmlCLFFBQVE7UUFBQ0MsT0FBT1Q7a0JBQzlCLDRFQUFDZCxhQUFhc0IsUUFBUTtZQUFDQyxPQUFPaEI7c0JBQVFLOzs7Ozs7Ozs7OztBQUcvQyxFQUFDO0dBN0JZRDtLQUFBQTtBQStCTixNQUFNYSxlQUFlLElBQU01Qjs7SUFBQUEsT0FBQUEsaURBQVVBLENBQUNJO0FBQVksRUFBRTtJQUE5Q3dCO0FBQ04sTUFBTUMsa0JBQWtCLElBQU03Qjs7SUFBQUEsT0FBQUEsaURBQVVBLENBQUNTO0FBQWUsRUFBRTtJQUFwRG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L2F1dGgudHN4PzRlYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi90eXBlc1wiXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gICBhdXRoZW50aWNhdGVkIDogYm9vbGVhbixcbiAgIHVzZXIgOiBVc2VyIHwgdW5kZWZpbmVkLFxuICAgbG9hZGluZyA6IGJvb2xlYW5cbn1cblxuXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxTdGF0ZT4oe1xuICAgYXV0aGVudGljYXRlZCA6IGZhbHNlLFxuICAgdXNlciA6IHVuZGVmaW5lZCxcbiAgIGxvYWRpbmcgOiB0cnVlXG59KVxuXG5leHBvcnQgY29uc3QgRGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxhbnk+KG51bGwpO1xuXG5pbnRlcmZhY2UgQWN0aW9uIHtcbiAgIHR5cGU6IHN0cmluZyxcbiAgIHBheWxvYWQgOiBhbnlcbn1cblxuY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGU6IFN0YXRlLCB7dHlwZSxwYXlsb2FkfTpBY3Rpb24pID0+IHtcbiAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICBjYXNlIFwiTE9HSU5cIiA6XG4gICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhdXRoZW50aWNhdGVkIDogdHJ1ZSxcbiAgICAgICAgICAgIHVzZXIgOiBwYXlsb2FkLFxuICAgICAgICAgfVxuICAgICAgY2FzZSBcIkxPR09VVFwiIDpcbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0ZWQgOiBmYWxzZSxcbiAgICAgICAgICAgIHVzZXIgOiB1bmRlZmluZWQsXG4gICAgICAgICB9XG4gICAgICBjYXNlIFwiU1RPUF9MT0FESU5HXCIgOlxuICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgbG9hZGluZyA6IGZhbHNlXG4gICAgICAgICB9XG4gICAgICBkZWZhdWx0IDpcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBhY3Rpb24gdHlwZSA6JHt0eXBlfWApXG4gICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7Y2hpbGRyZW59IDoge2NoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGV9KSA9PiB7XG5cbiAgIGNvbnN0IFtzdGF0ZSwgZGVmYXVsdERpc3BhdGNoXSA9IHVzZVJlZHVjZXIodXNlclJlZHVjZXIsIHtcbiAgICAgIHVzZXI6IHVuZGVmaW5lZCxcbiAgICAgIGF1dGhlbnRpY2F0ZWQgOiBmYWxzZSxcbiAgICAgIGxvYWRpbmcgOiB0cnVlXG4gICB9KVxuXG4gICBjb25zdCBkaXNwYXRjaCA9ICh0eXBlOiBzdHJpbmcgLCBwYXlsb2FkPzogYW55KSA9PiB7XG4gICAgICBkZWZhdWx0RGlzcGF0Y2goe3R5cGUsIHBheWxvYWR9KVxuICAgfVxuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZFVzZXIoKSB7XG4gICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5nZXQoXCIvYXV0aC9tZVwiKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKFwiTE9HSU5cIiwgcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgIH1jYXRjaChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuXG4gICAgICAgICB9XG4gICAgICB9XG4gICB9LCBbXSlcblxuICAgcmV0dXJuIChcbiAgICAgIDxEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cbiAgICAgICAgIDxTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57Y2hpbGRyZW59PC9TdGF0ZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICA8L0Rpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cbiAgIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUF1dGhTdGF0ZSA9ICgpID0+IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcbmV4cG9ydCBjb25zdCB1c2VBdXRoRGlzcGF0Y2ggPSAoKSA9PiB1c2VDb250ZXh0KERpc3BhdGNoQ29udGV4dCk7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwidXNlRWZmZWN0IiwiQXhpb3MiLCJTdGF0ZUNvbnRleHQiLCJhdXRoZW50aWNhdGVkIiwidXNlciIsInVuZGVmaW5lZCIsImxvYWRpbmciLCJEaXNwYXRjaENvbnRleHQiLCJ1c2VyUmVkdWNlciIsInN0YXRlIiwidHlwZSIsInBheWxvYWQiLCJFcnJvciIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiZGVmYXVsdERpc3BhdGNoIiwiZGlzcGF0Y2giLCJsb2FkVXNlciIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImUiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGhTdGF0ZSIsInVzZUF1dGhEaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/auth.tsx\n"));

/***/ })

});