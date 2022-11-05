// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "../node_modules/@unlock-protocol/contracts/dist/PublicLock/IPublicLockV12.sol";

contract MarketPlace {
    IPublicLock public nftContract;
    address public owner;
    uint constant public cycle = 15 days;

    // events, maybe???

    // TODO
    // integrate oracles ??
    // eth refunds
    // json web app

    constructor (address _nftAddress) {
        nftContract = IPublicLock(_nftAddress);
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "!owner");
        _;
    }

    struct Book {
        address author;
        uint256 price; // in wei,price per cycle
    }

    struct Deets {
        uint256 tokenId;
        uint256 borrowTime;
        uint256 expiration;
    }

    mapping(uint256 => Book) public idToBook;
    mapping(uint256 => Deets) public idToDeets;
    // if we want multiple tokens, can make nested mapping
    mapping(address => uint256) public authorOwed;

    function borrowNFT(uint256 _tokenId) public payable {
        // charge user
        require(nftContract.ownerOf(_tokenId) == address(this));
        require(msg.value > idToBook[_tokenId].price);//find unit of price to dai
        //DAI.transferFrom(msg.sender, address(this), _amount);
        nftContract.lendKey(address(this), msg.sender, _tokenId);
        uint timeForBorrow = msg.value / idToBook[_tokenId].price * cycle;
        uint expiration = block.timestamp + timeForBorrow;
        idToDeets[_tokenId] = Deets(_tokenId, block.timestamp, expiration);
        authorOwed[idToBook[_tokenId].author] += msg.value/10;
    }

    function returnNFT(uint256 _tokenId) public {
        require(nftContract.ownerOf(_tokenId) == msg.sender);
        // calculate amount to pay back
        if (idToDeets[_tokenId].expiration > block.timestamp) {
            nftContract.unlendKey(address(this), _tokenId);
            delete idToDeets[_tokenId];
        } else {
            (bool sent,) = msg.sender.call{value: (idToDeets[_tokenId].expiration - block.timestamp) / cycle * idToBook[_tokenId].price}("");
            nftContract.unlendKey(address(this), _tokenId);
            delete idToDeets[_tokenId];
        }


    }

    function liquidate(uint256 _tokenId) public {
        if (idToDeets[_tokenId].expiration > block.timestamp) {
            nftContract.unlendKey(address(this), _tokenId);
            delete idToDeets[_tokenId];
        }
    }

    function extend (uint256 _tokenId) public payable {
        require(nftContract.ownerOf(_tokenId) == msg.sender);
        idToDeets[_tokenId].expiration += msg.value / idToBook[_tokenId].price * cycle;
        authorOwed[idToBook[_tokenId].author] += msg.value/10;
    }

    // owner functions

    function setAuthorAddress(address _authorAddress, uint256 _tokenId) public onlyOwner {
        idToBook[_tokenId].author = _authorAddress;
    }

    function addBook(uint256 _tokenId, address _author, uint256 _price) public onlyOwner {
        idToBook[_tokenId] = Book(_author, _price);
    }
}
