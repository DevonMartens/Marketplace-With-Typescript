import { MetaMaskInpageProvider } from '@metamask/providers';
import { Contract, providers } from "ethers";


export type Web3State = {
    ethereum?: MetaMaskInpageProvider;
    provider?: providers.Web3Provider;
    contract?: Contract;
}