import * as React from "react";
import { NftMeta } from "../../../types/nft";


type Props = {
    children?: React.ReactNode
};

type NftItemProps = {
    item: NftMeta;
}


const NftItem: React.FC<NftItemProps> = ({item}) => {
    return (
<><div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-flow-col-3 lg:max-w-none">
            <div className="flex flew-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                <img className={`h-full w-full object-cover`}
                src={"somePHoto"}
                alt="New NFT"
                />
                </div>
                <div className="flex-1">
                    <p className="text-sm font-mediom text-indigo-600">
                        NFT Collection
                    </p>
                    <div className="block mt-2">
                        <p className="text-xl front-semibold text-gray-900">some stuff for template</p>
                        <p className="text-xl front-semibold text-gray-500">some stuff more for template</p>
                    </div>
                </div>
                <div className="overflow-hidden mb-4">
                    <dl className="-mx-4 -mt-4 flex flex-wrap">
                        <dt className="order-2 text-sm font-medium text-zinc-400">
                            <dd className="order-2 text-sm font-medium text-indigo-400"></dd>
                            <div className="flex justify-center items-center">
                                100 Eth 
                            </div>
                        </dt>
                    </dl>
                </div>
            </div>
          </div></>
    )
}

export default NftItem;