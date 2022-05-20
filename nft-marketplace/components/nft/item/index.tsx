import * as React from "react";
import { NftMeta } from "../../../types/nft";
import Link from 'next/link';

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
                    <div>
                <img className={`h-full w-full object-cover`}
                src={item.image}
                alt="New NFT"
                />
                </div>
                </div>
                <div className="flex-1">
                    <p className="text-sm font-mediom text-indigo-600">
                        NFT Collection
                    </p>
                    <div className="block mt-2">
                        <p className="text-xl front-semibold text-gray-900">{item.name}</p>
                        <p className="text-xl front-semibold text-gray-500">{item.description}</p>
                    </div>
                </div>
                <div className="overflow-hidden mb-4">
                    <dl className="-mx-4 -mt-4 flex flex-wrap">
                        <dt className="order-2 text-sm font-medium text-zinc-400">Price - this data comes from the contract</dt>
                            <dd className="order-2 text-sm font-medium text-indigo-400"></dd>
                            <div className="flex justify-center items-center">
                                100 Eth 
                                <img className="h-6" src="/images/small-eth-webp"></img>
                            </div>
                     
                    </dl>
                </div>
            
                { item.attributes.map(attribute => 
<div key={attribute.trait_type} className="flex flex-col px-4 pt-4">
<dt className="order=2 text-sm font-medium">{attribute.trait_type}</dt>
<dd className="order=1 text-sm font-medium">{attribute.value}</dd>
</div>
                )
                }
            </div>
          </div></>
    )
}

export default NftItem;