import React from 'react'
import AmbulanceCard from './AmbulanceCard'

const Ambulances = () => {
  const ambulances = [
    {
      id: 1, 
      name: "Ambulance Name",
      ambulanceNo: "MH31-ET-0000",
      price: '200',
      eta: "25 minutes"
    },
    {
      id:2, 
      name: "Ambulance Name",
      ambulanceNo: "MH31-ET-0000",
      price: '200',
      eta: "25 minutes"
    },
    {
      id: 3, 
      name: "Ambulance Name",
      ambulanceNo: "MH31-ET-0000",
      price: '200',
      eta: "25 minutes"
    }
  ]
  return (
    <div className='absolute bottom-0 w-[100%] flex flex-col bg-white items-center rounded-t-2xl z-30 border-y-[20px] max-h-[300px] border-x-[12px] border-font-orange-light  mx-2 sm:gap-[5px] sm:relative sm:border-none' >
      {ambulances.map(ambulance => {
        return (
          <>
            <AmbulanceCard data={ambulance} />
          </>
        )
      })}
    </div>
  )
}

export default Ambulances