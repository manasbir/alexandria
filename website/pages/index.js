import { networks } from '../utils/networks';
import React, { useEffect, useState } from "react";

export default function Home() {

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
