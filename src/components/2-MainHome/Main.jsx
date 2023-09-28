import { useContext, useEffect } from 'react'
import ambulance from "../../assets/home/ambulance.png"
import phone from '../../assets/home/phoneMap.png'
import styles from './Main.module.css'
// import { modalContext } from '../../context/Modals/modelContext'
import Phone from '../../assets/phone.png'


const Main = () => {
  // const { showEmergencyModal } = useContext(modalContext)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div id="#" className={`relative flex flex-col xl:flex-row justify-center xl:justify-between items-center first-letter ${styles.main}  xl:mt-5 w-[100vw] h-[100vh] bg-main-bg `} >
      <div className="left flex flex-col items-center justify-center w-1/2 text-center">
        <p className='text-6xl -mt-8 md:-mt-0 xl:text-8xl font-bold'>
          LIFES
        </p>
        <p className='text-lg xl:text-2xl' >
          We are at your service
        </p>
      </div>
      <div className="right flex items-center justify-center pt-8 relative">
        <img src={phone} alt="map" className={`${window.innerWidth > 1600 && 'mr-10'}`} width={(window.innerWidth > 720 && window.innerWidth < 1600) ? 325 : (window.innerWidth > 1600) ? 375 : 300} />
      </div>

      <img src={ambulance} alt="" className={`absolute bottom-[12vh] xl:bottom-0 xl:right-5 4xl:right-[50px]`} width={window.innerWidth > 1600 ? 675 : window.innerWidth < 720 ? 400 : 550} />


      <button id="callCenter" className={`${styles["callCenter"]} text-white text-md font-semibold rounded-l-2xl rounded-r-2xl  bg-black  flex items-center justify-center py-2 px-3`}>
        <a className='flex md:hidden  items-center justify-between' href="tel:+918767725279">
          <p className='text-lg'>Book Now</p>
          <img src={Phone} width={40} className='rounded-full ml-2' alt="contact" />
        </a>
        <a className='hidden md:flex items-center justify-between' href="https://wa.me/8767725279?text=Help!%20It's%20an%20emergency">
          <p className='text-lg'>Book Now</p>
          <img src={Phone} width={40} className='rounded-full ml-2' alt="contact" />
        </a>
      </button>



    </div>
  )
}

export default Main