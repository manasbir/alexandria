import { networks } from '../utils/networks';
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import MarketPlace from "../../../contracts/artifacts/contracts/MarketPlace.sol/MarketPlace.json";


export default function Home() {

  const MARKET_ADDRESS = "0x87DcCE68e38DA2c9B8D8577fB1AdA5Cc3baA5A72";

  const [currentAccount, setCurrentAccount] = useState('');

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask -> https://metamask.io/");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Make sure you have metamask!');
      return;
    } else {
      console.log('We have the ethereum object', ethereum);
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log('Found an authorized account:', account);
      setCurrentAccount(account);
    } else {
      console.log('No authorized account found');
    }
  };


  const callBorrowNft = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(MARKET_ADDRESS, MarketPlace.abi, signer);
  
        console.log("Going to pop wallet now to pay gas...")
        let tx = await contract.borrowNFT(tokenId, {value: ethers.utils.parseEther(price)});
        // Wait for the transaction to be mined
        const receipt = await tx.wait();
  
        // Check if the transaction was successfully completed
        if (receipt.status === 1) {
          console.log("Done! https://mumbai.polygonscan.com/tx/"+tx.hash);
                  }
        else {
          alert("Transaction failed! Please try again");
        }
      }
    }
    catch(error){
      console.log(error);
    }
  }



  useEffect(() => {
		checkIfWalletIsConnected();
	}, [])

  return (
    <div className='App'>
      
      <form action="/action_page.php">
        <label for="Books">Choose a book:</label>
        <select name="Books" id="books">
          <option value="platosrepublic">Plato's Republic</option>
          <option value="medea">Medea</option>
          <option value="odyssey">Odyssey</option>
          <option value="iliad">Iliad</option>
          <option value="aesop" >Aesop's Fables</option>
        </select>
      </form>

    </div>


  )
}
