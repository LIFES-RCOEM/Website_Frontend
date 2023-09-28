import {allServices} from './Services.js'
import ServiceButton from './ServiceButton'
import RightMap from '../Services/RightMap.jsx'

const OurServices = () => {
  
  
  return (
    <div id='services' className="relative  flex flex-col-reverse sm:flex-row pt-5  justify-between   sm:max-h-screen" style={{  }}>
      
      <main className="relative main flex flex-col items-center sm:gap-[10%]  sm:w-1/2">
        
        <div className=" w-[100%] mb-[-5px] flex flex-col items-center  h-[100%] bg-white  rounded-t-2xl z-30  mx-2 sm:gap-[5px] sm:relative sm:border-none" >
          {/* <div className="flex flex-col justify-around gap-[50px] items-stretch" > */}

          {
            allServices.map((service) => {
              return(
                <div key={service.id}>
                  <ServiceButton  service={service} />
                </div>
              )
            })
          }
          </div>
        </main>
      <RightMap />


    </div>
  )
}

export default OurServices