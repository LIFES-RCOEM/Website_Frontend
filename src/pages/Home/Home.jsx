import { useContext, useEffect, useState} from 'react'
import NavBar from '../../components/1-Navbar/NavBar'
import Main from '../../components/2-MainHome/Main'
import OurServices from '../../components/3-Our Services/OurServices'

import ContactUs from '../../components/5-Contact Us/ContactUs'
import ModalTransport from '../../components/Modal/Transport/ModalTransport'
import EmergencyModal from '../../components/Modal/Emergency/EmergencyModal'
import { modalContext } from '../../context/Modals/modelContext'
import Partner from '../../components/6-Partner/Partner'
import LogIn from '../../components/Modal/Login/LogIn'
import styles from './Home.module.css'



const Home = () => {
  const { showTransportModal, showEmergencyModal, setshowTransportModal, showLoginModal, changeShowLoginModal } = useContext(modalContext)
  

  return (
    <div className='text-font-orange-dark'>
      {/* {showEmergencyModal && <Emergency/Modal  /> } */}
      {/* <EmergencyModal /> */}
      <NavBar />
      <section className="main scrollSnap snap-start w-screen h-screen">
        <Main />
      </section>
      {/* <section className="main scrollSnap snap-start w-screen h-screen">
        <OurServices />
      </section> */}
      <section className="main scrollSnap snap-start w-screen h-screen">
        <Partner />
      </section>
      <section className="main scrollSnap snap-start w-screen h-screen">
        <ContactUs />
      </section>
        {/* <ContactUs /> */}

      {showTransportModal && <ModalTransport />}

      {
        showLoginModal && <LogIn />
      }


    </div>
  )
}

export default Home