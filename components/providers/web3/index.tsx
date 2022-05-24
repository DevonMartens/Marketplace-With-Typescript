import * as React from "react";
import {  ReactNode, createContext, FunctionComponent, useContext, useState } from "react";
import { MetaMaskInpageProvider } from '@metamask/providers';
import { Contract, providers, utils } from "ethers";
import { createDefaultState, Web3State, loadContract } from "./utils";
import { ethers } from "ethers";



interface MyProps {
    children?: ReactNode;
}


const Web3Context = createContext<any>(createDefaultState());


const Web3Provider: React.FC<MyProps>  = ({children}) => {
    const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState())

    React.useEffect(() => {
       async function initWeb3(){
           const provider = new ethers.providers.Web3Provider(window.ethereum as any);
           const contract = await loadContract("SWIMMarketPlace", provider);
           setWeb3Api({
               ethereum: window.ethereum,
               provider,
               contract,
               isLoading: false
           })
        } initWeb3();     
    }, [])

return(
<Web3Context.Provider value={web3Api}>
    {children}
</Web3Context.Provider>
    )
}

export function useWeb3() {
    return useContext(Web3Context);
}

export default Web3Provider;