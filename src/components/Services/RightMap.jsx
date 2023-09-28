import React, { useContext } from 'react'
import map from '../../assets/ourServices/map.png'
import { useLocation, useNavigate } from 'react-router-dom'
import Drawer from '../../assets/drawer.svg'
import { modalContext } from '../../context/Modals/modelContext'

const RightMap = ({ isEmergency=false, title }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { drawerOpen, setdrawerOpen } = useContext(modalContext)


  return (
    <div className="overflow-hidden max-h-screen min-h-full">
      {/* <div className="flex  pl-4 pb-10 sm:pb-0 items-center justify-center relative sm:hidden">
        <img onClick={() => setdrawerOpen(true)} src={Drawer} width="8%" alt="navigation  drawer" className="absolute left-4 "  />
        <h2 className="w-[90%] text-white text-center font-bold text-2xl  sm:hidden py-2" >
          {
            location.pathname === '/advancelifesupport' ? "Advance Life Support" : (location.pathname === '/emergency' ) ? 'Emergency': (location.pathname === '/transport/basiclifesupport') ? 'Basic Life Support' : (location.pathname === '/transport/mortuary')? 
            'Mortuary' : location.pathname==='/transport/schedule' ? 'Schedule' : location.pathname === '/' ? 'Our Services' : title
          }
        </h2>
      </div> */}
      <div 
        className={`${(location.pathname === '/') ? 'invisible ' : ''} md:visible rightSideMap md:z-1 absolute right-0  sm:relative `}
      >
          <img src={map} style={{height: 'auto'}} className="-mt-5 md:mt-2 w-[100%] sm:w-[75%] "  alt="" />
        </div>
      <div className={`hidden lg:block absolute top-0 right-0 h-[13%] w-[100%] -z-1 sm:h-[100vh]  sm:w-[350px] bg-dark-orange ${isEmergency ? 'bg-maroon' : ''} sm:rounded-tr-[100px] sm:rounded-br-[100px] z-[-1]`} />
    </div>
  )
}
// bg - ${ isEmergency ? 'maroon-red' : 'font-orange-dark' }
export default RightMap