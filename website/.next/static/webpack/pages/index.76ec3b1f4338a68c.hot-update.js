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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_networks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/networks */ \"./utils/networks.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst market = __webpack_require__(/*! ../public/MarketPlace.json */ \"./public/MarketPlace.json\");\nfunction Home() {\n    _s();\n    const MARKET_ADDRESS = \"0xf46E848372417bef30dDb2b5b909752721AA6367\";\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [days, setDays] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [tokenId, setTokenId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const connectWallet = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                alert(\"Get MetaMask -> https://metamask.io/\");\n                return;\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            console.log(\"Connected\", accounts[0]);\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const checkIfWalletIsConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"Make sure you have metamask!\");\n            return;\n        } else {\n            console.log(\"We have the ethereum object\", ethereum);\n        }\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        if (accounts.length !== 0) {\n            const account = accounts[0];\n            console.log(\"Found an authorized account:\", account);\n            setCurrentAccount(account);\n        } else {\n            console.log(\"No authorized account found\");\n        }\n    };\n    const callBorrowNft = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (ethereum) {\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(ethereum);\n                const signer = provider.getSigner();\n                const contract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(MARKET_ADDRESS, market.abi, signer);\n                console.log(\"Going to pop wallet now to pay gas...\");\n                console.log(tokenId);\n                let amount = 1000 * days / 15;\n                amount = Math.floor(amount);\n                amount = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.formatUnits(amount.toString());\n                console.log(amount);\n                let tx = await contract.borrowNFT(7, {\n                    value: ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.parseUnits(amount.toString(), \"wei\"),\n                    gasLimit: 50000\n                });\n                // (ethers.utils.formatUnits(amount.toString()))\n                // Wait for the transaction to be mined\n                const receipt = await tx.wait();\n                // Check if the transaction was successfully completed\n                if (receipt.status === 1) {\n                    console.log(\"Done! https://https://goerli.etherscan.io/tx/\" + tx.hash);\n                } else {\n                    alert(\"Transaction failed! Please try again\");\n                }\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    // let form = document.querySelector('form');\n    // form.addEventListener(change, () => {\n    //   setTokenId(form.option.value)\n    // })\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                for: \"Books\",\n                children: \"Choose a book:\"\n            }, void 0, false, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                value: tokenId,\n                name: \"Books\",\n                id: \"books\",\n                onChange: (x)=>setTokenId(x.target.value),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"6\",\n                        children: \"Plato's Republic\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"7\",\n                        children: \"Medea\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"8\",\n                        children: \"Odyssey\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"9\",\n                        children: \"Iliad\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"10\",\n                        children: \"Aesop's Fables\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                lineNumber: 104,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        for: \"days\",\n                        children: \"How many days do you want to borrow this book for?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 114,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"days\",\n                        type: \"text\",\n                        value: days,\n                        placeholder: \"# of days\",\n                        onChange: (e)=>setDays(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"button-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            disabled: null,\n                            onClick: callBorrowNft,\n                            children: \"Borrow\"\n                        }, void 0, false, {\n                            fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                            lineNumber: 124,\n                            columnNumber: 8\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                        lineNumber: 123,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manas/Documents/projectrs/web3-lib/website/pages/index.js\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"U3lFt/uDapJWjBkE+tV66Z2n/4w=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTtRQUNoQnVCO0lBQ0QsR0FBRyxFQUFFO0lBRUoscUJBQ0UsOERBQUMyQjtRQUFJQyxXQUFVOzswQkFHWCw4REFBQ0M7Z0JBQU1DLEtBQUk7MEJBQVE7Ozs7OzswQkFDbkIsOERBQUNDO2dCQUFPWCxPQUFPaEM7Z0JBQVM0QyxNQUFLO2dCQUFRQyxJQUFHO2dCQUFRQyxVQUFVLENBQUNDLElBQU05QyxXQUFXOEMsRUFBRUMsTUFBTSxDQUFDaEIsS0FBSzs7a0NBQ3hGLDhEQUFDaUI7d0JBQU9qQixPQUFNO2tDQUFJOzs7Ozs7a0NBQ2xCLDhEQUFDaUI7d0JBQU9qQixPQUFNO2tDQUFJOzs7Ozs7a0NBQ2xCLDhEQUFDaUI7d0JBQU9qQixPQUFNO2tDQUFJOzs7Ozs7a0NBQ2xCLDhEQUFDaUI7d0JBQU9qQixPQUFNO2tDQUFJOzs7Ozs7a0NBQ2xCLDhEQUFDaUI7d0JBQU9qQixPQUFNO2tDQUFNOzs7Ozs7Ozs7Ozs7MEJBSXhCLDhEQUFDTztnQkFBSUMsV0FBVTs7a0NBQ2YsOERBQUNDO3dCQUFNQyxLQUFJO2tDQUFPOzs7Ozs7a0NBQ2hCLDhEQUFDUTt3QkFDQ0wsSUFBRzt3QkFDTk0sTUFBSzt3QkFDTG5CLE9BQU9sQzt3QkFDUHNELGFBQVk7d0JBQ1pOLFVBQVVPLENBQUFBLElBQUt0RCxRQUFRc0QsRUFBRUwsTUFBTSxDQUFDaEIsS0FBSzs7Ozs7O2tDQUdoQyw4REFBQ087d0JBQUlDLFdBQVU7a0NBQ3BCLDRFQUFDYzs0QkFBT0MsVUFBVSxJQUFJOzRCQUFFQyxTQUFTekM7c0NBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXZELENBQUM7R0FqSXVCckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuZXR3b3JrcyB9IGZyb20gJy4uL3V0aWxzL25ldHdvcmtzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5jb25zdCBtYXJrZXQgPSByZXF1aXJlKFwiLi4vcHVibGljL01hcmtldFBsYWNlLmpzb25cIik7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgTUFSS0VUX0FERFJFU1MgPSBcIjB4ZjQ2RTg0ODM3MjQxN2JlZjMwZERiMmI1YjkwOTc1MjcyMUFBNjM2N1wiO1xuXG4gIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGF5cywgc2V0RGF5c10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0b2tlbklkLCBzZXRUb2tlbklkXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgYWxlcnQoXCJHZXQgTWV0YU1hc2sgLT4gaHR0cHM6Ly9tZXRhbWFzay5pby9cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcbiAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIsIGFjY291bnRzWzBdKTtcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblxuICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdNYWtlIHN1cmUgeW91IGhhdmUgbWV0YW1hc2shJyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdXZSBoYXZlIHRoZSBldGhlcmV1bSBvYmplY3QnLCBldGhlcmV1bSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2FjY291bnRzJyB9KTtcblxuICAgIGlmIChhY2NvdW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgIGNvbnNvbGUubG9nKCdGb3VuZCBhbiBhdXRob3JpemVkIGFjY291bnQ6JywgYWNjb3VudCk7XG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ05vIGF1dGhvcml6ZWQgYWNjb3VudCBmb3VuZCcpO1xuICAgIH1cbiAgfTtcblxuXG4gIGNvbnN0IGNhbGxCb3Jyb3dOZnQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcbiAgICAgIGlmIChldGhlcmV1bSkge1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSk7XG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoTUFSS0VUX0FERFJFU1MsIG1hcmtldC5hYmksIHNpZ25lcik7XG4gIFxuICAgICAgICBjb25zb2xlLmxvZyhcIkdvaW5nIHRvIHBvcCB3YWxsZXQgbm93IHRvIHBheSBnYXMuLi5cIilcbiAgICAgICAgY29uc29sZS5sb2codG9rZW5JZCk7XG4gICAgICAgIGxldCBhbW91bnQgPSAxMDAwKmRheXMvMTU7XG5cbiAgICAgICAgYW1vdW50ID0gTWF0aC5mbG9vcihhbW91bnQpO1xuICAgICAgICBhbW91bnQgPSBldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMoYW1vdW50LnRvU3RyaW5nKCkpXG4gICAgICAgIGNvbnNvbGUubG9nKGFtb3VudCk7XG4gICAgICAgIGxldCB0eCA9IGF3YWl0IGNvbnRyYWN0LmJvcnJvd05GVCg3LCB7dmFsdWU6IGV0aGVycy51dGlscy5wYXJzZVVuaXRzKGFtb3VudC50b1N0cmluZygpLCBcIndlaVwiKSwgZ2FzTGltaXQ6IDUwMDAwfSk7XG4gICAgICAgIFxuICAgICAgICAvLyAoZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKGFtb3VudC50b1N0cmluZygpKSlcbiAgICAgICAgLy8gV2FpdCBmb3IgdGhlIHRyYW5zYWN0aW9uIHRvIGJlIG1pbmVkXG4gICAgICAgIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB0eC53YWl0KCk7XG4gIFxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdHJhbnNhY3Rpb24gd2FzIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZWRcbiAgICAgICAgaWYgKHJlY2VpcHQuc3RhdHVzID09PSAxKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJEb25lISBodHRwczovL2h0dHBzOi8vZ29lcmxpLmV0aGVyc2Nhbi5pby90eC9cIit0eC5oYXNoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJUcmFuc2FjdGlvbiBmYWlsZWQhIFBsZWFzZSB0cnkgYWdhaW5cIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAvLyBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoY2hhbmdlLCAoKSA9PiB7XG4gIC8vICAgc2V0VG9rZW5JZChmb3JtLm9wdGlvbi52YWx1ZSlcbiAgLy8gfSlcblxuIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCgpO1xuXHR9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdBcHAnPlxuICAgICAgXG4gICAgIFxuICAgICAgICA8bGFiZWwgZm9yPVwiQm9va3NcIj5DaG9vc2UgYSBib29rOjwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e3Rva2VuSWR9IG5hbWU9XCJCb29rc1wiIGlkPVwiYm9va3NcIiBvbkNoYW5nZT17KHgpID0+IHNldFRva2VuSWQoeC50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPlBsYXRvJ3MgUmVwdWJsaWM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN1wiPk1lZGVhPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj5PZHlzc2V5PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjlcIj5JbGlhZDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiID5BZXNvcCdzIEZhYmxlczwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICBcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgPGxhYmVsIGZvcj1cImRheXNcIj5Ib3cgbWFueSBkYXlzIGRvIHlvdSB3YW50IHRvIGJvcnJvdyB0aGlzIGJvb2sgZm9yPzwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiZGF5c1wiXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2RheXN9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPScjIG9mIGRheXMnXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHNldERheXMoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gZGlzYWJsZWQ9e251bGx9IG9uQ2xpY2s9e2NhbGxCb3Jyb3dOZnR9PlxuXHRcdFx0XHRcdFx0XHRCb3Jyb3dcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICBcbiAgICA8L2Rpdj5cblxuXG4gIClcblxufSJdLCJuYW1lcyI6WyJuZXR3b3JrcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJtYXJrZXQiLCJyZXF1aXJlIiwiSG9tZSIsIk1BUktFVF9BRERSRVNTIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImRheXMiLCJzZXREYXlzIiwidG9rZW5JZCIsInNldFRva2VuSWQiLCJjb25uZWN0V2FsbGV0IiwiZXRoZXJldW0iLCJ3aW5kb3ciLCJhbGVydCIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsImxlbmd0aCIsImFjY291bnQiLCJjYWxsQm9ycm93TmZ0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwiYWJpIiwiYW1vdW50IiwiTWF0aCIsImZsb29yIiwidXRpbHMiLCJmb3JtYXRVbml0cyIsInRvU3RyaW5nIiwidHgiLCJib3Jyb3dORlQiLCJ2YWx1ZSIsInBhcnNlVW5pdHMiLCJnYXNMaW1pdCIsInJlY2VpcHQiLCJ3YWl0Iiwic3RhdHVzIiwiaGFzaCIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiZm9yIiwic2VsZWN0IiwibmFtZSIsImlkIiwib25DaGFuZ2UiLCJ4IiwidGFyZ2V0Iiwib3B0aW9uIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJlIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});