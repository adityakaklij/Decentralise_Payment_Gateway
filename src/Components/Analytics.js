import React, { useState } from 'react'
import {ethers} from 'ethers'
import { contractABI, ERC20ABI, ETHContractAddress } from '../Constants/Constants';
function Analytics() {

    const [usdt, setUSDT] = useState("")
    const [shm, setSHMT] = useState("")
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractInstantceUSDT = new ethers.Contract("0x5a1899faff22a2b3ea0294d86cd1be6269931ef1", ERC20ABI,provider)
  const contractInstantceSHM = new ethers.Contract("0x5a1899faff22a2b3ea0294d86cd1be6269931ef1", ERC20ABI,provider)

  const getTurnOver = async ()=> {

    const nonNativeUSDT = await contractInstantceUSDT.balanceOf(ETHContractAddress)
    const nonNativeSHM = await contractInstantceSHM.balanceOf(ETHContractAddress)
    console.log("nonNative",nonNativeSHM.toString())
    

  }

  return (
    <div>
        <h1>Analytics</h1>

        <h3>Total transactions:- </h3>
        <br />

        <h3>Total turnOver</h3>
        <button onClick={getTurnOver}>getTurnOver</button>
        <br />

        <h3>Chain tx.</h3>
    </div>
  )
}

export default Analytics