import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    let navigate = useNavigate();

    let routetosendeth = () => {
        navigate("/send")
    }


    return (
        <div className='flex flex-col min-h-screen'>
            <main className='container mx-auto w-screen h-screen lg:max-w-screen-lg flex-1'>
                <div className='shadow-md shadow-slate-200 content-center flex-row items-center justify-center'>
                    <div className='text-center p-4'>
                        <p className='font-bold'><a href='#' onClick={() => navigator.clipboard.writeText("Hello World")}>0x00000</a></p>
                    </div>
                    <div className='text-center p-4'>
                        <p className='font-bold text-4xl'>0.0</p>
                    </div>
                    <div className='justify-center align-middle flex content-center'>
                        <button onClick={routetosendeth} className='text-center text-white font-bold rounded py-2 w-2/12 focus:outline:none bg-gray-900 border-2 border-gray-400'>Send Ether</button>
                    </div>
                </div>
            </main>
        </div>
    )
}