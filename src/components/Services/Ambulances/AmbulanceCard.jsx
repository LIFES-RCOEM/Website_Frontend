import React from 'react'
import styles from '../Ambulance.module.css'
import { useLocation, useNavigate } from 'react-router-dom'

const AmbulanceCard = ({ data }) => {
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
      <div className={`flex w-[100%] sm:w-[50%] gap-[75px] items-center border-gray border-b-4 py-1 pl-4 hover:scale-[1.02] sm:my-4 sm:py-0 sm:pl-0 sm:hover:scale-110 duration-200 `} >
          <div className='flex flex-col gap-[5px] items-' >
              <h4 className="ambulanceName text-md sm:text-xl font-bold ">
                  Ambulance Name
              </h4>
              <h4 className="text-xl font-bold hidden sm:block">
                  Ambulance No
              </h4>

              <h4 className='text-sm sm:text-lg font-bold' >
                  Price: <span>{data.price}</span>
              </h4>
              <h4 className='text-sm sm:text-lg font-bold' >
                  ETA: <span>{data.eta}</span>
              </h4>
          </div>

          <button className={`text-white font-bold text-md sm:text-2xl w-[25%] mx-auto flex items-center justify-center h-[45px] sm:h-[60px] bg-black rounded-full shadow-gray-box `}
          onClick={(e) => {
            navigateBooking(e)
          }}
          >
              Book
          </button>
      </div>
  )
}

export default AmbulanceCard