import React, { useState } from 'react'

function API() {

    const [btnClicked, setBtnClicked] = useState(false)

    function btnclicks( ) {
        setBtnClicked(!btnClicked)
    }

    const placeOrder = async() => {

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