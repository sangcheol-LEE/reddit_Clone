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

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/auth */ \"./src/context/auth.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst NavBar = ()=>{\n    _s();\n    const { loading , authenticated  } = (0,_context_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState)();\n    const dispatch = (0,_context_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthDispatch)();\n    const handleLogout = ()=>{\n        try {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/auth/logout\").then(()=>{\n                dispatch(\"LOGOUT\");\n            }).catch((e)=>{\n                console.log(e);\n            });\n        } catch (e) {\n            console.log(\"handleLogout\", e);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-x-0 top-0 z-10 flex items-center justify-between h-16 px-5 bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-2xl font-semibold text-gray-400\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: \"Ian\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/components/NavBar.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/components/NavBar.tsx\",\n                lineNumber: 24,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-full px-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative flex items-center bg-gray-100 border rounded hover:border-gray-700 hover:bg-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"pl-4 pr-3 text-gray-400 fas fa-search\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/components/NavBar.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Search\",\n                            className: \"px-3 py-1 bg-transparent rounded focus:outline-none\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/components/NavBar.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 16\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/components/NavBar.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/components/NavBar.tsx\",\n                lineNumber: 28,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: !loading && (authenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-20 p-2 mr-2 text-center text-white bg-gray-400 rounded\",\n                    onClick: handleLogout,\n                    children: \"로그아웃\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/components/NavBar.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 19\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/login\",\n                            className: \"w-20 p-2 mr-2 text-center text-blue-500 border border-blue-500 rounded\",\n                            children: \"로그인\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/components/NavBar.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 22\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/register\",\n                            className: \"w-20 p-2 text-center text-white bg-gray-400 rounded\",\n                            children: \"회원가입\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/components/NavBar.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 22\n                        }, undefined)\n                    ]\n                }, void 0, true))\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/components/NavBar.tsx\",\n                lineNumber: 39,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/components/NavBar.tsx\",\n        lineNumber: 23,\n        columnNumber: 7\n    }, undefined);\n};\n_s(NavBar, \"b1ef1SBRo/tCwzDO4WPXpTCXzLs=\", false, function() {\n    return [\n        _context_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState,\n        _context_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthDispatch\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUE2QjtBQUNXO0FBQ3dCO0FBQ3RDO0FBQzFCLE1BQU1LLFNBQWtCLElBQU07O0lBQzNCLE1BQU0sRUFBQ0MsUUFBTyxFQUFFQyxjQUFhLEVBQUMsR0FBR0osMkRBQVlBO0lBQzdDLE1BQU1LLFdBQVdOLDhEQUFlQTtJQUNoQyxNQUFNTyxlQUFlLElBQU07UUFDeEIsSUFBRztZQUNBTCxrREFBVSxDQUFDLGdCQUNQTyxJQUFJLENBQUMsSUFBTTtnQkFDVEgsU0FBUztZQUNaLEdBQ0NJLEtBQUssQ0FBQ0MsQ0FBQUEsSUFBSztnQkFDVEMsUUFBUUMsR0FBRyxDQUFDRjtZQUNmO1FBQ04sRUFBQyxPQUFNQSxHQUFHO1lBQ1BDLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZUY7UUFDOUI7SUFDSDtJQUVBLHFCQUNHLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDWiw4REFBQ0M7Z0JBQUtELFdBQVU7MEJBQ2IsNEVBQUNqQixrREFBSUE7b0JBQUNtQixNQUFLOzhCQUFJOzs7Ozs7Ozs7OzswQkFHbEIsOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNaLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1osOERBQUNHOzRCQUFFSCxXQUFVOzs7Ozs7c0NBQ2IsOERBQUNJOzRCQUNFQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaTixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLbkIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLENBQUNYLFdBQ0VDLENBQUFBLDhCQUNFLDhEQUFDaUI7b0JBQ0VQLFdBQVU7b0JBQ1ZRLFNBQVNoQjs4QkFDWDs7Ozs7OENBRUQ7O3NDQUNHLDhEQUFDVCxrREFBSUE7NEJBQUNtQixNQUFLOzRCQUFTRixXQUFVO3NDQUF5RTs7Ozs7O3NDQUl2Ryw4REFBQ2pCLGtEQUFJQTs0QkFBQ21CLE1BQUs7NEJBQVlGLFdBQVU7c0NBQXNEOzs7Ozs7O2dDQUk1Rjs7Ozs7Ozs7Ozs7O0FBTWhCO0dBekRNWjs7UUFDOEJGLHVEQUFZQTtRQUM1QkQsMERBQWVBOzs7S0FGN0JHO0FBMkROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdkJhci50c3g/ZDllYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXV0aERpc3BhdGNoLCB1c2VBdXRoU3RhdGUgfSBmcm9tICcuLi9jb250ZXh0L2F1dGgnO1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcbmNvbnN0IE5hdkJhcjpSZWFjdC5GQyA9ICgpID0+IHtcbiAgIGNvbnN0IHtsb2FkaW5nLCBhdXRoZW50aWNhdGVkfSA9IHVzZUF1dGhTdGF0ZSgpO1xuICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBdXRoRGlzcGF0Y2goKVxuICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgICAgdHJ5e1xuICAgICAgICAgQXhpb3MucG9zdChcIi9hdXRoL2xvZ291dFwiKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgZGlzcGF0Y2goXCJMT0dPVVRcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgfSlcbiAgICAgIH1jYXRjaChlKSB7XG4gICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZUxvZ291dFwiLGUpXG4gICAgICB9XG4gICB9XG5cbiAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LXgtMCB0b3AtMCB6LTEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoLTE2IHB4LTUgYmctd2hpdGVcIj5cbiAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5JYW48L0xpbms+XG4gICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctZnVsbCBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGJnLWdyYXktMTAwIGJvcmRlciByb3VuZGVkIGhvdmVyOmJvcmRlci1ncmF5LTcwMCBob3ZlcjpiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGwtNCBwci0zIHRleHQtZ3JheS00MDAgZmFzIGZhLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0xIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgIHshbG9hZGluZyAmJlxuICAgICAgICAgICAgICAgKGF1dGhlbnRpY2F0ZWQgPyAoXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTIwIHAtMiBtci0yIHRleHQtY2VudGVyIHRleHQtd2hpdGUgYmctZ3JheS00MDAgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XG4gICAgICAgICAgICAgICAgICA+66Gc6re47JWE7JuDPC9idXR0b24+XG4gICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9XCJ3LTIwIHAtMiBtci0yIHRleHQtY2VudGVyIHRleHQtYmx1ZS01MDAgYm9yZGVyIGJvcmRlci1ibHVlLTUwMCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDroZzqt7jsnbhcbiAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiIGNsYXNzTmFtZT1cInctMjAgcC0yIHRleHQtY2VudGVyIHRleHQtd2hpdGUgYmctZ3JheS00MDAgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg7ZqM7JuQ6rCA7J6FXG4gICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VBdXRoRGlzcGF0Y2giLCJ1c2VBdXRoU3RhdGUiLCJBeGlvcyIsIk5hdkJhciIsImxvYWRpbmciLCJhdXRoZW50aWNhdGVkIiwiZGlzcGF0Y2giLCJoYW5kbGVMb2dvdXQiLCJwb3N0IiwidGhlbiIsImNhdGNoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiaHJlZiIsImkiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavBar.tsx\n"));

/***/ })

});