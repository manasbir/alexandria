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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_networks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/networks */ \"./utils/networks.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _public_MarketPlace_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/MarketPlace.json */ \"./public/MarketPlace.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const MARKET_ADDRESS = \"0x87DcCE68e38DA2c9B8D8577fB1AdA5Cc3baA5A72\";\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [days, setDays] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [tokenId, setTokenId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const connectWallet = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                alert(\"Get MetaMask -> https://metamask.io/\");\n                return;\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(\"Connected\", accounts[0]);\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const checkIfWalletIsConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"Make sure you have metamask!\");\n            return;\n        } else {\n            console.log(\"We have the ethereum object\", ethereum);\n        }\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        if (accounts.length !== 0) {\n            const account = accounts[0];\n            console.log(\"Found an authorized account:\", account);\n            setCurrentAccount(account);\n        } else {\n            console.log(\"No authorized account found\");\n        }\n    };\n    const callBorrowNft = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (ethereum) {\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethereum);\n                const signer = provider.getSigner();\n                const contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(MARKET_ADDRESS, _public_MarketPlace_json__WEBPACK_IMPORTED_MODULE_3__.abi, signer);\n                console.log(\"Going to pop wallet now to pay gas...\");\n                let tx = await contract.borrowNFT(tokenId, {\n                    value: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(1000 / 15 * days)\n                });\n                // Wait for the transaction to be mined\n                const receipt = await tx.wait();\n                // Check if the transaction was successfully completed\n                if (receipt.status === 1) {\n                    console.log(\"Done! https://https://goerli.etherscan.io/tx/\" + tx.hash);\n                } else {\n                    alert(\"Transaction failed! Please try again\");\n                }\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    let form = document.querySelector(\"form\");\n    form.addEventListener(change, ()=>{\n        setTokenId(form.option.value);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: \"/action_page.php\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        for: \"Books\",\n                        children: \"Choose a book:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        name: \"Books\",\n                        id: \"books\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"1\",\n                                onClick: console.log(\"lalala\"),\n                                children: \"Plato's Republic\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"2\",\n                                children: \"Medea\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"odyssey\",\n                                children: \"Odyssey\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"iliad\",\n                                children: \"Iliad\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"aesop\",\n                                children: \"Aesop's Fables\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: days,\n                        placeholder: \"How many days?\",\n                        onChange: (e)=>setDays(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 107,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"button-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            disabled: null,\n                            onClick: callBorrowNft,\n                            children: \"Borrow\"\n                        }, void 0, false, {\n                            fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                            lineNumber: 115,\n                            columnNumber: 8\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 114,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"U3lFt/uDapJWjBkE+tV66Z2n/4w=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7OzBDQUN0Qiw4REFBQ1I7Z0NBQU9aLE9BQU07Z0NBQUlxQixTQUFTdEMsUUFBUUMsR0FBRyxDQUFDOzBDQUFXOzs7Ozs7MENBQ2xELDhEQUFDNEI7Z0NBQU9aLE9BQU07MENBQUk7Ozs7OzswQ0FDbEIsOERBQUNZO2dDQUFPWixPQUFNOzBDQUFVOzs7Ozs7MENBQ3hCLDhEQUFDWTtnQ0FBT1osT0FBTTswQ0FBUTs7Ozs7OzBDQUN0Qiw4REFBQ1k7Z0NBQU9aLE9BQU07MENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJM0IsOERBQUNhO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ1E7d0JBQ0FDLE1BQUs7d0JBQ0x2QixPQUFPNUI7d0JBQ1BvRCxhQUFZO3dCQUNaQyxVQUFVQyxDQUFBQSxJQUFLckQsUUFBUXFELEVBQUVDLE1BQU0sQ0FBQzNCLEtBQUs7Ozs7OztrQ0FHaEMsOERBQUNhO3dCQUFJQyxXQUFVO2tDQUNwQiw0RUFBQ2M7NEJBQU9DLFVBQVUsSUFBSTs0QkFBRVIsU0FBU2hDO3NDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVV2RCxDQUFDO0dBdEh1QnJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmV0d29ya3MgfSBmcm9tICcuLi91dGlscy9uZXR3b3Jrcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IE1hcmtldFBsYWNlIGZyb20gXCIuLi9wdWJsaWMvTWFya2V0UGxhY2UuanNvblwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgTUFSS0VUX0FERFJFU1MgPSBcIjB4ODdEY0NFNjhlMzhEQTJjOUI4RDg1NzdmQjFBZEE1Q2MzYmFBNUE3MlwiO1xuXG4gIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGF5cywgc2V0RGF5c10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0b2tlbklkLCBzZXRUb2tlbklkXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgYWxlcnQoXCJHZXQgTWV0YU1hc2sgLT4gaHR0cHM6Ly9tZXRhbWFzay5pby9cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcbiAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIsIGFjY291bnRzWzBdKTtcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblxuICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdNYWtlIHN1cmUgeW91IGhhdmUgbWV0YW1hc2shJyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdXZSBoYXZlIHRoZSBldGhlcmV1bSBvYmplY3QnLCBldGhlcmV1bSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2FjY291bnRzJyB9KTtcblxuICAgIGlmIChhY2NvdW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgIGNvbnNvbGUubG9nKCdGb3VuZCBhbiBhdXRob3JpemVkIGFjY291bnQ6JywgYWNjb3VudCk7XG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ05vIGF1dGhvcml6ZWQgYWNjb3VudCBmb3VuZCcpO1xuICAgIH1cbiAgfTtcblxuXG4gIGNvbnN0IGNhbGxCb3Jyb3dOZnQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcbiAgICAgIGlmIChldGhlcmV1bSkge1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSk7XG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoTUFSS0VUX0FERFJFU1MsIE1hcmtldFBsYWNlLmFiaSwgc2lnbmVyKTtcbiAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR29pbmcgdG8gcG9wIHdhbGxldCBub3cgdG8gcGF5IGdhcy4uLlwiKVxuICAgICAgICBsZXQgdHggPSBhd2FpdCBjb250cmFjdC5ib3Jyb3dORlQodG9rZW5JZCwge3ZhbHVlOiBldGhlcnMudXRpbHMucGFyc2VFdGhlcigxMDAwLzE1KmRheXMpfSk7XG4gICAgICAgIC8vIFdhaXQgZm9yIHRoZSB0cmFuc2FjdGlvbiB0byBiZSBtaW5lZFxuICAgICAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgdHgud2FpdCgpO1xuICBcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRyYW5zYWN0aW9uIHdhcyBzdWNjZXNzZnVsbHkgY29tcGxldGVkXG4gICAgICAgIGlmIChyZWNlaXB0LnN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG9uZSEgaHR0cHM6Ly9odHRwczovL2dvZXJsaS5ldGhlcnNjYW4uaW8vdHgvXCIrdHguaGFzaCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiVHJhbnNhY3Rpb24gZmFpbGVkISBQbGVhc2UgdHJ5IGFnYWluXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoKGVycm9yKXtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKGNoYW5nZSwgKCkgPT4ge1xuICAgIHNldFRva2VuSWQoZm9ybS5vcHRpb24udmFsdWUpXG4gIH0pXG5cbiBcbiAgdXNlRWZmZWN0KCgpID0+IHtcblx0XHRjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQoKTtcblx0fSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nQXBwJz5cbiAgICAgIFxuICAgICAgPGZvcm0gYWN0aW9uPVwiL2FjdGlvbl9wYWdlLnBocFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiQm9va3NcIj5DaG9vc2UgYSBib29rOjwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3QgbmFtZT1cIkJvb2tzXCIgaWQ9XCJib29rc1wiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCIgb25DbGljaz17Y29uc29sZS5sb2coJ2xhbGFsYScpfT5QbGF0bydzIFJlcHVibGljPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5NZWRlYTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvZHlzc2V5XCI+T2R5c3NleTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbGlhZFwiPklsaWFkPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFlc29wXCIgPkFlc29wJ3MgRmFibGVzPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZGF5c31cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0hvdyBtYW55IGRheXM/J1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiBzZXREYXlzKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGRpc2FibGVkPXtudWxsfSBvbkNsaWNrPXtjYWxsQm9ycm93TmZ0fT5cblx0XHRcdFx0XHRcdFx0Qm9ycm93XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuICApXG5cbn0iXSwibmFtZXMiOlsibmV0d29ya3MiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZXRoZXJzIiwiTWFya2V0UGxhY2UiLCJIb21lIiwiTUFSS0VUX0FERFJFU1MiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiZGF5cyIsInNldERheXMiLCJ0b2tlbklkIiwic2V0VG9rZW5JZCIsImNvbm5lY3RXYWxsZXQiLCJldGhlcmV1bSIsIndpbmRvdyIsImFsZXJ0IiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiY2hlY2tJZldhbGxldElzQ29ubmVjdGVkIiwibGVuZ3RoIiwiYWNjb3VudCIsImNhbGxCb3Jyb3dOZnQiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsImNvbnRyYWN0IiwiQ29udHJhY3QiLCJhYmkiLCJ0eCIsImJvcnJvd05GVCIsInZhbHVlIiwidXRpbHMiLCJwYXJzZUV0aGVyIiwicmVjZWlwdCIsIndhaXQiLCJzdGF0dXMiLCJoYXNoIiwiZm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGFuZ2UiLCJvcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJsYWJlbCIsImZvciIsInNlbGVjdCIsIm5hbWUiLCJpZCIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});