import React, { useContext } from 'react'
import RightMap from '../../components/Services/RightMap'
import InfoInput from '../../components/Info Service/InfoInput'
import Ambulances from '../../components/Services/Ambulances/Ambulances'
import { modalContext } from '../../context/Modals/modelContext'
import NavDrawer from '../../components/1-Navbar/NavDrawer'


const BasicLifeSupport = () => {
  const { drawerOpen, setdrawerOpen } = useContext(modalContext)
  return (
    <div id='services' className="relative min-h-screen flex flex-col-reverse sm:flex-row pt-5  justify-between sm:max-h-screen" style={{ overflow: 'hidden' }}>
      <main className="main flex flex-col items-center justify-start gap-[10%] sm:w-1/2">
        <h2 className="text-font-orange-dark font-bold text-5xl hidden sm:block z-2" >
          Basic Life Support
        </h2>
          {/* <InfoInput />0 */}
          <Ambulances />
      </main>
      <RightMap />
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

export default BasicLifeSupport