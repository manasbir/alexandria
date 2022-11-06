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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_IPublicLock_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/IPublicLock.json */ \"./public/IPublicLock.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Book() {\n    _s();\n    let isOwner = 0;\n    const NFT_ADDRESS = \"0x0315988e4031b9f1cc1d5720b86ee9822b04bd5b\";\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    //connect wallet:\n    const connectWallet = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                alert(\"Get MetaMask -> https://metamask.io/\");\n                return;\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(\"Connected\", accounts[0]);\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const checkIfWalletIsConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"Make sure you have metamask!\");\n            return;\n        } else {\n            console.log(\"We have the ethereum object\", ethereum);\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethereum);\n            const signer = provider.getSigner();\n            const connectedContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(NFT_ADDRESS, _public_IPublicLock_json__WEBPACK_IMPORTED_MODULE_2__.abi, signer);\n            const nft = await connectedContract.ownerOf(id);\n            console.log(currentAccount);\n            if (nft == currentAccount) {\n                isOwner = 1;\n            } else {\n                alert(\"You do not have access to this book\");\n            }\n        }\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        if (accounts.length !== 0) {\n            const account = accounts[0];\n            console.log(\"Found an authorized account:\", account);\n            setCurrentAccount(account);\n        } else {\n            console.log(\"No authorized account found\");\n        }\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    let id = router.query.id;\n    let book;\n    if (id == 6) {\n        book = \"http://160592857366.free.fr/joe/ebooks/ShareData/The%20Republic%20by%20Plato.pdf\" // plato the republic\n        ;\n    } else if (id == 7) {\n        book = \"https://www.marcuswitcher.com/Euripides,%20Medea-1.pdf\" // medea\n        ;\n    } else if (id == 8) {\n        book = \"https://www.boyle.kyschools.us/UserFiles/88/The%20Odyssey.pdf\" // odyssey\n        ;\n    } else if (id == 9) {\n        book = \"https://www.gutenberg.org/files/6130/old/6130-pdf.pdf\" // iliad\n        ;\n    } else if (id == 10) {\n        book = \"https://www.gutenberg.org/cache/epub/28/pg28-images.html\" // aesop fable\n        ;\n    } else if (id > 11) {\n        id = 6;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    opacity: isOwner ? 0 : 1\n                },\n                children: \"YOU DO NOT HAVE ACCESS\"\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                src: book,\n                style: {\n                    opacity: isOwner\n                }\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n        lineNumber: 87,\n        columnNumber: 9\n    }, this);\n}\n_s(Book, \"Xc3PZO6QVO/InMJQ/Y0UMIv41q0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Book;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ib29rL1tpZF0uanM/MGQ5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSVB1YmxpY0xvY2sgZnJvbSBcIi4uLy4uL3B1YmxpYy9JUHVibGljTG9jay5qc29uXCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcblxuXG5cbmZ1bmN0aW9uIEJvb2soKSAge1xuXG4gICAgbGV0IGlzT3duZXIgPSAwO1xuICAgIGNvbnN0IE5GVF9BRERSRVNTID0gXCIweDAzMTU5ODhlNDAzMWI5ZjFjYzFkNTcyMGI4NmVlOTgyMmIwNGJkNWJcIjtcbiAgICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKCcnKTtcblxuLy9jb25uZWN0IHdhbGxldDpcbmNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblxuICAgICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgICBhbGVydChcIkdldCBNZXRhTWFzayAtPiBodHRwczovL21ldGFtYXNrLmlvL1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xuICAgIFxuICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWRcIiwgYWNjb3VudHNbMF0pO1xuICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICBcbiAgY29uc3QgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblxuICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdNYWtlIHN1cmUgeW91IGhhdmUgbWV0YW1hc2shJyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1dlIGhhdmUgdGhlIGV0aGVyZXVtIG9iamVjdCcsIGV0aGVyZXVtKTtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pO1xuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgY29uc3QgY29ubmVjdGVkQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KE5GVF9BRERSRVNTLCBJUHVibGljTG9jay5hYmksIHNpZ25lcik7XG4gICAgICAgIGNvbnN0IG5mdCA9IGF3YWl0IGNvbm5lY3RlZENvbnRyYWN0Lm93bmVyT2YoaWQpOyBcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudEFjY291bnQpXG4gICAgICAgIGlmIChuZnQgPT0gY3VycmVudEFjY291bnQpIHtcbiAgICAgICAgICAgIGlzT3duZXIgPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJZb3UgZG8gbm90IGhhdmUgYWNjZXNzIHRvIHRoaXMgYm9va1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9hY2NvdW50cycgfSk7XG5cbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICBjb25zb2xlLmxvZygnRm91bmQgYW4gYXV0aG9yaXplZCBhY2NvdW50OicsIGFjY291bnQpO1xuICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBhdXRob3JpemVkIGFjY291bnQgZm91bmQnKTtcbiAgICB9XG4gIH07XG4gICAgXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBsZXQgaWQgPSByb3V0ZXIucXVlcnkuaWRcbiAgICBsZXQgYm9vaztcbiAgICBpZiAoaWQgPT0gNikge1xuICAgICAgICBib29rID0gXCJodHRwOi8vMTYwNTkyODU3MzY2LmZyZWUuZnIvam9lL2Vib29rcy9TaGFyZURhdGEvVGhlJTIwUmVwdWJsaWMlMjBieSUyMFBsYXRvLnBkZlwiIC8vIHBsYXRvIHRoZSByZXB1YmxpY1xuICAgIH0gZWxzZSBpZiAoaWQgPT0gNykge1xuICAgICAgICBib29rID0gXCJodHRwczovL3d3dy5tYXJjdXN3aXRjaGVyLmNvbS9FdXJpcGlkZXMsJTIwTWVkZWEtMS5wZGZcIiAvLyBtZWRlYVxuICAgIH0gZWxzZSBpZiAoaWQgPT0gOCkge1xuICAgICAgICBib29rID0gXCJodHRwczovL3d3dy5ib3lsZS5reXNjaG9vbHMudXMvVXNlckZpbGVzLzg4L1RoZSUyME9keXNzZXkucGRmXCIgLy8gb2R5c3NleVxuICAgIH0gZWxzZSBpZiAoaWQgPT0gOSkge1xuICAgICAgICBib29rID0gXCJodHRwczovL3d3dy5ndXRlbmJlcmcub3JnL2ZpbGVzLzYxMzAvb2xkLzYxMzAtcGRmLnBkZlwiIC8vIGlsaWFkXG4gICAgfSBlbHNlIGlmIChpZCA9PSAxMCkge1xuICAgICAgICBib29rID0gXCJodHRwczovL3d3dy5ndXRlbmJlcmcub3JnL2NhY2hlL2VwdWIvMjgvcGcyOC1pbWFnZXMuaHRtbFwiIC8vIGFlc29wIGZhYmxlXG4gICAgfSBlbHNlIGlmIChpZCA+IDExKSB7XG4gICAgICAgIGlkID0gNjtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCgpO1xuXHR9LCBbXSlcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGgxIHN0eWxlPXt7XG4gICAgICAgICAgICBvcGFjaXR5IDogaXNPd25lciA/IDAgOiAxXG4gICAgICAgIH19PlxuICAgICAgICAgICAgWU9VIERPIE5PVCBIQVZFIEFDQ0VTU1xuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxpZnJhbWUgc3JjPXtib29rfSBzdHlsZT17e29wYWNpdHk6IGlzT3duZXJ9fT48L2lmcmFtZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rO1xuXG5cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJJUHVibGljTG9jayIsImV0aGVycyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm9vayIsImlzT3duZXIiLCJORlRfQUREUkVTUyIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJjb25uZWN0V2FsbGV0IiwiZXRoZXJldW0iLCJ3aW5kb3ciLCJhbGVydCIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY29ubmVjdGVkQ29udHJhY3QiLCJDb250cmFjdCIsImFiaSIsIm5mdCIsIm93bmVyT2YiLCJpZCIsImxlbmd0aCIsImFjY291bnQiLCJyb3V0ZXIiLCJxdWVyeSIsImJvb2siLCJkaXYiLCJoMSIsInN0eWxlIiwib3BhY2l0eSIsImlmcmFtZSIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/book/[id].js\n"));

/***/ })

});