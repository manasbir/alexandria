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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_networks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/networks */ \"./utils/networks.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _public_MarketPlace_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/MarketPlace.json */ \"./public/MarketPlace.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const MARKET_ADDRESS = \"0x87DcCE68e38DA2c9B8D8577fB1AdA5Cc3baA5A72\";\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [days, setDays] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [tokenId, setTokenId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const connectWallet = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                alert(\"Get MetaMask -> https://metamask.io/\");\n                return;\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(\"Connected\", accounts[0]);\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const checkIfWalletIsConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"Make sure you have metamask!\");\n            return;\n        } else {\n            console.log(\"We have the ethereum object\", ethereum);\n        }\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        if (accounts.length !== 0) {\n            const account = accounts[0];\n            console.log(\"Found an authorized account:\", account);\n            setCurrentAccount(account);\n        } else {\n            console.log(\"No authorized account found\");\n        }\n    };\n    const callBorrowNft = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (ethereum) {\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethereum);\n                const signer = provider.getSigner();\n                const contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(MARKET_ADDRESS, _public_MarketPlace_json__WEBPACK_IMPORTED_MODULE_3__.abi, signer);\n                console.log(\"Going to pop wallet now to pay gas...\");\n                let tx = await contract.borrowNFT(tokenId, {\n                    value: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(1000 / 15 * days)\n                });\n                // Wait for the transaction to be mined\n                const receipt = await tx.wait();\n                // Check if the transaction was successfully completed\n                if (receipt.status === 1) {\n                    console.log(\"Done! https://https://goerli.etherscan.io/tx/\" + tx.hash);\n                } else {\n                    alert(\"Transaction failed! Please try again\");\n                }\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    let form = document.querySelector(\"form\");\n    form.addEventListener(change);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: \"/action_page.php\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        for: \"Books\",\n                        children: \"Choose a book:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        name: \"Books\",\n                        id: \"books\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"platosrepublic\",\n                                onClick: console.log(\"lalala\"),\n                                children: \"Plato's Republic\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"medea\",\n                                children: \"Medea\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"odyssey\",\n                                children: \"Odyssey\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"iliad\",\n                                children: \"Iliad\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"aesop\",\n                                children: \"Aesop's Fables\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: days,\n                        placeholder: \"How many days?\",\n                        onChange: (e)=>setDays(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 105,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"button-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            disabled: null,\n                            onClick: callBorrowNft,\n                            children: \"Borrow\"\n                        }, void 0, false, {\n                            fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                            lineNumber: 113,\n                            columnNumber: 8\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 112,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"U3lFt/uDapJWjBkE+tV66Z2n/4w=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUE2QztBQUNNO0FBQ25CO0FBQ3FCO0FBR3RDLFNBQVNNLE9BQU87O0lBRTdCLE1BQU1DLGlCQUFpQjtJQUV2QixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFFdkMsTUFBTVcsZ0JBQWdCLFVBQVk7UUFDaEMsSUFBSTtZQUNGLE1BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdDO1lBRXJCLElBQUksQ0FBQ0QsVUFBVTtnQkFDYkUsTUFBTTtnQkFDTjtZQUNGLENBQUM7WUFFRCxNQUFNQyxXQUFXLE1BQU1ILFNBQVNJLE9BQU8sQ0FBQztnQkFBRUMsUUFBUTtZQUFzQjtZQUV4RUMsUUFBUUMsR0FBRyxDQUFDLGFBQWFKLFFBQVEsQ0FBQyxFQUFFO1lBQ3BDVCxrQkFBa0JTLFFBQVEsQ0FBQyxFQUFFO1FBQy9CLEVBQUUsT0FBT0ssT0FBTztZQUNkRixRQUFRQyxHQUFHLENBQUNDO1FBQ2Q7SUFDRjtJQUVBLE1BQU1DLDJCQUEyQixVQUFZO1FBQzNDLE1BQU0sRUFBRVQsU0FBUSxFQUFFLEdBQUdDO1FBRXJCLElBQUksQ0FBQ0QsVUFBVTtZQUNiTSxRQUFRQyxHQUFHLENBQUM7WUFDWjtRQUNGLE9BQU87WUFDTEQsUUFBUUMsR0FBRyxDQUFDLCtCQUErQlA7UUFDN0MsQ0FBQztRQUVELE1BQU1HLFdBQVcsTUFBTUgsU0FBU0ksT0FBTyxDQUFDO1lBQUVDLFFBQVE7UUFBZTtRQUVqRSxJQUFJRixTQUFTTyxNQUFNLEtBQUssR0FBRztZQUN6QixNQUFNQyxVQUFVUixRQUFRLENBQUMsRUFBRTtZQUMzQkcsUUFBUUMsR0FBRyxDQUFDLGdDQUFnQ0k7WUFDNUNqQixrQkFBa0JpQjtRQUNwQixPQUFPO1lBQ0xMLFFBQVFDLEdBQUcsQ0FBQztRQUNkLENBQUM7SUFDSDtJQUdBLE1BQU1LLGdCQUFnQixVQUFZO1FBQ2hDLElBQUk7WUFDRixNQUFNLEVBQUVaLFNBQVEsRUFBRSxHQUFHQztZQUNyQixJQUFJRCxVQUFVO2dCQUNaLE1BQU1hLFdBQVcsSUFBSXhCLGlFQUE2QixDQUFDVztnQkFDbkQsTUFBTWdCLFNBQVNILFNBQVNJLFNBQVM7Z0JBQ2pDLE1BQU1DLFdBQVcsSUFBSTdCLG1EQUFlLENBQUNHLGdCQUFnQkYseURBQWUsRUFBRTBCO2dCQUV0RVYsUUFBUUMsR0FBRyxDQUFDO2dCQUNaLElBQUljLEtBQUssTUFBTUgsU0FBU0ksU0FBUyxDQUFDekIsU0FBUztvQkFBQzBCLE9BQU9sQywyREFBdUIsQ0FBQyxPQUFLLEtBQUdNO2dCQUFLO2dCQUN4Rix1Q0FBdUM7Z0JBQ3ZDLE1BQU0rQixVQUFVLE1BQU1MLEdBQUdNLElBQUk7Z0JBRTdCLHNEQUFzRDtnQkFDdEQsSUFBSUQsUUFBUUUsTUFBTSxLQUFLLEdBQUc7b0JBQ3hCdEIsUUFBUUMsR0FBRyxDQUFDLGtEQUFnRGMsR0FBR1EsSUFBSTtnQkFDM0QsT0FDTDtvQkFDSDNCLE1BQU07Z0JBQ1IsQ0FBQztZQUNILENBQUM7UUFDSCxFQUNBLE9BQU1NLE9BQU07WUFDVkYsUUFBUUMsR0FBRyxDQUFDQztRQUNkO0lBQ0Y7SUFFQSxJQUFJc0IsT0FBT0MsU0FBU0MsYUFBYSxDQUFDO0lBQ2xDRixLQUFLRyxnQkFBZ0IsQ0FBQ0M7SUFHdEIvQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2hCc0I7SUFDRCxHQUFHLEVBQUU7SUFFSixxQkFDRSw4REFBQzBCO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDTjtnQkFBS08sUUFBTzs7a0NBQ1gsOERBQUNDO3dCQUFNQyxLQUFJO2tDQUFROzs7Ozs7a0NBQ25CLDhEQUFDQzt3QkFBT0MsTUFBSzt3QkFBUUMsSUFBRzs7MENBQ3RCLDhEQUFDQztnQ0FBT3BCLE9BQU07Z0NBQWlCcUIsU0FBU3RDLFFBQVFDLEdBQUcsQ0FBQzswQ0FBVzs7Ozs7OzBDQUMvRCw4REFBQ29DO2dDQUFPcEIsT0FBTTswQ0FBUTs7Ozs7OzBDQUN0Qiw4REFBQ29CO2dDQUFPcEIsT0FBTTswQ0FBVTs7Ozs7OzBDQUN4Qiw4REFBQ29CO2dDQUFPcEIsT0FBTTswQ0FBUTs7Ozs7OzBDQUN0Qiw4REFBQ29CO2dDQUFPcEIsT0FBTTswQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkzQiw4REFBQ1k7Z0JBQUlDLFdBQVU7O2tDQUNmLDhEQUFDUzt3QkFDQUMsTUFBSzt3QkFDTHZCLE9BQU81Qjt3QkFDUG9ELGFBQVk7d0JBQ1pDLFVBQVVDLENBQUFBLElBQUtyRCxRQUFRcUQsRUFBRUMsTUFBTSxDQUFDM0IsS0FBSzs7Ozs7O2tDQUdoQyw4REFBQ1k7d0JBQUlDLFdBQVU7a0NBQ3BCLDRFQUFDZTs0QkFBT0MsVUFBVSxJQUFJOzRCQUFFUixTQUFTaEM7c0NBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXZELENBQUM7R0FwSHVCckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuZXR3b3JrcyB9IGZyb20gJy4uL3V0aWxzL25ldHdvcmtzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgTWFya2V0UGxhY2UgZnJvbSBcIi4uL3B1YmxpYy9NYXJrZXRQbGFjZS5qc29uXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBNQVJLRVRfQUREUkVTUyA9IFwiMHg4N0RjQ0U2OGUzOERBMmM5QjhEODU3N2ZCMUFkQTVDYzNiYUE1QTcyXCI7XG5cbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkYXlzLCBzZXREYXlzXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Rva2VuSWQsIHNldFRva2VuSWRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblxuICAgICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgICBhbGVydChcIkdldCBNZXRhTWFzayAtPiBodHRwczovL21ldGFtYXNrLmlvL1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xuICAgIFxuICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWRcIiwgYWNjb3VudHNbMF0pO1xuICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICBjb25zdCBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXG4gICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgY29uc29sZS5sb2coJ01ha2Ugc3VyZSB5b3UgaGF2ZSBtZXRhbWFzayEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ1dlIGhhdmUgdGhlIGV0aGVyZXVtIG9iamVjdCcsIGV0aGVyZXVtKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnIH0pO1xuXG4gICAgaWYgKGFjY291bnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgY29uc29sZS5sb2coJ0ZvdW5kIGFuIGF1dGhvcml6ZWQgYWNjb3VudDonLCBhY2NvdW50KTtcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gYXV0aG9yaXplZCBhY2NvdW50IGZvdW5kJyk7XG4gICAgfVxuICB9O1xuXG5cbiAgY29uc3QgY2FsbEJvcnJvd05mdCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuICAgICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKTtcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChNQVJLRVRfQUREUkVTUywgTWFya2V0UGxhY2UuYWJpLCBzaWduZXIpO1xuICBcbiAgICAgICAgY29uc29sZS5sb2coXCJHb2luZyB0byBwb3Agd2FsbGV0IG5vdyB0byBwYXkgZ2FzLi4uXCIpXG4gICAgICAgIGxldCB0eCA9IGF3YWl0IGNvbnRyYWN0LmJvcnJvd05GVCh0b2tlbklkLCB7dmFsdWU6IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKDEwMDAvMTUqZGF5cyl9KTtcbiAgICAgICAgLy8gV2FpdCBmb3IgdGhlIHRyYW5zYWN0aW9uIHRvIGJlIG1pbmVkXG4gICAgICAgIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB0eC53YWl0KCk7XG4gIFxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdHJhbnNhY3Rpb24gd2FzIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZWRcbiAgICAgICAgaWYgKHJlY2VpcHQuc3RhdHVzID09PSAxKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJEb25lISBodHRwczovL2h0dHBzOi8vZ29lcmxpLmV0aGVyc2Nhbi5pby90eC9cIit0eC5oYXNoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJUcmFuc2FjdGlvbiBmYWlsZWQhIFBsZWFzZSB0cnkgYWdhaW5cIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoY2hhbmdlKVxuIFxuIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCgpO1xuXHR9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdBcHAnPlxuICAgICAgXG4gICAgICA8Zm9ybSBhY3Rpb249XCIvYWN0aW9uX3BhZ2UucGhwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJCb29rc1wiPkNob29zZSBhIGJvb2s6PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBuYW1lPVwiQm9va3NcIiBpZD1cImJvb2tzXCI+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBsYXRvc3JlcHVibGljXCIgb25DbGljaz17Y29uc29sZS5sb2coJ2xhbGFsYScpfT5QbGF0bydzIFJlcHVibGljPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGVhXCI+TWVkZWE8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib2R5c3NleVwiPk9keXNzZXk8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaWxpYWRcIj5JbGlhZDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhZXNvcFwiID5BZXNvcCdzIEZhYmxlczwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2RheXN9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdIb3cgbWFueSBkYXlzPydcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gc2V0RGF5cyhlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBkaXNhYmxlZD17bnVsbH0gb25DbGljaz17Y2FsbEJvcnJvd05mdH0+XG5cdFx0XHRcdFx0XHRcdEJvcnJvd1xuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgKVxuXG59Il0sIm5hbWVzIjpbIm5ldHdvcmtzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImV0aGVycyIsIk1hcmtldFBsYWNlIiwiSG9tZSIsIk1BUktFVF9BRERSRVNTIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImRheXMiLCJzZXREYXlzIiwidG9rZW5JZCIsInNldFRva2VuSWQiLCJjb25uZWN0V2FsbGV0IiwiZXRoZXJldW0iLCJ3aW5kb3ciLCJhbGVydCIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsImxlbmd0aCIsImFjY291bnQiLCJjYWxsQm9ycm93TmZ0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwiYWJpIiwidHgiLCJib3Jyb3dORlQiLCJ2YWx1ZSIsInV0aWxzIiwicGFyc2VFdGhlciIsInJlY2VpcHQiLCJ3YWl0Iiwic3RhdHVzIiwiaGFzaCIsImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWN0aW9uIiwibGFiZWwiLCJmb3IiLCJzZWxlY3QiLCJuYW1lIiwiaWQiLCJvcHRpb24iLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});