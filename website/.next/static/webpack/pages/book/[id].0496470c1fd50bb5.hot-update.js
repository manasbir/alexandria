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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_IPublicLock_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/IPublicLock.json */ \"./public/IPublicLock.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Book() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    let id = router.query.id;\n    console.log(typeof id);\n    id = parseInt(id);\n    console.log(typeof id);\n    let book;\n    const NFT_ADDRESS = \"0x0315988e4031b9f1cc1d5720b86ee9822b04bd5b\";\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    //connect wallet:\n    const connectWallet = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                alert(\"Get MetaMask -> https://metamask.io/\");\n                return;\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(\"Connected\", accounts[0]);\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const checkIfWalletIsConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"Make sure you have metamask!\");\n            return;\n        } else {\n            console.log(\"We have the ethereum object\", ethereum);\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethereum);\n            const signer = provider.getSigner();\n            const connectedContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(NFT_ADDRESS, _public_IPublicLock_json__WEBPACK_IMPORTED_MODULE_2__.abi, signer);\n            const nft = await connectedContract.ownerOf(id);\n            console.log(\"curr acc: \" + currentAccount);\n            console.log(\"nft owner: \" + nft);\n            if (nft == currentAccount) {\n                setIsOwner(1);\n            } else {\n                alert(\"You do not have access to this book\");\n            }\n        }\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        if (accounts.length !== 0) {\n            const account = accounts[0];\n            console.log(\"Found an authorized account:\", account);\n            setCurrentAccount(account);\n        } else {\n            console.log(\"No authorized account found\");\n        }\n    };\n    if (id == 6) {\n        book = \"http://160592857366.free.fr/joe/ebooks/ShareData/The%20Republic%20by%20Plato.pdf\" // plato the republic\n        ;\n    } else if (id == 7) {\n        book = \"https://www.marcuswitcher.com/Euripides,%20Medea-1.pdf\" // medea\n        ;\n    } else if (id == 8) {\n        book = \"https://www.boyle.kyschools.us/UserFiles/88/The%20Odyssey.pdf\" // odyssey\n        ;\n    } else if (id == 9) {\n        book = \"https://www.gutenberg.org/files/6130/old/6130-pdf.pdf\" // iliad\n        ;\n    } else if (id == 10) {\n        book = \"https://www.gutenberg.org/cache/epub/28/pg28-images.html\" // aesop fable\n        ;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    opacity: isOwner ? 0 : 1\n                },\n                children: \"YOU DO NOT HAVE ACCESS\"\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                src: book,\n                style: {\n                    opacity: isOwner\n                }\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n        lineNumber: 90,\n        columnNumber: 9\n    }, this);\n}\n_s(Book, \"iGmlLpDdmyp7SUdM3Es0JuD/8MI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Book;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNNkIsT0FBTztvQkFBQ0MsU0FBUzFCO2dCQUFPOzs7Ozs7Ozs7Ozs7QUFHbkQ7R0E1RlNYOztRQUNVTCxrREFBU0E7OztLQURuQks7QUE4RlQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9vay9baWRdLmpzPzBkOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IElQdWJsaWNMb2NrIGZyb20gXCIuLi8uLi9wdWJsaWMvSVB1YmxpY0xvY2suanNvblwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5cblxuXG5mdW5jdGlvbiBCb29rKCkgIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBsZXQgaWQgPSByb3V0ZXIucXVlcnkuaWQ7XG4gICAgY29uc29sZS5sb2codHlwZW9mKGlkKSk7XG4gICAgaWQgPSBwYXJzZUludChpZCk7XG4gICAgY29uc29sZS5sb2codHlwZW9mKGlkKSk7XG4gICAgbGV0IGJvb2s7XG5cbiAgICBjb25zdCBORlRfQUREUkVTUyA9IFwiMHgwMzE1OTg4ZTQwMzFiOWYxY2MxZDU3MjBiODZlZTk4MjJiMDRiZDViXCI7XG4gICAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2lzT3duZXIsIHNldElzT3duZXJdID0gdXNlU3RhdGUoMCk7XG5cbi8vY29ubmVjdCB3YWxsZXQ6XG5jb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgYWxlcnQoXCJHZXQgTWV0YU1hc2sgLT4gaHR0cHM6Ly9tZXRhbWFzay5pby9cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcbiAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIsIGFjY291bnRzWzBdKTtcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgXG4gIGNvbnN0IGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICBjb25zb2xlLmxvZygnTWFrZSBzdXJlIHlvdSBoYXZlIG1ldGFtYXNrIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdXZSBoYXZlIHRoZSBldGhlcmV1bSBvYmplY3QnLCBldGhlcmV1bSk7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKTtcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChORlRfQUREUkVTUywgSVB1YmxpY0xvY2suYWJpLCBzaWduZXIpO1xuICAgICAgICBjb25zdCBuZnQgPSBhd2FpdCBjb25uZWN0ZWRDb250cmFjdC5vd25lck9mKGlkKTsgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VyciBhY2M6IFwiICsgY3VycmVudEFjY291bnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5mdCBvd25lcjogXCIgKyBuZnQpO1xuICAgICAgICBpZiAobmZ0ID09IGN1cnJlbnRBY2NvdW50KSB7XG4gICAgICAgICAgICBzZXRJc093bmVyKDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJZb3UgZG8gbm90IGhhdmUgYWNjZXNzIHRvIHRoaXMgYm9va1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9hY2NvdW50cycgfSk7XG5cbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICBjb25zb2xlLmxvZygnRm91bmQgYW4gYXV0aG9yaXplZCBhY2NvdW50OicsIGFjY291bnQpO1xuICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBhdXRob3JpemVkIGFjY291bnQgZm91bmQnKTtcbiAgICB9XG4gIH07XG5cbiAgICBcbiAgICBpZiAoaWQgPT0gNikge1xuICAgICAgICBib29rID0gXCJodHRwOi8vMTYwNTkyODU3MzY2LmZyZWUuZnIvam9lL2Vib29rcy9TaGFyZURhdGEvVGhlJTIwUmVwdWJsaWMlMjBieSUyMFBsYXRvLnBkZlwiIC8vIHBsYXRvIHRoZSByZXB1YmxpY1xuICAgIH0gZWxzZSBpZiAoaWQgPT0gNykge1xuICAgICAgICBib29rID0gXCJodHRwczovL3d3dy5tYXJjdXN3aXRjaGVyLmNvbS9FdXJpcGlkZXMsJTIwTWVkZWEtMS5wZGZcIiAvLyBtZWRlYVxuICAgIH0gZWxzZSBpZiAoaWQgPT0gOCkge1xuICAgICAgICBib29rID0gXCJodHRwczovL3d3dy5ib3lsZS5reXNjaG9vbHMudXMvVXNlckZpbGVzLzg4L1RoZSUyME9keXNzZXkucGRmXCIgLy8gb2R5c3NleVxuICAgIH0gZWxzZSBpZiAoaWQgPT0gOSkge1xuICAgICAgICBib29rID0gXCJodHRwczovL3d3dy5ndXRlbmJlcmcub3JnL2ZpbGVzLzYxMzAvb2xkLzYxMzAtcGRmLnBkZlwiIC8vIGlsaWFkXG4gICAgfSBlbHNlIGlmIChpZCA9PSAxMCkge1xuICAgICAgICBib29rID0gXCJodHRwczovL3d3dy5ndXRlbmJlcmcub3JnL2NhY2hlL2VwdWIvMjgvcGcyOC1pbWFnZXMuaHRtbFwiIC8vIGFlc29wIGZhYmxlXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblx0XHRjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQoKTtcblx0fSwgW10pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxoMSBzdHlsZT17e1xuICAgICAgICAgICAgb3BhY2l0eSA6IGlzT3duZXIgPyAwIDogMVxuICAgICAgICB9fT5cbiAgICAgICAgICAgIFlPVSBETyBOT1QgSEFWRSBBQ0NFU1NcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8aWZyYW1lIHNyYz17Ym9va30gc3R5bGU9e3tvcGFjaXR5OiBpc093bmVyfX0+PC9pZnJhbWU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vaztcblxuXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiSVB1YmxpY0xvY2siLCJldGhlcnMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJvb2siLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInBhcnNlSW50IiwiYm9vayIsIk5GVF9BRERSRVNTIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImlzT3duZXIiLCJzZXRJc093bmVyIiwiY29ubmVjdFdhbGxldCIsImV0aGVyZXVtIiwid2luZG93IiwiYWxlcnQiLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJlcnJvciIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY29ubmVjdGVkQ29udHJhY3QiLCJDb250cmFjdCIsImFiaSIsIm5mdCIsIm93bmVyT2YiLCJsZW5ndGgiLCJhY2NvdW50IiwiZGl2IiwiaDEiLCJzdHlsZSIsIm9wYWNpdHkiLCJpZnJhbWUiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/book/[id].js\n"));

/***/ })

});