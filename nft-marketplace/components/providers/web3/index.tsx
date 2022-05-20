import {  createContext, FunctionComponent, useState } from "react";




const Web3Context = createContext<any>(null);



const Web3Provider: FunctionComponent = {(children) => {

const [web3Api, setWeb3Api] = useState({test: "connect"})

return(
<Web3Context.Provider value={web3Api}>
{children}
</Web3Context.Provider>
    )
}