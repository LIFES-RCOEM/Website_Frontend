import React from 'react'

const Description = ({ title, description, isContact = false, mail}) => {
    
  return (
    <div className="text-center text-black">
        <h3 className='text-xl sm:text-2xl font-bold' >{title}</h3>
        <p className="text-md font-semibold w-full m-auto " >
           {(isContact && !mail) && "+91"} {!mail && description}
        </p>
        {
          mail && <p className='font-semibold text-lg' >
            {mail}
          </p>
        }
    </div>
  )
}

export default Description