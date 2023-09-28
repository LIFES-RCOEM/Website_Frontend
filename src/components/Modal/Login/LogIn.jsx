import { useContext, useState } from 'react'
import styles from './login.module.css'
import LoginBg from '../../../assets/login/loginBg.png'
import { useNavigate } from 'react-router-dom'
import CloseBtn from './close.svg'
import { modalContext } from '../../../context/Modals/modelContext'


const LogIn = ({ setshowModal }) => {
  const navigate = useNavigate()
  const [showOTP, setshowOTP] = useState(false)
  const { changeShowLoginModal, showLoginModal } = useContext(modalContext)
  
  const handleLoginFormSubmit= (e) => {
    e.preventDefault()
    
    if(showOTP) {
      loginGoogle()
      navigate('/')
    } else {
      setshowOTP(true)
    }
  }

  const handlePhoneVerify = (e) => {
    e.preventDefault()

  }

  return (
      <div className={`${styles["modal-container"]} `} id="myModal" >
        <div className={styles["modal-wrapper"]}>
          <div className={`${styles["modal"]} bg-white`}>
            <header >
              <h2 className="text-3xl sm:text-4xl font-bold" >Log In</h2>
              <div className="z-10" onClick={changeShowLoginModal} >
                  <img src={CloseBtn} className='' alt="" />
                </div>
            </header>
            <main className={`${styles["modal-main"]} items-center w-[100%] lg:items-start lg:justify-flex-start lg:w-[75%]`}>
              <form onSubmit={(e) => handleLoginFormSubmit(e)} className="flex flex-col justify-center w-[100%]  sm:w-[75%] gap-[50px]">
                <section className=' flex flex-col gap-3'>
                  <label htmlFor="name" className="block sm:text-2xl font-semibold" >
                    Name
                  </label>
                  <input type="text" placeholder='Enter Full Name' className="border-b-black border-b-4 outline-none text-xl pl-2" />
                </section>
                <section className=' flex flex-col gap-3'>
                  <label htmlFor="phone" className="block sm:text-2xl font-semibold" >
                    Phone
                  </label>
                  <div className="flex items-center">
                    <select name="" id="" className='border-b-4 border-b-black p-1 mr-4 '>
                      <option value="">+91</option>
                    </select>
                    <input type="tele" className="border-b-black border-b-4 outline-none text-xl  pl-2 w-[100%]" />
                  </div>
                </section>
                {
                  showOTP && <section className=' flex flex-col gap-3'>
                    <label htmlFor="phone" className="block sm:text-2xl font-semibold" >
                      OTP
                    </label>
                    <div className="flex items-center justify-between">
                      <input type="tele" className="border-b-black border-b-4 outline-none text-md md:text-xl pl-2 w-[15%] md:w-[20%]" />
                      <input type="tele" className="border-b-black border-b-4 outline-none text-xl pl-2 w-[20%]" />
                      <input type="tele" className="border-b-black border-b-4 outline-none text-xl pl-2 w-[20%]" />
                      <input type="tele" className="border-b-black border-b-4 outline-none text-xl pl-2 w-[20%]" />
                    </div>
                  </section>
                }
                <button className={`w-1/3 m-auto p-3 md:m-0 md:py-3 rounded-full ${showOTP ? 'bg-black' : 'bg-[#3DD00A]'}   text-white font-bold text-lg shadow-gray-box ${styles.myBtn} flex items-center justify-center `} type="submit">
                  {
                    !showOTP ? "Verify" : "Login"
                  }
                </button>
              </form>
              <div className={`${styles.rightImg} hidden lg:block`}>
                <img src={LoginBg} alt="login right background" />
              </div>
            </main>      
          </div>
        </div>
      </div> 

  )
}

export default LogIn