import React, { useState , useEffect} from 'react'
import { ethers } from 'ethers';
import "../App.css"
import '../css/Navbar.css'
import { Link } from 'react-router-dom';


export default function Navbar() {

    const [connectIs, setConnectIs] = useState("Connect")
    const [account, setAccount] = useState(null)
    const [ensAccount, setEnsAccount] = useState()

    useEffect(() => {
      Connect()
    })
    
    async function Connect() {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner()
        const myAddress = await signer.getAddress()
        // setMainAddress(myAddress)
        setConnectIs("Connected")
        // setAccount(myAddress)
        setAccount(myAddress)
        // setEnsAccount(await provider.lookupAddress(account))
        let m = await provider.lookupAddress(account)
        if (m === null){
            setEnsAccount(myAddress)
            console.log("from if", ensAccount)
        }
        else{
            setEnsAccount(m)
            console.log("from else", ensAccount)
        }
        console.log(m)
    }
    
  return (

    <div>
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}
        <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid">

            
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        
                    </li>


                    <li className="nav-item">
                        <a className="nav-link" href="/Deploy">Deploy</a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link" href="/Analytics">Analytics</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/API">API-Screen</a>
                    </li>

                    <li className="nav-item">
                        {/* <a className="nav" >{account}</a> */}
                        <a className="nav" >{ensAccount}</a>
                    </li>

                    {/* <li className="nav-item">
                        <a className="nav-link" >View Tickets</a>
                    </li> */}
                    

                    
                </ul>

                        
                </div>
            </div>
        </nav>  
    </div>
  )
}
