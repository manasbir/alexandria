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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_networks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/networks */ \"./utils/networks.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _public_MarketPlace_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/MarketPlace.json */ \"./public/MarketPlace.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const MARKET_ADDRESS = \"0x87DcCE68e38DA2c9B8D8577fB1AdA5Cc3baA5A72\";\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [days, setDays] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [tokenId, setTokenId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const options = [\n        {\n            value: \"\",\n            text: \"--Choose an option--\"\n        },\n        {\n            value: \"1\",\n            text: \"Plato's Republic\"\n        },\n        {\n            value: \"2\",\n            text: \"Medea\"\n        },\n        {\n            value: \"3\",\n            text: \"Odyssey\"\n        },\n        {\n            value: \"4\",\n            text: \"Iliad\"\n        },\n        {\n            value: \"5\",\n            text: \"Aesop's Fables\"\n        }\n    ];\n    const handleChange = (event)=>{\n        console.log(event.target.value);\n        setSelected(event.target.value);\n    };\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(options[0].value);\n    const connectWallet = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                alert(\"Get MetaMask -> https://metamask.io/\");\n                return;\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(\"Connected\", accounts[0]);\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const checkIfWalletIsConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"Make sure you have metamask!\");\n            return;\n        } else {\n            console.log(\"We have the ethereum object\", ethereum);\n        }\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        if (accounts.length !== 0) {\n            const account = accounts[0];\n            console.log(\"Found an authorized account:\", account);\n            setCurrentAccount(account);\n        } else {\n            console.log(\"No authorized account found\");\n        }\n    };\n    const callBorrowNft = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (ethereum) {\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethereum);\n                const signer = provider.getSigner();\n                const contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(MARKET_ADDRESS, _public_MarketPlace_json__WEBPACK_IMPORTED_MODULE_3__.abi, signer);\n                console.log(\"Going to pop wallet now to pay gas...\");\n                let tx = await contract.borrowNFT(tokenId, {\n                    value: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(1000 / 15 * days)\n                });\n                // Wait for the transaction to be mined\n                const receipt = await tx.wait();\n                // Check if the transaction was successfully completed\n                if (receipt.status === 1) {\n                    console.log(\"Done! https://https://goerli.etherscan.io/tx/\" + tx.hash);\n                } else {\n                    alert(\"Transaction failed! Please try again\");\n                }\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    // let form = document.querySelector('form');\n    // form.addEventListener(change, () => {\n    //   setTokenId(form.option.value)\n    // })\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                for: \"Books\",\n                children: \"Choose a book:\"\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                lineNumber: 112,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                name: \"Books\",\n                id: \"books\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"1\",\n                        children: \"Plato's Republic\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"2\",\n                        children: \"Medea\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"3\",\n                        children: \"Odyssey\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"4\",\n                        children: \"Iliad\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"5\",\n                        children: \"Aesop's Fables\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                lineNumber: 113,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: days,\n                        placeholder: \"How many days?\",\n                        onChange: (e)=>setDays(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 123,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"button-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            disabled: null,\n                            onClick: callBorrowNft,\n                            children: \"Borrow\"\n                        }, void 0, false, {\n                            fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                            lineNumber: 131,\n                            columnNumber: 8\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 130,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"yrs5FEzH1S/xN+B48xP7aQT1/6k=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUE2QztBQUNNO0FBQ25CO0FBQ3FCO0FBR3RDLFNBQVNNLE9BQU87O0lBRTdCLE1BQU1DLGlCQUFpQjtJQUV2QixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFFdkMsTUFBTVcsVUFBVTtRQUNkO1lBQUNDLE9BQU87WUFBSUMsTUFBTTtRQUFzQjtRQUN4QztZQUFDRCxPQUFPO1lBQUtDLE1BQU07UUFBa0I7UUFDckM7WUFBQ0QsT0FBTztZQUFLQyxNQUFNO1FBQU87UUFDMUI7WUFBQ0QsT0FBTztZQUFLQyxNQUFNO1FBQVM7UUFDNUI7WUFBQ0QsT0FBTztZQUFLQyxNQUFNO1FBQU87UUFDMUI7WUFBQ0QsT0FBTztZQUFLQyxNQUFNO1FBQWdCO0tBQ3BDO0lBRUQsTUFBTUMsZUFBZUMsQ0FBQUEsUUFBUztRQUM1QkMsUUFBUUMsR0FBRyxDQUFDRixNQUFNRyxNQUFNLENBQUNOLEtBQUs7UUFDOUJPLFlBQVlKLE1BQU1HLE1BQU0sQ0FBQ04sS0FBSztJQUNoQztJQUVBLE1BQU0sQ0FBQ1EsVUFBVUQsWUFBWSxHQUFHbkIsK0NBQVFBLENBQUNXLE9BQU8sQ0FBQyxFQUFFLENBQUNDLEtBQUs7SUFFekQsTUFBTVMsZ0JBQWdCLFVBQVk7UUFDaEMsSUFBSTtZQUNGLE1BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdDO1lBRXJCLElBQUksQ0FBQ0QsVUFBVTtnQkFDYkUsTUFBTTtnQkFDTjtZQUNGLENBQUM7WUFFRCxNQUFNQyxXQUFXLE1BQU1ILFNBQVNJLE9BQU8sQ0FBQztnQkFBRUMsUUFBUTtZQUFzQjtZQUV4RVgsUUFBUUMsR0FBRyxDQUFDLGFBQWFRLFFBQVEsQ0FBQyxFQUFFO1lBQ3BDbkIsa0JBQWtCbUIsUUFBUSxDQUFDLEVBQUU7UUFDL0IsRUFBRSxPQUFPRyxPQUFPO1lBQ2RaLFFBQVFDLEdBQUcsQ0FBQ1c7UUFDZDtJQUNGO0lBRUEsTUFBTUMsMkJBQTJCLFVBQVk7UUFDM0MsTUFBTSxFQUFFUCxTQUFRLEVBQUUsR0FBR0M7UUFFckIsSUFBSSxDQUFDRCxVQUFVO1lBQ2JOLFFBQVFDLEdBQUcsQ0FBQztZQUNaO1FBQ0YsT0FBTztZQUNMRCxRQUFRQyxHQUFHLENBQUMsK0JBQStCSztRQUM3QyxDQUFDO1FBRUQsTUFBTUcsV0FBVyxNQUFNSCxTQUFTSSxPQUFPLENBQUM7WUFBRUMsUUFBUTtRQUFlO1FBRWpFLElBQUlGLFNBQVNLLE1BQU0sS0FBSyxHQUFHO1lBQ3pCLE1BQU1DLFVBQVVOLFFBQVEsQ0FBQyxFQUFFO1lBQzNCVCxRQUFRQyxHQUFHLENBQUMsZ0NBQWdDYztZQUM1Q3pCLGtCQUFrQnlCO1FBQ3BCLE9BQU87WUFDTGYsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQztJQUNIO0lBR0EsTUFBTWUsZ0JBQWdCLFVBQVk7UUFDaEMsSUFBSTtZQUNGLE1BQU0sRUFBRVYsU0FBUSxFQUFFLEdBQUdDO1lBQ3JCLElBQUlELFVBQVU7Z0JBQ1osTUFBTVcsV0FBVyxJQUFJaEMsaUVBQTZCLENBQUNxQjtnQkFDbkQsTUFBTWMsU0FBU0gsU0FBU0ksU0FBUztnQkFDakMsTUFBTUMsV0FBVyxJQUFJckMsbURBQWUsQ0FBQ0csZ0JBQWdCRix5REFBZSxFQUFFa0M7Z0JBRXRFcEIsUUFBUUMsR0FBRyxDQUFDO2dCQUNaLElBQUl3QixLQUFLLE1BQU1ILFNBQVNJLFNBQVMsQ0FBQ2pDLFNBQVM7b0JBQUNHLE9BQU9YLDJEQUF1QixDQUFDLE9BQUssS0FBR007Z0JBQUs7Z0JBQ3hGLHVDQUF1QztnQkFDdkMsTUFBTXNDLFVBQVUsTUFBTUosR0FBR0ssSUFBSTtnQkFFN0Isc0RBQXNEO2dCQUN0RCxJQUFJRCxRQUFRRSxNQUFNLEtBQUssR0FBRztvQkFDeEIvQixRQUFRQyxHQUFHLENBQUMsa0RBQWdEd0IsR0FBR08sSUFBSTtnQkFDM0QsT0FDTDtvQkFDSHhCLE1BQU07Z0JBQ1IsQ0FBQztZQUNILENBQUM7UUFDSCxFQUNBLE9BQU1JLE9BQU07WUFDVlosUUFBUUMsR0FBRyxDQUFDVztRQUNkO0lBQ0Y7SUFFQSw2Q0FBNkM7SUFDN0Msd0NBQXdDO0lBQ3hDLGtDQUFrQztJQUNsQyxLQUFLO0lBR0w3QixnREFBU0EsQ0FBQyxJQUFNO1FBQ2hCOEI7SUFDRCxHQUFHLEVBQUU7SUFFSixxQkFDRSw4REFBQ29CO1FBQUlDLFdBQVU7OzBCQUdYLDhEQUFDQztnQkFBTUMsS0FBSTswQkFBUTs7Ozs7OzBCQUNuQiw4REFBQ0M7Z0JBQU9DLE1BQUs7Z0JBQVFDLElBQUc7O2tDQUN0Qiw4REFBQ0M7d0JBQU81QyxPQUFNO2tDQUFJOzs7Ozs7a0NBQ2xCLDhEQUFDNEM7d0JBQU81QyxPQUFNO2tDQUFJOzs7Ozs7a0NBQ2xCLDhEQUFDNEM7d0JBQU81QyxPQUFNO2tDQUFJOzs7Ozs7a0NBQ2xCLDhEQUFDNEM7d0JBQU81QyxPQUFNO2tDQUFJOzs7Ozs7a0NBQ2xCLDhEQUFDNEM7d0JBQU81QyxPQUFNO2tDQUFLOzs7Ozs7Ozs7Ozs7MEJBSXZCLDhEQUFDcUM7Z0JBQUlDLFdBQVU7O2tDQUNmLDhEQUFDTzt3QkFDQUMsTUFBSzt3QkFDTDlDLE9BQU9MO3dCQUNQb0QsYUFBWTt3QkFDWkMsVUFBVUMsQ0FBQUEsSUFBS3JELFFBQVFxRCxFQUFFM0MsTUFBTSxDQUFDTixLQUFLOzs7Ozs7a0NBR2hDLDhEQUFDcUM7d0JBQUlDLFdBQVU7a0NBQ3BCLDRFQUFDWTs0QkFBT0MsVUFBVSxJQUFJOzRCQUFFQyxTQUFTaEM7c0NBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXZELENBQUM7R0EzSXVCN0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuZXR3b3JrcyB9IGZyb20gJy4uL3V0aWxzL25ldHdvcmtzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgTWFya2V0UGxhY2UgZnJvbSBcIi4uL3B1YmxpYy9NYXJrZXRQbGFjZS5qc29uXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBNQVJLRVRfQUREUkVTUyA9IFwiMHg4N0RjQ0U2OGUzOERBMmM5QjhEODU3N2ZCMUFkQTVDYzNiYUE1QTcyXCI7XG5cbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkYXlzLCBzZXREYXlzXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Rva2VuSWQsIHNldFRva2VuSWRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAge3ZhbHVlOiAnJywgdGV4dDogJy0tQ2hvb3NlIGFuIG9wdGlvbi0tJ30sXG4gICAge3ZhbHVlOiAnMScsIHRleHQ6IFwiUGxhdG8ncyBSZXB1YmxpY1wifSxcbiAgICB7dmFsdWU6ICcyJywgdGV4dDogJ01lZGVhJ30sXG4gICAge3ZhbHVlOiAnMycsIHRleHQ6ICdPZHlzc2V5J30sXG4gICAge3ZhbHVlOiAnNCcsIHRleHQ6ICdJbGlhZCd9LFxuICAgIHt2YWx1ZTogJzUnLCB0ZXh0OiBcIkFlc29wJ3MgRmFibGVzXCJ9LFxuICBdO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldFNlbGVjdGVkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShvcHRpb25zWzBdLnZhbHVlKTtcblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgYWxlcnQoXCJHZXQgTWV0YU1hc2sgLT4gaHR0cHM6Ly9tZXRhbWFzay5pby9cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcbiAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIsIGFjY291bnRzWzBdKTtcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblxuICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdNYWtlIHN1cmUgeW91IGhhdmUgbWV0YW1hc2shJyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdXZSBoYXZlIHRoZSBldGhlcmV1bSBvYmplY3QnLCBldGhlcmV1bSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2FjY291bnRzJyB9KTtcblxuICAgIGlmIChhY2NvdW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgIGNvbnNvbGUubG9nKCdGb3VuZCBhbiBhdXRob3JpemVkIGFjY291bnQ6JywgYWNjb3VudCk7XG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ05vIGF1dGhvcml6ZWQgYWNjb3VudCBmb3VuZCcpO1xuICAgIH1cbiAgfTtcblxuXG4gIGNvbnN0IGNhbGxCb3Jyb3dOZnQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcbiAgICAgIGlmIChldGhlcmV1bSkge1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSk7XG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoTUFSS0VUX0FERFJFU1MsIE1hcmtldFBsYWNlLmFiaSwgc2lnbmVyKTtcbiAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR29pbmcgdG8gcG9wIHdhbGxldCBub3cgdG8gcGF5IGdhcy4uLlwiKVxuICAgICAgICBsZXQgdHggPSBhd2FpdCBjb250cmFjdC5ib3Jyb3dORlQodG9rZW5JZCwge3ZhbHVlOiBldGhlcnMudXRpbHMucGFyc2VFdGhlcigxMDAwLzE1KmRheXMpfSk7XG4gICAgICAgIC8vIFdhaXQgZm9yIHRoZSB0cmFuc2FjdGlvbiB0byBiZSBtaW5lZFxuICAgICAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgdHgud2FpdCgpO1xuICBcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRyYW5zYWN0aW9uIHdhcyBzdWNjZXNzZnVsbHkgY29tcGxldGVkXG4gICAgICAgIGlmIChyZWNlaXB0LnN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG9uZSEgaHR0cHM6Ly9odHRwczovL2dvZXJsaS5ldGhlcnNjYW4uaW8vdHgvXCIrdHguaGFzaCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiVHJhbnNhY3Rpb24gZmFpbGVkISBQbGVhc2UgdHJ5IGFnYWluXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoKGVycm9yKXtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvLyBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgLy8gZm9ybS5hZGRFdmVudExpc3RlbmVyKGNoYW5nZSwgKCkgPT4ge1xuICAvLyAgIHNldFRva2VuSWQoZm9ybS5vcHRpb24udmFsdWUpXG4gIC8vIH0pXG5cbiBcbiAgdXNlRWZmZWN0KCgpID0+IHtcblx0XHRjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQoKTtcblx0fSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nQXBwJz5cbiAgICAgIFxuICAgICBcbiAgICAgICAgPGxhYmVsIGZvcj1cIkJvb2tzXCI+Q2hvb3NlIGEgYm9vazo8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJCb29rc1wiIGlkPVwiYm9va3NcIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPlBsYXRvJ3MgUmVwdWJsaWM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPk1lZGVhPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5PZHlzc2V5PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj5JbGlhZDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCIgPkFlc29wJ3MgRmFibGVzPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgIFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZGF5c31cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0hvdyBtYW55IGRheXM/J1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiBzZXREYXlzKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGRpc2FibGVkPXtudWxsfSBvbkNsaWNrPXtjYWxsQm9ycm93TmZ0fT5cblx0XHRcdFx0XHRcdFx0Qm9ycm93XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIFxuICAgICAgIFxuICAgIFxuXG4gICAgPC9kaXY+XG5cblxuICApXG5cbn0iXSwibmFtZXMiOlsibmV0d29ya3MiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZXRoZXJzIiwiTWFya2V0UGxhY2UiLCJIb21lIiwiTUFSS0VUX0FERFJFU1MiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiZGF5cyIsInNldERheXMiLCJ0b2tlbklkIiwic2V0VG9rZW5JZCIsIm9wdGlvbnMiLCJ2YWx1ZSIsInRleHQiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJzZXRTZWxlY3RlZCIsInNlbGVjdGVkIiwiY29ubmVjdFdhbGxldCIsImV0aGVyZXVtIiwid2luZG93IiwiYWxlcnQiLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJlcnJvciIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsImxlbmd0aCIsImFjY291bnQiLCJjYWxsQm9ycm93TmZ0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwiYWJpIiwidHgiLCJib3Jyb3dORlQiLCJ1dGlscyIsInBhcnNlRXRoZXIiLCJyZWNlaXB0Iiwid2FpdCIsInN0YXR1cyIsImhhc2giLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImZvciIsInNlbGVjdCIsIm5hbWUiLCJpZCIsIm9wdGlvbiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});