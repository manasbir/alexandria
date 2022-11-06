import { networks } from '../utils/networks';
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
const market = require("../public/MarketPlace.json");
import Head from 'next/head'
import twitterLogo from './assets/twitter-logo.svg';


export default function Home() {
  const MARKET_ADDRESS = "0xf46E848372417bef30dDb2b5b909752721AA6367";

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
        const contract = new ethers.Contract(MARKET_ADDRESS, market.abi, signer);
  
        console.log("Going to pop wallet now to pay gas...")
        console.log(tokenId);
        let amount = 1000*days/15;

        amount = Math.floor(amount);
        amount = ethers.utils.formatUnits(amount.toString())
        console.log(amount);
        let tx = await contract.borrowNFT(tokenId, {value: ethers.utils.parseEther(amount)});
        alert(`go to : https://alexandria-lib.vercel.app/${tokenId}}`);
        
        // (ethers.utils.formatUnits(amount.toString()))
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
      <Head>
        <title>Alexandria</title>
	      <link rel="shortcut icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
     <div id="dropdown-container">
        <label for="Books">Choose a book:</label>
        <select value={tokenId} name="Books" id="books" onChange={(x) => setTokenId(x.target.value)}>
          <option value="6">Plato's Republic</option>
          <option value="7">Medea</option>
          <option value="8">Odyssey</option>
          <option value="9">Iliad</option>
          <option value="10" >Aesop's Fables</option>
        </select>
      </div>

      <div className="form-container">
        <label for="days">How many days do you want to borrow this book for?</label><span class="require">(min 15 days)</span>
        <input
          id="days"
							type="text"
							value={days}
							placeholder='# of days'
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