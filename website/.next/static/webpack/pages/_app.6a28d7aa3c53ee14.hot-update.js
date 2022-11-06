"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [network, setNetwork] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const connectWallet = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                alert(\"Get MetaMask -> https://metamask.io/\");\n                return;\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(\"Connected\", accounts[0]);\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const checkIfWalletIsConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"Make sure you have metamask!\");\n            return;\n        } else {\n            console.log(\"We have the ethereum object\", ethereum);\n        }\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        if (accounts.length !== 0) {\n            const account = accounts[0];\n            console.log(\"Found an authorized account:\", account);\n            setCurrentAccount(account);\n        } else {\n            console.log(\"No authorized account found\");\n        }\n    };\n    const renderNotConnectedContainer = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"connect-wallet-container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectWallet,\n                className: \"cta-button connect-wallet-button\",\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n            lineNumber: 52,\n            columnNumber: 5\n        }, this);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        alt: \"Network logo\",\n                        className: \"logo\",\n                        src: network.includes(\"Polygon\") ? \"/polygonlogo.png\" : \"/ethlogo.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" Wallet: \",\n                            currentAccount.slice(0, 6),\n                            \"...\",\n                            currentAccount.slice(-4),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                        lineNumber: 71,\n                        columnNumber: 27\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \" Not connected \"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                        lineNumber: 71,\n                        columnNumber: 104\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"header-container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"title\",\n                                        children: \"\\uD83D\\uDCDAWeb3Lib\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"subtitle\",\n                                        children: \"Read, Read, Read\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            !currentAccount && renderNotConnectedContainer()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                    lineNumber: 75,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                lineNumber: 95,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n        lineNumber: 67,\n        columnNumber: 3\n    }, this);\n}\n_s(MyApp, \"rtl/HyNE9rjdBtW7P9WzbVvffOs=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBOEI7QUFDcUI7QUFJbkQsU0FBU0csTUFBTSxLQUF3QixFQUFFO1FBQTFCLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQXhCOztJQUViLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR0wsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1EsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNVSxnQkFBZ0IsVUFBWTtRQUNoQyxJQUFJO1lBQ0YsTUFBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR0M7WUFFckIsSUFBSSxDQUFDRCxVQUFVO2dCQUNiRSxNQUFNO2dCQUNOO1lBQ0YsQ0FBQztZQUVELE1BQU1DLFdBQVcsTUFBTUgsU0FBU0ksT0FBTyxDQUFDO2dCQUFFQyxRQUFRO1lBQXNCO1lBRXhFQyxRQUFRQyxHQUFHLENBQUMsYUFBYUosUUFBUSxDQUFDLEVBQUU7WUFDcENULGtCQUFrQlMsUUFBUSxDQUFDLEVBQUU7UUFDL0IsRUFBRSxPQUFPSyxPQUFPO1lBQ2RGLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDZDtJQUNGO0lBRUEsTUFBTUMsMkJBQTJCLFVBQVk7UUFDM0MsTUFBTSxFQUFFVCxTQUFRLEVBQUUsR0FBR0M7UUFFckIsSUFBSSxDQUFDRCxVQUFVO1lBQ2JNLFFBQVFDLEdBQUcsQ0FBQztZQUNaO1FBQ0YsT0FBTztZQUNMRCxRQUFRQyxHQUFHLENBQUMsK0JBQStCUDtRQUM3QyxDQUFDO1FBRUQsTUFBTUcsV0FBVyxNQUFNSCxTQUFTSSxPQUFPLENBQUM7WUFBRUMsUUFBUTtRQUFlO1FBRWpFLElBQUlGLFNBQVNPLE1BQU0sS0FBSyxHQUFHO1lBQ3pCLE1BQU1DLFVBQVVSLFFBQVEsQ0FBQyxFQUFFO1lBQzNCRyxRQUFRQyxHQUFHLENBQUMsZ0NBQWdDSTtZQUM1Q2pCLGtCQUFrQmlCO1FBQ3BCLE9BQU87WUFDTEwsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQztJQUNIO0lBRUMsTUFBTUssOEJBQThCLGtCQUNuQyw4REFBQ0M7WUFBSUMsV0FBVTtzQkFHYiw0RUFBQ0M7Z0JBQU9DLFNBQVNqQjtnQkFBZWUsV0FBVTswQkFBbUM7Ozs7Ozs7Ozs7O0lBTWpGMUIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkcUI7SUFDRixHQUFHLEVBQUU7SUFHTCxxQkFDQSw4REFBQ0k7OzBCQUVHLDhEQUFDQTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNHO3dCQUFJQyxLQUFJO3dCQUFlSixXQUFVO3dCQUFPSyxLQUFLeEIsUUFBUXlCLFFBQVEsQ0FBQyxhQUFhLHFCQUFxQixjQUFjOzs7Ozs7b0JBQzlHM0IsK0JBQWlCLDhEQUFDNEI7OzRCQUFFOzRCQUFVNUIsZUFBZTZCLEtBQUssQ0FBQyxHQUFHOzRCQUFHOzRCQUFJN0IsZUFBZTZCLEtBQUssQ0FBQyxDQUFDOzRCQUFHOzs7Ozs7NkNBQVEsOERBQUNEO2tDQUFFOzs7Ozs0QkFBbUI7Ozs7Ozs7MEJBR3JILDhEQUFDUjtnQkFBSUMsV0FBVTswQkFDakIsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDUzs7MENBQ0MsOERBQUNWO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ087d0NBQUVQLFdBQVU7a0RBQVE7Ozs7OztrREFDckIsOERBQUNPO3dDQUFFUCxXQUFVO2tEQUFXOzs7Ozs7Ozs7Ozs7NEJBSXZCLENBQUNyQixrQkFBa0JtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBWTVCLDhEQUFDckI7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBTTVCO0dBL0ZTRjtLQUFBQTtBQWlHVCwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtuZXR3b3JrLCBzZXROZXR3b3JrXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXG4gICAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICAgIGFsZXJ0KFwiR2V0IE1ldGFNYXNrIC0+IGh0dHBzOi8vbWV0YW1hc2suaW8vXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XG4gICAgXG4gICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZFwiLCBhY2NvdW50c1swXSk7XG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICBjb25zb2xlLmxvZygnTWFrZSBzdXJlIHlvdSBoYXZlIG1ldGFtYXNrIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnV2UgaGF2ZSB0aGUgZXRoZXJldW0gb2JqZWN0JywgZXRoZXJldW0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9hY2NvdW50cycgfSk7XG5cbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICBjb25zb2xlLmxvZygnRm91bmQgYW4gYXV0aG9yaXplZCBhY2NvdW50OicsIGFjY291bnQpO1xuICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBhdXRob3JpemVkIGFjY291bnQgZm91bmQnKTtcbiAgICB9XG4gIH07XG5cbiAgIGNvbnN0IHJlbmRlck5vdENvbm5lY3RlZENvbnRhaW5lciA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbm5lY3Qtd2FsbGV0LWNvbnRhaW5lclwiPlxuICAgICAgey8qIDxpbWcgc3JjPVwiaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvM29oaHd5dEhjdXNTQ1hYT1VnL2dpcGh5LmdpZlwiIGFsdD1cIk5pbmphIGRvbnV0IGdpZlwiIC8+ICovfVxuICAgICAgey8qIENhbGwgdGhlIGNvbm5lY3RXYWxsZXQgZnVuY3Rpb24gd2UganVzdCB3cm90ZSB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZCAqL31cbiAgICAgIDxidXR0b24gb25DbGljaz17Y29ubmVjdFdhbGxldH0gY2xhc3NOYW1lPVwiY3RhLWJ1dHRvbiBjb25uZWN0LXdhbGxldC1idXR0b25cIj5cbiAgICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkKCk7XG4gIH0sIFtdKTtcblxuXG4gIHJldHVybiAoXG4gIDxkaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgPGltZyBhbHQ9XCJOZXR3b3JrIGxvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPXtuZXR3b3JrLmluY2x1ZGVzKFwiUG9seWdvblwiKSA/ICcvcG9seWdvbmxvZ28ucG5nJyA6ICcvZXRobG9nby5wbmcnfSAvPlxuICAgICAgICB7Y3VycmVudEFjY291bnQgPyA8cD4gV2FsbGV0OiB7Y3VycmVudEFjY291bnQuc2xpY2UoMCwgNil9Li4ue2N1cnJlbnRBY2NvdW50LnNsaWNlKC00KX0gPC9wPiA6IDxwPiBOb3QgY29ubmVjdGVkIDwvcD59XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPvCfk5pXZWIzTGliPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5SZWFkLCBSZWFkLCBSZWFkPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgXG4gICAgICAgICAgICB7IWN1cnJlbnRBY2NvdW50ICYmIHJlbmRlck5vdENvbm5lY3RlZENvbnRhaW5lcigpfVxuXG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgIFxuICAgICAgICAgIHsvKiB0aGUgc2VhcmNoIGJhciAqL31cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3NlYXJjaCc+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3NlYXJjaCcgcGxhY2Vob2xkZXI9J3NlYXJjaCBib29rcyc+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cbiAgICBcblxuICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJuZXR3b3JrIiwic2V0TmV0d29yayIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJjb25uZWN0V2FsbGV0IiwiZXRoZXJldW0iLCJ3aW5kb3ciLCJhbGVydCIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsImxlbmd0aCIsImFjY291bnQiLCJyZW5kZXJOb3RDb25uZWN0ZWRDb250YWluZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiaW1nIiwiYWx0Iiwic3JjIiwiaW5jbHVkZXMiLCJwIiwic2xpY2UiLCJoZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});