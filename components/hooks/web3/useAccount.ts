
import { CryptoHookFactory } from "../../../types/hooks";
import useSWR from "swr";
import { ContractFactory } from "ethers";

type AccountHookFactory = CryptoHookFactory<string, string>
//deps -> provider, ethereum, contract (web3State)

//type useAccountHook = ryptoHookFactory<string, string>
//type ReturnType 


export type useAccountHook = ReturnType<AccountHookFactory>
export const hookFactory: AccountHookFactory = (deps) => (params) => {
  const swrRes = useSWR("web3/useAccount", () => {
    console.log(deps);
    console.log(params);
    // making request to get data
    return "Test User"
  })
    return swrRes;
}

//export const useAccount = hookFactory({ethereum: undefined, provider: undefined, contract: undefined});