import {  useContext } from 'react'
// import { menuItems } from './menu'
import styles from './NavBar.module.css'
import Login from '../Modal/Login/LogIn'
import { modalContext } from '../../context/Modals/modelContext'
import NavDrawer from './NavDrawer'
import Logo from '../../assets/header/logo.svg'
import drawer from '../../assets/header/drawer.svg'


const NavBar = () => {
  const { drawerOpen, setdrawerOpen,  changeShowLoginModal } = useContext(modalContext)

  // useEffect(() => {
  //   if (location == "/#") {
  //     allNavLinks[0].isactive = true;
  //     allNavLinks[4].isactive = false;
  //   }
  //   else if (location == "/team") {
  //     allNavLinks[4].isactive = true;
  //     allNavLinks[0].isactive = false;
  //   }
  // }, [])



  // const clickOutsidedrawer = () => { };
  const onLogin = () => {
    alert("Trying to login")
  }

  return (
    <div className={`${styles.container} text-light-orange text-lg font-bold flex  items-center p-5 px-[7vw] h-[10vh] 2xl:h-auto sm:justify-between`}>

      <div className="navLeft navLogo flex items-center  justify-center relative w-full 2xl:justify-start  sm:gap-2 text-3xl uppercase">
        <img onClick={() => setdrawerOpen(true)} src={drawer} alt="navigation drawer" className="w-[10%] sm:w-[50px]  absolute left-0 2xl:hidden" />
        <img src={Logo} className='w-[50px] self-center' alt="" />
        <span className='hidden 2xl:block text-4xl text-dark-orange'>LIFES</span>
      </div>
      <div className="navRight hidden 2xl:flex gap-5 items-center w-[35%] justify-between">
        <ul className="flex items-center justify-around gap-5 ">
          <a href={"/#"} className="hover:cursor-pointer " >

            <li  >
              Home
            </li>

          </a>
          {/* <a href={"/#services"} className="hover:cursor-pointer" >

            <li  >
              Services
            </li>

          </a> */}
          <a href={"/#partner"} className="hover:cursor-pointer" >

            <li  >
              Partner
            </li>

          </a>
          <a href={"/#about"} className="hover:cursor-pointer" >

            <li  >
              About
            </li>

          </a>

          <a href={"/#contact"} className="hover:cursor-pointer" >

            <li  >
              Contact
            </li>

          </a>
        </ul>
        <button className="loginButton rounded-2xl shadow-lg border-2 bg-white text-black flex items-center py-2 px-5 hover:scale-105 duration-300" onClick={changeShowLoginModal} >
          Login
        </button>
        {/* ADD A lOGIN MODAL */}


      </div>


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

export default NavBar