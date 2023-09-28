import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const InfoInput = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const handleOnClick = () => {
        console.log(location)
        if(location.pathname === '/basiclifesupport'){
            navigate('/booking', { state : { title: 'Basic Life Support', location}})
        } else  {
            navigate('/booking', { state: { title: 'Mortuary', location } })
        }

    }

  return (
    <div className='flex flex-col justify-around gap-[50px] items-stretch w-[50%]' >
          <input className="border-4 w-full py-2 px-4 border-font-orange-dark placeholder-black placeholder:font-bold placeholder:text-xl" type="text" placeholder='Your Location' />
          <input className="border-4 w-full py-2 px-4 border-font-orange-dark placeholder-black placeholder:font-bold placeholder:text-xl" type="text" placeholder='Hospital/Location' />

        <button className="bg-black text-white rounded-full flex items-center justify-center text-xl w-[30%] m-auto h-[45px] font-semibold shadow-gray-box " onClick={handleOnClick} >
            Next
        </button>
    </div>
  )
}

export default InfoInput