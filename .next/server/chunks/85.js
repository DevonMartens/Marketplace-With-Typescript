"use strict";
exports.id = 85;
exports.ids = [85];
exports.modules = {

/***/ 2085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ web3),
  "$": () => (/* binding */ useWeb3)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/providers/web3/utils.ts
const createDefaultState = ()=>{
    return {
        ethereum: null,
        provider: null,
        contract: null,
        isLoading: true
    };
};

// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
;// CONCATENATED MODULE: ./components/providers/web3/index.tsx





const Web3Context = /*#__PURE__*/ (0,external_react_.createContext)(createDefaultState());
const Web3Provider = ({ children  })=>{
    const { 0: web3Api , 1: setWeb3Api  } = (0,external_react_.useState)(createDefaultState());
    external_react_.useEffect(()=>{
        function initWeb3() {
            const provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
            setWeb3Api({
                ethereum: window.ethereum,
                provider,
                contract: null,
                isLoading: false
            });
        }
        initWeb3();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(Web3Context.Provider, {
        value: web3Api,
        children: children
    });
};
function useWeb3() {
    return (0,external_react_.useContext)(Web3Context);
}
/* harmony default export */ const web3 = (Web3Provider);


/***/ })

};
;