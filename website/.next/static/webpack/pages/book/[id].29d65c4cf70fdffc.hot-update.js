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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_IPublicLock_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/IPublicLock.json */ \"./public/IPublicLock.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Book() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    let id = router.query.id;\n    console.log(\"id:\", id);\n    let book;\n    const NFT_ADDRESS = \"0x0315988e4031b9f1cc1d5720b86ee9822b04bd5b\";\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    //connect wallet:\n    const connectWallet = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                alert(\"Get MetaMask -> https://metamask.io/\");\n                return;\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(\"Connected\", accounts[0]);\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const checkIfWalletIsConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"Make sure you have metamask!\");\n            return;\n        } else {\n            console.log(\"We have the ethereum object\", ethereum);\n        }\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        if (accounts.length !== 0) {\n            const account = accounts[0];\n            console.log(\"Found an authorized account:\", account);\n            setCurrentAccount(account);\n        } else {\n            console.log(\"No authorized account found\");\n        }\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethereum);\n        const signer = provider.getSigner();\n        const connectedContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(NFT_ADDRESS, _public_IPublicLock_json__WEBPACK_IMPORTED_MODULE_2__.abi, signer);\n        console.log(id);\n        const nft = await connectedContract.ownerOf(\"\".concat(id));\n        console.log(\"curr acc: \" + currentAccount);\n        console.log(\"nft owner: \" + nft);\n        if (nft.toLowerCase() == currentAccount.toLowerCase()) {\n            setIsOwner(1);\n            console.log(\"wokriing\");\n        } else {\n            alert(\"You do not have access to this book\");\n        }\n    };\n    if (id == 6) {\n        book = \"http://160592857366.free.fr/joe/ebooks/ShareData/The%20Republic%20by%20Plato.pdf\" // plato the republic\n        ;\n    } else if (id == 7) {\n        book = \"https://www.marcuswitcher.com/Euripides,%20Medea-1.pdf\" // medea\n        ;\n    } else if (id == 8) {\n        book = \"https://www.boyle.kyschools.us/UserFiles/88/The%20Odyssey.pdf\" // odyssey\n        ;\n    } else if (id == 9) {\n        book = \"https://www.gutenberg.org/files/6130/old/6130-pdf.pdf\" // iliad\n        ;\n    } else if (id == 10) {\n        book = \"https://www.gutenberg.org/cache/epub/28/pg28-images.html\" // aesop fable\n        ;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    opacity: isOwner ? 0 : 1\n                },\n                children: \"YOU DO NOT HAVE ACCESS\"\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                src: book,\n                style: {\n                    opacity: isOwner\n                }\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                lineNumber: 102,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n        lineNumber: 95,\n        columnNumber: 9\n    }, this);\n}\n_s(Book, \"iGmlLpDdmyp7SUdM3Es0JuD/8MI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Book;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlILDhEQUFDNEI7Z0JBQU9DLEtBQUtqQztnQkFBTThCLE9BQU87b0JBQUNDLFNBQVMzQjtnQkFBTzs7Ozs7Ozs7Ozs7O0FBR25EO0dBakdTVjs7UUFDVUwsa0RBQVNBOzs7S0FEbkJLO0FBbUdULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jvb2svW2lkXS5qcz8wZDlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBJUHVibGljTG9jayBmcm9tIFwiLi4vLi4vcHVibGljL0lQdWJsaWNMb2NrLmpzb25cIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuXG5cblxuZnVuY3Rpb24gQm9vaygpICB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgbGV0IGlkID0gcm91dGVyLnF1ZXJ5LmlkO1xuICAgIGNvbnNvbGUubG9nKCdpZDonLCBpZCk7XG4gICAgbGV0IGJvb2s7XG5cbiAgICBjb25zdCBORlRfQUREUkVTUyA9IFwiMHgwMzE1OTg4ZTQwMzFiOWYxY2MxZDU3MjBiODZlZTk4MjJiMDRiZDViXCI7XG4gICAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2lzT3duZXIsIHNldElzT3duZXJdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBcblxuLy9jb25uZWN0IHdhbGxldDpcbmNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblxuICAgICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgICBhbGVydChcIkdldCBNZXRhTWFzayAtPiBodHRwczovL21ldGFtYXNrLmlvL1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xuICAgIFxuICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWRcIiwgYWNjb3VudHNbMF0pO1xuICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICBcbiAgY29uc3QgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblxuICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdNYWtlIHN1cmUgeW91IGhhdmUgbWV0YW1hc2shJyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1dlIGhhdmUgdGhlIGV0aGVyZXVtIG9iamVjdCcsIGV0aGVyZXVtKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnIH0pO1xuXG4gICAgaWYgKGFjY291bnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgY29uc29sZS5sb2coJ0ZvdW5kIGFuIGF1dGhvcml6ZWQgYWNjb3VudDonLCBhY2NvdW50KTtcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gYXV0aG9yaXplZCBhY2NvdW50IGZvdW5kJyk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSk7XG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgY29uc3QgY29ubmVjdGVkQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KE5GVF9BRERSRVNTLCBJUHVibGljTG9jay5hYmksIHNpZ25lcik7XG4gICAgY29uc29sZS5sb2coaWQpO1xuICAgIGNvbnN0IG5mdCA9IGF3YWl0IGNvbm5lY3RlZENvbnRyYWN0Lm93bmVyT2YoYCR7aWR9YCk7XG4gICAgY29uc29sZS5sb2coXCJjdXJyIGFjYzogXCIgKyBjdXJyZW50QWNjb3VudCk7XG4gICAgY29uc29sZS5sb2coXCJuZnQgb3duZXI6IFwiICsgbmZ0KTsgICBcbiAgICBcbiAgICBpZiAobmZ0LnRvTG93ZXJDYXNlKCkgPT0gY3VycmVudEFjY291bnQudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBzZXRJc093bmVyKDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIndva3JpaW5nXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiWW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0byB0aGlzIGJvb2tcIik7XG4gICAgfVxuICB9O1xuXG4gICAgXG4gICAgaWYgKGlkID09IDYpIHtcbiAgICAgICAgYm9vayA9IFwiaHR0cDovLzE2MDU5Mjg1NzM2Ni5mcmVlLmZyL2pvZS9lYm9va3MvU2hhcmVEYXRhL1RoZSUyMFJlcHVibGljJTIwYnklMjBQbGF0by5wZGZcIiAvLyBwbGF0byB0aGUgcmVwdWJsaWNcbiAgICB9IGVsc2UgaWYgKGlkID09IDcpIHtcbiAgICAgICAgYm9vayA9IFwiaHR0cHM6Ly93d3cubWFyY3Vzd2l0Y2hlci5jb20vRXVyaXBpZGVzLCUyME1lZGVhLTEucGRmXCIgLy8gbWVkZWFcbiAgICB9IGVsc2UgaWYgKGlkID09IDgpIHtcbiAgICAgICAgYm9vayA9IFwiaHR0cHM6Ly93d3cuYm95bGUua3lzY2hvb2xzLnVzL1VzZXJGaWxlcy84OC9UaGUlMjBPZHlzc2V5LnBkZlwiIC8vIG9keXNzZXlcbiAgICB9IGVsc2UgaWYgKGlkID09IDkpIHtcbiAgICAgICAgYm9vayA9IFwiaHR0cHM6Ly93d3cuZ3V0ZW5iZXJnLm9yZy9maWxlcy82MTMwL29sZC82MTMwLXBkZi5wZGZcIiAvLyBpbGlhZFxuICAgIH0gZWxzZSBpZiAoaWQgPT0gMTApIHtcbiAgICAgICAgYm9vayA9IFwiaHR0cHM6Ly93d3cuZ3V0ZW5iZXJnLm9yZy9jYWNoZS9lcHViLzI4L3BnMjgtaW1hZ2VzLmh0bWxcIiAvLyBhZXNvcCBmYWJsZVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y2hlY2tJZldhbGxldElzQ29ubmVjdGVkKCk7XG5cdH0sIFtdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aDEgc3R5bGU9e3tcbiAgICAgICAgICAgIG9wYWNpdHkgOiBpc093bmVyID8gMCA6IDFcbiAgICAgICAgfX0+XG4gICAgICAgICAgICBZT1UgRE8gTk9UIEhBVkUgQUNDRVNTXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPGlmcmFtZSBzcmM9e2Jvb2t9IHN0eWxlPXt7b3BhY2l0eTogaXNPd25lcn19PjwvaWZyYW1lPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2s7XG5cblxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIklQdWJsaWNMb2NrIiwiZXRoZXJzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb29rIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJib29rIiwiTkZUX0FERFJFU1MiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiaXNPd25lciIsInNldElzT3duZXIiLCJjb25uZWN0V2FsbGV0IiwiZXRoZXJldW0iLCJ3aW5kb3ciLCJhbGVydCIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImVycm9yIiwiY2hlY2tJZldhbGxldElzQ29ubmVjdGVkIiwibGVuZ3RoIiwiYWNjb3VudCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY29ubmVjdGVkQ29udHJhY3QiLCJDb250cmFjdCIsImFiaSIsIm5mdCIsIm93bmVyT2YiLCJ0b0xvd2VyQ2FzZSIsImRpdiIsImgxIiwic3R5bGUiLCJvcGFjaXR5IiwiaWZyYW1lIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/book/[id].js\n"));

/***/ })

});