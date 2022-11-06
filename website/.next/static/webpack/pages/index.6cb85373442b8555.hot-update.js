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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_networks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/networks */ \"./utils/networks.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"../../../../node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _public_MarketPlace_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/MarketPlace.json */ \"./public/MarketPlace.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const MARKET_ADDRESS = \"0x87DcCE68e38DA2c9B8D8577fB1AdA5Cc3baA5A72\";\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [days, setDays] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const connectWallet = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                alert(\"Get MetaMask -> https://metamask.io/\");\n                return;\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(\"Connected\", accounts[0]);\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const checkIfWalletIsConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"Make sure you have metamask!\");\n            return;\n        } else {\n            console.log(\"We have the ethereum object\", ethereum);\n        }\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        if (accounts.length !== 0) {\n            const account = accounts[0];\n            console.log(\"Found an authorized account:\", account);\n            setCurrentAccount(account);\n        } else {\n            console.log(\"No authorized account found\");\n        }\n    };\n    const callBorrowNft = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (ethereum) {\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethereum);\n                const signer = provider.getSigner();\n                const contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(MARKET_ADDRESS, _public_MarketPlace_json__WEBPACK_IMPORTED_MODULE_3__.abi, signer);\n                console.log(\"Going to pop wallet now to pay gas...\");\n                let tx = await contract.borrowNFT(tokenId, {\n                    value: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(price)\n                });\n                // Wait for the transaction to be mined\n                const receipt = await tx.wait();\n                // Check if the transaction was successfully completed\n                if (receipt.status === 1) {\n                    console.log(\"Done! https://mumbai.polygonscan.com/tx/\" + tx.hash);\n                } else {\n                    alert(\"Transaction failed! Please try again\");\n                }\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: \"/action_page.php\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        for: \"Books\",\n                        children: \"Choose a book:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        name: \"Books\",\n                        id: \"books\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"platosrepublic\",\n                                children: \"Plato's Republic\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"medea\",\n                                children: \"Medea\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"odyssey\",\n                                children: \"Odyssey\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"iliad\",\n                                children: \"Iliad\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"aesop\",\n                                children: \"Aesop's Fables\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: days,\n                        placeholder: \"How many days?\",\n                        onChange: (e)=>setDays(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 102,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"button-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            disabled: null,\n                            onClick: callBorrowNft,\n                            children: \"Borrow\"\n                        }, void 0, false, {\n                            fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                            lineNumber: 110,\n                            columnNumber: 8\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 109,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"JyHmCYpFT8IMOAj+C/VnGera9Uc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtnQ0FBT2pCLE9BQU07MENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJM0IsOERBQUNRO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ1M7d0JBQ0FDLE1BQUs7d0JBQ0xuQixPQUFPM0I7d0JBQ1ArQyxhQUFZO3dCQUNaQyxVQUFVQyxDQUFBQSxJQUFLaEQsUUFBUWdELEVBQUVDLE1BQU0sQ0FBQ3ZCLEtBQUs7Ozs7OztrQ0FHaEMsOERBQUNRO3dCQUFJQyxXQUFVO2tDQUNwQiw0RUFBQ2U7NEJBQU9DLFVBQVUsSUFBSTs0QkFBRUMsU0FBU3RDO3NDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVV2RCxDQUFDO0dBakh1Qm5CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmV0d29ya3MgfSBmcm9tICcuLi91dGlscy9uZXR3b3Jrcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IE1hcmtldFBsYWNlIGZyb20gXCIuLi9wdWJsaWMvTWFya2V0UGxhY2UuanNvblwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgTUFSS0VUX0FERFJFU1MgPSBcIjB4ODdEY0NFNjhlMzhEQTJjOUI4RDg1NzdmQjFBZEE1Q2MzYmFBNUE3MlwiO1xuXG4gIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGF5cywgc2V0RGF5c10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXG4gICAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICAgIGFsZXJ0KFwiR2V0IE1ldGFNYXNrIC0+IGh0dHBzOi8vbWV0YW1hc2suaW8vXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XG4gICAgXG4gICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZFwiLCBhY2NvdW50c1swXSk7XG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICBjb25zb2xlLmxvZygnTWFrZSBzdXJlIHlvdSBoYXZlIG1ldGFtYXNrIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnV2UgaGF2ZSB0aGUgZXRoZXJldW0gb2JqZWN0JywgZXRoZXJldW0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9hY2NvdW50cycgfSk7XG5cbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICBjb25zb2xlLmxvZygnRm91bmQgYW4gYXV0aG9yaXplZCBhY2NvdW50OicsIGFjY291bnQpO1xuICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBhdXRob3JpemVkIGFjY291bnQgZm91bmQnKTtcbiAgICB9XG4gIH07XG5cblxuICBjb25zdCBjYWxsQm9ycm93TmZ0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG4gICAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pO1xuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KE1BUktFVF9BRERSRVNTLCBNYXJrZXRQbGFjZS5hYmksIHNpZ25lcik7XG4gIFxuICAgICAgICBjb25zb2xlLmxvZyhcIkdvaW5nIHRvIHBvcCB3YWxsZXQgbm93IHRvIHBheSBnYXMuLi5cIilcbiAgICAgICAgbGV0IHR4ID0gYXdhaXQgY29udHJhY3QuYm9ycm93TkZUKHRva2VuSWQsIHt2YWx1ZTogZXRoZXJzLnV0aWxzLnBhcnNlRXRoZXIocHJpY2UpfSk7XG4gICAgICAgIC8vIFdhaXQgZm9yIHRoZSB0cmFuc2FjdGlvbiB0byBiZSBtaW5lZFxuICAgICAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgdHgud2FpdCgpO1xuICBcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRyYW5zYWN0aW9uIHdhcyBzdWNjZXNzZnVsbHkgY29tcGxldGVkXG4gICAgICAgIGlmIChyZWNlaXB0LnN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG9uZSEgaHR0cHM6Ly9tdW1iYWkucG9seWdvbnNjYW4uY29tL3R4L1wiK3R4Lmhhc2gpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlRyYW5zYWN0aW9uIGZhaWxlZCEgUGxlYXNlIHRyeSBhZ2FpblwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y2hlY2tJZldhbGxldElzQ29ubmVjdGVkKCk7XG5cdH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J0FwcCc+XG4gICAgICBcbiAgICAgIDxmb3JtIGFjdGlvbj1cIi9hY3Rpb25fcGFnZS5waHBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIkJvb2tzXCI+Q2hvb3NlIGEgYm9vazo8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJCb29rc1wiIGlkPVwiYm9va3NcIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGxhdG9zcmVwdWJsaWNcIj5QbGF0bydzIFJlcHVibGljPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGVhXCI+TWVkZWE8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib2R5c3NleVwiPk9keXNzZXk8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaWxpYWRcIj5JbGlhZDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhZXNvcFwiID5BZXNvcCdzIEZhYmxlczwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2RheXN9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdIb3cgbWFueSBkYXlzPydcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gc2V0RGF5cyhlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBkaXNhYmxlZD17bnVsbH0gb25DbGljaz17Y2FsbEJvcnJvd05mdH0+XG5cdFx0XHRcdFx0XHRcdEJvcnJvd1xuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgKVxuXG59Il0sIm5hbWVzIjpbIm5ldHdvcmtzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImV0aGVycyIsIk1hcmtldFBsYWNlIiwiSG9tZSIsIk1BUktFVF9BRERSRVNTIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImRheXMiLCJzZXREYXlzIiwiY29ubmVjdFdhbGxldCIsImV0aGVyZXVtIiwid2luZG93IiwiYWxlcnQiLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQiLCJsZW5ndGgiLCJhY2NvdW50IiwiY2FsbEJvcnJvd05mdCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY29udHJhY3QiLCJDb250cmFjdCIsImFiaSIsInR4IiwiYm9ycm93TkZUIiwidG9rZW5JZCIsInZhbHVlIiwidXRpbHMiLCJwYXJzZUV0aGVyIiwicHJpY2UiLCJyZWNlaXB0Iiwid2FpdCIsInN0YXR1cyIsImhhc2giLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiYWN0aW9uIiwibGFiZWwiLCJmb3IiLCJzZWxlY3QiLCJuYW1lIiwiaWQiLCJvcHRpb24iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});