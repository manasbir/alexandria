import { networks } from '../utils/networks';
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import MarketPlace from "../public/MarketPlace.json";


export default function Home() {

  const MARKET_ADDRESS = "0x87DcCE68e38DA2c9B8D8577fB1AdA5Cc3baA5A72";

  const [currentAccount, setCurrentAccount] = useState('');
  const [days, setDays] = useState('');
  const [tokenId, setTokenId] = useState('');

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
        let tx = await contract.borrowNFT(tokenId, {value: ethers.utils.parseEther(1000/15*days)});
        // Wait for the transaction to be mined
        const receipt = await tx.wait();
  
        // Check if the transaction was successfully completed
        if (receipt.status === 1) {
          console.log("Done! https://https://goerli.etherscan.io/tx/"+tx.hash);
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

  // let form = document.querySelector('form');
  // form.addEventListener(change, () => {
  //   setTokenId(form.option.value)
  // })

 
  useEffect(() => {
		checkIfWalletIsConnected();
	}, [])

  return (
    <div className='App'>
      
     
        <label for="Books">Choose a book:</label>
        <select value={tokenId} name="Books" id="books" onChange={(x) => console.log(x.target.value)}>
          <option value="1">Plato's Republic</option>
          <option value="2">Medea</option>
          <option value="3">Odyssey</option>
          <option value="4">Iliad</option>
          <option value="5" >Aesop's Fables</option>
        </select>
    

      <div className="form-container">
      <label for="days">How many days do you want to borrow this book for?</label>
        <input
          id="days"
							type="text"
							value={days}
							placeholder='How many days?'
							onChange={e => setDays(e.target.value)}
						/>

            <div className="button-container">
							<button disabled={null} onClick={callBorrowNft}>
							Borrow
						</button>
			</div>
      </div>

  
    </div>


  )

}