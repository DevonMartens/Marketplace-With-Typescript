/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/providers/index.tsx":
/*!****************************************!*\
  !*** ./components/providers/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Web3Provider\": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ \"./components/providers/web3/index.tsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJrZXRwbGFjZS13aXRoLXR5cGVzY3JpcHQvLi9jb21wb25lbnRzL3Byb3ZpZGVycy9pbmRleC50c3g/ODQ5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBXZWIzUHJvdmlkZXIgfSBmcm9tIFwiLi93ZWIzXCIiXSwibmFtZXMiOlsiZGVmYXVsdCIsIldlYjNQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/providers/index.tsx\n");

/***/ }),

/***/ "./components/providers/web3/index.tsx":
/*!*********************************************!*\
  !*** ./components/providers/web3/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useWeb3\": () => (/* binding */ useWeb3)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./components/providers/web3/utils.ts\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst Web3Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.createDefaultState)());\nconst Web3Provider = ({ children  })=>{\n    const { 0: web3Api , 1: setWeb3Api  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.createDefaultState)());\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        async function initWeb3() {\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(window.ethereum);\n            const contract = await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.loadContract)(\"SWIMMarketPlace\", provider);\n            setWeb3Api({\n                ethereum: window.ethereum,\n                provider,\n                contract,\n                isLoading: false\n            });\n        }\n        initWeb3();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Web3Context.Provider, {\n        value: web3Api,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/devonmartens/SWIM/Marketplace-With-Typescript/components/providers/web3/index.tsx\",\n        lineNumber: 36,\n        columnNumber: 1\n    }, undefined);\n};\nfunction useWeb3() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Web3Context);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Web3Provider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUM0RDtBQUNyQjtBQUN0QztBQVNoQyxNQUFNTyxXQUFXLGlCQUFHTixvREFBYSxDQUFNRywwREFBa0IsRUFBRSxDQUFDO0FBRzVELE1BQU1JLFlBQVksR0FBdUIsQ0FBQyxFQUFDQyxRQUFRLEdBQUMsR0FBSztJQUNyRCxNQUFNLEVBaEJWLEdBZ0JXQyxPQUFPLEdBaEJsQixHQWdCb0JDLFVBQVUsTUFBSVIsK0NBQVEsQ0FBWUMsMERBQWtCLEVBQUUsQ0FBQztJQUV2RUosNENBQWUsQ0FBQyxJQUFNO1FBQ25CLGVBQWVhLFFBQVEsR0FBRTtZQUNyQixNQUFNQyxRQUFRLEdBQUcsSUFBSVIsaUVBQTZCLENBQUNVLE1BQU0sQ0FBQ0MsUUFBUSxDQUFRO1lBQzFFLE1BQU1DLFFBQVEsR0FBRyxNQUFNYixvREFBWSxDQUFDLGlCQUFpQixFQUFFUyxRQUFRLENBQUM7WUFFckVILFVBQVUsQ0FBQztnQkFDVE0sUUFBUSxFQUFFRCxNQUFNLENBQUNDLFFBQVE7Z0JBQ3pCSCxRQUFRO2dCQUNSSSxRQUFRO2dCQUNSQyxTQUFTLEVBQUUsS0FBSzthQUNqQixDQUFDO1NBQ0g7UUFFRE4sUUFBUSxFQUFFLENBQUM7S0FDWixFQUFFLEVBQUUsQ0FBQztJQUVSLHFCQUNBLDhEQUFDTixXQUFXLENBQUNhLFFBQVE7UUFBQ0MsS0FBSyxFQUFFWCxPQUFPO2tCQUMvQkQsUUFBUTs7Ozs7aUJBQ1UsQ0FDbEI7Q0FDSjtBQUVNLFNBQVNhLE9BQU8sR0FBRztJQUN0QixPQUFPcEIsaURBQVUsQ0FBQ0ssV0FBVyxDQUFDLENBQUM7Q0FDbEM7QUFFRCxpRUFBZUMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFya2V0cGxhY2Utd2l0aC10eXBlc2NyaXB0Ly4vY29tcG9uZW50cy9wcm92aWRlcnMvd2ViMy9pbmRleC50c3g/NzcyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7ICBSZWFjdE5vZGUsIGNyZWF0ZUNvbnRleHQsIEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdFN0YXRlLCBXZWIzU3RhdGUsIGxvYWRDb250cmFjdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5cblxuXG5pbnRlcmZhY2UgTXlQcm9wcyB7XG4gICAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG59XG5cblxuY29uc3QgV2ViM0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PGFueT4oY3JlYXRlRGVmYXVsdFN0YXRlKCkpO1xuXG5cbmNvbnN0IFdlYjNQcm92aWRlcjogUmVhY3QuRkM8TXlQcm9wcz4gID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBbd2ViM0FwaSwgc2V0V2ViM0FwaV0gPSB1c2VTdGF0ZTxXZWIzU3RhdGU+KGNyZWF0ZURlZmF1bHRTdGF0ZSgpKVxuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpe1xuICAgICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0gYXMgYW55KTtcbiAgICAgICAgICAgY29uc3QgY29udHJhY3QgPSBhd2FpdCBsb2FkQ29udHJhY3QoXCJTV0lNTWFya2V0UGxhY2VcIiwgcHJvdmlkZXIpO1xuICAgICAgIFxuICAgICAgc2V0V2ViM0FwaSh7XG4gICAgICAgIGV0aGVyZXVtOiB3aW5kb3cuZXRoZXJldW0sXG4gICAgICAgIHByb3ZpZGVyLFxuICAgICAgICBjb250cmFjdCxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpbml0V2ViMygpO1xuICB9LCBbXSlcblxucmV0dXJuKFxuPFdlYjNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt3ZWIzQXBpfT5cbiAgICB7Y2hpbGRyZW59XG48L1dlYjNDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVdlYjMoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoV2ViM0NvbnRleHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXZWIzUHJvdmlkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImNyZWF0ZURlZmF1bHRTdGF0ZSIsImxvYWRDb250cmFjdCIsImV0aGVycyIsIldlYjNDb250ZXh0IiwiV2ViM1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ3ZWIzQXBpIiwic2V0V2ViM0FwaSIsInVzZUVmZmVjdCIsImluaXRXZWIzIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImNvbnRyYWN0IiwiaXNMb2FkaW5nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVdlYjMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/providers/web3/index.tsx\n");

/***/ }),

/***/ "./components/providers/web3/utils.ts":
/*!********************************************!*\
  !*** ./components/providers/web3/utils.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDefaultState\": () => (/* binding */ createDefaultState),\n/* harmony export */   \"loadContract\": () => (/* binding */ loadContract)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);\n\nconst createDefaultState = ()=>{\n    return {\n        ethereum: null,\n        provider: null,\n        contract: null,\n        isLoading: true\n    };\n};\nconst NETWORK_ID = \"5777\";\nconst loadContract = async (name, provider)=>{\n    if (!NETWORK_ID) {\n        return Promise.reject(\"Network ID is not defined!\");\n    }\n    const res = await fetch(`/contracts/${name}.json`);\n    const Artifact = await res.json();\n    if (Artifact.networks[NETWORK_ID].address) {\n        const contract = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(Artifact.networks[NETWORK_ID].address, Artifact.abi, provider);\n        return contract;\n    } else {\n        return Promise.reject(`Contract: [${name}] cannot be loaded!`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL3V0aWxzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJcUQ7QUFrQjlDLE1BQU1DLGtCQUFrQixHQUFHLElBQU07SUFDdEMsT0FBTztRQUNMQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxTQUFTLEVBQUUsSUFBSTtLQUNoQjtDQUNGO0FBRUQsTUFBTUMsVUFBVSxHQUFHQyxNQUFrQztBQUc5QyxNQUFNRyxZQUFZLEdBQUcsT0FDMUJDLElBQVksRUFDWlIsUUFBZ0MsR0FDVjtJQUV0QixJQUFJLENBQUNHLFVBQVUsRUFBRTtRQUNmLE9BQU9NLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLDRCQUE0QixDQUFDLENBQUM7S0FDckQ7SUFFRCxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFSixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsTUFBTUssUUFBUSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0lBQ2pDLElBQUlELFFBQVEsQ0FBQ0UsUUFBUSxDQUFDWixVQUFVLENBQUMsQ0FBQ2EsT0FBTyxFQUFFO1FBQ3pDLE1BQU1mLFFBQVEsR0FBRyxJQUFJSixtREFBZSxDQUNoQ2dCLFFBQVEsQ0FBQ0UsUUFBUSxDQUFDWixVQUFVLENBQUMsQ0FBQ2EsT0FBTyxFQUNyQ0gsUUFBUSxDQUFDSyxHQUFHLEVBQ2RsQixRQUFRLENBQ1Q7UUFFRCxPQUFPQyxRQUFRLENBQUM7S0FDakIsTUFBTTtRQUNMLE9BQU9RLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFRixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0tBQ2hFO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJrZXRwbGFjZS13aXRoLXR5cGVzY3JpcHQvLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL3V0aWxzLnRzPzIwNGMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICBcblxuaW1wb3J0IHsgTWV0YU1hc2tJbnBhZ2VQcm92aWRlciB9IGZyb20gXCJAbWV0YW1hc2svcHJvdmlkZXJzXCI7XG5pbXBvcnQgeyBDb250cmFjdCwgZXRoZXJzLCBwcm92aWRlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgZXRoZXJldW06IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXI7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgV2ViM1BhcmFtcyA9IHtcbiAgZXRoZXJldW06IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXIgfCBudWxsO1xuICBwcm92aWRlcjogcHJvdmlkZXJzLldlYjNQcm92aWRlciB8IG51bGw7XG4gIGNvbnRyYWN0OiBDb250cmFjdCB8IG51bGw7XG59XG5cbmV4cG9ydCB0eXBlIFdlYjNTdGF0ZSA9IHtcbiAgaXNMb2FkaW5nOiBib29sZWFuOyAvLyB0cnVlIHdoaWxlIGxvYWRpbmcgd2ViM1N0YXRlXG59ICYgV2ViM1BhcmFtc1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRGVmYXVsdFN0YXRlID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGV0aGVyZXVtOiBudWxsLFxuICAgIHByb3ZpZGVyOiBudWxsLFxuICAgIGNvbnRyYWN0OiBudWxsLFxuICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgfVxufVxuXG5jb25zdCBORVRXT1JLX0lEID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTkVUV09SS19JRDtcblxuXG5leHBvcnQgY29uc3QgbG9hZENvbnRyYWN0ID0gYXN5bmMgKFxuICBuYW1lOiBzdHJpbmcsICAvLyBTV0lNTWFya2V0UGxhY2VcbiAgcHJvdmlkZXI6IHByb3ZpZGVycy5XZWIzUHJvdmlkZXJcbik6IFByb21pc2U8Q29udHJhY3Q+ID0+IHtcblxuICBpZiAoIU5FVFdPUktfSUQpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJOZXR3b3JrIElEIGlzIG5vdCBkZWZpbmVkIVwiKTtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvY29udHJhY3RzLyR7bmFtZX0uanNvbmApO1xuICBjb25zdCBBcnRpZmFjdCA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGlmIChBcnRpZmFjdC5uZXR3b3Jrc1tORVRXT1JLX0lEXS5hZGRyZXNzKSB7XG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgICBBcnRpZmFjdC5uZXR3b3Jrc1tORVRXT1JLX0lEXS5hZGRyZXNzLFxuICAgICAgICBBcnRpZmFjdC5hYmksXG4gICAgICBwcm92aWRlclxuICAgIClcblxuICAgIHJldHVybiBjb250cmFjdDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYENvbnRyYWN0OiBbJHtuYW1lfV0gY2Fubm90IGJlIGxvYWRlZCFgKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJldGhlcnMiLCJjcmVhdGVEZWZhdWx0U3RhdGUiLCJldGhlcmV1bSIsInByb3ZpZGVyIiwiY29udHJhY3QiLCJpc0xvYWRpbmciLCJORVRXT1JLX0lEIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX05FVFdPUktfSUQiLCJsb2FkQ29udHJhY3QiLCJuYW1lIiwiUHJvbWlzZSIsInJlamVjdCIsInJlcyIsImZldGNoIiwiQXJ0aWZhY3QiLCJqc29uIiwibmV0d29ya3MiLCJhZGRyZXNzIiwiQ29udHJhY3QiLCJhYmkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/providers/web3/utils.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/providers */ \"./components/providers/index.tsx\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_providers__WEBPACK_IMPORTED_MODULE_2__.Web3Provider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/devonmartens/SWIM/Marketplace-With-Typescript/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/devonmartens/SWIM/Marketplace-With-Typescript/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUdxQjtBQUVuRCxTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDRTtrQkFDQSw0RUFBQ0gsOERBQVk7c0JBQ2IsNEVBQUNFLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUc7Ozs7O2dCQUNaO3FCQUNaLENBQ0o7Q0FDRjtBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFya2V0cGxhY2Utd2l0aC10eXBlc2NyaXB0Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gJ2NvbXBvbmVudHMvdWknXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tICdjb21wb25lbnRzL3Byb3ZpZGVycydcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPFdlYjNQcm92aWRlcj5cbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cbiAgICA8L1dlYjNQcm92aWRlcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIldlYjNQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();