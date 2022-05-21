import { MetaMaskInpageProvider } from '@metamask/providers';
import { Contract, providers } from "ethers";


export type Web3Params = {
    ethereum: MetaMaskInpageProvider | null;
    provider: providers.Web3Provider | null;
    contract: Contract | null;
}