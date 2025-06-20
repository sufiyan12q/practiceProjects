import React, { useState } from 'react'

const Counter = () => {

    const [value, setValue] = useState(0)
    const [reset, setReset] = useState('')

    function handleDecrement() {
        value > 0 ? setValue(value - 1) : ''
    }

    function handleIncrement() {
        setValue(value + 1)
    }

    function handleReset(){
        setValue(0)
    }

    return (
        <div className='h-screen w-screen flex items-center justify-center'>

            <div className='h-120 w-80 bg-gray-200 rounded-md flex items-center justify-center flex-col'>
                <button onClick={handleReset} className='ml-40 font-semibold text-xl border rounded-md py-1 px-4 mb-5 w-20 hover:bg-slate-100 hover:scale-90 duration-150' >Reset</button>

                <div className='h-80 w-60 bg-gradient-to-r from-yellow-300 to-green-300 flex items-center justify-center rounded-md'>
                    <p className='text-4xl font-bold'>{value}</p>
                </div>
                <div className='flex space-x-8 mt-4'>
                    <button onClick={handleDecrement} className='font-semibold text-xl border rounded-md py-1 px-2 w-20 hover:bg-slate-100 hover:scale-90 duration-150'>-</button>
                    <button onClick={handleIncrement} className='font-semibold text-xl border rounded-md py-1 px-2 w-20 hover:bg-slate-100 hover:scale-90 duration-150'>+</button>
                </div>
            </div>
        </div>
    )
}

export default Counter