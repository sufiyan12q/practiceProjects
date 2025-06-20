import React, { useState } from 'react'

const Bmi = () => {

    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [bmi, setBmi] = useState(0)

    function formSubmission(e) {
        e.preventDefault()
    }

    function fetchHeight(e) {
        setHeight(e.target.value)
    }

    function fetchWeight(e) {
        setWeight(e.target.value)
    }



    //  const heightInMeters = height / 100; // convert cm to meters
    //  const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    // setBmi(bmiValue)

    // console.log(bmiValue);
    
    return (
        <>
            <div className='h-screen w-screen flex items-center justify-center'>
                <div className='h-100 w-80  shadow-md rounded-md flex flex-col space-y-4 items-center p-4'>
                    <h2 className='text-xl font-semibold'>BMI CALCULATOR</h2>
                    <form onSubmit={formSubmission} className='flex flex-col space-y-1'>

                        <label className='text-sm font-semibold mt-1'>Weight lbs</label>
                        <input onChange={fetchHeight} className='py-2 px-5 border rounded-md outline-none' type="text" placeholder='Enter Your Weight' />
                        <label className='text-sm font-semibold mt-1'>Height(in)</label>
                        <input onChange={fetchWeight} className='py-2 px-5 border rounded-md outline-none' type="text" placeholder='ENter your Height' />

                        <button className='w-full bg-blue-600 py-2 px-5 text-white rounded-sm mt-2'>Submit</button>
                        <button className='w-full bg-gray-300  py-2 px-5 rounded-sm border'>Reload</button>

                        <div className='flex items-center flex-col mt-4'>
                            <p>Your Bmi is : 19.45</p>
                            <p>You are OverWeight</p>
                        </div>


                    </form>
                </div>
            </div>

        </>
    )
}

export default Bmi