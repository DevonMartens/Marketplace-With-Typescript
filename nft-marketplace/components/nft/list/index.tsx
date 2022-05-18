import * as React from "react";
import NftItem from "../item";


type NftListProps = {
    nfts: any[]
    children?: React.ReactNode
};




const NftList: React.FC<NftListProps> = ({nfts}) => {
    return (
        <div className="mt-12 max-w-;g mx-auto grid gap-5 lg:grid-cols-3 lg:maz-w-none">
            { nfts.map(nft =>
<div key={nft.image} className="flex flex-col rounded-lg overflow-hidden">
            )
            <NftItem/>
            </div>
            )}
        </div>
    )
}


export default NftList;