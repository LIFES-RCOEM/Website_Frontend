import { NavLink } from 'react-router-dom';
import { modalContext } from '../../context/Modals/modelContext';
import { useContext } from 'react';

const ServiceButton = ({ service, bgBlack=false }) => {
    const { id, label , bg , link } = service;
  const { changeTransportModal } = useContext(modalContext);
  return (
    <>
      {
        service.id === 3 ? 
          <div
            onClick={changeTransportModal}
            className={`relative min-w-[275px] h-[18vh] lg:h-[20vh] text-white font-bold text-md my-5 shadow-2xl flex items-center justify-center uppercase duration-[256ms] hover:cursor-pointer hover:scale-110 sm:min-h-[75px]`}
            style={{ background: bgBlack ? 'black' : bg }}
          >
            <hr className='border-2 border-black w-full duration-350 hover:hidden' />
            <span className="absolute w-[50px] h-[50px] bg-white rounded-full duration-350 ">

            </span>
            <span className='absolute bottom-0 mb-3 lg:mb-5 text-xl text-center w-full lg:text-xl duration-350'>
              {label}
            </span>
          </div> :
          <NavLink to={link}>
            <div
              className={`relative min-w-[275px] h-[18vh] lg:h-[20vh] text-white font-bold text-md my-5 shadow-2xl flex items-center justify-center uppercase duration-[256ms] hover:cursor-pointer hover:scale-110 sm:min-h-[75px]`}
              style={{ background: bgBlack ? 'black' : bg }}
            >
              <hr className='border-2 border-black w-full duration-350 hover:hidden'/>
              <span className="absolute w-[50px] h-[50px] bg-white rounded-full duration-350 ">
                
              </span>
              <span className='absolute bottom-0 mb-3 lg:mb-5 text-xl text-center w-full lg:text-xl duration-350'>
                {label}
              </span>
            </div>
          </NavLink>
      }
    </>
  )
}

export default ServiceButton