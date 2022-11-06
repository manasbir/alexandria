"use strict";
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
exports.id = "pages/book/[id]";
exports.ids = ["pages/book/[id]"];
exports.modules = {

/***/ "./pages/book/[id].js":
/*!****************************!*\
  !*** ./pages/book/[id].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pdf */ \"react-pdf\");\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pdf__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Book = ()=>{\n    const [numPages, setNumPages] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [pageNumber, setPageNumber] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    function onDocumentLoadSuccess({ numPages  }) {\n        setNumPages(numPages);\n    }\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const id = router.query.id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_2__.Document, {\n                file: \"./The Republic by Plato.pdf\",\n                onLoadSuccess: onDocumentLoadSuccess,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_2__.Page, {\n                    pageNumber: pageNumber\n                }, void 0, false, {\n                    fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Page \",\n                    pageNumber,\n                    \" of \",\n                    numPages\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Book);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib29rL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBcUM7QUFDTTtBQUNIO0FBRXhDLE1BQU1LLE9BQU8sSUFBTTtJQUVmLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzdDLE1BQU0sQ0FBQ0ksWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUM3QyxTQUFTTSxzQkFBc0IsRUFBRUosU0FBUSxFQUFFLEVBQUU7UUFDekNDLFlBQVlEO0lBQ2hCO0lBQ0EsTUFBTUssU0FBU1gsc0RBQVNBO0lBQ3hCLE1BQU1ZLEtBQUtELE9BQU9FLEtBQUssQ0FBQ0QsRUFBRTtJQUMxQixxQkFDSSw4REFBQ0U7OzBCQUNHLDhEQUFDYiwrQ0FBUUE7Z0JBQUNjLE1BQUs7Z0JBQThCQyxlQUFlTjswQkFDeEQsNEVBQUNSLDJDQUFJQTtvQkFBQ00sWUFBWUE7Ozs7Ozs7Ozs7OzBCQUV0Qiw4REFBQ1M7O29CQUFFO29CQUNPVDtvQkFBVztvQkFBS0Y7Ozs7Ozs7Ozs7Ozs7QUFNdEM7QUFFQSxpRUFBZUQsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnNpdGUvLi9wYWdlcy9ib29rL1tpZF0uanM/MGQ5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBEb2N1bWVudCwgUGFnZSB9IGZyb20gJ3JlYWN0LXBkZic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEJvb2sgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbbnVtUGFnZXMsIHNldE51bVBhZ2VzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtwYWdlTnVtYmVyLCBzZXRQYWdlTnVtYmVyXSA9IHVzZVN0YXRlKDEpO1xuICAgIGZ1bmN0aW9uIG9uRG9jdW1lbnRMb2FkU3VjY2Vzcyh7IG51bVBhZ2VzIH0pIHtcbiAgICAgICAgc2V0TnVtUGFnZXMobnVtUGFnZXMpO1xuICAgIH1cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5LmlkXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPERvY3VtZW50IGZpbGU9XCIuL1RoZSBSZXB1YmxpYyBieSBQbGF0by5wZGZcIiBvbkxvYWRTdWNjZXNzPXtvbkRvY3VtZW50TG9hZFN1Y2Nlc3N9PlxuICAgICAgICAgICAgICAgIDxQYWdlIHBhZ2VOdW1iZXI9e3BhZ2VOdW1iZXJ9IC8+XG4gICAgICAgICAgICA8L0RvY3VtZW50PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgUGFnZSB7cGFnZU51bWJlcn0gb2Yge251bVBhZ2VzfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vazsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiRG9jdW1lbnQiLCJQYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJvb2siLCJudW1QYWdlcyIsInNldE51bVBhZ2VzIiwicGFnZU51bWJlciIsInNldFBhZ2VOdW1iZXIiLCJvbkRvY3VtZW50TG9hZFN1Y2Nlc3MiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGl2IiwiZmlsZSIsIm9uTG9hZFN1Y2Nlc3MiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/book/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-pdf":
/*!****************************!*\
  !*** external "react-pdf" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-pdf");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/book/[id].js"));
module.exports = __webpack_exports__;

})();