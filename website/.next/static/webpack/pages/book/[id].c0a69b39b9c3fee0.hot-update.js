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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_IPublicLock_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/IPublicLock.json */ \"./public/IPublicLock.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nimp;\nfunction Book() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query;\n    Z;\n    console.log(\"id:\", id);\n    let book;\n    const NFT_ADDRESS = \"0x0315988e4031b9f1cc1d5720b86ee9822b04bd5b\";\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    //connect wallet:\n    const connectWallet = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                alert(\"Get MetaMask -> https://metamask.io/\");\n                return;\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(\"Connected\", accounts[0]);\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const checkIfWalletIsConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"Make sure you have metamask!\");\n            return;\n        } else {\n            console.log(\"We have the ethereum object\", ethereum);\n        }\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        if (accounts.length !== 0) {\n            const account = accounts[0];\n            console.log(\"Found an authorized account:\", account);\n            setCurrentAccount(account);\n        } else {\n            console.log(\"No authorized account found\");\n        }\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethereum);\n        const signer = provider.getSigner();\n        const connectedContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(NFT_ADDRESS, _public_IPublicLock_json__WEBPACK_IMPORTED_MODULE_2__.abi, signer);\n        console.log(id);\n        if (nft.toLowerCase() == currentAccount.toLowerCase()) {\n            setIsOwner(1);\n            console.log(\"wokriing\");\n        }\n    };\n    if (id == 6) {\n        book = \"http://160592857366.free.fr/joe/ebooks/ShareData/The%20Republic%20by%20Plato.pdf\" // plato the republic\n        ;\n    } else if (id == 7) {\n        book = \"https://www.marcuswitcher.com/Euripides,%20Medea-1.pdf\" // medea\n        ;\n    } else if (id == 8) {\n        book = \"https://www.boyle.kyschools.us/UserFiles/88/The%20Odyssey.pdf\" // odyssey\n        ;\n    } else if (id == 9) {\n        book = \"https://www.gutenberg.org/files/6130/old/6130-pdf.pdf\" // iliad\n        ;\n    } else if (id == 10) {\n        book = \"https://www.gutenberg.org/cache/epub/28/pg28-images.html\" // aesop fable\n        ;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    opacity: isOwner ? 0 : 1\n                },\n                children: \"YOU DO NOT HAVE ACCESS\"\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                src: book,\n                style: {\n                    opacity: isOwner\n                }\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                lineNumber: 100,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n        lineNumber: 93,\n        columnNumber: 9\n    }, this);\n}\n_s(Book, \"HHgD7vabpFz8EhkbMsJ4OnLMb10=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Book;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMvYm9vay9baWRdLmpzPzBkOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IElQdWJsaWNMb2NrIGZyb20gXCIuLi8uLi9wdWJsaWMvSVB1YmxpY0xvY2suanNvblwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBcblxuZnVuY3Rpb24gQm9vaygpICB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgXG4gICAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeTtcblxuICAgIFpcblxuXG4gICAgXG4gICAgY29uc29sZS5sb2coJ2lkOicsIGlkKTtcbiAgICBsZXQgYm9vaztcblxuICAgIGNvbnN0IE5GVF9BRERSRVNTID0gXCIweDAzMTU5ODhlNDAzMWI5ZjFjYzFkNTcyMGI4NmVlOTgyMmIwNGJkNWJcIjtcbiAgICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbaXNPd25lciwgc2V0SXNPd25lcl0gPSB1c2VTdGF0ZSgwKTtcbiAgICAgICAgXG5cbi8vY29ubmVjdCB3YWxsZXQ6XG5jb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgYWxlcnQoXCJHZXQgTWV0YU1hc2sgLT4gaHR0cHM6Ly9tZXRhbWFzay5pby9cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcbiAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIsIGFjY291bnRzWzBdKTtcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgXG4gIGNvbnN0IGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICBjb25zb2xlLmxvZygnTWFrZSBzdXJlIHlvdSBoYXZlIG1ldGFtYXNrIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdXZSBoYXZlIHRoZSBldGhlcmV1bSBvYmplY3QnLCBldGhlcmV1bSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2FjY291bnRzJyB9KTtcblxuICAgIGlmIChhY2NvdW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgIGNvbnNvbGUubG9nKCdGb3VuZCBhbiBhdXRob3JpemVkIGFjY291bnQ6JywgYWNjb3VudCk7XG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ05vIGF1dGhvcml6ZWQgYWNjb3VudCBmb3VuZCcpO1xuICAgIH1cblxuXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pO1xuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgIGNvbnN0IGNvbm5lY3RlZENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChORlRfQUREUkVTUywgSVB1YmxpY0xvY2suYWJpLCBzaWduZXIpO1xuICAgIGNvbnNvbGUubG9nKGlkKTtcblxuICAgIFxuICAgIFxuICAgIGlmIChuZnQudG9Mb3dlckNhc2UoKSA9PSBjdXJyZW50QWNjb3VudC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIHNldElzT3duZXIoMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid29rcmlpbmdcIik7XG4gICAgfVxuICB9O1xuXG4gICAgXG4gICAgaWYgKGlkID09IDYpIHtcbiAgICAgICAgYm9vayA9IFwiaHR0cDovLzE2MDU5Mjg1NzM2Ni5mcmVlLmZyL2pvZS9lYm9va3MvU2hhcmVEYXRhL1RoZSUyMFJlcHVibGljJTIwYnklMjBQbGF0by5wZGZcIiAvLyBwbGF0byB0aGUgcmVwdWJsaWNcbiAgICB9IGVsc2UgaWYgKGlkID09IDcpIHtcbiAgICAgICAgYm9vayA9IFwiaHR0cHM6Ly93d3cubWFyY3Vzd2l0Y2hlci5jb20vRXVyaXBpZGVzLCUyME1lZGVhLTEucGRmXCIgLy8gbWVkZWFcbiAgICB9IGVsc2UgaWYgKGlkID09IDgpIHtcbiAgICAgICAgYm9vayA9IFwiaHR0cHM6Ly93d3cuYm95bGUua3lzY2hvb2xzLnVzL1VzZXJGaWxlcy84OC9UaGUlMjBPZHlzc2V5LnBkZlwiIC8vIG9keXNzZXlcbiAgICB9IGVsc2UgaWYgKGlkID09IDkpIHtcbiAgICAgICAgYm9vayA9IFwiaHR0cHM6Ly93d3cuZ3V0ZW5iZXJnLm9yZy9maWxlcy82MTMwL29sZC82MTMwLXBkZi5wZGZcIiAvLyBpbGlhZFxuICAgIH0gZWxzZSBpZiAoaWQgPT0gMTApIHtcbiAgICAgICAgYm9vayA9IFwiaHR0cHM6Ly93d3cuZ3V0ZW5iZXJnLm9yZy9jYWNoZS9lcHViLzI4L3BnMjgtaW1hZ2VzLmh0bWxcIiAvLyBhZXNvcCBmYWJsZVxuICAgIH1cblxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aDEgc3R5bGU9e3tcbiAgICAgICAgICAgIG9wYWNpdHkgOiBpc093bmVyID8gMCA6IDFcbiAgICAgICAgfX0+XG4gICAgICAgICAgICBZT1UgRE8gTk9UIEhBVkUgQUNDRVNTXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPGlmcmFtZSBzcmM9e2Jvb2t9IHN0eWxlPXt7b3BhY2l0eTogaXNPd25lcn19PjwvaWZyYW1lPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2s7XG5cblxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIklQdWJsaWNMb2NrIiwiZXRoZXJzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpbXAiLCJCb29rIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsIloiLCJjb25zb2xlIiwibG9nIiwiYm9vayIsIk5GVF9BRERSRVNTIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImlzT3duZXIiLCJzZXRJc093bmVyIiwiY29ubmVjdFdhbGxldCIsImV0aGVyZXVtIiwid2luZG93IiwiYWxlcnQiLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJlcnJvciIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsImxlbmd0aCIsImFjY291bnQiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsImNvbm5lY3RlZENvbnRyYWN0IiwiQ29udHJhY3QiLCJhYmkiLCJuZnQiLCJ0b0xvd2VyQ2FzZSIsImRpdiIsImgxIiwic3R5bGUiLCJvcGFjaXR5IiwiaWZyYW1lIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/book/[id].js\n"));

/***/ })

});