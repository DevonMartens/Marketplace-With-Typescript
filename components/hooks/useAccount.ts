

import useSWR from "swr";

//deps -> provider, ethereum, contract (web3State)

export const hookFactory = ({...deps}) => () => {
  const swrRes =  useSWR("web3/useAccount", () => {
        return "Test User"
    })
    return swrRes;
}