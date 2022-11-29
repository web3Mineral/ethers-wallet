import React from 'react'
import "./pages.css"

let k1;
let k2;
let k3;
let k4;
let k5;
let k6;
let k7;
let k8;
let k9;
let k10;
let k11;
let k12;

export default function LoginWallet() {
    const copykeys = () => {
        return null
    }

    return (
        <div className='flex flex-col min-h-screen'>
            <main className='container mx-auto w-screen h-screen lg:max-w-screen-lg flex-1'>
                <div className='shadow-md shadow-slate-200 content-center flex-row items-center justify-center'>
                    <div>
                        <div className='my-17 flex py-2 px-4'>
                            <div className='flex-row flex-center lg:flex items-center flex-center p-2'>
                                <input id="1" onCopy={copykeys} value={k1} className="inputfields placeholder-gray-700" placeholder='1' type={"text"}/>
                            </div>
                            <div className='flex-row flex-center lg:flex items-center flex-center p-2'>
                                <input id="2" onCopy={copykeys} value={k2} className="inputfields placeholder-gray-700" placeholder='2' type={"text"}/>
                            </div>
                            <div className='flex-row flex-center lg:flex items-center flex-center p-2'>
                                <input id="3" onCopy={copykeys} value={k3} className="inputfields placeholder-gray-700" placeholder='3' type={"text"}/>
                            </div>
                            <div className='flex-row flex-center lg:flex items-center flex-center p-2'>
                                <input id="4" onCopy={copykeys} value={k4} className="inputfields placeholder-gray-700" placeholder='4' type={"text"}/>
                            </div>
                        </div>
                        <div className='my-17 flex py-2 px-4'>
                            <div className='flex-row flex-center lg:flex items-center flex-center p-2'>
                                <input id="5" onCopy={copykeys} value={k5} className="inputfields placeholder-gray-700" placeholder='5' type={"text"}/>
                            </div>
                            <div className='flex-row flex-center lg:flex items-center flex-center p-2'>
                                <input id="6" onCopy={copykeys} value={k6} className="inputfields placeholder-gray-700" placeholder='6' type={"text"}/>
                            </div>
                            <div className='flex-row flex-center lg:flex items-center flex-center p-2'>
                                <input id="7" onCopy={copykeys} value={k7} className="inputfields placeholder-gray-700" placeholder='7' type={"text"}/>
                            </div>
                            <div className='flex-row flex-center lg:flex items-center flex-center p-2'>
                                <input id="8" onCopy={copykeys} value={k8} className="inputfields placeholder-gray-700" placeholder='8' type={"text"}/>
                            </div>
                        </div>
                        <div className='my-17 flex py-2 px-4'>
                            <div className='flex-row flex-center lg:flex items-center flex-center p-2'>
                                <input id="9" onCopy={copykeys} value={k9} className="inputfields placeholder-gray-700" placeholder='9' type={"text"}/>
                            </div>
                            <div className='flex-row flex-center lg:flex items-center flex-center p-2'>
                                <input id="10" onCopy={copykeys} value={k10} className="inputfields placeholder-gray-700" placeholder='10' type={"text"}/>
                            </div>
                            <div className='flex-row flex-center lg:flex items-center flex-center p-2'>
                                <input id="11" onCopy={copykeys} value={k11} className="inputfields placeholder-gray-700" placeholder='11' type={"text"}/>
                            </div>
                            <div className='flex-row flex-center lg:flex items-center flex-center p-2'>
                                <input id="12" onCopy={copykeys} value={k12} className="inputfields placeholder-gray-700" placeholder='12' type={"text"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}