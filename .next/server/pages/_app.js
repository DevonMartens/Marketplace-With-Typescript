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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useWeb3\": () => (/* binding */ useWeb3)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./components/providers/web3/utils.ts\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst Web3Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.createDefaultState)());\nconst Web3Provider = ({ children  })=>{\n    const { 0: web3Api , 1: setWeb3Api  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.createDefaultState)());\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        async function initWeb3() {\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(window.ethereum);\n            const contract = await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.loadContract)(\"SWIMMarketPlace\", provider);\n            setWeb3Api({\n                ethereum: window.ethereum,\n                provider,\n                contract,\n                isLoading: false\n            });\n        }\n        initWeb3();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Web3Context.Provider, {\n        value: web3Api,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/devonmartens/SWIM/Marketplace-With-Typescript/components/providers/web3/index.tsx\",\n        lineNumber: 38,\n        columnNumber: 1\n    }, undefined);\n};\nfunction useWeb3() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Web3Context);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Web3Provider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUM0RDtBQUdyQjtBQUN0QztBQVNoQyxNQUFNTyxXQUFXLGlCQUFHTixvREFBYSxDQUFNRywwREFBa0IsRUFBRSxDQUFDO0FBRzVELE1BQU1JLFlBQVksR0FBdUIsQ0FBQyxFQUFDQyxRQUFRLEdBQUMsR0FBSztJQUNyRCxNQUFNLEVBbEJWLEdBa0JXQyxPQUFPLEdBbEJsQixHQWtCb0JDLFVBQVUsTUFBSVIsK0NBQVEsQ0FBWUMsMERBQWtCLEVBQUUsQ0FBQztJQUV2RUosNENBQWUsQ0FBQyxJQUFNO1FBQ25CLGVBQWVhLFFBQVEsR0FBRTtZQUNyQixNQUFNQyxRQUFRLEdBQUcsSUFBSVIsaUVBQTZCLENBQUNVLE1BQU0sQ0FBQ0MsUUFBUSxDQUFRO1lBQzFFLE1BQU1DLFFBQVEsR0FBRyxNQUFNYixvREFBWSxDQUFDLGlCQUFpQixFQUFFUyxRQUFRLENBQUM7WUFFckVILFVBQVUsQ0FBQztnQkFDVE0sUUFBUSxFQUFFRCxNQUFNLENBQUNDLFFBQVE7Z0JBQ3pCSCxRQUFRO2dCQUNSSSxRQUFRO2dCQUNSQyxTQUFTLEVBQUUsS0FBSzthQUNqQixDQUFDO1NBQ0g7UUFFRE4sUUFBUSxFQUFFLENBQUM7S0FDWixFQUFFLEVBQUUsQ0FBQztJQUVSLHFCQUNBLDhEQUFDTixXQUFXLENBQUNhLFFBQVE7UUFBQ0MsS0FBSyxFQUFFWCxPQUFPO2tCQUMvQkQsUUFBUTs7Ozs7aUJBQ1UsQ0FDbEI7Q0FDSjtBQUVNLFNBQVNhLE9BQU8sR0FBRztJQUN0QixPQUFPcEIsaURBQVUsQ0FBQ0ssV0FBVyxDQUFDLENBQUM7Q0FDbEM7QUFFRCxpRUFBZUMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFya2V0cGxhY2Utd2l0aC10eXBlc2NyaXB0Ly4vY29tcG9uZW50cy9wcm92aWRlcnMvd2ViMy9pbmRleC50c3g/NzcyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7ICBSZWFjdE5vZGUsIGNyZWF0ZUNvbnRleHQsIEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWV0YU1hc2tJbnBhZ2VQcm92aWRlciB9IGZyb20gJ0BtZXRhbWFzay9wcm92aWRlcnMnO1xuaW1wb3J0IHsgQ29udHJhY3QsIHByb3ZpZGVycywgdXRpbHMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBjcmVhdGVEZWZhdWx0U3RhdGUsIFdlYjNTdGF0ZSwgbG9hZENvbnRyYWN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcblxuXG5cbmludGVyZmFjZSBNeVByb3BzIHtcbiAgICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbn1cblxuXG5jb25zdCBXZWIzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55PihjcmVhdGVEZWZhdWx0U3RhdGUoKSk7XG5cblxuY29uc3QgV2ViM1Byb3ZpZGVyOiBSZWFjdC5GQzxNeVByb3BzPiAgPSAoe2NoaWxkcmVufSkgPT4ge1xuICAgIGNvbnN0IFt3ZWIzQXBpLCBzZXRXZWIzQXBpXSA9IHVzZVN0YXRlPFdlYjNTdGF0ZT4oY3JlYXRlRGVmYXVsdFN0YXRlKCkpXG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRXZWIzKCl7XG4gICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSBhcyBhbnkpO1xuICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IGF3YWl0IGxvYWRDb250cmFjdChcIlNXSU1NYXJrZXRQbGFjZVwiLCBwcm92aWRlcik7XG4gICAgICAgXG4gICAgICBzZXRXZWIzQXBpKHtcbiAgICAgICAgZXRoZXJldW06IHdpbmRvdy5ldGhlcmV1bSxcbiAgICAgICAgcHJvdmlkZXIsXG4gICAgICAgIGNvbnRyYWN0LFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGluaXRXZWIzKCk7XG4gIH0sIFtdKVxuXG5yZXR1cm4oXG48V2ViM0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3dlYjNBcGl9PlxuICAgIHtjaGlsZHJlbn1cbjwvV2ViM0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlV2ViMygpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChXZWIzQ29udGV4dCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYjNQcm92aWRlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiY3JlYXRlRGVmYXVsdFN0YXRlIiwibG9hZENvbnRyYWN0IiwiZXRoZXJzIiwiV2ViM0NvbnRleHQiLCJXZWIzUHJvdmlkZXIiLCJjaGlsZHJlbiIsIndlYjNBcGkiLCJzZXRXZWIzQXBpIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIndpbmRvdyIsImV0aGVyZXVtIiwiY29udHJhY3QiLCJpc0xvYWRpbmciLCJQcm92aWRlciIsInZhbHVlIiwidXNlV2ViMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/providers/web3/index.tsx\n");

/***/ }),

/***/ "./components/providers/web3/utils.ts":
/*!********************************************!*\
  !*** ./components/providers/web3/utils.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDefaultState\": () => (/* binding */ createDefaultState),\n/* harmony export */   \"loadContract\": () => (/* binding */ loadContract)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);\n\nconst createDefaultState = ()=>{\n    return {\n        ethereum: null,\n        provider: null,\n        contract: null,\n        isLoading: true\n    };\n};\nconst NETWORK_ID = process.env.NEXT_PUBLIC_NETWORK_ID;\nconst loadContract = async (name, provider)=>{\n    if (!NETWORK_ID) {\n        return Promise.reject(\"Network ID is not defined!\");\n    }\n    const res = await fetch(`/contracts/${name}.json`);\n    const Artifact = await res.json();\n    if (Artifact.networks[NETWORK_ID].address) {\n        const contract = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(Artifact.networks[NETWORK_ID].address, Artifact.abi, provider);\n        return contract;\n    } else {\n        return Promise.reject(`Contract: [${name}] cannot be loaded!`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL3V0aWxzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJcUQ7QUFrQjlDLE1BQU1DLGtCQUFrQixHQUFHLElBQU07SUFDdEMsT0FBTztRQUNMQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxTQUFTLEVBQUUsSUFBSTtLQUNoQjtDQUNGO0FBRUQsTUFBTUMsVUFBVSxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Msc0JBQXNCO0FBRTlDLE1BQU1DLFlBQVksR0FBRyxPQUMxQkMsSUFBWSxFQUNaUixRQUFnQyxHQUNWO0lBRXRCLElBQUksQ0FBQ0csVUFBVSxFQUFFO1FBQ2YsT0FBT00sT0FBTyxDQUFDQyxNQUFNLENBQUMsNEJBQTRCLENBQUMsQ0FBQztLQUNyRDtJQUVELE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUVKLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxNQUFNSyxRQUFRLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFFakMsSUFBSUQsUUFBUSxDQUFDRSxRQUFRLENBQUNaLFVBQVUsQ0FBQyxDQUFDYSxPQUFPLEVBQUU7UUFDekMsTUFBTWYsUUFBUSxHQUFHLElBQUlKLG1EQUFlLENBQ2xDZ0IsUUFBUSxDQUFDRSxRQUFRLENBQUNaLFVBQVUsQ0FBQyxDQUFDYSxPQUFPLEVBQ3JDSCxRQUFRLENBQUNLLEdBQUcsRUFDWmxCLFFBQVEsQ0FDVDtRQUVELE9BQU9DLFFBQVEsQ0FBQztLQUNqQixNQUFNO1FBQ0wsT0FBT1EsT0FBTyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUVGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7S0FDaEU7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmtldHBsYWNlLXdpdGgtdHlwZXNjcmlwdC8uL2NvbXBvbmVudHMvcHJvdmlkZXJzL3dlYjMvdXRpbHMudHM/MjA0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgIFxuXG5pbXBvcnQgeyBNZXRhTWFza0lucGFnZVByb3ZpZGVyIH0gZnJvbSBcIkBtZXRhbWFzay9wcm92aWRlcnNcIjtcbmltcG9ydCB7IENvbnRyYWN0LCBldGhlcnMsIHByb3ZpZGVycyB9IGZyb20gXCJldGhlcnNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBldGhlcmV1bTogTWV0YU1hc2tJbnBhZ2VQcm92aWRlcjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBXZWIzUGFyYW1zID0ge1xuICBldGhlcmV1bTogTWV0YU1hc2tJbnBhZ2VQcm92aWRlciB8IG51bGw7XG4gIHByb3ZpZGVyOiBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyIHwgbnVsbDtcbiAgY29udHJhY3Q6IENvbnRyYWN0IHwgbnVsbDtcbn1cblxuZXhwb3J0IHR5cGUgV2ViM1N0YXRlID0ge1xuICBpc0xvYWRpbmc6IGJvb2xlYW47IC8vIHRydWUgd2hpbGUgbG9hZGluZyB3ZWIzU3RhdGVcbn0gJiBXZWIzUGFyYW1zXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEZWZhdWx0U3RhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZXRoZXJldW06IG51bGwsXG4gICAgcHJvdmlkZXI6IG51bGwsXG4gICAgY29udHJhY3Q6IG51bGwsXG4gICAgaXNMb2FkaW5nOiB0cnVlLFxuICB9XG59XG5cbmNvbnN0IE5FVFdPUktfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ORVRXT1JLX0lEO1xuXG5leHBvcnQgY29uc3QgbG9hZENvbnRyYWN0ID0gYXN5bmMgKFxuICBuYW1lOiBzdHJpbmcsICAvLyBOZnRNYXJrZXRcbiAgcHJvdmlkZXI6IHByb3ZpZGVycy5XZWIzUHJvdmlkZXJcbik6IFByb21pc2U8Q29udHJhY3Q+ID0+IHtcblxuICBpZiAoIU5FVFdPUktfSUQpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJOZXR3b3JrIElEIGlzIG5vdCBkZWZpbmVkIVwiKTtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvY29udHJhY3RzLyR7bmFtZX0uanNvbmApO1xuICBjb25zdCBBcnRpZmFjdCA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgaWYgKEFydGlmYWN0Lm5ldHdvcmtzW05FVFdPUktfSURdLmFkZHJlc3MpIHtcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICBBcnRpZmFjdC5uZXR3b3Jrc1tORVRXT1JLX0lEXS5hZGRyZXNzLFxuICAgICAgQXJ0aWZhY3QuYWJpLFxuICAgICAgcHJvdmlkZXJcbiAgICApXG5cbiAgICByZXR1cm4gY29udHJhY3Q7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGBDb250cmFjdDogWyR7bmFtZX1dIGNhbm5vdCBiZSBsb2FkZWQhYCk7XG4gIH1cbn0iXSwibmFtZXMiOlsiZXRoZXJzIiwiY3JlYXRlRGVmYXVsdFN0YXRlIiwiZXRoZXJldW0iLCJwcm92aWRlciIsImNvbnRyYWN0IiwiaXNMb2FkaW5nIiwiTkVUV09SS19JRCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19ORVRXT1JLX0lEIiwibG9hZENvbnRyYWN0IiwibmFtZSIsIlByb21pc2UiLCJyZWplY3QiLCJyZXMiLCJmZXRjaCIsIkFydGlmYWN0IiwianNvbiIsIm5ldHdvcmtzIiwiYWRkcmVzcyIsIkNvbnRyYWN0IiwiYWJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/providers/web3/utils.ts\n");

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