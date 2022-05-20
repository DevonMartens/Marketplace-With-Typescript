import * as React from "react";
import {  ReactNode, createContext, FunctionComponent, useContext, useState } from "react";

interface MyProps {
    children?: ReactNode;
}


const Web3Context = createContext<any>(null);


const Web3Provider: React.FC<MyProps>  = ({children}) => {
    const [web3Api, setWeb3Api] = useState({test: "connect"})


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