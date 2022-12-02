import { ethers } from 'ethers'
import React, { useState } from 'react'
import { contractABI, contractByteCode, ETHContractAddress, polygonContractAddress, ShardeumContractAddress } from '../Constants/Constants'

function Deploy() {

    const [name,setName]= useState("Payment Gateway")

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const deployContract = async () => {
        const factory = new ethers.ContractFactory(contractABI, contractByteCode, signer)
        const contract = await factory.deploy();
        console.log("address- ", contract.address)
        window.alert(`contract depolyed at ${contract.address}`)
    }

    function GetName(e){
        setName(e.target.value)
    }

    //  ########## EPNS ########
    // const getData = async ()=> {
    //     const provider = new ethers.providers.Web3Provider(window.ethereum);
    //     var name = await provider.lookupAddress(account);
    //     console.log("name",name)
  
    //     var address = await provider.resolveName('adityak.eth');
    //     console.log("address", address)
  
    //     var balance = await provider.getBalance('adityak.eth');
    //     console.log("balance",balance.toString())
  
    //     // const resolver = await provider.getResolver('adityak.eth');
    //     // console.log("resolver", resolver)
    //     // const contentHash = await resolver.getContentHash();
    //     // console.log("contentHash",contentHash)
    //     // const btcAddress = await resolver.getAddress(0);
    //     // console.log("btcAddress",btcAddress)
    //     // const dogeAddress = await resolver.getAddress(3);
    //     // console.log("dogeAddress",dogeAddress)
    //     // const email = await resolver.getText("email");
    //     // console.log("email", email)
    
  return (
    <>
        <h1>Deploy</h1>

        <br /><br />

        <label for="cars">Select Blockchain:</label>

        <select name="chains" id="chains" size="1" >
            <option value="ETH-Goerli">ETH-Goerli</option>
            <option value="Shardeum">Shardeum</option>
            <option value="Polygon">Polygon</option>
            <option value="Other">Other</option>
        </select>
        
        <br />
        <br />

        <h4>Contract-Name</h4>
        <input type="text" placeholder='Contract Name' onChange={GetName}/>

        <br />
        <br />

        <button onClick={deployContract}>Deploy Contract</button>
    </>
  )
}

export default Deploy