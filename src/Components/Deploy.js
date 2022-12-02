import { ethers } from 'ethers'
import React, { useState } from 'react'
import { contractABI, contractByteCode, ETHContractAddress, polygonContractAddress, ShardeumContractAddress } from '../Constants/Constants'

function Deploy() {

    const [name,setName]= useState("Payment Gateway")
    const [value, setValue] = useState();
    const m = []

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const deployContract = async () => {
        const factory = new ethers.ContractFactory(contractABI, contractByteCode, signer)
        const contract = await factory.deploy(["0x5a1899faff22a2b3ea0294d86cd1be6269931ef1","0x0F71B2a7898EE371b8D1fDc9352dC9cbBC18294e"]);
        // const contract = await factory.deploy();
        console.log("address- ", contract.address)
        window.alert(`contract depolyed at ${contract.address}`)
    }

    function GetName(e){
        setName(e.target.value)
    }

    function getDropDown() {
        console.log(m)
        
    }

    const handleChange = (e) => {
        m.push(e.target.value)
        // setValue.push[e.target.value];
    };

    const getInitialState = () => {
        const value = "ETH";
        return value;
    };

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

        <label for="cars">Select Tokens:</label>

        <select onChange={handleChange} name="make" className="selectpicker" multiple data-live-search="true">
            <option data-count="2" value="USDT">USDT</option>
            <option data-count="23" value="ETH">ETH</option>
            <option data-count="433" value="MATIC">MATIC</option>
            <option data-count="45" value="SHM">SHM</option>
            <option data-count="476" value="fETH">fETH</option>
            <option data-count="78" value="Other">Other</option>
            
        </select>


        <h4>Contract-Name</h4>
        <input type="text" placeholder='Contract Name' onChange={GetName}/>

        <br />
        <br />

        <button onClick={deployContract}>Deploy Contract</button>
        <button onClick={getDropDown}>getDropDown</button>
    </>
  );
}

export default Deploy