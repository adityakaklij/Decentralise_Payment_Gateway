import React, { useState } from 'react'
import {ethers} from 'ethers'
import { contractABI, ERC20ABI, ETHContractAddress } from '../Constants/Constants';

function API() {

    const [btnClicked, setBtnClicked] = useState(false)

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contractInstantce = new ethers.Contract(ETHContractAddress, contractABI,signer)

    function btnclicks( ) {
        setBtnClicked(!btnClicked)
    }

    const placeOrder = async() => {

        const ERC20contractInstance = new ethers.Contract('0x5a1899faff22a2b3ea0294d86cd1be6269931ef1',ERC20ABI,signer);
        // const getApprove = await ERC20contractInstance.approve(P2PCONTRACTADDRESS, utils.parseUnits(amountB));// amout B will taken from the smart contract.
        const getApprove = await ERC20contractInstance.approve(ETHContractAddress,1000);// amout B will taken from the smart contract.
        await getApprove.wait();

        window.alert("Approved")
        const tx = await contractInstantce.deposite(1000,"0x5a1899faff22a2b3ea0294d86cd1be6269931ef1")
        await tx.wait()
        alert("Done!")
    }

    if(btnClicked){
        return(
            <>
            {/*  Below this should be popped up after user click on Buy-now function */}
                <div>

                    {/* Select the chain */}

                    <label for="cars">Select Blockchain:</label>

                    <select name="chains" id="chains" size="1" >
                        <option value="ETH-Goerli">ETH-Goerli</option>
                        <option value="Shardeum">Shardeum</option>
                        <option value="Polygon">Polygon</option>
                        <option value="Other">Other</option>
                    </select>
                    
                    

                    {/* Select the Token */}

                    <label for="cars">Select Tokens:</label>

                    <select name="chains" id="chains" size="1" >
                        <option value="ETH-Goerli">USDT</option>
                        <option value="Shardeum">SHM</option>
                        <option value="Polygon">ETH</option>
                        <option value="FVM">FVM</option>
                        <option value="Other">MATIC</option>
                    </select>

                    <br /> <br />
                    <br /> <br />

                    <div>
                        {/* QR code will dislpay */}
                        <h6>QR code will be displayed here</h6>

                        {/* Place Order btn */}

                        <button onClick={placeOrder}>Place Order</button>
                    </div>
                    

                </div>
            </>
        )
    }

    else{
        return(
            <div>
                <h1>API screen</h1>

                <br />
                <br />

                <button onClick={btnclicks}>Buy Now</button>

                
            </div>
        )
    }

}

export default API