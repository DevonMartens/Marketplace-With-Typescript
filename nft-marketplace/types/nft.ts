export type NftAttribute = {
    trait_type: "Something" | "health" | "speed"
    value: string;
}

export type NftMeta = {
    name: string;
    description: string;
    image: string;
    attributes: NftAttribute[];
}