import '../styles/globals.css'
import React, { useEffect, useState } from "react";



function MyApp({ Component, pageProps }) {

  const [currentAccount, setCurrentAccount] = useState('');
  const [network, setNetwork] = useState('');
  const [searchInput, setSearchInput] = useState('');

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

   const renderNotConnectedContainer = () => (
    <div className="connect-wallet-container">
      {/* <img src="https://media.giphy.com/media/3ohhwytHcusSCXXOUg/giphy.gif" alt="Ninja donut gif" /> */}
      {/* Call the connectWallet function we just wrote when the button is clicked */}
      <button onClick={connectWallet} className="cta-button connect-wallet-button">
        Connect Wallet
      </button>
    </div>
  );

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);


  return (
  <div>

      <div className="right">
        <img alt="Network logo" className="logo" src={network.includes("Polygon") ? '/polygonlogo.png' : '/ethlogo.png'} />
        {currentAccount ? <p> Wallet: {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)} </p> : <p> Not connected </p>}
      </div>
        <div className="container">
      <div className="header-container">
        <header>
          <div className="left">
            <p className="title">📚Web3Lib</p>
            <p className="subtitle">Read, Read, Read</p>
          </div>

          
            {!currentAccount && renderNotConnectedContainer()}

        </header>

     
          {/* the search bar */}
          <div className='search'>
          <input type='search' placeholder='search books'></input>
          </div>
       
      </div>
    </div>
    <Component {...pageProps} />

    

  </div>
  )
}

export default MyApp
