import React, { useContext } from 'react'
import RightMap from '../../components/Services/RightMap'
import Ambulance from '../../components/Services/Ambulance'
import { modalContext } from '../../context/Modals/modelContext'
import NavDrawer from '../../components/1-Navbar/NavDrawer'


const Emergency = () => {
  const { drawerOpen, setdrawerOpen } = useContext(modalContext)
  return (
    <div id='services' className="relative min-h-screen flex flex-col-reverse sm:flex-row pt-5  justify-between max-h-screen">
      <main className="main flex flex-col items-center gap-[10%] justify-start w-[100%] sm:w-1/2 z-30 "
        style={{
          maxHeight: '100vh',
          overflow: 'hidden'
        }}
      >
        <h2 className="text-maroon-red font-bold text-5xl hidden sm:block z-2" >
          Emergency
        </h2>
          <Ambulance data={{
            id: 1,
            name: "Ambulance Name",
            ambulanceNo: "MH31-ET-0000",
            price: '',
            eta: ""
          }} />
      </main>
      <RightMap isEmergency={true} />
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

export default Emergency