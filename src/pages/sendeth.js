import React from 'react'
import "./pages.css"

export default function Sendeth() {
    return(
        <div className='flex flex-col min-h-screen'>
            <main className='container mx-auto w-screen h-screen lg:max-w-screen-lg flex-1'>
                <div className='shadow-md shadow-slate-200 content-center flex-row items-center justify-center'>
                    <div className='flex content-center align-middle justify-center p-4'>
                        <input type={"number"} className="sendfields w-1/12 p-1"/><p className='font-bold p-2'>-></p><input className="sendfields w-5/12 p-1"/>
                    </div>
                    <div className='flex content-center align-middle justify-center p-4'>
                        <button className='text-center text-white font-bold rounded py-2 w-2/12 focus:outline:none bg-gray-900 border-2 border-gray-400'>
                            Send
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}