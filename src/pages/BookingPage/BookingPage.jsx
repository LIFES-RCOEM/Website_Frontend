import React, { useEffect, useState, useContext } from 'react'
import RightMap from '../../components/Services/RightMap'
import { useLocation } from 'react-router-dom'
import Phone from '../../assets/Booking/phone.svg'
import { modalContext } from '../../context/Modals/modelContext'
import NavDrawer from '../../components/1-Navbar/NavDrawer'

const BookingPage = ({isEmergency = false, }) => {
  const location = useLocation()

  const [data, setdata] = useState({})
  const [title, settitle] = useState("Booking")

  const { drawerOpen, setdrawerOpen } = useContext(modalContext)
  const changeTitle = () => {
      switch(data.pathname) {
        case '/': 
          settitle("Booking");
          break;
        case '/advancelifesupport': 
          settitle("Advance Life Support Booking");
          break;
        case '/emergency': 
          settitle("Emergency Booking");
          break;
        case '/transport/basiclifesupport': 
          settitle("Basic Life Support Booking");
          break;
        case '/transport/morutary': 
          settitle("Mortuary Booking");
          break;
        case '/transport/schedule': 
          settitle("Schedule");
          break;
          
          default: 
          settitle("Booking");
          break
      }
    }

  const payRedirect = (e) => {
    e.preventDefault()
    
  }


  useEffect(() => {
    setdata(location?.state?.location || {
      pathname: location.pathname
    })
  }, [])

  useEffect(() => {
    changeTitle()
  }, [changeTitle, setdata])
  

  return (
    <div id='services' className="relative min-h-screen flex flex-col-reverse sm:flex-row pt-5  justify-between sm:max-h-screen" style={{ overflow: 'hidden' }}>
      <main className="main flex flex-col items-center justify-start gap-[10%] sm:w-1/2">
        <h2 className="text-font-orange-dark font-bold text-5xl hidden sm:block z-2" >
          {
              title
          }
        </h2>
        {/* <div className="flex flex-col justify-around gap-[50px] items-stretch" > */}
        <form className={`absolute bottom-0 w-[100%] flex flex-col bg-white pl-4 rounded-t-2xl z-30 border-y-[20px] max-h-[300px] border-x-[12px] ${(data.pathname === '/emergency') ? 'border-maroon-red' : 'border-font-orange-light'}  mx-2 sm:gap-[5px] sm:relative sm:border-none sm:w-[75%]`}>
          <label htmlFor='ambulanceName' className=" my-4 font-bold text-xl sm:text-3xl">
            Ambulance Name
          </label>
          {/* <input name='ambulanceName' type="text" /> */}
          <label htmlFor="ambulanceNo"
            className=' mt-2 mb-4 text-xl font-bold sm:text-3xl'
          >Ambulance No</label>
          {/* <input type="text" name='ambulanceNo' /> */}
          <div className="flex justify-between">
            <div className="flex flex-col justify-center gap-[25px]">
              <h2 className='text-lg sm:text-3xl font-bold' >Price <span></span></h2>
              <h2 className='text-lg sm:text-3xl font-bold'>ETA <span></span></h2>
            </div>
            <button className="absolute right-8 bottom-[75px] sm:right-0 sm:bottom-0 sm:relative bg-black flex items-center justify-center min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] shadow-gray-box" style={{ borderRadius: '50%'}}>
              <img src={Phone} alt="" />
            </button>
          </div>
          <button type="submit" onSubmit={e => payRedirect(e)} className="text-white font-bold text-md sm:text-2xl w-[25%] absolute right-4 bottom-2 h-[45px] bg-black rounded-full shadow-gray-box sm:h-[65px] sm:relative sm:w-[25%] sm:mx-auto sm:mt-[45px] sm:py-4">
            Pay
          </button>
        </form>
        {/* </div> */}
      </main>
      <RightMap isEmergency={data.pathname === '/emergency'} title={title} />
      {
        drawerOpen &&
        <NavDrawer
          showMenu={drawerOpen}
          setshowMenu={setdrawerOpen}
        />
      }
    </div>
  )
}

export default BookingPage