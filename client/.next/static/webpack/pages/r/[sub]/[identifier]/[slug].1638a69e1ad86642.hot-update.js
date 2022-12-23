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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../context/auth */ \"./src/context/auth.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst PostPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { identifier , sub , slug  } = router.query;\n    const { authenticated , user  } = (0,_context_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState)();\n    const [newComment, setNewComment] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { data: post , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(identifier && slug ? \"/posts/\".concat(identifier, \"/\").concat(slug) : null);\n    const submitComment = async (e)=>{\n        e.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex max-w-5xl px-4 pt-5 mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full md:mr-3 md:w-8/12\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded\",\n                children: post && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"py-2 pr-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-xs test-gray-400\",\n                                            children: [\n                                                \"Posted by\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                    href: \"/u/\".concat(post.username),\n                                                    className: \"mx-1 hover:underline\",\n                                                    children: [\n                                                        \"/u/\",\n                                                        post.username\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                    lineNumber: 34,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                    href: post.url,\n                                                    className: \"mx-1 hover:underline\",\n                                                    children: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(post.createdAt).format(\"YYYY-MM-DD HH:mm\")\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 34\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 31\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"my-1 text-xl font-medium\",\n                                        children: post.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 31\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"my-3 text-sm\",\n                                        children: post.body\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 31\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"mr-1 fas fa-comment-alt fa-xs\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-bold\",\n                                                    children: [\n                                                        post.commentCount,\n                                                        \" Comments\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 34\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 31\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                lineNumber: 30,\n                                columnNumber: 28\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                            lineNumber: 29,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pr-6 mg-4\",\n                            children: authenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mb-1 text-xs\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                className: \"font-semibold text-blue-500\",\n                                                href: \"/u/\".concat(user === null || user === void 0 ? void 0 : user.username),\n                                                children: user === null || user === void 0 ? void 0 : user.username\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 40\n                                            }, undefined),\n                                            \" \",\n                                            \"으로 댓글 작성\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                        onSubmit: submitComment,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                className: \"w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600\",\n                                                onChange: (e)=>setNewComment(e.target.value),\n                                                value: newComment\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 40\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex justify-end\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"px-3 py-1 text-white bg-gray-400 rounded\",\n                                                    disabled: newComment.trim() === \"\",\n                                                    children: \"댓글 작성\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 43\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 40\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 37\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                lineNumber: 59,\n                                columnNumber: 34\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between px-2 py-4 border border-gray-200 rounded\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-semibold text-gray-400\",\n                                        children: \"댓글 작성을 위해서 로그인 해주세요\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"/login\",\n                                            className: \"px-3 py-1 text-white bg-gray-400 rounded\",\n                                            children: \"로그인\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 40\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 37\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                lineNumber: 83,\n                                columnNumber: 34\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                            lineNumber: 56,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n            lineNumber: 24,\n            columnNumber: 10\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n        lineNumber: 23,\n        columnNumber: 7\n    }, undefined);\n};\n_s(PostPage, \"f/tgKm0ZRXKDmotRzKn2kogyYXM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _context_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = PostPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPage);\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvci9bc3ViXS9baWRlbnRpZmllcl0vW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ1E7QUFFdkI7QUFFSTtBQUNIO0FBQzhCO0FBRXhELE1BQU1PLFdBQVcsSUFBTTs7SUFDcEIsTUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLE1BQU0sRUFBQ1MsV0FBVSxFQUFFQyxJQUFHLEVBQUdDLEtBQUksRUFBQyxHQUFHSCxPQUFPSSxLQUFLO0lBQzdDLE1BQU0sRUFBQ0MsY0FBYSxFQUFDQyxLQUFJLEVBQUMsR0FBR1IsMkRBQVlBO0lBQ3pDLE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNLEVBQUNlLE1BQU9DLEtBQUksRUFBRUMsTUFBSyxFQUFDLEdBQUdoQiwrQ0FBTUEsQ0FBT00sY0FBY0UsT0FBTyxVQUF3QkEsT0FBZEYsWUFBVyxLQUFRLE9BQUxFLFFBQVMsSUFBSTtJQUVwRyxNQUFNUyxnQkFBZ0IsT0FBTUMsSUFBa0I7UUFDM0NBLEVBQUVDLGNBQWM7SUFFbkI7SUFDQSxxQkFDRyw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBRVROLHNCQUNHOztzQ0FDRyw4REFBQ0s7NEJBQUlDLFdBQVU7c0NBQ1osNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDWiw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ1osNEVBQUNDOzRDQUFFRCxXQUFVOztnREFBd0I7OERBRWxDLDhEQUFDcEIsa0RBQUlBO29EQUFDc0IsTUFBTSxNQUFvQixPQUFkUixLQUFLUyxRQUFRO29EQUFJSCxXQUFVOzt3REFBdUI7d0RBQzdETixLQUFLUyxRQUFROzs7Ozs7OzhEQUVwQiw4REFBQ3ZCLGtEQUFJQTtvREFBQ3NCLE1BQU1SLEtBQUtVLEdBQUc7b0RBQUVKLFdBQVU7OERBQzVCbkIsNENBQUtBLENBQUNhLEtBQUtXLFNBQVMsRUFBRUMsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztrREFJdkMsOERBQUNDO3dDQUFHUCxXQUFVO2tEQUE0Qk4sS0FBS2MsS0FBSzs7Ozs7O2tEQUNwRCw4REFBQ1A7d0NBQUVELFdBQVU7a0RBQWdCTixLQUFLZSxJQUFJOzs7Ozs7a0RBQ3RDLDhEQUFDVjt3Q0FBSUMsV0FBVTtrREFDWiw0RUFBQ1U7OzhEQUNFLDhEQUFDQztvREFBRVgsV0FBVTs7Ozs7OzhEQUNiLDhEQUFDWTtvREFBS1osV0FBVTs7d0RBQ1pOLEtBQUttQixZQUFZO3dEQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FRbEMsOERBQUNkOzRCQUFJQyxXQUFVO3NDQUVUWCw4QkFDRyw4REFBQ1U7O2tEQUNFLDhEQUFDRTt3Q0FBRUQsV0FBVTs7MERBQ1YsOERBQUNwQixrREFBSUE7Z0RBQUNvQixXQUFVO2dEQUE4QkUsTUFBTSxNQUFxQixPQUFmWixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1hLFFBQVE7MERBQ3BFYixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1hLFFBQVE7Ozs7Ozs0Q0FFakI7NENBQUk7Ozs7Ozs7a0RBRVIsOERBQUNXO3dDQUFLQyxVQUFVbkI7OzBEQUNiLDhEQUFDb0I7Z0RBQ0VoQixXQUFVO2dEQUNWaUIsVUFBVSxDQUFDcEIsSUFBTUwsY0FBY0ssRUFBRXFCLE1BQU0sQ0FBQ0MsS0FBSztnREFDN0NBLE9BQU81Qjs7Ozs7OzBEQUVWLDhEQUFDUTtnREFBSUMsV0FBVTswREFDWiw0RUFBQ1U7b0RBQ0VWLFdBQVU7b0RBQ1ZvQixVQUFVN0IsV0FBVzhCLElBQUksT0FBTzs4REFDbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBT1YsOERBQUN0QjtnQ0FBSUMsV0FBVTs7a0RBQ1osOERBQUNDO3dDQUNFRCxXQUFVO2tEQUNaOzs7Ozs7a0RBR0QsOERBQUNEO2tEQUNFLDRFQUFDbkIsa0RBQUlBOzRDQUFDc0IsTUFBTTs0Q0FBVUYsV0FBVTtzREFBMkM7Ozs7Ozs7Ozs7Ozs7Ozs7eUNBS25GOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVcvQjtHQWhHTWpCOztRQUNZUCxrREFBU0E7UUFFS00sdURBQVlBO1FBR1pILDJDQUFNQTs7O0tBTmhDSTtBQWtHTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvci9bc3ViXS9baWRlbnRpZmllcl0vW3NsdWddLnRzeD85YzFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCx7Rm9ybUV2ZW50LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uLy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGV4dC9hdXRoJztcblxuY29uc3QgUG9zdFBhZ2UgPSAoKSA9PiB7XG4gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgY29uc3Qge2lkZW50aWZpZXIsIHN1YiAsIHNsdWd9ID0gcm91dGVyLnF1ZXJ5XG4gICBjb25zdCB7YXV0aGVudGljYXRlZCx1c2VyfSA9IHVzZUF1dGhTdGF0ZSgpO1xuICAgY29uc3QgW25ld0NvbW1lbnQsIHNldE5ld0NvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgIGNvbnN0IHtkYXRhIDogcG9zdCwgZXJyb3J9ID0gdXNlU1dSPFBvc3Q+KGlkZW50aWZpZXIgJiYgc2x1ZyA/IGAvcG9zdHMvJHtpZGVudGlmaWVyfS8ke3NsdWd9YCA6IG51bGwpO1xuXG4gICBjb25zdCBzdWJtaXRDb21tZW50ID0gYXN5bmMoZSA6IEZvcm1FdmVudCkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICB9XG4gICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1heC13LTV4bCBweC00IHB0LTUgbXgtYXV0b1wiPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6bXItMyBtZDp3LTgvMTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcG9zdCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgcHItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXN0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3N0ZWQgYnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdS8ke3Bvc3QudXNlcm5hbWV9YH0gY2xhc3NOYW1lPVwibXgtMSBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC91L3twb3N0LnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cG9zdC51cmx9IGNsYXNzTmFtZT1cIm14LTEgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF5anMocG9zdC5jcmVhdGVkQXQpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW1cIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJteS0xIHRleHQteGwgZm9udC1tZWRpdW1cIj57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktMyB0ZXh0LXNtXCI+e3Bvc3QuYm9keX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtci0xIGZhcyBmYS1jb21tZW50LWFsdCBmYS14c1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuY29tbWVudENvdW50fSBDb21tZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDrjJPquIAg7J6R7ISxIOq1rOqwhCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItNiBtZy00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTEgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWJsdWUtNTAwXCIgaHJlZj17YC91LyR7dXNlcj8udXNlcm5hbWV9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcj8udXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ97Jy866GcIOuMk+q4gCDsnpHshLFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRDb21tZW50fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NvbW1lbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NvbW1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0xIHRleHQtd2hpdGUgYmctZ3JheS00MDAgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bmV3Q29tbWVudC50cmltKCkgPT09IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDrjJPquIAg7J6R7ISxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMiBweS00IGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTQwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDrjJPquIAg7J6R7ISx7J2EIOychO2VtOyEnCDroZzqt7jsnbgg7ZW07KO87IS47JqUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvbG9naW5cIn0gY2xhc3NOYW1lPVwicHgtMyBweS0xIHRleHQtd2hpdGUgYmctZ3JheS00MDAgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg66Gc6re47J24XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0UGFnZVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VTV1IiLCJMaW5rIiwiZGF5anMiLCJ1c2VBdXRoU3RhdGUiLCJQb3N0UGFnZSIsInJvdXRlciIsImlkZW50aWZpZXIiLCJzdWIiLCJzbHVnIiwicXVlcnkiLCJhdXRoZW50aWNhdGVkIiwidXNlciIsIm5ld0NvbW1lbnQiLCJzZXROZXdDb21tZW50IiwiZGF0YSIsInBvc3QiLCJlcnJvciIsInN1Ym1pdENvbW1lbnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiaHJlZiIsInVzZXJuYW1lIiwidXJsIiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwiaDEiLCJ0aXRsZSIsImJvZHkiLCJidXR0b24iLCJpIiwic3BhbiIsImNvbW1lbnRDb3VudCIsImZvcm0iLCJvblN1Ym1pdCIsInRleHRhcmVhIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpc2FibGVkIiwidHJpbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/r/[sub]/[identifier]/[slug].tsx\n"));

/***/ })

});