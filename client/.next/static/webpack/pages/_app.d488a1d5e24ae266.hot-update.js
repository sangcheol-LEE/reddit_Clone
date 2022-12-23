/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/auth */ \"./src/context/auth.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].defaults.baseURL = \"http://localhost:4000\" + \"/api\";\n    axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].defaults.withCredentials = true;\n    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const authRoutes = [\n        \"/register\",\n        \"login\"\n    ];\n    const authRoute = authRoutes.includes(pathname);\n    const fetcher = async (url)=>{\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(url);\n            return res.data;\n        } catch (e) {\n            throw e.response.data;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                    src: \"https://kit.fontawesome.com/41b9e66469.js\",\n                    crossOrigin: \"anonymous\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/_app.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/_app.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_5__.SWRConfig, {\n                value: {\n                    fetcher\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_auth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n                    children: [\n                        !authRoute && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/_app.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 28\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: authRoute ? \"\" : \"pt-16\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                ...pageProps\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/_app.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/_app.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/_app.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/_app.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"Q1ZdS3L8K5NfmON/UeWa8oPrWT0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE4QjtBQUVKO0FBQ3FCO0FBQ1A7QUFDRTtBQUNWO0FBQ0g7QUFFZCxTQUFTTSxJQUFJLEtBQWtDLEVBQUU7UUFBcEMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksR0FBbEM7O0lBQzFCUiw4REFBc0IsR0FBR1csdUJBQXVDLEdBQUc7SUFDbkVYLHNFQUE4QixHQUFHLElBQUk7SUFDckMsTUFBTSxFQUFDZSxTQUFRLEVBQUMsR0FBSWIsc0RBQVNBO0lBQzdCLE1BQU1jLGFBQWE7UUFBQztRQUFhO0tBQVE7SUFDekMsTUFBTUMsWUFBWUQsV0FBV0UsUUFBUSxDQUFDSDtJQUV0QyxNQUFNSSxVQUFVLE9BQU9DLE1BQWlCO1FBQ3RDLElBQUc7WUFDQSxNQUFNQyxNQUFNLE1BQU1yQixpREFBUyxDQUFDb0I7WUFDNUIsT0FBT0MsSUFBSUUsSUFBSTtRQUNsQixFQUFDLE9BQU1DLEdBQVE7WUFDWixNQUFNQSxFQUFFQyxRQUFRLENBQUNGLElBQUk7UUFDdEI7SUFDSjtJQUlFLHFCQUNFOzswQkFDRSw4REFBQ2xCLGtEQUFJQTswQkFDSCw0RUFBQ3FCO29CQUFPQyxLQUFJO29CQUE0Q0MsYUFBWTs7Ozs7Ozs7Ozs7MEJBRXRFLDhEQUFDeEIsMENBQVNBO2dCQUFDeUIsT0FBTztvQkFDaEJWO2dCQUNGOzBCQUNFLDRFQUFDbEIsdURBQVlBOzt3QkFDVixDQUFDZ0IsMkJBQWEsOERBQUNkLDBEQUFNQTs7Ozs7c0NBQ3RCLDhEQUFDMkI7NEJBQUlDLFdBQVdkLFlBQVksS0FBSyxPQUFPO3NDQUN0Qyw0RUFBQ1Y7Z0NBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3RDLENBQUM7R0FwQ3VCRjs7UUFHRkosa0RBQVNBOzs7S0FIUEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L2F1dGgnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhcic7XG5pbXBvcnQgeyBTV1JDb25maWcgfSBmcm9tICdzd3InO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgQXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFUlZFUl9CQVNFX1VSTCArIFwiL2FwaVwiO1xuICBBeGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICBjb25zdCB7cGF0aG5hbWV9ICA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBhdXRoUm91dGVzID0gW1wiL3JlZ2lzdGVyXCIsIFwibG9naW5cIl07XG4gIGNvbnN0IGF1dGhSb3V0ZSA9IGF1dGhSb3V0ZXMuaW5jbHVkZXMocGF0aG5hbWUpO1xuXG4gIGNvbnN0IGZldGNoZXIgPSBhc3luYyAodXJsIDogc3RyaW5nKSA9PiB7XG4gICAgdHJ5e1xuICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IEF4aW9zLmdldCh1cmwpO1xuICAgICAgIHJldHVybiByZXMuZGF0YTtcbiAgICB9Y2F0Y2goZSA6IGFueSl7XG4gICAgICAgdGhyb3cgZS5yZXNwb25zZS5kYXRhXG4gICAgICB9XG4gIH1cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vNDFiOWU2NjQ2OS5qc1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFNXUkNvbmZpZyB2YWx1ZT17e1xuICAgICAgICAgIGZldGNoZXJcbiAgICAgICAgfX0+XG4gICAgICAgICAgPEF1dGhQcm92aWRlcj5cbiAgICAgICAgICAgIHshYXV0aFJvdXRlICYmIDxOYXZCYXIgLz59XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YXV0aFJvdXRlID8gXCJcIiA6IFwicHQtMTZcIn0+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgICAgICA8L1NXUkNvbmZpZz5cbiAgICAgIDwvPlxuICAgIClcblxufVxuIl0sIm5hbWVzIjpbIkF4aW9zIiwiQXV0aFByb3ZpZGVyIiwidXNlUm91dGVyIiwiTmF2QmFyIiwiU1dSQ29uZmlnIiwiSGVhZCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TRVJWRVJfQkFTRV9VUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJwYXRobmFtZSIsImF1dGhSb3V0ZXMiLCJhdXRoUm91dGUiLCJpbmNsdWRlcyIsImZldGNoZXIiLCJ1cmwiLCJyZXMiLCJnZXQiLCJkYXRhIiwiZSIsInJlc3BvbnNlIiwic2NyaXB0Iiwic3JjIiwiY3Jvc3NPcmlnaW4iLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

});