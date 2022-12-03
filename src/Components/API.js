import React, { useState , useEffect} from 'react'
import * as ethers from "ethers";
import * as PushAPI from "@pushprotocol/restapi";
import { contractABI, ERC20ABI, ETHContractAddress } from '../Constants/Constants';
import { Chat } from "@pushprotocol/uiweb";




function API() {


    const [btnClicked, setBtnClicked] = useState(false)
    
    const [isWalletInstalled, setIsWalletInstalled] = useState(false)
    const [account, setAccount] = useState(null)

    const WeiToEther = ethers.utils.parseUnits("10","ether")
    
    const connectWallet = async() =>{
        window.ethereum.request( {method: "eth_requestAccounts"})
        .then((accounts) => {
          setAccount(accounts[0]);
        }).catch( (e) => {
          alert(e)
        })
    }

    useEffect(() => {
      
        connectWallet()
    })
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contractInstantce = new ethers.Contract(ETHContractAddress, contractABI,signer)

    function btnclicks( ) {
        setBtnClicked(!btnClicked)
    }

    const placeOrder = async() => {


        const ERC20contractInstance = new ethers.Contract('0x5a1899faff22a2b3ea0294d86cd1be6269931ef1',ERC20ABI,signer);
        // const getApprove = await ERC20contractInstance.approve(P2PCONTRACTADDRESS, utils.parseUnits(amountB));// amout B will taken from the smart contract.
        const getApprove = await ERC20contractInstance.approve(ETHContractAddress,WeiToEther);// amout B will taken from the smart contract.
        await getApprove.wait();

        window.alert("Approved")
        const tx = await contractInstantce.deposite(WeiToEther,"0x5a1899faff22a2b3ea0294d86cd1be6269931ef1")
        await tx.wait()
        alert("Transaction Successful!")
        sendTelMsg()
        sendNotification()
    }

    const sendNotification = async() => {
        const PK = process.env.PRIVATE_KEY; // channel private key
        const Pkey = `0x${PK}`;
        const signer = new ethers.Wallet(Pkey);
  
    try {
            const apiResponse = await PushAPI.payloads.sendNotification({
            signer,
            type: 3, // target
            identityType: 2, // direct payload
            notification: {
            title: ` Succesfully received ${WeiToEther} USDT`,
            body: `Succesfully received ${WeiToEther} USDT Payment received from Address`
        },
            payload: {
            title: `Succesfully received ${WeiToEther} USDT`,
            body: `Succesfully received ${WeiToEther} USDT Payment received from Address`,
            cta: '',
            img: ''
        },
            recipients: `eip155:5:${account}`, // recipient address
            channel: 'eip155:5:0x92382c1EC09a72cd4a6bA024C4553a16a2250C2F', // your channel address
            env: 'staging'
      });
      
      // apiResponse?.status === 204, if sent successfully!
            console.log('API repsonse: ', apiResponse);
    } catch (err) {
      
          console.error('Error: ', err);
        }
  
    }

    // ########################### Telegram Bot starts here ###################

    async function sendTelMsg() {
        const link = await fetch("https://api.telegram.org/bot5974247608:AAG0BjQW3j6KZQUD1FpbCXUro8fzCEKavhE/sendMessage?chat_id=785696317&text=Payment%20received%20successfully%202")
        
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

                <Chat
                    account={account} //user address 
                    supportAddress="0x92382c1EC09a72cd4a6bA024C4553a16a2250C2F" //support address
                    apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
                        env="staging"
                    />

                    
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
                <button onClick={sendNotification}>sendNotification</button>
                <button onClick={sendTelMsg}>sendTelMsg</button>
                <h2>{account}</h2>

                
            </div>
        )
    }

}

export default API