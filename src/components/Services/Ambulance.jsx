import React from 'react'
import styles from './Ambulance.module.css'
import { useLocation, useNavigate } from 'react-router-dom'


const Ambulance = ({ data }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const navigateBooking = (e) => {
    navigate(
      '/booking',
      {
        state: {
          location: location,
          data
        }
      }
    )
  }
  
  return (
    <div className={`${styles.container} absolute  w-[100%] flex flex-col bg-white  rounded-t-2xl z-30 border-y-[20px] max-h-[300px] border-x-[12px] sm:gap-[25px] border-maroon-red pl-4 mx-2 sm:relative sm:border-none sm:items-start sm:w-1/2`} >
      <h4 className="ambulanceName  my-2 text-lg sm:text-2xl font-bold ">
        Ambulance Name
      </h4>
      <p className="hidden sm:border-black sm:border-b-4 sm:w-0 sm:min-w-[300px]" >
        {/* {data.name} */}
      </p>
      <h4 className="text-lg w-[100%] sm:text-2xl font-bold my-2">
        Ambulance No
      </h4>
      <p className="hidden sm:border-black sm:border-b-4 sm:w-0 sm:min-w-[300px]" >
      </p>

      <h4 className='text-lg  sm:text-2xl font-bold' >
        Price <span>{data.price}</span>
      </h4>
      <h4 className='text-lg  sm:text-2xl font-bold mt-3' >
        ETA <span>{data.eta}</span>
      </h4>
      
      <button className={`bg-black shadow-gray-box rounded-[40px] text-white font-bold text-lg w-1/3  flex items-center justify-center absolute bottom-2 right-2 py-2  sm:mx-none sm:text-2xl sm:py-3 hover:scale-110 duration-200`
    } 
    onClick={navigateBooking}
    >
          Book
      </button>
    </div>
  )
}

export default Ambulance