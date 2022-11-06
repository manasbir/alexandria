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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [network, setNetwork] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const connectWallet = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                alert(\"Get MetaMask -> https://metamask.io/\");\n                return;\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(\"Connected\", accounts[0]);\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const checkIfWalletIsConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"Make sure you have metamask!\");\n            return;\n        } else {\n            console.log(\"We have the ethereum object\", ethereum);\n        }\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        if (accounts.length !== 0) {\n            const account = accounts[0];\n            console.log(\"Found an authorized account:\", account);\n            setCurrentAccount(account);\n        } else {\n            console.log(\"No authorized account found\");\n        }\n    };\n    const renderNotConnectedContainer = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"connect-wallet-container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectWallet,\n                className: \"cta-button connect-wallet-button\",\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n            lineNumber: 52,\n            columnNumber: 5\n        }, this);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"title-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"right\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: \"Network logo\",\n                                className: \"logo\",\n                                src: network.includes(\"Polygon\") ? \"/polygonlogo.png\" : \"/ethlogo.png\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                                lineNumber: 70,\n                                columnNumber: 9\n                            }, this),\n                            currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \" Wallet: \",\n                                    currentAccount.slice(0, 6),\n                                    \"...\",\n                                    currentAccount.slice(-4),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                                lineNumber: 71,\n                                columnNumber: 27\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \" Not connected \"\n                            }, void 0, false, {\n                                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                                lineNumber: 71,\n                                columnNumber: 104\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                        lineNumber: 69,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Alexandria\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"header-container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"title\",\n                                    children: \"The library of antiquity was lost due to x, Alexandia does y...\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this),\n                                !currentAccount && renderNotConnectedContainer()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                    lineNumber: 76,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n                lineNumber: 93,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/_app.js\",\n        lineNumber: 67,\n        columnNumber: 3\n    }, this);\n}\n_s(MyApp, \"rtl/HyNE9rjdBtW7P9WzbVvffOs=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBOEI7QUFDcUI7QUFJbkQsU0FBU0csTUFBTSxLQUF3QixFQUFFO1FBQTFCLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQXhCOztJQUViLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR0wsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1EsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNVSxnQkFBZ0IsVUFBWTtRQUNoQyxJQUFJO1lBQ0YsTUFBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR0M7WUFFckIsSUFBSSxDQUFDRCxVQUFVO2dCQUNiRSxNQUFNO2dCQUNOO1lBQ0YsQ0FBQztZQUVELE1BQU1DLFdBQVcsTUFBTUgsU0FBU0ksT0FBTyxDQUFDO2dCQUFFQyxRQUFRO1lBQXNCO1lBRXhFQyxRQUFRQyxHQUFHLENBQUMsYUFBYUosUUFBUSxDQUFDLEVBQUU7WUFDcENULGtCQUFrQlMsUUFBUSxDQUFDLEVBQUU7UUFDL0IsRUFBRSxPQUFPSyxPQUFPO1lBQ2RGLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDZDtJQUNGO0lBRUEsTUFBTUMsMkJBQTJCLFVBQVk7UUFDM0MsTUFBTSxFQUFFVCxTQUFRLEVBQUUsR0FBR0M7UUFFckIsSUFBSSxDQUFDRCxVQUFVO1lBQ2JNLFFBQVFDLEdBQUcsQ0FBQztZQUNaO1FBQ0YsT0FBTztZQUNMRCxRQUFRQyxHQUFHLENBQUMsK0JBQStCUDtRQUM3QyxDQUFDO1FBRUQsTUFBTUcsV0FBVyxNQUFNSCxTQUFTSSxPQUFPLENBQUM7WUFBRUMsUUFBUTtRQUFlO1FBRWpFLElBQUlGLFNBQVNPLE1BQU0sS0FBSyxHQUFHO1lBQ3pCLE1BQU1DLFVBQVVSLFFBQVEsQ0FBQyxFQUFFO1lBQzNCRyxRQUFRQyxHQUFHLENBQUMsZ0NBQWdDSTtZQUM1Q2pCLGtCQUFrQmlCO1FBQ3BCLE9BQU87WUFDTEwsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQztJQUNIO0lBRUMsTUFBTUssOEJBQThCLGtCQUNuQyw4REFBQ0M7WUFBSUMsV0FBVTtzQkFHYiw0RUFBQ0M7Z0JBQU9DLFNBQVNqQjtnQkFBZWUsV0FBVTswQkFBbUM7Ozs7Ozs7Ozs7O0lBTWpGMUIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkcUI7SUFDRixHQUFHLEVBQUU7SUFHTCxxQkFDQSw4REFBQ0k7OzBCQUNHLDhEQUFDQTtnQkFBSUksSUFBRzs7a0NBQ1IsOERBQUNKO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQUlDLEtBQUk7Z0NBQWVMLFdBQVU7Z0NBQU9NLEtBQUt6QixRQUFRMEIsUUFBUSxDQUFDLGFBQWEscUJBQXFCLGNBQWM7Ozs7Ozs0QkFDOUc1QiwrQkFBaUIsOERBQUM2Qjs7b0NBQUU7b0NBQVU3QixlQUFlOEIsS0FBSyxDQUFDLEdBQUc7b0NBQUc7b0NBQUk5QixlQUFlOEIsS0FBSyxDQUFDLENBQUM7b0NBQUc7Ozs7OztxREFBUSw4REFBQ0Q7MENBQUU7Ozs7O29DQUFtQjs7Ozs7OztrQ0FFckgsOERBQUNFO2tDQUFHOzs7Ozs7Ozs7Ozs7MEJBRUosOERBQUNYO2dCQUFJQyxXQUFVOzBCQUNqQiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNXO2tDQUNDLDRFQUFDWjs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNRO29DQUFFUixXQUFVOzhDQUFROzs7Ozs7Z0NBQ3BCLENBQUNyQixrQkFBa0JtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFhOUIsOERBQUNyQjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFNNUI7R0E3RlNGO0tBQUFBO0FBK0ZULCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblxuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW25ldHdvcmssIHNldE5ldHdvcmtdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgYWxlcnQoXCJHZXQgTWV0YU1hc2sgLT4gaHR0cHM6Ly9tZXRhbWFzay5pby9cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcbiAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIsIGFjY291bnRzWzBdKTtcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblxuICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdNYWtlIHN1cmUgeW91IGhhdmUgbWV0YW1hc2shJyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdXZSBoYXZlIHRoZSBldGhlcmV1bSBvYmplY3QnLCBldGhlcmV1bSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2FjY291bnRzJyB9KTtcblxuICAgIGlmIChhY2NvdW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgIGNvbnNvbGUubG9nKCdGb3VuZCBhbiBhdXRob3JpemVkIGFjY291bnQ6JywgYWNjb3VudCk7XG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ05vIGF1dGhvcml6ZWQgYWNjb3VudCBmb3VuZCcpO1xuICAgIH1cbiAgfTtcblxuICAgY29uc3QgcmVuZGVyTm90Q29ubmVjdGVkQ29udGFpbmVyID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29ubmVjdC13YWxsZXQtY29udGFpbmVyXCI+XG4gICAgICB7LyogPGltZyBzcmM9XCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS8zb2hod3l0SGN1c1NDWFhPVWcvZ2lwaHkuZ2lmXCIgYWx0PVwiTmluamEgZG9udXQgZ2lmXCIgLz4gKi99XG4gICAgICB7LyogQ2FsbCB0aGUgY29ubmVjdFdhbGxldCBmdW5jdGlvbiB3ZSBqdXN0IHdyb3RlIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkICovfVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fSBjbGFzc05hbWU9XCJjdGEtYnV0dG9uIGNvbm5lY3Qtd2FsbGV0LWJ1dHRvblwiPlxuICAgICAgICBDb25uZWN0IFdhbGxldFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQoKTtcbiAgfSwgW10pO1xuXG5cbiAgcmV0dXJuIChcbiAgPGRpdj5cbiAgICAgIDxkaXYgaWQ9XCJ0aXRsZS1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgPGltZyBhbHQ9XCJOZXR3b3JrIGxvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPXtuZXR3b3JrLmluY2x1ZGVzKFwiUG9seWdvblwiKSA/ICcvcG9seWdvbmxvZ28ucG5nJyA6ICcvZXRobG9nby5wbmcnfSAvPlxuICAgICAgICB7Y3VycmVudEFjY291bnQgPyA8cD4gV2FsbGV0OiB7Y3VycmVudEFjY291bnQuc2xpY2UoMCwgNil9Li4ue2N1cnJlbnRBY2NvdW50LnNsaWNlKC00KX0gPC9wPiA6IDxwPiBOb3QgY29ubmVjdGVkIDwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDE+QWxleGFuZHJpYTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPlRoZSBsaWJyYXJ5IG9mIGFudGlxdWl0eSB3YXMgbG9zdCBkdWUgdG8geCwgQWxleGFuZGlhIGRvZXMgeS4uLjwvcD5cbiAgICAgICAgICAgICAgeyFjdXJyZW50QWNjb3VudCAmJiByZW5kZXJOb3RDb25uZWN0ZWRDb250YWluZXIoKX1cbiAgICAgICAgICA8L2Rpdj4gICAgICAgICAgXG5cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgXG4gICAgICAgICAgey8qIHRoZSBzZWFyY2ggYmFyICovfVxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoJz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0nc2VhcmNoJyBwbGFjZWhvbGRlcj0nc2VhcmNoIGJvb2tzJz48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblxuICAgIFxuXG4gIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsIm5ldHdvcmsiLCJzZXROZXR3b3JrIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsImNvbm5lY3RXYWxsZXQiLCJldGhlcmV1bSIsIndpbmRvdyIsImFsZXJ0IiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiY2hlY2tJZldhbGxldElzQ29ubmVjdGVkIiwibGVuZ3RoIiwiYWNjb3VudCIsInJlbmRlck5vdENvbm5lY3RlZENvbnRhaW5lciIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsImltZyIsImFsdCIsInNyYyIsImluY2x1ZGVzIiwicCIsInNsaWNlIiwiaDEiLCJoZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});