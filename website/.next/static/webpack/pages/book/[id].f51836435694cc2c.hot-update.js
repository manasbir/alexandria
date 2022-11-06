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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_IPublicLock_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/IPublicLock.json */ \"./public/IPublicLock.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nimpo;\nfunction Book() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query;\n    Z;\n    console.log(\"id:\", id);\n    let book;\n    const NFT_ADDRESS = \"0x0315988e4031b9f1cc1d5720b86ee9822b04bd5b\";\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    //connect wallet:\n    const connectWallet = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                alert(\"Get MetaMask -> https://metamask.io/\");\n                return;\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(\"Connected\", accounts[0]);\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const checkIfWalletIsConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"Make sure you have metamask!\");\n            return;\n        } else {\n            console.log(\"We have the ethereum object\", ethereum);\n        }\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        if (accounts.length !== 0) {\n            const account = accounts[0];\n            console.log(\"Found an authorized account:\", account);\n            setCurrentAccount(account);\n        } else {\n            console.log(\"No authorized account found\");\n        }\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethereum);\n        const signer = provider.getSigner();\n        const connectedContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(NFT_ADDRESS, _public_IPublicLock_json__WEBPACK_IMPORTED_MODULE_2__.abi, signer);\n        console.log(id);\n        if (nft.toLowerCase() == currentAccount.toLowerCase()) {\n            setIsOwner(1);\n            console.log(\"wokriing\");\n        }\n    };\n    if (id == 6) {\n        book = \"http://160592857366.free.fr/joe/ebooks/ShareData/The%20Republic%20by%20Plato.pdf\" // plato the republic\n        ;\n    } else if (id == 7) {\n        book = \"https://www.marcuswitcher.com/Euripides,%20Medea-1.pdf\" // medea\n        ;\n    } else if (id == 8) {\n        book = \"https://www.boyle.kyschools.us/UserFiles/88/The%20Odyssey.pdf\" // odyssey\n        ;\n    } else if (id == 9) {\n        book = \"https://www.gutenberg.org/files/6130/old/6130-pdf.pdf\" // iliad\n        ;\n    } else if (id == 10) {\n        book = \"https://www.gutenberg.org/cache/epub/28/pg28-images.html\" // aesop fable\n        ;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    opacity: isOwner ? 0 : 1\n                },\n                children: \"YOU DO NOT HAVE ACCESS\"\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                src: book,\n                style: {\n                    opacity: isOwner\n                }\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                lineNumber: 100,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n        lineNumber: 93,\n        columnNumber: 9\n    }, this);\n}\n_s(Book, \"HHgD7vabpFz8EhkbMsJ4OnLMb10=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Book;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMvYm9vay9baWRdLmpzPzBkOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IElQdWJsaWNMb2NrIGZyb20gXCIuLi8uLi9wdWJsaWMvSVB1YmxpY0xvY2suanNvblwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvXG5cbmZ1bmN0aW9uIEJvb2soKSAge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIFxuICAgIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgICBaXG5cblxuICAgIFxuICAgIGNvbnNvbGUubG9nKCdpZDonLCBpZCk7XG4gICAgbGV0IGJvb2s7XG5cbiAgICBjb25zdCBORlRfQUREUkVTUyA9IFwiMHgwMzE1OTg4ZTQwMzFiOWYxY2MxZDU3MjBiODZlZTk4MjJiMDRiZDViXCI7XG4gICAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2lzT3duZXIsIHNldElzT3duZXJdID0gdXNlU3RhdGUoMCk7XG4gICAgICAgIFxuXG4vL2Nvbm5lY3Qgd2FsbGV0OlxuY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXG4gICAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICAgIGFsZXJ0KFwiR2V0IE1ldGFNYXNrIC0+IGh0dHBzOi8vbWV0YW1hc2suaW8vXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XG4gICAgXG4gICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZFwiLCBhY2NvdW50c1swXSk7XG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIFxuICBjb25zdCBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXG4gICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgY29uc29sZS5sb2coJ01ha2Ugc3VyZSB5b3UgaGF2ZSBtZXRhbWFzayEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnV2UgaGF2ZSB0aGUgZXRoZXJldW0gb2JqZWN0JywgZXRoZXJldW0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9hY2NvdW50cycgfSk7XG5cbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICBjb25zb2xlLmxvZygnRm91bmQgYW4gYXV0aG9yaXplZCBhY2NvdW50OicsIGFjY291bnQpO1xuICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBhdXRob3JpemVkIGFjY291bnQgZm91bmQnKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKTtcbiAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICBjb25zdCBjb25uZWN0ZWRDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoTkZUX0FERFJFU1MsIElQdWJsaWNMb2NrLmFiaSwgc2lnbmVyKTtcbiAgICBjb25zb2xlLmxvZyhpZCk7XG5cbiAgICBcbiAgICBcbiAgICBpZiAobmZ0LnRvTG93ZXJDYXNlKCkgPT0gY3VycmVudEFjY291bnQudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBzZXRJc093bmVyKDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIndva3JpaW5nXCIpO1xuICAgIH1cbiAgfTtcblxuICAgIFxuICAgIGlmIChpZCA9PSA2KSB7XG4gICAgICAgIGJvb2sgPSBcImh0dHA6Ly8xNjA1OTI4NTczNjYuZnJlZS5mci9qb2UvZWJvb2tzL1NoYXJlRGF0YS9UaGUlMjBSZXB1YmxpYyUyMGJ5JTIwUGxhdG8ucGRmXCIgLy8gcGxhdG8gdGhlIHJlcHVibGljXG4gICAgfSBlbHNlIGlmIChpZCA9PSA3KSB7XG4gICAgICAgIGJvb2sgPSBcImh0dHBzOi8vd3d3Lm1hcmN1c3dpdGNoZXIuY29tL0V1cmlwaWRlcywlMjBNZWRlYS0xLnBkZlwiIC8vIG1lZGVhXG4gICAgfSBlbHNlIGlmIChpZCA9PSA4KSB7XG4gICAgICAgIGJvb2sgPSBcImh0dHBzOi8vd3d3LmJveWxlLmt5c2Nob29scy51cy9Vc2VyRmlsZXMvODgvVGhlJTIwT2R5c3NleS5wZGZcIiAvLyBvZHlzc2V5XG4gICAgfSBlbHNlIGlmIChpZCA9PSA5KSB7XG4gICAgICAgIGJvb2sgPSBcImh0dHBzOi8vd3d3Lmd1dGVuYmVyZy5vcmcvZmlsZXMvNjEzMC9vbGQvNjEzMC1wZGYucGRmXCIgLy8gaWxpYWRcbiAgICB9IGVsc2UgaWYgKGlkID09IDEwKSB7XG4gICAgICAgIGJvb2sgPSBcImh0dHBzOi8vd3d3Lmd1dGVuYmVyZy5vcmcvY2FjaGUvZXB1Yi8yOC9wZzI4LWltYWdlcy5odG1sXCIgLy8gYWVzb3AgZmFibGVcbiAgICB9XG5cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGgxIHN0eWxlPXt7XG4gICAgICAgICAgICBvcGFjaXR5IDogaXNPd25lciA/IDAgOiAxXG4gICAgICAgIH19PlxuICAgICAgICAgICAgWU9VIERPIE5PVCBIQVZFIEFDQ0VTU1xuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxpZnJhbWUgc3JjPXtib29rfSBzdHlsZT17e29wYWNpdHk6IGlzT3duZXJ9fT48L2lmcmFtZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rO1xuXG5cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJJUHVibGljTG9jayIsImV0aGVycyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaW1wbyIsIkJvb2siLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiWiIsImNvbnNvbGUiLCJsb2ciLCJib29rIiwiTkZUX0FERFJFU1MiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiaXNPd25lciIsInNldElzT3duZXIiLCJjb25uZWN0V2FsbGV0IiwiZXRoZXJldW0iLCJ3aW5kb3ciLCJhbGVydCIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImVycm9yIiwiY2hlY2tJZldhbGxldElzQ29ubmVjdGVkIiwibGVuZ3RoIiwiYWNjb3VudCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY29ubmVjdGVkQ29udHJhY3QiLCJDb250cmFjdCIsImFiaSIsIm5mdCIsInRvTG93ZXJDYXNlIiwiZGl2IiwiaDEiLCJzdHlsZSIsIm9wYWNpdHkiLCJpZnJhbWUiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/book/[id].js\n"));

/***/ })

});