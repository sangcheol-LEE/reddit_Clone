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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../context/auth */ \"./src/context/auth.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst PostPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { identifier , sub , slug  } = router.query;\n    const { authenticated , user  } = (0,_context_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState)();\n    const [newComment, setNewComment] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { data: post , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(identifier && slug ? \"/posts/\".concat(identifier, \"/\").concat(slug) : null);\n    const { data: comments  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(identifier && slug ? \"/posts/\".concat(identifier, \"/\").concat(slug, \"/comments\") : null);\n    const submitComment = async (e)=>{\n        e.preventDefault();\n        if (newComment.trim() === \"\") {\n            return;\n        }\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"/posts/\".concat(post === null || post === void 0 ? void 0 : post.identifier, \"/\").concat(post === null || post === void 0 ? void 0 : post.slug, \"/comments\"), {\n                body: newComment\n            });\n            setNewComment(\"\");\n        } catch (e1) {\n            console.log(\"submitComment\", e1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex max-w-5xl px-4 pt-5 mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full md:mr-3 md:w-8/12\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded\",\n                children: post && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"py-2 pr-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-xs test-gray-400\",\n                                            children: [\n                                                \"Posted by\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                    href: \"/u/\".concat(post.username),\n                                                    className: \"mx-1 hover:underline\",\n                                                    children: [\n                                                        \"/u/\",\n                                                        post.username\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                    href: post.url,\n                                                    className: \"mx-1 hover:underline\",\n                                                    children: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(post.createdAt).format(\"YYYY-MM-DD HH:mm\")\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 34\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 31\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"my-1 text-xl font-medium\",\n                                        children: post.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 31\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"my-3 text-sm\",\n                                        children: post.body\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 31\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"mr-1 fas fa-comment-alt fa-xs\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-bold\",\n                                                    children: [\n                                                        post.commentCount,\n                                                        \" Comments\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 34\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 31\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                lineNumber: 44,\n                                columnNumber: 28\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                            lineNumber: 43,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pr-6 mg-4\",\n                            children: authenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mb-1 text-xs\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                className: \"font-semibold text-blue-500\",\n                                                href: \"/u/\".concat(user === null || user === void 0 ? void 0 : user.username),\n                                                children: user === null || user === void 0 ? void 0 : user.username\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 40\n                                            }, undefined),\n                                            \" \",\n                                            \"으로 댓글 작성\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                        onSubmit: submitComment,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                className: \"w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600\",\n                                                onChange: (e)=>setNewComment(e.target.value),\n                                                value: newComment\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 40\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex justify-end\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"px-3 py-1 text-white bg-gray-400 rounded\",\n                                                    disabled: newComment.trim() === \"\",\n                                                    children: \"댓글 작성\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 43\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 40\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 37\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                lineNumber: 73,\n                                columnNumber: 34\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between px-2 py-4 border border-gray-200 rounded\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-semibold text-gray-400\",\n                                        children: \"댓글 작성을 위해서 로그인 해주세요\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"/login\",\n                                            className: \"px-3 py-1 text-white bg-gray-400 rounded\",\n                                            children: \"로그인\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                            lineNumber: 104,\n                                            columnNumber: 40\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 37\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                                lineNumber: 97,\n                                columnNumber: 34\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                            lineNumber: 70,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n            lineNumber: 38,\n            columnNumber: 10\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/r/[sub]/[identifier]/[slug].tsx\",\n        lineNumber: 37,\n        columnNumber: 7\n    }, undefined);\n};\n_s(PostPage, \"esYkLn8LdhvlJczfRf4pRpfGFIQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _context_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = PostPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPage);\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvci9bc3ViXS9baWRlbnRpZmllcl0vW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNRO0FBQ3RCO0FBQ0Q7QUFFSTtBQUNIO0FBQzhCO0FBRXhELE1BQU1RLFdBQVcsSUFBTTs7SUFDcEIsTUFBTUMsU0FBU1Qsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBQ1UsV0FBVSxFQUFFQyxJQUFHLEVBQUdDLEtBQUksRUFBQyxHQUFHSCxPQUFPSSxLQUFLO0lBQzdDLE1BQU0sRUFBQ0MsY0FBYSxFQUFDQyxLQUFJLEVBQUMsR0FBR1IsMkRBQVlBO0lBQ3pDLE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNLEVBQUNnQixNQUFPQyxLQUFJLEVBQUVDLE1BQUssRUFBQyxHQUFHaEIsK0NBQU1BLENBQU9NLGNBQWNFLE9BQU8sVUFBd0JBLE9BQWRGLFlBQVcsS0FBUSxPQUFMRSxRQUFTLElBQUk7SUFDcEcsTUFBTSxFQUFDTSxNQUFNRyxTQUFRLEVBQUMsR0FBR2pCLCtDQUFNQSxDQUM1Qk0sY0FBY0UsT0FBTyxVQUF3QkEsT0FBZEYsWUFBVyxLQUFRLE9BQUxFLE1BQUssZUFBYSxJQUFJO0lBRXRFLE1BQU1VLGdCQUFnQixPQUFNQyxJQUFrQjtRQUMzQ0EsRUFBRUMsY0FBYztRQUNoQixJQUFHUixXQUFXUyxJQUFJLE9BQU8sSUFBSztZQUMzQjtRQUNILENBQUM7UUFFRCxJQUFHO1lBQ0EsTUFBTXRCLGtEQUFVLENBQUMsVUFBOEJnQixPQUFwQkEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNVCxVQUFVLEVBQUMsS0FBYyxPQUFYUyxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1QLElBQUksRUFBQyxjQUFZO2dCQUNuRWMsTUFBT1Y7WUFDVjtZQUNBQyxjQUFjO1FBQ2pCLEVBQUMsT0FBTU0sSUFBRztZQUNQSSxRQUFRQyxHQUFHLENBQUMsaUJBQWdCTDtRQUMvQjtJQUVIO0lBQ0EscUJBQ0csOERBQUNNO1FBQUlDLFdBQVU7a0JBQ1osNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1osNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUVUWCxzQkFDRzs7c0NBQ0csOERBQUNVOzRCQUFJQyxXQUFVO3NDQUNaLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1osOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNaLDRFQUFDQzs0Q0FBRUQsV0FBVTs7Z0RBQXdCOzhEQUVsQyw4REFBQ3pCLGtEQUFJQTtvREFBQzJCLE1BQU0sTUFBb0IsT0FBZGIsS0FBS2MsUUFBUTtvREFBSUgsV0FBVTs7d0RBQXVCO3dEQUM3RFgsS0FBS2MsUUFBUTs7Ozs7Ozs4REFFcEIsOERBQUM1QixrREFBSUE7b0RBQUMyQixNQUFNYixLQUFLZSxHQUFHO29EQUFFSixXQUFVOzhEQUM1QnhCLDRDQUFLQSxDQUFDYSxLQUFLZ0IsU0FBUyxFQUFFQyxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUl2Qyw4REFBQ0M7d0NBQUdQLFdBQVU7a0RBQTRCWCxLQUFLbUIsS0FBSzs7Ozs7O2tEQUNwRCw4REFBQ1A7d0NBQUVELFdBQVU7a0RBQWdCWCxLQUFLTyxJQUFJOzs7Ozs7a0RBQ3RDLDhEQUFDRzt3Q0FBSUMsV0FBVTtrREFDWiw0RUFBQ1M7OzhEQUNFLDhEQUFDQztvREFBRVYsV0FBVTs7Ozs7OzhEQUNiLDhEQUFDVztvREFBS1gsV0FBVTs7d0RBQ1pYLEtBQUt1QixZQUFZO3dEQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FRbEMsOERBQUNiOzRCQUFJQyxXQUFVO3NDQUVUaEIsOEJBQ0csOERBQUNlOztrREFDRSw4REFBQ0U7d0NBQUVELFdBQVU7OzBEQUNWLDhEQUFDekIsa0RBQUlBO2dEQUFDeUIsV0FBVTtnREFBOEJFLE1BQU0sTUFBcUIsT0FBZmpCLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTWtCLFFBQVE7MERBQ3BFbEIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNa0IsUUFBUTs7Ozs7OzRDQUVqQjs0Q0FBSTs7Ozs7OztrREFFUiw4REFBQ1U7d0NBQUtDLFVBQVV0Qjs7MERBQ2IsOERBQUN1QjtnREFDRWYsV0FBVTtnREFDVmdCLFVBQVUsQ0FBQ3ZCLElBQU1OLGNBQWNNLEVBQUV3QixNQUFNLENBQUNDLEtBQUs7Z0RBQzdDQSxPQUFPaEM7Ozs7OzswREFFViw4REFBQ2E7Z0RBQUlDLFdBQVU7MERBQ1osNEVBQUNTO29EQUNFVCxXQUFVO29EQUNWbUIsVUFBVWpDLFdBQVdTLElBQUksT0FBTzs4REFDbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBT1YsOERBQUNJO2dDQUFJQyxXQUFVOztrREFDWiw4REFBQ0M7d0NBQ0VELFdBQVU7a0RBQ1o7Ozs7OztrREFHRCw4REFBQ0Q7a0RBQ0UsNEVBQUN4QixrREFBSUE7NENBQUMyQixNQUFNOzRDQUFVRixXQUFVO3NEQUEyQzs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FLbkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVy9CO0dBOUdNdEI7O1FBQ1lSLGtEQUFTQTtRQUVLTyx1REFBWUE7UUFHWkgsMkNBQU1BO1FBQ1ZBLDJDQUFNQTs7O0tBUDVCSTtBQWdITiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvci9bc3ViXS9baWRlbnRpZmllcl0vW3NsdWddLnRzeD85YzFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCx7Rm9ybUV2ZW50LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgUG9zdCxDb21tZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb250ZXh0L2F1dGgnO1xuXG5jb25zdCBQb3N0UGFnZSA9ICgpID0+IHtcbiAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICBjb25zdCB7aWRlbnRpZmllciwgc3ViICwgc2x1Z30gPSByb3V0ZXIucXVlcnlcbiAgIGNvbnN0IHthdXRoZW50aWNhdGVkLHVzZXJ9ID0gdXNlQXV0aFN0YXRlKCk7XG4gICBjb25zdCBbbmV3Q29tbWVudCwgc2V0TmV3Q29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgY29uc3Qge2RhdGEgOiBwb3N0LCBlcnJvcn0gPSB1c2VTV1I8UG9zdD4oaWRlbnRpZmllciAmJiBzbHVnID8gYC9wb3N0cy8ke2lkZW50aWZpZXJ9LyR7c2x1Z31gIDogbnVsbCk7XG4gICBjb25zdCB7ZGF0YTogY29tbWVudHN9ID0gdXNlU1dSPENvbW1lbnRbXT4oXG4gICAgICBpZGVudGlmaWVyICYmIHNsdWcgPyBgL3Bvc3RzLyR7aWRlbnRpZmllcn0vJHtzbHVnfS9jb21tZW50c2AgOiBudWxsXG4gICApXG4gICBjb25zdCBzdWJtaXRDb21tZW50ID0gYXN5bmMoZSA6IEZvcm1FdmVudCkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYobmV3Q29tbWVudC50cmltKCkgPT09IFwiXCIgKSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRyeXtcbiAgICAgICAgIGF3YWl0IEF4aW9zLnBvc3QoYC9wb3N0cy8ke3Bvc3Q/LmlkZW50aWZpZXJ9LyR7cG9zdD8uc2x1Z30vY29tbWVudHNgLCB7XG4gICAgICAgICAgICBib2R5IDogbmV3Q29tbWVudFxuICAgICAgICAgfSlcbiAgICAgICAgIHNldE5ld0NvbW1lbnQoXCJcIik7XG4gICAgICB9Y2F0Y2goZSkge1xuICAgICAgICAgY29uc29sZS5sb2coXCJzdWJtaXRDb21tZW50XCIsZSlcbiAgICAgIH1cblxuICAgfVxuICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYXgtdy01eGwgcHgtNCBwdC01IG14LWF1dG9cIj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOm1yLTMgbWQ6dy04LzEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBvc3QgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIHByLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGVzdC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9zdGVkIGJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3UvJHtwb3N0LnVzZXJuYW1lfWB9IGNsYXNzTmFtZT1cIm14LTEgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvdS97cG9zdC51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Bvc3QudXJsfSBjbGFzc05hbWU9XCJteC0xIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RheWpzKHBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXktMSB0ZXh0LXhsIGZvbnQtbWVkaXVtXCI+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTMgdGV4dC1zbVwiPntwb3N0LmJvZHl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibXItMSBmYXMgZmEtY29tbWVudC1hbHQgZmEteHNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmNvbW1lbnRDb3VudH0gQ29tbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog64yT6riAIOyekeyEsSDqtazqsIQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByLTYgbWctNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0xIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ibHVlLTUwMFwiIGhyZWY9e2AvdS8ke3VzZXI/LnVzZXJuYW1lfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXI/LnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifeycvOuhnCDrjJPquIAg7J6R7ISxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0Q29tbWVudH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTMgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDb21tZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDb21tZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcHktMSB0ZXh0LXdoaXRlIGJnLWdyYXktNDAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e25ld0NvbW1lbnQudHJpbSgpID09PSBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg64yT6riAIOyekeyEsVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTIgcHktNCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS00MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg64yT6riAIOyekeyEseydhCDsnITtlbTshJwg66Gc6re47J24IO2VtOyjvOyEuOyalFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2xvZ2luXCJ9IGNsYXNzTmFtZT1cInB4LTMgcHktMSB0ZXh0LXdoaXRlIGJnLWdyYXktNDAwIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOuhnOq3uOyduFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFBhZ2VcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiQXhpb3MiLCJ1c2VTV1IiLCJMaW5rIiwiZGF5anMiLCJ1c2VBdXRoU3RhdGUiLCJQb3N0UGFnZSIsInJvdXRlciIsImlkZW50aWZpZXIiLCJzdWIiLCJzbHVnIiwicXVlcnkiLCJhdXRoZW50aWNhdGVkIiwidXNlciIsIm5ld0NvbW1lbnQiLCJzZXROZXdDb21tZW50IiwiZGF0YSIsInBvc3QiLCJlcnJvciIsImNvbW1lbnRzIiwic3VibWl0Q29tbWVudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJib2R5IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJocmVmIiwidXNlcm5hbWUiLCJ1cmwiLCJjcmVhdGVkQXQiLCJmb3JtYXQiLCJoMSIsInRpdGxlIiwiYnV0dG9uIiwiaSIsInNwYW4iLCJjb21tZW50Q291bnQiLCJmb3JtIiwib25TdWJtaXQiLCJ0ZXh0YXJlYSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/r/[sub]/[identifier]/[slug].tsx\n"));

/***/ })

});