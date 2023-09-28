// import React from 'react'
import styles from './ModalTransport.module.css'
// import { allServices } from '../../3-Our Services/Services'
import ServiceButton from '../../3-Our Services/ServiceButton'
import { allTransport } from './allTransport'
import CloseBtn from './close.svg'
import { useContext } from 'react'
import { modalContext } from '../../../context/Modals/modelContext'
import { NavLink } from 'react-router-dom'

const ModalTransport = () => {
    const {  changeTransportModal } = useContext(modalContext)


  return (
      <div className={` ${styles["modal-container"]} `} id="myModal" >
          <div className={styles["modal-wrapper"]}>
              <div className={`${styles["modal"]} bg-font-orange-dark pt-[20%]`}>
                  <header
                      onClick={changeTransportModal}
                  className='border-0 absolute top-0 left-0 z-50' >
                    <img 
                    
                    src={CloseBtn} alt="" width={"45rem"} />
                      {/* <h2 className='text-3xl font-bold' >Transport</h2> */}
                  </header>
                  {/* <main>
                      <div className={styles["icon-wrapper"]}>
                          <i className="fa-solid fa-circle-exclamation"></i>
                      </div>
                      <div className={styles["text-wrapper"]}>
                          <span>آیا مطمئن هستید که می خواهید این را حذف کنید؟</span>
                      </div>
                  </main> */}
                  <div className="flex flex-col gap-5 items-center p-5 rounded-t-2xl  sm:relative sm:border-none" >
                      {/* <div className="flex flex-col justify-around gap-[50px] items-stretch" > */}

                      {
                          allTransport.map((service) => {
                              return (
                                  <button key={service.id} className="min-w-[250px] min-h-[60px] flex flex-col gap-5 items-center justify-center bg-black text-white text-lg font-semibold">
                                    <NavLink to={service.link}>
                                      {service.label}
                                    </NavLink>
                                  </button>
                              )
                          })
                      }
                  </div>
                  {/* <footer>
                      <div className={styles["btn-container"]}>
                          <div className={styles["cancel-wrapper"]}>
                              <button className={`${styles.btn} ${styles["btn-cancel"]}`} >لغو کردن</button>
                          </div>
                          <div className={styles["delet-confirm-wrapper"]}>
                              <button className={styles["btn btn-confirm"]}>
                                  <iد className="fa-solid fa-trash"></iد>
                                  تایی
                              </button>
                          </div>
                      </div>
                  </footer> */}
              </div>
          </div>
      </div>
  )
}

export default ModalTransport