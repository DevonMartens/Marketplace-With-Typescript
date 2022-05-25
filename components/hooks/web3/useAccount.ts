
import { CryptoHookFactory } from "../../../types/hooks";
import useSWR from "swr";
import { ContractFactory } from "ethers";

type AccountHookFactory = CryptoHookFactory<string, string>
//deps -> provider, ethereum, contract (web3State)

type useAccountHook = ReturnType<AccountHookFactory>
//type ReturnType 


export const hookFactory:AccountHookFactory = (deps) => (params) => {

  const swrRes =  useSWR("web3/useAccount", () => {
     console.log(deps);
        return "Test User"
    })
    return swrRes;
}

//export const useAccount = hookFactory({ethereum: undefined, provider: undefined, contract: undefined});