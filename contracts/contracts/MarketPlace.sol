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

    struct Details {
        uint256 tokenId;
        uint256 borrowTime;
        uint256 expirationTime;
    }

    mapping(uint256 => Book) public idToBook;
    mapping(uint256 => Details) public idToDetails;
    // if we want multiple tokens, can make nested mapping
    mapping(address => uint256) public authorOwed;

    function borrowNFT(uint256 _tokenId) external payable {
        require(nftContract.ownerOf(_tokenId) == address(this), "!sale");
        require(msg.value >= idToBook[_tokenId].price, "!eth");
        nftContract.lendKey(address(this), msg.sender, _tokenId);
        uint timeForBorrow = msg.value / idToBook[_tokenId].price * cycle;
        uint expiration = block.timestamp + timeForBorrow;
        idToDetails[_tokenId] = Details(_tokenId, block.timestamp, expiration);
        authorOwed[idToBook[_tokenId].author] += msg.value/10;
    }

    function returnNFT(uint256 _tokenId) public {
        require(nftContract.ownerOf(_tokenId) == msg.sender, "!owner");
        // calculate amount to pay back
            nftContract.unlendKey(address(this), _tokenId);
        if (idToDetails[_tokenId].expirationTime < block.timestamp) {
            uint refund = (idToDetails[_tokenId].expirationTime - block.timestamp) / cycle * idToBook[_tokenId].price;
            (bool sent,) = msg.sender.call{value: refund}("");
            authorOwed[idToBook[_tokenId].author] -= refund/10;
        }
        delete idToDetails[_tokenId];
    }

    function liquidate(uint256 _tokenId) external {
        if (idToDetails[_tokenId].expirationTime > block.timestamp) {
            nftContract.unlendKey(address(this), _tokenId);
            delete idToDetails[_tokenId];
        }
    }

    function extend (uint256 _tokenId) external payable {
        require(nftContract.ownerOf(_tokenId) == msg.sender);
        idToDetails[_tokenId].expirationTime += msg.value / idToBook[_tokenId].price * cycle;
        authorOwed[idToBook[_tokenId].author] += msg.value/10;
    }

    // owner functions

    function setAuthorAddress(address _authorAddress, uint256 _tokenId) public onlyOwner {
        idToBook[_tokenId].author = _authorAddress;
    }

    function addBook(uint256 _tokenId, address _author, uint256 _price) public onlyOwner {
        idToBook[_tokenId] = Book(_author, _price);
    }

    function transferAuthors(address _oldAuthor, address _newAuthor) public onlyOwner {
        authorOwed[_newAuthor] = authorOwed[_oldAuthor];
        delete authorOwed[_oldAuthor];
    }

    function changeNFT(address _newNFT) public onlyOwner {
        nftContract = IPublicLock(_newNFT);
    }

    function authorClaim () public {
        require(authorOwed[msg.sender] > 0);
        (bool sent,) = msg.sender.call{value: authorOwed[msg.sender]}("");
        delete authorOwed[msg.sender];
    }
}
