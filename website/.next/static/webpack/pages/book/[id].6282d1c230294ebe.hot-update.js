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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_IPublicLock_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/IPublicLock.json */ \"./public/IPublicLock.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Book() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    let id = router.query.id;\n    console.log(\"id:\", id);\n    let book;\n    const NFT_ADDRESS = \"0x0315988e4031b9f1cc1d5720b86ee9822b04bd5b\";\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        id;\n    });\n    //connect wallet:\n    const connectWallet = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                alert(\"Get MetaMask -> https://metamask.io/\");\n                return;\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(\"Connected\", accounts[0]);\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const checkIfWalletIsConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"Make sure you have metamask!\");\n            return;\n        } else {\n            console.log(\"We have the ethereum object\", ethereum);\n        }\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        if (accounts.length !== 0) {\n            const account = accounts[0];\n            console.log(\"Found an authorized account:\", account);\n            setCurrentAccount(account);\n        } else {\n            console.log(\"No authorized account found\");\n        }\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethereum);\n        const signer = provider.getSigner();\n        const connectedContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(NFT_ADDRESS, _public_IPublicLock_json__WEBPACK_IMPORTED_MODULE_2__.abi, signer);\n        console.log(id);\n        const nft = await connectedContract.ownerOf(\"\".concat(id));\n        console.log(\"curr acc: \" + currentAccount);\n        console.log(\"nft owner: \" + nft);\n        if (nft.toLowerCase() == currentAccount.toLowerCase()) {\n            setIsOwner(1);\n            console.log(\"wokriing\");\n        } else {\n            alert(\"You do not have access to this book\");\n        }\n    };\n    if (id == 6) {\n        book = \"http://160592857366.free.fr/joe/ebooks/ShareData/The%20Republic%20by%20Plato.pdf\" // plato the republic\n        ;\n    } else if (id == 7) {\n        book = \"https://www.marcuswitcher.com/Euripides,%20Medea-1.pdf\" // medea\n        ;\n    } else if (id == 8) {\n        book = \"https://www.boyle.kyschools.us/UserFiles/88/The%20Odyssey.pdf\" // odyssey\n        ;\n    } else if (id == 9) {\n        book = \"https://www.gutenberg.org/files/6130/old/6130-pdf.pdf\" // iliad\n        ;\n    } else if (id == 10) {\n        book = \"https://www.gutenberg.org/cache/epub/28/pg28-images.html\" // aesop fable\n        ;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    opacity: isOwner ? 0 : 1\n                },\n                children: \"YOU DO NOT HAVE ACCESS\"\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                src: book,\n                style: {\n                    opacity: isOwner\n                }\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/book/[id].js\",\n        lineNumber: 98,\n        columnNumber: 9\n    }, this);\n}\n_s(Book, \"u8z+WYWc1neNeOzl3KRnqKaSrdU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Book;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLElBQUksQ0FBQztnQkFDN0I7MEJBQUc7Ozs7OzswQkFJSCw4REFBQzRCO2dCQUFPQyxLQUFLakM7Z0JBQU04QixPQUFPO29CQUFDQyxTQUFTM0I7Z0JBQU87Ozs7Ozs7Ozs7OztBQUduRDtHQXBHU1Y7O1FBQ1VMLGtEQUFTQTs7O0tBRG5CSztBQXNHVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ib29rL1tpZF0uanM/MGQ5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSVB1YmxpY0xvY2sgZnJvbSBcIi4uLy4uL3B1YmxpYy9JUHVibGljTG9jay5qc29uXCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcblxuXG5cbmZ1bmN0aW9uIEJvb2soKSAge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGxldCBpZCA9IHJvdXRlci5xdWVyeS5pZDtcbiAgICBjb25zb2xlLmxvZygnaWQ6JywgaWQpO1xuICAgIGxldCBib29rO1xuXG4gICAgY29uc3QgTkZUX0FERFJFU1MgPSBcIjB4MDMxNTk4OGU0MDMxYjlmMWNjMWQ1NzIwYjg2ZWU5ODIyYjA0YmQ1YlwiO1xuICAgIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtpc093bmVyLCBzZXRJc093bmVyXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWQgXG4gICAgfSlcbiAgICAgICAgXG5cbi8vY29ubmVjdCB3YWxsZXQ6XG5jb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgYWxlcnQoXCJHZXQgTWV0YU1hc2sgLT4gaHR0cHM6Ly9tZXRhbWFzay5pby9cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcbiAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIsIGFjY291bnRzWzBdKTtcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgXG4gIGNvbnN0IGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICBjb25zb2xlLmxvZygnTWFrZSBzdXJlIHlvdSBoYXZlIG1ldGFtYXNrIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdXZSBoYXZlIHRoZSBldGhlcmV1bSBvYmplY3QnLCBldGhlcmV1bSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2FjY291bnRzJyB9KTtcblxuICAgIGlmIChhY2NvdW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgIGNvbnNvbGUubG9nKCdGb3VuZCBhbiBhdXRob3JpemVkIGFjY291bnQ6JywgYWNjb3VudCk7XG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ05vIGF1dGhvcml6ZWQgYWNjb3VudCBmb3VuZCcpO1xuICAgIH1cblxuXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pO1xuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgIGNvbnN0IGNvbm5lY3RlZENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChORlRfQUREUkVTUywgSVB1YmxpY0xvY2suYWJpLCBzaWduZXIpO1xuICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICBjb25zdCBuZnQgPSBhd2FpdCBjb25uZWN0ZWRDb250cmFjdC5vd25lck9mKGAke2lkfWApO1xuICAgIGNvbnNvbGUubG9nKFwiY3VyciBhY2M6IFwiICsgY3VycmVudEFjY291bnQpO1xuICAgIGNvbnNvbGUubG9nKFwibmZ0IG93bmVyOiBcIiArIG5mdCk7ICAgXG4gICAgXG4gICAgaWYgKG5mdC50b0xvd2VyQ2FzZSgpID09IGN1cnJlbnRBY2NvdW50LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgc2V0SXNPd25lcigxKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3b2tyaWluZ1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIllvdSBkbyBub3QgaGF2ZSBhY2Nlc3MgdG8gdGhpcyBib29rXCIpO1xuICAgIH1cbiAgfTtcblxuICAgIFxuICAgIGlmIChpZCA9PSA2KSB7XG4gICAgICAgIGJvb2sgPSBcImh0dHA6Ly8xNjA1OTI4NTczNjYuZnJlZS5mci9qb2UvZWJvb2tzL1NoYXJlRGF0YS9UaGUlMjBSZXB1YmxpYyUyMGJ5JTIwUGxhdG8ucGRmXCIgLy8gcGxhdG8gdGhlIHJlcHVibGljXG4gICAgfSBlbHNlIGlmIChpZCA9PSA3KSB7XG4gICAgICAgIGJvb2sgPSBcImh0dHBzOi8vd3d3Lm1hcmN1c3dpdGNoZXIuY29tL0V1cmlwaWRlcywlMjBNZWRlYS0xLnBkZlwiIC8vIG1lZGVhXG4gICAgfSBlbHNlIGlmIChpZCA9PSA4KSB7XG4gICAgICAgIGJvb2sgPSBcImh0dHBzOi8vd3d3LmJveWxlLmt5c2Nob29scy51cy9Vc2VyRmlsZXMvODgvVGhlJTIwT2R5c3NleS5wZGZcIiAvLyBvZHlzc2V5XG4gICAgfSBlbHNlIGlmIChpZCA9PSA5KSB7XG4gICAgICAgIGJvb2sgPSBcImh0dHBzOi8vd3d3Lmd1dGVuYmVyZy5vcmcvZmlsZXMvNjEzMC9vbGQvNjEzMC1wZGYucGRmXCIgLy8gaWxpYWRcbiAgICB9IGVsc2UgaWYgKGlkID09IDEwKSB7XG4gICAgICAgIGJvb2sgPSBcImh0dHBzOi8vd3d3Lmd1dGVuYmVyZy5vcmcvY2FjaGUvZXB1Yi8yOC9wZzI4LWltYWdlcy5odG1sXCIgLy8gYWVzb3AgZmFibGVcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCgpO1xuXHR9LCBbXSlcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGgxIHN0eWxlPXt7XG4gICAgICAgICAgICBvcGFjaXR5IDogaXNPd25lciA/IDAgOiAxXG4gICAgICAgIH19PlxuICAgICAgICAgICAgWU9VIERPIE5PVCBIQVZFIEFDQ0VTU1xuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxpZnJhbWUgc3JjPXtib29rfSBzdHlsZT17e29wYWNpdHk6IGlzT3duZXJ9fT48L2lmcmFtZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rO1xuXG5cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJJUHVibGljTG9jayIsImV0aGVycyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm9vayIsInJvdXRlciIsImlkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiYm9vayIsIk5GVF9BRERSRVNTIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImlzT3duZXIiLCJzZXRJc093bmVyIiwiY29ubmVjdFdhbGxldCIsImV0aGVyZXVtIiwid2luZG93IiwiYWxlcnQiLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJlcnJvciIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsImxlbmd0aCIsImFjY291bnQiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsImNvbm5lY3RlZENvbnRyYWN0IiwiQ29udHJhY3QiLCJhYmkiLCJuZnQiLCJvd25lck9mIiwidG9Mb3dlckNhc2UiLCJkaXYiLCJoMSIsInN0eWxlIiwib3BhY2l0eSIsImlmcmFtZSIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/book/[id].js\n"));

/***/ })

});