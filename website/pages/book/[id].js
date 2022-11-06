import {useRouter} from 'next/router'
import IPublicLock from "../../public/IPublicLock.json";
import { ethers } from "ethers";
import { useState } from "react";



function Book()  {

    let isOwner = 0;
    const NFT_ADDRESS = "0x0315988e4031b9f1cc1d5720b86ee9822b04bd5b";
    const [currentAccount, setCurrentAccount] = useState('');

//connect wallet:
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
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(NFT_ADDRESS, IPublicLock.abi, signer);
        const nft = await connectedContract.ownerOf(id); 
        if (nft == currentAccount) {
            isOwner = 1;
        } else {
            alert("You do not have access to this book");
        }
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
    
    const router = useRouter()
    let id = router.query.id
    let book;
    if (id == 1) {
        book = "http://160592857366.free.fr/joe/ebooks/ShareData/The%20Republic%20by%20Plato.pdf" // plato the republic
    } else if (id == 2) {
        book = "https://www.marcuswitcher.com/Euripides,%20Medea-1.pdf" // medea
    } else if (id == 3) {
        book = "https://www.boyle.kyschools.us/UserFiles/88/The%20Odyssey.pdf" // odyssey
    } else if (id == 4) {
        book = "https://www.gutenberg.org/files/6130/old/6130-pdf.pdf" // iliad
    } else if (id == 5) {
        book = "https://www.gutenberg.org/cache/epub/28/pg28-images.html" // aesop fable
    } else if (id > 5) {
        id = 1;
    }


    return(
        <div>
        <h1 style={{
            opacity : isOwner ? 0 : 1
        }}>
            YOU DO NOT HAVE ACCESS
        </h1>

        <iframe src={book} style={{opacity: isOwner}}></iframe>
        </div>
    )
}

export default Book;


