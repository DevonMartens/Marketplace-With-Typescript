// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract SWIMMarketPlace is ERC721URIStorage {
  constructor() ERC721("SWIMMarketPlace", "SWIM") {}
}