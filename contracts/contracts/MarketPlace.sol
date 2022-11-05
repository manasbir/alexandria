// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "../node_modules/@unlock-protocol/contracts/dist/PublicLock/IPublicLockV12.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MarketPlace {
    IPublicLock public nftContract;
    address public owner;
    uint constant public timePeriod = 15 days;
    IERC20 DAI;

    // events, maybe???

    // TODO
    // integrate oracles

    constructor (address _nftAddress) {
        nftContract = IPublicLock(_nftAddress);
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "!owner");
        _;
    }

    struct Book {
        string name; // i dont like the idea of using strings
        address author;
        uint256 price; // in wei, so we can convert into other coins later
        // bool inUse; // can be deleted depending on unlock functionality
    }

    struct Deets {
        uint256 tokenId;
        address borrower;
        uint256 borrowTime;
        uint256 amount;
        uint256 cycles;
    }

    mapping(uint256 => Book) public idToBook;
    mapping(uint256 => Deets) public idToDeets;
    // if we want multiple tokens, can make nested mapping
    mapping(address => uint256) public authorOwed;

    function borrowNFT(uint256 _tokenId, uint _amount) public {
        // charge user
        require(nftContract.ownerOf(_tokenId) == address(this));
        DAI.transferFrom(msg.sender, address(this), _amount);
        nftContract.lendKey(address(this), msg.sender, _tokenId);
        idToDeets[_tokenId] = Deets(_tokenId, msg.sender, block.timestamp, _amount, 1);
    }

    function returnNFT(uint256 _tokenId) public {
        nftContract.unlendKey(address(this), _tokenId);
        delete idToDeets[_tokenId];
    }

    function updateFee(uint256 _tokenId) public {
        // price will double ig
        uint price = idToBook[_tokenId].price;
        uint borrowTime = idToDeets[_tokenId].borrowTime;
        // price*()
        // x^2
        uint newPrice = price*((block.timestamp - borrowTime) / timePeriod)**2;

        if (newPrice > idToDeets[_tokenId].amount) {
            try DAI.transferFrom(msg.sender, address(this), newPrice - idToDeets[_tokenId].amount) {
                idToDeets[_tokenId].amount = newPrice;
            } catch {
                forceReturn(_tokenId);
            }
        }

    }

    function doesFeeNeedUpdate (uint256 _tokenId) public view returns (bool) {
        uint time = block.timestamp - idToDeets[_tokenId].borrowTime;
        return time / timePeriod > idToDeets[_tokenId].cycles; //perhaps a bug in how solidity handles division (floor error)
        // if the time is greater than 15 days, then return true
    }

    function forceReturn(uint256 _tokenId) internal {
        // TODO
        // somehow return outstanding balance
        nftContract.unlendKey(address(this), _tokenId);
        delete idToDeets[_tokenId];

        // if the user doesnt return the book in time, then the owner can force return
        // the owner will get the book back
    }

    function deposit(uint256 _tokenId, uint256 _amount) public {
        require(nftContract.ownerOf(_tokenId) == msg.sender);
        DAI.transferFrom(msg.sender, address(this), _amount);
        idToDeets[_tokenId].amount += _amount;
    }

    function setAuthorAddress(address _authorAddress, uint256 _tokenId) public onlyOwner {
        idToBook[_tokenId].author = _authorAddress;
    }

    function addBook(uint256 _tokenId, address _author, string memory _name, uint256 _price) public onlyOwner {
        idToBook[_tokenId] = Book(_name, _author, _price);
    }
}
