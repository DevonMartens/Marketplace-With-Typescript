import { MetaMaskInpageProvider } from '@metamask/providers';
import { Contract, providers } from "ethers";


export type Web3Params = {
    ethereum: MetaMaskInpageProvider | null;
    provider: providers.Web3Provider | null;
    contract: Contract | null;
}

export type Web3State = {
    isLoading: boolean; // this is only true when web3 is loading
} & Web3Params

export const createDefaultState = () => {
    return {
        ethereum: null,
        provider: null,
        contract: null,
        isLoading: true,
    }
}