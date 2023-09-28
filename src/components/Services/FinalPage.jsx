import React from 'react'
import RightMap from './RightMap'


const FinalPage = ({ title={"Our Services"} }) => {

    return (
         <div id='services' className="relative min-h-screen flex pt-5  justify-between max-h-screen">
            <main className="main flex flex-col items-center gap-[150px] w-1/2">
                <h2 className=" font-bold text-5xl" >
                    {title}
                </h2>
                <div className="flex flex-col justify-around gap-[50px] items-stretch" >
                    {allServices.map((service) => {
                        return(
                        <div key={service.id}>
                            <ServiceButton service={service} />
                        </div>
                        )
                    })}
                </div>
            </main>
            <RightMap />
        </div>
    )
}