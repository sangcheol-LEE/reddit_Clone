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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"DispatchContext\": () => (/* binding */ DispatchContext),\n/* harmony export */   \"StateContext\": () => (/* binding */ StateContext),\n/* harmony export */   \"useAuthDispatch\": () => (/* binding */ useAuthDispatch),\n/* harmony export */   \"useAuthState\": () => (/* binding */ useAuthState)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst StateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    authenticated: false,\n    user: undefined,\n    loading: true\n});\nconst DispatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst userReducer = (state, { type , payload  })=>{\n    switch(type){\n        case \"LOGIN\":\n            return {\n                ...state,\n                authenticated: true,\n                user: payload\n            };\n        case \"LOGOUT\":\n            return {\n                ...state,\n                authenticated: false,\n                user: undefined\n            };\n        case \"STOP_LOADING\":\n            return {\n                ...state,\n                loading: false\n            };\n        default:\n            throw new Error(`Unknown action type :${type}`);\n    }\n};\nconst AuthProvider = ({ children  })=>{\n    const [state, defaultDispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(userReducer, {\n        user: undefined,\n        authenticated: false,\n        loading: true\n    });\n    const dispatch = (type, payload)=>{\n        defaultDispatch({\n            type,\n            payload\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function loadUser() {\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/auth/me\");\n                dispatch(\"LOGIN\", response.data);\n            } catch (e) {\n                console.log(\"loadUser\", e);\n            } finally{\n                dispatch(\"STOP_LOADING\");\n            }\n        }\n        loadUser();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DispatchContext.Provider, {\n        value: dispatch,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StateContext.Provider, {\n            value: state,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/context/auth.tsx\",\n            lineNumber: 78,\n            columnNumber: 10\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/context/auth.tsx\",\n        lineNumber: 77,\n        columnNumber: 7\n    }, undefined);\n};\nconst useAuthState = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StateContext);\nconst useAuthDispatch = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DispatchContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hdXRoLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUU7QUFFL0M7QUFTbkIsTUFBTUssNkJBQWVMLG9EQUFhQSxDQUFRO0lBQzlDTSxlQUFnQixLQUFLO0lBQ3JCQyxNQUFPQztJQUNQQyxTQUFVLElBQUk7QUFDakIsR0FBRTtBQUVLLE1BQU1DLGdDQUFrQlYsb0RBQWFBLENBQU0sSUFBSSxFQUFFO0FBT3hELE1BQU1XLGNBQWMsQ0FBQ0MsT0FBYyxFQUFDQyxLQUFJLEVBQUNDLFFBQU8sRUFBUSxHQUFLO0lBQzFELE9BQU9EO1FBQ0osS0FBSztZQUNGLE9BQU87Z0JBQ0osR0FBR0QsS0FBSztnQkFDUk4sZUFBZ0IsSUFBSTtnQkFDcEJDLE1BQU9PO1lBQ1Y7UUFDSCxLQUFLO1lBQ0YsT0FBTztnQkFDSixHQUFHRixLQUFLO2dCQUNSTixlQUFnQixLQUFLO2dCQUNyQkMsTUFBT0M7WUFDVjtRQUNILEtBQUs7WUFDRixPQUFPO2dCQUNKLEdBQUdJLEtBQUs7Z0JBQ1JILFNBQVUsS0FBSztZQUNsQjtRQUNIO1lBQ0csTUFBTSxJQUFJTSxNQUFNLENBQUMscUJBQXFCLEVBQUVGLEtBQUssQ0FBQyxFQUFDO0lBQ3JEO0FBQ0g7QUFHTyxNQUFNRyxlQUFlLENBQUMsRUFBQ0MsU0FBUSxFQUErQixHQUFLO0lBRXZFLE1BQU0sQ0FBQ0wsT0FBT00sZ0JBQWdCLEdBQUdoQixpREFBVUEsQ0FBQ1MsYUFBYTtRQUN0REosTUFBTUM7UUFDTkYsZUFBZ0IsS0FBSztRQUNyQkcsU0FBVSxJQUFJO0lBQ2pCO0lBRUEsTUFBTVUsV0FBVyxDQUFDTixNQUFlQyxVQUFrQjtRQUNoREksZ0JBQWdCO1lBQUNMO1lBQU1DO1FBQU87SUFDakM7SUFFQVgsZ0RBQVNBLENBQUMsSUFBTTtRQUNiLGVBQWVpQixXQUFXO1lBQ3ZCLElBQUk7Z0JBQ0QsTUFBTUMsV0FBVyxNQUFNakIsaURBQVMsQ0FBQztnQkFDakNlLFNBQVMsU0FBU0UsU0FBU0UsSUFBSTtZQUNsQyxFQUFDLE9BQU1DLEdBQUc7Z0JBQ1BDLFFBQVFDLEdBQUcsQ0FBQyxZQUFXRjtZQUMxQixTQUFTO2dCQUNOTCxTQUFTO1lBQ1o7UUFDSDtRQUNBQztJQUNILEdBQUcsRUFBRTtJQUVMLHFCQUNHLDhEQUFDVixnQkFBZ0JpQixRQUFRO1FBQUNDLE9BQU9UO2tCQUM5Qiw0RUFBQ2QsYUFBYXNCLFFBQVE7WUFBQ0MsT0FBT2hCO3NCQUFRSzs7Ozs7Ozs7Ozs7QUFHL0MsRUFBQztBQUVNLE1BQU1ZLGVBQWUsSUFBTTVCLGlEQUFVQSxDQUFDSSxjQUFjO0FBQ3BELE1BQU15QixrQkFBa0IsSUFBTTdCLGlEQUFVQSxDQUFDUyxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29udGV4dC9hdXRoLnRzeD80ZWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vdHlwZXNcIlxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICAgYXV0aGVudGljYXRlZCA6IGJvb2xlYW4sXG4gICB1c2VyIDogVXNlciB8IHVuZGVmaW5lZCxcbiAgIGxvYWRpbmcgOiBib29sZWFuXG59XG5cblxuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U3RhdGU+KHtcbiAgIGF1dGhlbnRpY2F0ZWQgOiBmYWxzZSxcbiAgIHVzZXIgOiB1bmRlZmluZWQsXG4gICBsb2FkaW5nIDogdHJ1ZVxufSlcblxuZXhwb3J0IGNvbnN0IERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55PihudWxsKTtcblxuaW50ZXJmYWNlIEFjdGlvbiB7XG4gICB0eXBlOiBzdHJpbmcsXG4gICBwYXlsb2FkIDogYW55XG59XG5cbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlOiBTdGF0ZSwge3R5cGUscGF5bG9hZH06QWN0aW9uKSA9PiB7XG4gICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSBcIkxPR0lOXCIgOlxuICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgYXV0aGVudGljYXRlZCA6IHRydWUsXG4gICAgICAgICAgICB1c2VyIDogcGF5bG9hZCxcbiAgICAgICAgIH1cbiAgICAgIGNhc2UgXCJMT0dPVVRcIiA6XG4gICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhdXRoZW50aWNhdGVkIDogZmFsc2UsXG4gICAgICAgICAgICB1c2VyIDogdW5kZWZpbmVkLFxuICAgICAgICAgfVxuICAgICAgY2FzZSBcIlNUT1BfTE9BRElOR1wiIDpcbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGxvYWRpbmcgOiBmYWxzZVxuICAgICAgICAgfVxuICAgICAgZGVmYXVsdCA6XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gYWN0aW9uIHR5cGUgOiR7dHlwZX1gKVxuICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoe2NoaWxkcmVufSA6IHtjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlfSkgPT4ge1xuXG4gICBjb25zdCBbc3RhdGUsIGRlZmF1bHREaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHVzZXJSZWR1Y2VyLCB7XG4gICAgICB1c2VyOiB1bmRlZmluZWQsXG4gICAgICBhdXRoZW50aWNhdGVkIDogZmFsc2UsXG4gICAgICBsb2FkaW5nIDogdHJ1ZVxuICAgfSlcblxuICAgY29uc3QgZGlzcGF0Y2ggPSAodHlwZTogc3RyaW5nICwgcGF5bG9hZD86IGFueSkgPT4ge1xuICAgICAgZGVmYXVsdERpc3BhdGNoKHt0eXBlLCBwYXlsb2FkfSlcbiAgIH1cblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRVc2VyKCkge1xuICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MuZ2V0KFwiL2F1dGgvbWVcIik7XG4gICAgICAgICAgICBkaXNwYXRjaChcIkxPR0lOXCIsIHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICB9Y2F0Y2goZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkVXNlclwiLGUpXG4gICAgICAgICB9ZmluYWxseSB7XG4gICAgICAgICAgICBkaXNwYXRjaChcIlNUT1BfTE9BRElOR1wiKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxvYWRVc2VyKClcbiAgIH0sIFtdKVxuXG4gICByZXR1cm4gKFxuICAgICAgPERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxuICAgICAgICAgPFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PntjaGlsZHJlbn08L1N0YXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgIDwvRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aFN0YXRlID0gKCkgPT4gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xuZXhwb3J0IGNvbnN0IHVzZUF1dGhEaXNwYXRjaCA9ICgpID0+IHVzZUNvbnRleHQoRGlzcGF0Y2hDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJ1c2VFZmZlY3QiLCJBeGlvcyIsIlN0YXRlQ29udGV4dCIsImF1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwidW5kZWZpbmVkIiwibG9hZGluZyIsIkRpc3BhdGNoQ29udGV4dCIsInVzZXJSZWR1Y2VyIiwic3RhdGUiLCJ0eXBlIiwicGF5bG9hZCIsIkVycm9yIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkZWZhdWx0RGlzcGF0Y2giLCJkaXNwYXRjaCIsImxvYWRVc2VyIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aFN0YXRlIiwidXNlQXV0aERpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/auth.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/auth */ \"./src/context/auth.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, _context_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_2__, _context_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.baseURL = \"http://localhost:4000\" + \"/api\";\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.withCredentials = true;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_auth__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/reddit_clone/client/src/pages/_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 7\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBRUo7QUFDcUI7QUFDaEMsU0FBU0UsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlESiw4REFBc0IsR0FBR08sdUJBQXVDLEdBQUc7SUFDbkVQLHNFQUE4QixHQUFHLElBQUk7SUFDbkMscUJBQ0UsOERBQUNDLHVEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUloQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L2F1dGgnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgQXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFUlZFUl9CQVNFX1VSTCArIFwiL2FwaVwiO1xuICBBeGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIHJldHVybiAoXG4gICAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0F1dGhQcm92aWRlcj5cbiAgICApXG5cbn1cbiJdLCJuYW1lcyI6WyJBeGlvcyIsIkF1dGhQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TRVJWRVJfQkFTRV9VUkwiLCJ3aXRoQ3JlZGVudGlhbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

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