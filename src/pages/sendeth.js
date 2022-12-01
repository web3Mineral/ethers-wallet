import React from 'react'
import "./pages.css"
import {Wallet, ethers} from "ethers"

export default function Sendeth() {
    const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");
    const signer = provider.getSigner()
    const userWallet = new ethers.Wallet(localStorage.getItem("pkey"), provider)

    const send = () => {
        let toadrs = document.getElementById("toadrs").value
        let amount = document.getElementById("val").value
        // console.log(toadrs);
        let tx = {
            to: toadrs,
            value: ethers.utils.parseEther(amount)
        }

        userWallet.sendTransaction(tx).then((txhash) => {
            console.log(txhash);
        })
    }

    return(
        <div className='flex flex-col min-h-screen'>
            <main className='container mx-auto w-screen h-screen lg:max-w-screen-lg flex-1'>
                <div className='shadow-md shadow-slate-200 content-center flex-row items-center justify-center'>
                    <div className='flex content-center align-middle justify-center p-4'>
                        <input type={"number"} className="sendfields w-1/12 p-1" placeholder='0.0' id='val'/><p className='font-bold p-2'>-></p><input id="toadrs" className="sendfields w-5/12 p-1"/>
                    </div>
                    <div className='flex content-center align-middle justify-center p-4'>
                        <button onClick={send} className='text-center text-white font-bold rounded py-2 w-2/12 focus:outline:none bg-gray-900 border-2 border-gray-400'>
                            Send
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}