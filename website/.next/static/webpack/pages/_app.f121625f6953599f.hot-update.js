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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_networks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/networks */ \"./utils/networks.js\");\n// import '../styles/globals.css'\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [network, setNetwork] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const connectWallet = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                alert(\"Get MetaMask -> https://metamask.io/\");\n                return;\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(\"Connected\", accounts[0]);\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const checkIfWalletIsConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"Make sure you have metamask!\");\n            return;\n        } else {\n            console.log(\"We have the ethereum object\", ethereum);\n        }\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        if (accounts.length !== 0) {\n            const account = accounts[0];\n            console.log(\"Found an authorized account:\", account);\n            setCurrentAccount(account);\n        } else {\n            console.log(\"No authorized account found\");\n        }\n    };\n    const renderNotConnectedContainer = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"connect-wallet-container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectWallet,\n                className: \"cta-button connect-wallet-button\",\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\15146\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\_app.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\15146\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\_app.js\",\n            lineNumber: 54,\n            columnNumber: 5\n        }, this);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"header-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"title\",\n                            children: \"Alexandria\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\15146\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\_app.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"wallet-container\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"search\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"search\",\n                                            placeholder: \"search books\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\15146\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\_app.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\15146\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\_app.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"wallet\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                alt: \"Network logo\",\n                                                className: \"logo\",\n                                                src: network.includes(\"Polygon\") ? \"/polygonlogo.png\" : \"/ethlogo.png\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\15146\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\_app.js\",\n                                                lineNumber: 83,\n                                                columnNumber: 17\n                                            }, this),\n                                            currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    \" Wallet: \",\n                                                    currentAccount.slice(0, 6),\n                                                    \"...\",\n                                                    currentAccount.slice(-4),\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\15146\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\_app.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 36\n                                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \" Not connected \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\15146\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\_app.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 117\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\15146\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\_app.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, this),\n                                    !currentAccount && renderNotConnectedContainer()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\15146\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\_app.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\15146\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\_app.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\15146\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\_app.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\15146\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\_app.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\15146\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\_app.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\15146\\\\OneDrive\\\\Desktop\\\\web3-lib\\\\website\\\\pages\\\\_app.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"rtl/HyNE9rjdBtW7P9WzbVvffOs=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZW50IjpbIi8vIGltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG5ldHdvcmtzIH0gZnJvbSAnLi4vdXRpbHMvbmV0d29ya3MnO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuXHJcbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW25ldHdvcmssIHNldE5ldHdvcmtdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG5cclxuICAgICAgaWYgKCFldGhlcmV1bSkge1xyXG4gICAgICAgIGFsZXJ0KFwiR2V0IE1ldGFNYXNrIC0+IGh0dHBzOi8vbWV0YW1hc2suaW8vXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIsIGFjY291bnRzWzBdKTtcclxuICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XHJcblxyXG4gICAgaWYgKCFldGhlcmV1bSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnTWFrZSBzdXJlIHlvdSBoYXZlIG1ldGFtYXNrIScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnV2UgaGF2ZSB0aGUgZXRoZXJldW0gb2JqZWN0JywgZXRoZXJldW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9hY2NvdW50cycgfSk7XHJcblxyXG4gICAgaWYgKGFjY291bnRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XHJcbiAgICAgIGNvbnNvbGUubG9nKCdGb3VuZCBhbiBhdXRob3JpemVkIGFjY291bnQ6JywgYWNjb3VudCk7XHJcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ05vIGF1dGhvcml6ZWQgYWNjb3VudCBmb3VuZCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlck5vdENvbm5lY3RlZENvbnRhaW5lciA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29ubmVjdC13YWxsZXQtY29udGFpbmVyXCI+XHJcbiAgICAgIHsvKiA8aW1nIHNyYz1cImh0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhLzNvaGh3eXRIY3VzU0NYWE9VZy9naXBoeS5naWZcIiBhbHQ9XCJOaW5qYSBkb251dCBnaWZcIiAvPiAqLyB9XHJcbiAgICAgIHsvKiBDYWxsIHRoZSBjb25uZWN0V2FsbGV0IGZ1bmN0aW9uIHdlIGp1c3Qgd3JvdGUgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgKi8gfVxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eyBjb25uZWN0V2FsbGV0IH0gY2xhc3NOYW1lPVwiY3RhLWJ1dHRvbiBjb25uZWN0LXdhbGxldC1idXR0b25cIj5cclxuICAgICAgICBDb25uZWN0IFdhbGxldFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQoKTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuXHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+QWxleGFuZHJpYTwvaDE+XHJcblxyXG4gICAgICAgICAgPGhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ3YWxsZXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaCc+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nc2VhcmNoJyBwbGFjZWhvbGRlcj0nc2VhcmNoIGJvb2tzJz48L2lucHV0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIk5ldHdvcmsgbG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9eyBuZXR3b3JrLmluY2x1ZGVzKFwiUG9seWdvblwiKSA/ICcvcG9seWdvbmxvZ28ucG5nJyA6ICcvZXRobG9nby5wbmcnIH0gLz5cclxuICAgICAgICAgICAgICAgIHsgY3VycmVudEFjY291bnQgPyA8cD4gV2FsbGV0OiB7IGN1cnJlbnRBY2NvdW50LnNsaWNlKDAsIDYpIH0uLi57IGN1cnJlbnRBY2NvdW50LnNsaWNlKC00KSB9IDwvcD4gOiA8cD4gTm90IGNvbm5lY3RlZCA8L3A+IH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgeyAhY3VycmVudEFjY291bnQgJiYgcmVuZGVyTm90Q29ubmVjdGVkQ29udGFpbmVyKCkgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgey8qIHsgIWN1cnJlbnRBY2NvdW50ICYmIHJlbmRlck5vdENvbm5lY3RlZENvbnRhaW5lcigpIH0gKi8gfVxyXG5cclxuICAgICAgICAgIHsvKiB0aGUgc2VhcmNoIGJhciAqLyB9XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxDb21wb25lbnQgeyAuLi5wYWdlUHJvcHMgfSAvPlxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm5ldHdvcmtzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwibmV0d29yayIsInNldE5ldHdvcmsiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwiY29ubmVjdFdhbGxldCIsImV0aGVyZXVtIiwid2luZG93IiwiYWxlcnQiLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQiLCJsZW5ndGgiLCJhY2NvdW50IiwicmVuZGVyTm90Q29ubmVjdGVkQ29udGFpbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImgxIiwiaGVhZGVyIiwiaWQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImltZyIsImFsdCIsInNyYyIsImluY2x1ZGVzIiwicCIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});