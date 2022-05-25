import { MetaMaskInpageProvider } from "@metamask/providers";
import { Contract, providers } from "ethers";
import { type } from "os";

export type Web3Dependencies = {
    provider: providers.Web3Provider;
    contract: Contract;
    ethereum: MetaMaskInpageProvider;
}

export type Web3Dependencies = {
    
export type CryptoHookFactory = {
    (d: Partial<Web3Dependencies>): void
}