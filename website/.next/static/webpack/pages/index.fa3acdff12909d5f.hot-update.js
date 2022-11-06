"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_networks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/networks */ \"./utils/networks.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _public_MarketPlace_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/MarketPlace.json */ \"./public/MarketPlace.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const MARKET_ADDRESS = \"0x87DcCE68e38DA2c9B8D8577fB1AdA5Cc3baA5A72\";\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [days, setDays] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [tokenId, setTokenId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const connectWallet = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                alert(\"Get MetaMask -> https://metamask.io/\");\n                return;\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(\"Connected\", accounts[0]);\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const checkIfWalletIsConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"Make sure you have metamask!\");\n            return;\n        } else {\n            console.log(\"We have the ethereum object\", ethereum);\n        }\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        if (accounts.length !== 0) {\n            const account = accounts[0];\n            console.log(\"Found an authorized account:\", account);\n            setCurrentAccount(account);\n        } else {\n            console.log(\"No authorized account found\");\n        }\n    };\n    const callBorrowNft = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (ethereum) {\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethereum);\n                const signer = provider.getSigner();\n                const contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(MARKET_ADDRESS, _public_MarketPlace_json__WEBPACK_IMPORTED_MODULE_3__.abi, signer);\n                console.log(\"Going to pop wallet now to pay gas...\");\n                console.log(tokenId, amo);\n                const amount = 1000 / 15 * days;\n                let tx = await contract.borrowNFT(tokenId, {\n                    value: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseUnits(amount.toString(), \"18\")\n                });\n                // (ethers.utils.formatUnits(amount.toString()))\n                // Wait for the transaction to be mined\n                const receipt = await tx.wait();\n                // Check if the transaction was successfully completed\n                if (receipt.status === 1) {\n                    console.log(\"Done! https://https://goerli.etherscan.io/tx/\" + tx.hash);\n                } else {\n                    alert(\"Transaction failed! Please try again\");\n                }\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    // let form = document.querySelector('form');\n    // form.addEventListener(change, () => {\n    //   setTokenId(form.option.value)\n    // })\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                for: \"Books\",\n                children: \"Choose a book:\"\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                lineNumber: 100,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                value: tokenId,\n                name: \"Books\",\n                id: \"books\",\n                onChange: (x)=>console.log(x.target.value),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"1\",\n                        children: \"Plato's Republic\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"2\",\n                        children: \"Medea\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"3\",\n                        children: \"Odyssey\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"4\",\n                        children: \"Iliad\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"5\",\n                        children: \"Aesop's Fables\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        for: \"days\",\n                        children: \"How many days do you want to borrow this book for?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 111,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"days\",\n                        type: \"text\",\n                        value: days,\n                        placeholder: \"# of days\",\n                        onChange: (e)=>setDays(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"button-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            disabled: null,\n                            onClick: callBorrowNft,\n                            children: \"Borrow\"\n                        }, void 0, false, {\n                            fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                            lineNumber: 121,\n                            columnNumber: 8\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 120,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"U3lFt/uDapJWjBkE+tV66Z2n/4w=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQVFDLElBQUc7Z0JBQVFDLFVBQVUsQ0FBQ0MsSUFBTW5DLFFBQVFDLEdBQUcsQ0FBQ2tDLEVBQUVDLE1BQU0sQ0FBQ2pCLEtBQUs7O2tDQUN6Riw4REFBQ2tCO3dCQUFPbEIsT0FBTTtrQ0FBSTs7Ozs7O2tDQUNsQiw4REFBQ2tCO3dCQUFPbEIsT0FBTTtrQ0FBSTs7Ozs7O2tDQUNsQiw4REFBQ2tCO3dCQUFPbEIsT0FBTTtrQ0FBSTs7Ozs7O2tDQUNsQiw4REFBQ2tCO3dCQUFPbEIsT0FBTTtrQ0FBSTs7Ozs7O2tDQUNsQiw4REFBQ2tCO3dCQUFPbEIsT0FBTTtrQ0FBSzs7Ozs7Ozs7Ozs7OzBCQUl2Qiw4REFBQ1E7Z0JBQUlDLFdBQVU7O2tDQUNmLDhEQUFDQzt3QkFBTUMsS0FBSTtrQ0FBTzs7Ozs7O2tDQUNoQiw4REFBQ1E7d0JBQ0NMLElBQUc7d0JBQ05NLE1BQUs7d0JBQ0xwQixPQUFPOUI7d0JBQ1BtRCxhQUFZO3dCQUNaTixVQUFVTyxDQUFBQSxJQUFLbkQsUUFBUW1ELEVBQUVMLE1BQU0sQ0FBQ2pCLEtBQUs7Ozs7OztrQ0FHaEMsOERBQUNRO3dCQUFJQyxXQUFVO2tDQUNwQiw0RUFBQ2M7NEJBQU9DLFVBQVUsSUFBSTs0QkFBRUMsU0FBU3RDO3NDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVl2RCxDQUFDO0dBOUh1QnJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmV0d29ya3MgfSBmcm9tICcuLi91dGlscy9uZXR3b3Jrcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IE1hcmtldFBsYWNlIGZyb20gXCIuLi9wdWJsaWMvTWFya2V0UGxhY2UuanNvblwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgTUFSS0VUX0FERFJFU1MgPSBcIjB4ODdEY0NFNjhlMzhEQTJjOUI4RDg1NzdmQjFBZEE1Q2MzYmFBNUE3MlwiO1xuXG4gIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGF5cywgc2V0RGF5c10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0b2tlbklkLCBzZXRUb2tlbklkXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgYWxlcnQoXCJHZXQgTWV0YU1hc2sgLT4gaHR0cHM6Ly9tZXRhbWFzay5pby9cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcbiAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIsIGFjY291bnRzWzBdKTtcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblxuICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdNYWtlIHN1cmUgeW91IGhhdmUgbWV0YW1hc2shJyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdXZSBoYXZlIHRoZSBldGhlcmV1bSBvYmplY3QnLCBldGhlcmV1bSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2FjY291bnRzJyB9KTtcblxuICAgIGlmIChhY2NvdW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgIGNvbnNvbGUubG9nKCdGb3VuZCBhbiBhdXRob3JpemVkIGFjY291bnQ6JywgYWNjb3VudCk7XG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ05vIGF1dGhvcml6ZWQgYWNjb3VudCBmb3VuZCcpO1xuICAgIH1cbiAgfTtcblxuXG4gIGNvbnN0IGNhbGxCb3Jyb3dOZnQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcbiAgICAgIGlmIChldGhlcmV1bSkge1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSk7XG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoTUFSS0VUX0FERFJFU1MsIE1hcmtldFBsYWNlLmFiaSwgc2lnbmVyKTtcbiAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR29pbmcgdG8gcG9wIHdhbGxldCBub3cgdG8gcGF5IGdhcy4uLlwiKVxuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbklkLCBhbW8pXG4gICAgICAgIGNvbnN0IGFtb3VudCA9IDEwMDAvMTUqZGF5cztcbiAgICAgICAgbGV0IHR4ID0gYXdhaXQgY29udHJhY3QuYm9ycm93TkZUKHRva2VuSWQsIHt2YWx1ZTogZXRoZXJzLnV0aWxzLnBhcnNlVW5pdHMoYW1vdW50LnRvU3RyaW5nKCksIFwiMThcIil9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIChldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMoYW1vdW50LnRvU3RyaW5nKCkpKVxuICAgICAgICAvLyBXYWl0IGZvciB0aGUgdHJhbnNhY3Rpb24gdG8gYmUgbWluZWRcbiAgICAgICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHR4LndhaXQoKTtcbiAgXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSB0cmFuc2FjdGlvbiB3YXMgc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZFxuICAgICAgICBpZiAocmVjZWlwdC5zdGF0dXMgPT09IDEpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRvbmUhIGh0dHBzOi8vaHR0cHM6Ly9nb2VybGkuZXRoZXJzY2FuLmlvL3R4L1wiK3R4Lmhhc2gpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlRyYW5zYWN0aW9uIGZhaWxlZCEgUGxlYXNlIHRyeSBhZ2FpblwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLy8gbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIC8vIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihjaGFuZ2UsICgpID0+IHtcbiAgLy8gICBzZXRUb2tlbklkKGZvcm0ub3B0aW9uLnZhbHVlKVxuICAvLyB9KVxuXG4gXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y2hlY2tJZldhbGxldElzQ29ubmVjdGVkKCk7XG5cdH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J0FwcCc+XG4gICAgICBcbiAgICAgXG4gICAgICAgIDxsYWJlbCBmb3I9XCJCb29rc1wiPkNob29zZSBhIGJvb2s6PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17dG9rZW5JZH0gbmFtZT1cIkJvb2tzXCIgaWQ9XCJib29rc1wiIG9uQ2hhbmdlPXsoeCkgPT4gY29uc29sZS5sb2coeC50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPlBsYXRvJ3MgUmVwdWJsaWM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPk1lZGVhPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5PZHlzc2V5PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj5JbGlhZDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCIgPkFlc29wJ3MgRmFibGVzPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgIFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCI+XG4gICAgICA8bGFiZWwgZm9yPVwiZGF5c1wiPkhvdyBtYW55IGRheXMgZG8geW91IHdhbnQgdG8gYm9ycm93IHRoaXMgYm9vayBmb3I/PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJkYXlzXCJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZGF5c31cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9JyMgb2YgZGF5cydcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gc2V0RGF5cyhlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBkaXNhYmxlZD17bnVsbH0gb25DbGljaz17Y2FsbEJvcnJvd05mdH0+XG5cdFx0XHRcdFx0XHRcdEJvcnJvd1xuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gIFxuICAgIDwvZGl2PlxuXG5cbiAgKVxuXG59Il0sIm5hbWVzIjpbIm5ldHdvcmtzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImV0aGVycyIsIk1hcmtldFBsYWNlIiwiSG9tZSIsIk1BUktFVF9BRERSRVNTIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImRheXMiLCJzZXREYXlzIiwidG9rZW5JZCIsInNldFRva2VuSWQiLCJjb25uZWN0V2FsbGV0IiwiZXRoZXJldW0iLCJ3aW5kb3ciLCJhbGVydCIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsImxlbmd0aCIsImFjY291bnQiLCJjYWxsQm9ycm93TmZ0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwiYWJpIiwiYW1vIiwiYW1vdW50IiwidHgiLCJib3Jyb3dORlQiLCJ2YWx1ZSIsInV0aWxzIiwicGFyc2VVbml0cyIsInRvU3RyaW5nIiwicmVjZWlwdCIsIndhaXQiLCJzdGF0dXMiLCJoYXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJmb3IiLCJzZWxlY3QiLCJuYW1lIiwiaWQiLCJvbkNoYW5nZSIsIngiLCJ0YXJnZXQiLCJvcHRpb24iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImUiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});