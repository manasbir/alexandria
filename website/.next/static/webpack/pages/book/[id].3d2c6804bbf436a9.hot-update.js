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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Book = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const id = router.query.id;\n    let book;\n    if (id == 1) {\n        book = \"http://160592857366.free.fr/joe/ebooks/ShareData/The%20Republic%20by%20Plato.pdf\" // plato the republic\n        ;\n    } else if (id == 2) {\n        book = \"https://www.marcuswitcher.com/Euripides,%20Medea-1.pdf\" // medea\n        ;\n    } else if (id == 3) {\n        book = \"https://www.boyle.kyschools.us/UserFiles/88/The%20Odyssey.pdf\" // odyssey\n        ;\n    } else if (id == 4) {\n        book = \"https://www.gutenberg.org/files/6130/old/6130-pdf.pdf\" // iliad\n        ;\n    } else if (id == 5) {\n        book = \"https://www.gutenberg.org/cache/epub/28/pg28-images.html\" // \n        ;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color: \"black\"\n                },\n                children: [\n                    \"this is book\",\n                    id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                src: book\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Book, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Book;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib29rL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBcUM7QUFFckMsTUFBTUMsT0FBTyxJQUFNOztJQUVmLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNRyxLQUFLRCxPQUFPRSxLQUFLLENBQUNELEVBQUU7SUFDMUIsSUFBSUU7SUFDSixJQUFJRixNQUFNLEdBQUc7UUFDVEUsT0FBTyxtRkFBbUYscUJBQXFCOztJQUNuSCxPQUFPLElBQUlGLE1BQU0sR0FBRztRQUNoQkUsT0FBTyx5REFBeUQsUUFBUTs7SUFDNUUsT0FBTyxJQUFJRixNQUFNLEdBQUc7UUFDaEJFLE9BQU8sZ0VBQWdFLFVBQVU7O0lBQ3JGLE9BQU8sSUFBSUYsTUFBTSxHQUFHO1FBQ2hCRSxPQUFPLHdEQUF3RCxRQUFROztJQUMzRSxPQUFPLElBQUlGLE1BQU0sR0FBRztRQUNoQkUsT0FBTywyREFBMkQsR0FBRzs7SUFDekUsQ0FBQztJQUNELHFCQUNJLDhEQUFDQzs7MEJBQ0QsOERBQUNDO2dCQUFHQyxPQUFPO29CQUNQQyxPQUFPO2dCQUNYOztvQkFBRztvQkFDY047Ozs7Ozs7MEJBR2pCLDhEQUFDTztnQkFBT0MsS0FBTU47Ozs7Ozs7Ozs7OztBQUd0QjtHQTNCTUo7O1FBRWFELGtEQUFTQTs7O0tBRnRCQztBQTZCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ib29rL1tpZF0uanM/MGQ5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IEJvb2sgPSAoKSA9PiB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5LmlkXG4gICAgbGV0IGJvb2s7XG4gICAgaWYgKGlkID09IDEpIHtcbiAgICAgICAgYm9vayA9IFwiaHR0cDovLzE2MDU5Mjg1NzM2Ni5mcmVlLmZyL2pvZS9lYm9va3MvU2hhcmVEYXRhL1RoZSUyMFJlcHVibGljJTIwYnklMjBQbGF0by5wZGZcIiAvLyBwbGF0byB0aGUgcmVwdWJsaWNcbiAgICB9IGVsc2UgaWYgKGlkID09IDIpIHtcbiAgICAgICAgYm9vayA9IFwiaHR0cHM6Ly93d3cubWFyY3Vzd2l0Y2hlci5jb20vRXVyaXBpZGVzLCUyME1lZGVhLTEucGRmXCIgLy8gbWVkZWFcbiAgICB9IGVsc2UgaWYgKGlkID09IDMpIHtcbiAgICAgICAgYm9vayA9IFwiaHR0cHM6Ly93d3cuYm95bGUua3lzY2hvb2xzLnVzL1VzZXJGaWxlcy84OC9UaGUlMjBPZHlzc2V5LnBkZlwiIC8vIG9keXNzZXlcbiAgICB9IGVsc2UgaWYgKGlkID09IDQpIHtcbiAgICAgICAgYm9vayA9IFwiaHR0cHM6Ly93d3cuZ3V0ZW5iZXJnLm9yZy9maWxlcy82MTMwL29sZC82MTMwLXBkZi5wZGZcIiAvLyBpbGlhZFxuICAgIH0gZWxzZSBpZiAoaWQgPT0gNSkge1xuICAgICAgICBib29rID0gXCJodHRwczovL3d3dy5ndXRlbmJlcmcub3JnL2NhY2hlL2VwdWIvMjgvcGcyOC1pbWFnZXMuaHRtbFwiIC8vIFxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxoMSBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6ICdibGFjaydcbiAgICAgICAgfX0+XG4gICAgICAgICAgICB0aGlzIGlzIGJvb2t7aWR9XG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPGlmcmFtZSBzcmM9IHtib29rfT48L2lmcmFtZT5cbiAgICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vaztcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJCb29rIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImJvb2siLCJkaXYiLCJoMSIsInN0eWxlIiwiY29sb3IiLCJpZnJhbWUiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/book/[id].js\n"));

/***/ })

});