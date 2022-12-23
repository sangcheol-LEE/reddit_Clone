"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/r/[sub]/[identifier]/[slug]",{

/***/ "./src/pages/r/[sub]/[identifier]/[slug].tsx":
/*!***************************************************!*\
  !*** ./src/pages/r/[sub]/[identifier]/[slug].tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../context/auth */ \"./src/context/auth.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst PostPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { identifier , sub , slug  } = router.query;\n    const { authenticated , user  } = (0,_context_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState)();\n    const [newComment, setNewComment] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { data: post , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(identifier && slug ? \"/posts/\".concat(identifier, \"/\").concat(slug) : null);\n    const submitComment = async (req, res)=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex max-w-5xl px-4 pt-5 mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full md:mr-3 md:w-8/12\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded\",\n                children: post && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"py-2 pr-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-xs test-gray-400\",\n                                            children: [\n                                                \"Posted by\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                    href: \"/u/\".concat(post.username),\n                                                    className: \"mx-1 hover:underline\",\n                                                    children: [\n                                                        \"/u/\",\n                                                        post.username\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                    lineNumber: 33,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                    href: post.url,\n                                                    className: \"mx-1 hover:underline\",\n                                                    children: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(post.createdAt).format(\"YYYY-MM-DD HH:mm\")\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 34\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 31\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"my-1 text-xl font-medium\",\n                                        children: post.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 31\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"my-3 text-sm\",\n                                        children: post.body\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 31\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"mr-1 fas fa-comment-alt fa-xs\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-bold\",\n                                                    children: [\n                                                        post.commentCount,\n                                                        \" Comments\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 34\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 31\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                lineNumber: 29,\n                                columnNumber: 28\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pl-10 pr-6 mg-4\",\n                            children: authenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mb-1 text-xs\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                className: \"font-semibold text-blue-500\",\n                                                href: \"/u/\".concat(user === null || user === void 0 ? void 0 : user.username),\n                                                children: user === null || user === void 0 ? void 0 : user.username\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 40\n                                            }, undefined),\n                                            \" \",\n                                            \"으로 댓글 작성\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                className: \"w-full p-3 border-gray-300 rounded focus:outline-none focus:border-gray-600\",\n                                                onChange: (e)=>setNewComment(e.target.value),\n                                                value: newComment\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 40\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex justify-end\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"px-3 py-1 text-white bg-gray-400 rounded\",\n                                                    disabled: newComment.trim() === \"\",\n                                                    children: \"댓글 작성\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 43\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 40\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 37\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                lineNumber: 58,\n                                columnNumber: 34\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between px-2 py-4 border border-gray-200 rounded\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-semibold text-gray-400\",\n                                        children: \"댓글 작성을 위해서 로그인 해주세요\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"/login\",\n                                            className: \"px-3 py-1 text-white bg-gray-400 rounded\",\n                                            children: \"로그인\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 40\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 37\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                lineNumber: 82,\n                                columnNumber: 34\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                            lineNumber: 55,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n            lineNumber: 23,\n            columnNumber: 10\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n        lineNumber: 22,\n        columnNumber: 7\n    }, undefined);\n};\n_s(PostPage, \"f/tgKm0ZRXKDmotRzKn2kogyYXM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _context_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = PostPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPage);\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvci9bc3ViXS9baWRlbnRpZmllcl0vW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ0g7QUFFWjtBQUVJO0FBQ0g7QUFDOEI7QUFFeEQsTUFBTU8sV0FBVyxJQUFNOztJQUNwQixNQUFNQyxTQUFTUixzREFBU0E7SUFDeEIsTUFBTSxFQUFDUyxXQUFVLEVBQUVDLElBQUcsRUFBR0MsS0FBSSxFQUFDLEdBQUdILE9BQU9JLEtBQUs7SUFDN0MsTUFBTSxFQUFDQyxjQUFhLEVBQUNDLEtBQUksRUFBQyxHQUFHUiwyREFBWUE7SUFDekMsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU0sRUFBQ2UsTUFBT0MsS0FBSSxFQUFFQyxNQUFLLEVBQUMsR0FBR2hCLCtDQUFNQSxDQUFPTSxjQUFjRSxPQUFPLFVBQXdCQSxPQUFkRixZQUFXLEtBQVEsT0FBTEUsUUFBUyxJQUFJO0lBRXBHLE1BQU1TLGdCQUFnQixPQUFNQyxLQUFhQyxNQUFrQixDQUUzRDtJQUNBLHFCQUNHLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNaLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFFVE4sc0JBQ0c7O3NDQUNHLDhEQUFDSzs0QkFBSUMsV0FBVTtzQ0FDWiw0RUFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNaLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFDWiw0RUFBQ0M7NENBQUVELFdBQVU7O2dEQUF3Qjs4REFFbEMsOERBQUNwQixrREFBSUE7b0RBQUNzQixNQUFNLE1BQW9CLE9BQWRSLEtBQUtTLFFBQVE7b0RBQUlILFdBQVU7O3dEQUF1Qjt3REFDN0ROLEtBQUtTLFFBQVE7Ozs7Ozs7OERBRXBCLDhEQUFDdkIsa0RBQUlBO29EQUFDc0IsTUFBTVIsS0FBS1UsR0FBRztvREFBRUosV0FBVTs4REFDNUJuQiw0Q0FBS0EsQ0FBQ2EsS0FBS1csU0FBUyxFQUFFQyxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUl2Qyw4REFBQ0M7d0NBQUdQLFdBQVU7a0RBQTRCTixLQUFLYyxLQUFLOzs7Ozs7a0RBQ3BELDhEQUFDUDt3Q0FBRUQsV0FBVTtrREFBZ0JOLEtBQUtlLElBQUk7Ozs7OztrREFDdEMsOERBQUNWO3dDQUFJQyxXQUFVO2tEQUNaLDRFQUFDVTs7OERBQ0UsOERBQUNDO29EQUFFWCxXQUFVOzs7Ozs7OERBQ2IsOERBQUNZO29EQUFLWixXQUFVOzt3REFDWk4sS0FBS21CLFlBQVk7d0RBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQVFsQyw4REFBQ2Q7NEJBQUlDLFdBQVU7c0NBRVRYLDhCQUNHLDhEQUFDVTs7a0RBQ0UsOERBQUNFO3dDQUFFRCxXQUFVOzswREFDViw4REFBQ3BCLGtEQUFJQTtnREFBQ29CLFdBQVU7Z0RBQThCRSxNQUFNLE1BQXFCLE9BQWZaLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTWEsUUFBUTswREFDcEViLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTWEsUUFBUTs7Ozs7OzRDQUVqQjs0Q0FBSTs7Ozs7OztrREFFUiw4REFBQ1c7OzBEQUNFLDhEQUFDQztnREFDRWYsV0FBVTtnREFDVmdCLFVBQVUsQ0FBQ0MsSUFBTXpCLGNBQWN5QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0RBQzdDQSxPQUFPNUI7Ozs7OzswREFFViw4REFBQ1E7Z0RBQUlDLFdBQVU7MERBQ1osNEVBQUNVO29EQUNFVixXQUFVO29EQUNWb0IsVUFBVTdCLFdBQVc4QixJQUFJLE9BQU87OERBQ2xDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBEQU9WLDhEQUFDdEI7Z0NBQUlDLFdBQVU7O2tEQUNaLDhEQUFDQzt3Q0FDRUQsV0FBVTtrREFDWjs7Ozs7O2tEQUdELDhEQUFDRDtrREFDRSw0RUFBQ25CLGtEQUFJQTs0Q0FBQ3NCLE1BQU07NENBQVVGLFdBQVU7c0RBQTJDOzs7Ozs7Ozs7Ozs7Ozs7O3lDQUtuRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXL0I7R0EvRk1qQjs7UUFDWVAsa0RBQVNBO1FBRUtNLHVEQUFZQTtRQUdaSCwyQ0FBTUE7OztLQU5oQ0k7QUFpR04sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3IvW3N1Yl0vW2lkZW50aWZpZXJdL1tzbHVnXS50c3g/OWMxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb250ZXh0L2F1dGgnO1xuXG5jb25zdCBQb3N0UGFnZSA9ICgpID0+IHtcbiAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICBjb25zdCB7aWRlbnRpZmllciwgc3ViICwgc2x1Z30gPSByb3V0ZXIucXVlcnlcbiAgIGNvbnN0IHthdXRoZW50aWNhdGVkLHVzZXJ9ID0gdXNlQXV0aFN0YXRlKCk7XG4gICBjb25zdCBbbmV3Q29tbWVudCwgc2V0TmV3Q29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgY29uc3Qge2RhdGEgOiBwb3N0LCBlcnJvcn0gPSB1c2VTV1I8UG9zdD4oaWRlbnRpZmllciAmJiBzbHVnID8gYC9wb3N0cy8ke2lkZW50aWZpZXJ9LyR7c2x1Z31gIDogbnVsbCk7XG5cbiAgIGNvbnN0IHN1Ym1pdENvbW1lbnQgPSBhc3luYyhyZXE6IFJlcXVlc3QscmVzOiBSZXNwb25zZSkgPT4ge1xuXG4gICB9XG4gICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1heC13LTV4bCBweC00IHB0LTUgbXgtYXV0b1wiPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6bXItMyBtZDp3LTgvMTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcG9zdCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgcHItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXN0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3N0ZWQgYnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdS8ke3Bvc3QudXNlcm5hbWV9YH0gY2xhc3NOYW1lPVwibXgtMSBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC91L3twb3N0LnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cG9zdC51cmx9IGNsYXNzTmFtZT1cIm14LTEgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF5anMocG9zdC5jcmVhdGVkQXQpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW1cIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJteS0xIHRleHQteGwgZm9udC1tZWRpdW1cIj57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktMyB0ZXh0LXNtXCI+e3Bvc3QuYm9keX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtci0xIGZhcyBmYS1jb21tZW50LWFsdCBmYS14c1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuY29tbWVudENvdW50fSBDb21tZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDrjJPquIAg7J6R7ISxIOq1rOqwhCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMTAgcHItNiBtZy00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTEgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWJsdWUtNTAwXCIgaHJlZj17YC91LyR7dXNlcj8udXNlcm5hbWV9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcj8udXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ97Jy866GcIOuMk+q4gCDsnpHshLFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMyBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q29tbWVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q29tbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTEgdGV4dC13aGl0ZSBiZy1ncmF5LTQwMCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtuZXdDb21tZW50LnRyaW0oKSA9PT0gXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOuMk+q4gCDsnpHshLFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC0yIHB5LTQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOuMk+q4gCDsnpHshLHsnYQg7JyE7ZW07IScIOuhnOq3uOyduCDtlbTso7zshLjsmpRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9sb2dpblwifSBjbGFzc05hbWU9XCJweC0zIHB5LTEgdGV4dC13aGl0ZSBiZy1ncmF5LTQwMCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDroZzqt7jsnbhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RQYWdlXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVNXUiIsIkxpbmsiLCJkYXlqcyIsInVzZUF1dGhTdGF0ZSIsIlBvc3RQYWdlIiwicm91dGVyIiwiaWRlbnRpZmllciIsInN1YiIsInNsdWciLCJxdWVyeSIsImF1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwibmV3Q29tbWVudCIsInNldE5ld0NvbW1lbnQiLCJkYXRhIiwicG9zdCIsImVycm9yIiwic3VibWl0Q29tbWVudCIsInJlcSIsInJlcyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJocmVmIiwidXNlcm5hbWUiLCJ1cmwiLCJjcmVhdGVkQXQiLCJmb3JtYXQiLCJoMSIsInRpdGxlIiwiYm9keSIsImJ1dHRvbiIsImkiLCJzcGFuIiwiY29tbWVudENvdW50IiwiZm9ybSIsInRleHRhcmVhIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXNhYmxlZCIsInRyaW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/r/[sub]/[identifier]/[slug].tsx\n"));

/***/ })

});