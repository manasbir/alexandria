"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/book/[id]",{

/***/ "./pages/book/[id].js":
/*!****************************!*\
  !*** ./pages/book/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Book = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const id = router.query.id;\n    let book;\n    if (id == 1) {\n        book = \"http://160592857366.free.fr/joe/ebooks/ShareData/The%20Republic%20by%20Plato.pdf\" // plato the republic\n        ;\n    } else if (id == 2) {\n        book = \"https://www.marcuswitcher.com/Euripides,%20Medea-1.pdf\" // medea\n        ;\n    } else if (id == 3) {\n        book = \"https://www.boyle.kyschools.us/UserFiles/88/The%20Odyssey.pdf\" // odyssey\n        ;\n    } else if (id == 4) {\n        book = \"https://www.gutenberg.org/files/6130/old/6130-pdf.pdf\" //\n        ;\n    } else if (id == 5) {\n        book = \"https://www.marcuswitcher.com/Euripides,%20Medea-5.pdf\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color: \"black\"\n                },\n                children: [\n                    \"this is book\",\n                    id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                src: book\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Book, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Book;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib29rL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBcUM7QUFFckMsTUFBTUMsT0FBTyxJQUFNOztJQUVmLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNRyxLQUFLRCxPQUFPRSxLQUFLLENBQUNELEVBQUU7SUFDMUIsSUFBSUU7SUFDSixJQUFJRixNQUFNLEdBQUc7UUFDVEUsT0FBTyxtRkFBbUYscUJBQXFCOztJQUNuSCxPQUFPLElBQUlGLE1BQU0sR0FBRztRQUNoQkUsT0FBTyx5REFBeUQsUUFBUTs7SUFDNUUsT0FBTyxJQUFJRixNQUFNLEdBQUc7UUFDaEJFLE9BQU8sZ0VBQWdFLFVBQVU7O0lBQ3JGLE9BQU8sSUFBSUYsTUFBTSxHQUFHO1FBQ2hCRSxPQUFPLHdEQUF3RCxFQUFFOztJQUNyRSxPQUFPLElBQUlGLE1BQU0sR0FBRztRQUNoQkUsT0FBTztJQUNYLENBQUM7SUFDRCxxQkFDSSw4REFBQ0M7OzBCQUNELDhEQUFDQztnQkFBR0MsT0FBTztvQkFDUEMsT0FBTztnQkFDWDs7b0JBQUc7b0JBQ2NOOzs7Ozs7OzBCQUdqQiw4REFBQ087Z0JBQU9DLEtBQU1OOzs7Ozs7Ozs7Ozs7QUFHdEI7R0EzQk1KOztRQUVhRCxrREFBU0E7OztLQUZ0QkM7QUE2Qk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9vay9baWRdLmpzPzBkOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBCb29rID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeS5pZFxuICAgIGxldCBib29rO1xuICAgIGlmIChpZCA9PSAxKSB7XG4gICAgICAgIGJvb2sgPSBcImh0dHA6Ly8xNjA1OTI4NTczNjYuZnJlZS5mci9qb2UvZWJvb2tzL1NoYXJlRGF0YS9UaGUlMjBSZXB1YmxpYyUyMGJ5JTIwUGxhdG8ucGRmXCIgLy8gcGxhdG8gdGhlIHJlcHVibGljXG4gICAgfSBlbHNlIGlmIChpZCA9PSAyKSB7XG4gICAgICAgIGJvb2sgPSBcImh0dHBzOi8vd3d3Lm1hcmN1c3dpdGNoZXIuY29tL0V1cmlwaWRlcywlMjBNZWRlYS0xLnBkZlwiIC8vIG1lZGVhXG4gICAgfSBlbHNlIGlmIChpZCA9PSAzKSB7XG4gICAgICAgIGJvb2sgPSBcImh0dHBzOi8vd3d3LmJveWxlLmt5c2Nob29scy51cy9Vc2VyRmlsZXMvODgvVGhlJTIwT2R5c3NleS5wZGZcIiAvLyBvZHlzc2V5XG4gICAgfSBlbHNlIGlmIChpZCA9PSA0KSB7XG4gICAgICAgIGJvb2sgPSBcImh0dHBzOi8vd3d3Lmd1dGVuYmVyZy5vcmcvZmlsZXMvNjEzMC9vbGQvNjEzMC1wZGYucGRmXCIgLy9cbiAgICB9IGVsc2UgaWYgKGlkID09IDUpIHtcbiAgICAgICAgYm9vayA9IFwiaHR0cHM6Ly93d3cubWFyY3Vzd2l0Y2hlci5jb20vRXVyaXBpZGVzLCUyME1lZGVhLTUucGRmXCJcbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aDEgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snXG4gICAgICAgIH19PlxuICAgICAgICAgICAgdGhpcyBpcyBib29re2lkfVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxpZnJhbWUgc3JjPSB7Ym9va30+PC9pZnJhbWU+XG4gICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2s7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiQm9vayIsInJvdXRlciIsImlkIiwicXVlcnkiLCJib29rIiwiZGl2IiwiaDEiLCJzdHlsZSIsImNvbG9yIiwiaWZyYW1lIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/book/[id].js\n"));

/***/ })

});