import { NavLink } from 'react-router-dom';
import siren from '../../../assets/siren.svg'
import CloseBtn from './close.svg'
import styles from "./EmergencyModal.module.css";
import { useContext, useEffect, useState } from 'react';
import { modalContext } from '../../../context/Modals/modelContext';


const EmergencyModal = () => {
  const { setshowEmergencyModal } = useContext(modalContext)
  const [showButton, setshowButton] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setshowButton(true)
    }, 3000);

    setTimeout(() => {
      setshowEmergencyModal(false)
    }, 7000);
  }, [])

    return (
        <div className={`${styles["modal-container"]} `} id="myModal" >
        <div className={styles["modal-wrapper"]}>
          <div className={`${styles["modal"]} bg-white shadow-xl relative `}>
            <header  className='border-0 absolute top-0 left-2 cursor-pointer duration-500' >
              <img onClick={() => setshowEmergencyModal(false)} src={CloseBtn} alt="" width={"25rem"} className='cursor-pointer' />
                {/* <h2 className='text-3xl font-bold' >Transport</h2> */}
              </header>
            <main className={`${styles["modal-main"]} grid place-content-center gap-8 items-center w-[100%] `}>
              <div className="flex justify-center items-center">
                <img src={siren} alt="emergency" width={75} className='' />
                <NavLink to={window.innerWidth > 640 ? "https://wa.me/8767725279?text=Help!%20It's%20an%20emergency" : 'tel:+018767725279'} className='text-4xl mx-5 font-bold'>
                  Emergency!
                </NavLink>
              </div>
              {showButton && <button className="button-orange py-3 rounded-full">
                <NavLink 
                to={window.innerWidth > 640 ? "https://wa.me/8767725279?text=Help!%20It's%20an%20emergency" : 'tel:+018767725279'}
                 className="text-wrapper">
                  Click Here
                </NavLink>
              </button>}
            </main>      
          </div>
        </div>
      </div> 
    )
}


export default EmergencyModal;