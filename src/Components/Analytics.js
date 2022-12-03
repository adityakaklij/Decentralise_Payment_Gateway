import React, { useState } from 'react'
// import {ethers} from 'ethers'
import { contractABI, ERC20ABI, ETHContractAddress } from '../Constants/Constants';
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

function Analytics() {

    const [usdt, setUSDT] = useState("")
    const [shm, setSHM] = useState("")
    const [native, setNative] = useState("")
    const [totalOrders, setTotalOrders] = useState("")
    const [connectedChainId, setConnectedChainId] = useState("")

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractInstantceUSDT = new ethers.Contract("0x5a1899faff22a2b3ea0294d86cd1be6269931ef1", ERC20ABI,provider)
  const contractInstantceSHM = new ethers.Contract("0x0F71B2a7898EE371b8D1fDc9352dC9cbBC18294e", ERC20ABI,provider)

  const getTurnOver = async ()=> {

    const nonNativeUSDT = await contractInstantceUSDT.balanceOf(ETHContractAddress)
    const nonNativeSHM = await contractInstantceSHM.balanceOf(ETHContractAddress)
    setUSDT(ethers.utils.formatEther(nonNativeUSDT.toString()))
    setSHM(ethers.utils.formatEther(nonNativeSHM.toString()))
    
    const contractInstantceNative = new ethers.Contract(ETHContractAddress, contractABI,provider)
    const m = await contractInstantceNative.receivedNative()
    setNative(ethers.utils.formatEther(m.toString()))

    // const totalOrders = await contractInstantceNative.totalSells()
    // setTotalOrders(totalOrders.toString())
    
    const chainId = await provider.getNetwork()
    setConnectedChainId(chainId["name"])


  }


const sendNotification = async() => {
      const PK = '6d8ba3ffedde1df8c24629d66bf7a48b8f1ba91f6205e5a0b3fbbeb6271d6d8f'; // channel private key
      const Pkey = `0x${PK}`;
    const signer = new ethers.Wallet(Pkey);

  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: ` Succesfully received 121 USDT`,
        body: `Succesfully received 121 USDT Payment received from Address`
      },
      payload: {
        title: `Succesfully received 121 USDT`,
        body: `Succesfully received 121 USDT Payment received from Address`,
        cta: '',
        img: ''
      },
      recipients: 'eip155:5:0x28C7F788dd7E7a47D681489A58492FC6E64090D3', // recipient address
      channel: 'eip155:5:0x92382c1EC09a72cd4a6bA024C4553a16a2250C2F', // your channel address
      env: 'staging'
    });
    
    // apiResponse?.status === 204, if sent successfully!
    console.log('API repsonse: ', apiResponse);
  } catch (err) {
    console.error('Error: ', err);
  }

  }

  return (
    <div>
        <h1>Analytics</h1>

        <h3>Total Orders:- {totalOrders}</h3>
        <br />

        <h3>Total turnOver</h3>
        <h4>USDT:- {usdt}</h4>
        <h4>SHM:- {shm}</h4>
        <h4>Native tokens:-  {native}</h4>
        <button onClick={getTurnOver}>getTurnOver</button>
        <br />

        <h3>Chain tx. :- {connectedChainId}</h3>
        <br /><br />
        <button onClick={sendNotification}>Send Noti</button>
    </div>
  )
}

export default Analytics