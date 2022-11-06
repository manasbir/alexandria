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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pdftest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pdftest */ \"./pages/pdftest.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-pdf */ \"react-pdf\");\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_pdf__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Book = ()=>{\n    const [numPages, setNumPages] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [pageNumber, setPageNumber] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    function onDocumentLoadSuccess({ numPages  }) {\n        setNumPages(numPages);\n    }\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const id = router.query.id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color: \"black\"\n                },\n                children: [\n                    \"this is book\",\n                    id\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\siron\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\book\\\\[id].js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_4__.Document, {\n                file: \"somefile.pdf\",\n                onLoadSuccess: onDocumentLoadSuccess,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_4__.Page, {\n                    pageNumber: pageNumber\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\siron\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\book\\\\[id].js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\siron\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\book\\\\[id].js\",\n                lineNumber: 27,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Page \",\n                    pageNumber,\n                    \" of \",\n                    numPages\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\siron\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\book\\\\[id].js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\siron\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\book\\\\[id].js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Book);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib29rL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXFDO0FBQ1Q7QUFDWTtBQUNHO0FBRTNDLE1BQU1NLE9BQU8sSUFBTTtJQUVmLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzdDLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUvQyxTQUFTUSxzQkFBc0IsRUFBRUosU0FBUSxFQUFFLEVBQUU7UUFDM0NDLFlBQVlEO0lBQ2Q7SUFFRSxNQUFNSyxTQUFTWixzREFBU0E7SUFDeEIsTUFBTWEsS0FBS0QsT0FBT0UsS0FBSyxDQUFDRCxFQUFFO0lBQzFCLHFCQUNJLDhEQUFDRTs7MEJBQ0QsOERBQUNDO2dCQUFHQyxPQUFPO29CQUNQQyxPQUFPO2dCQUNYOztvQkFBRztvQkFDY0w7Ozs7Ozs7MEJBS3pCLDhEQUFDVCwrQ0FBUUE7Z0JBQUNlLE1BQUs7Z0JBQWVDLGVBQWVUOzBCQUNyQyw0RUFBQ04sMkNBQUlBO29CQUFDSSxZQUFZQTs7Ozs7Ozs7Ozs7MEJBRXBCLDhEQUFDWTs7b0JBQUU7b0JBQ0taO29CQUFXO29CQUFLRjs7Ozs7Ozs7Ozs7OztBQU05QjtBQUdBLGlFQUFlRCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL3BhZ2VzL2Jvb2svW2lkXS5qcz8wZDlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFBkZiBmcm9tICcuLi9wZGZ0ZXN0J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERvY3VtZW50LCBQYWdlIH0gZnJvbSAncmVhY3QtcGRmJztcclxuXHJcbmNvbnN0IEJvb2sgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW251bVBhZ2VzLCBzZXROdW1QYWdlc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtwYWdlTnVtYmVyLCBzZXRQYWdlTnVtYmVyXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICBmdW5jdGlvbiBvbkRvY3VtZW50TG9hZFN1Y2Nlc3MoeyBudW1QYWdlcyB9KSB7XHJcbiAgICBzZXROdW1QYWdlcyhudW1QYWdlcyk7XHJcbiAgfVxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeS5pZFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHRoaXMgaXMgYm9va3tpZH1cclxuICAgICAgICA8L2gxPlxyXG57LyogXHJcbjxEb2N1bWVudCBzcmM9XCJodHRwczovL3d3dy5ndXRlbmJlcmcub3JnL2ZpbGVzLzYxMzAvb2xkLzYxMzAtcGRmLnBkZlwiPjwvRG9jdW1lbnQ+ICovfVxyXG5cclxuPERvY3VtZW50IGZpbGU9XCJzb21lZmlsZS5wZGZcIiBvbkxvYWRTdWNjZXNzPXtvbkRvY3VtZW50TG9hZFN1Y2Nlc3N9PlxyXG4gICAgICAgIDxQYWdlIHBhZ2VOdW1iZXI9e3BhZ2VOdW1iZXJ9IC8+XHJcbiAgICAgIDwvRG9jdW1lbnQ+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFBhZ2Uge3BhZ2VOdW1iZXJ9IG9mIHtudW1QYWdlc31cclxuICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9vazsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUGRmIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRvY3VtZW50IiwiUGFnZSIsIkJvb2siLCJudW1QYWdlcyIsInNldE51bVBhZ2VzIiwicGFnZU51bWJlciIsInNldFBhZ2VOdW1iZXIiLCJvbkRvY3VtZW50TG9hZFN1Y2Nlc3MiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGl2IiwiaDEiLCJzdHlsZSIsImNvbG9yIiwiZmlsZSIsIm9uTG9hZFN1Y2Nlc3MiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/book/[id].js\n");

/***/ }),

/***/ "./pages/pdftest.js":
/*!**************************!*\
  !*** ./pages/pdftest.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Pdf = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n        src: \"/English.pdf\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\siron\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\pdftest.js\",\n        lineNumber: 3,\n        columnNumber: 7\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pdf);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wZGZ0ZXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUEsTUFBTUEsTUFBTSxJQUFNO0lBQ2QscUJBQ0UsOERBQUNDO1FBQU9DLEtBQUk7Ozs7OztBQUVoQjtBQUVGLGlFQUFlRixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL3BhZ2VzL3BkZnRlc3QuanM/ODI3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQZGYgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8aWZyYW1lIHNyYz0nL0VuZ2xpc2gucGRmJyAvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBkZjsiXSwibmFtZXMiOlsiUGRmIiwiaWZyYW1lIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/pdftest.js\n");

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