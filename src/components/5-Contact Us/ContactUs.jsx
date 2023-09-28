// import React from 'react'  
import Description from './Description'
import { contactData } from './contactData'
import Linkedin from '../../assets/Footer/linkedin.svg'
import Insta from '../../assets/Footer/instagram.svg'
import Whatsapp from '../../assets/Footer/whatsapp.svg'
import styles from './contact.module.css'
import { NavLink } from 'react-router-dom'
import About from '../4-About/About'
import logo from '../../assets/header/logo.svg'


const ContactUs = () => {
  return (
    <div id='contact' className="w-screen h-screen">
      <fieldset className={`flex flex-col justify-between w-screen h-screen xl:${styles["border-gradient"]}`} >
        {/* <div className="text-center xl:text-left text-4xl font-bold -mt-10" >Contact Us</div> */}
        <div className="flex flex-col h-[100%] justify-around text-center">
          <About />
          {/* <div>
            <h2 className="mb-3 text-font-orange-light mt-4 text-2xl sm:text-4xl sm:mt-0 font-semibold">Visit Us</h2>
            <Description title="Technology  Business  Incubators," description={"   Shri Ramdeobaba college of Engineering and Management Katol Rd,Lonand, Gittikhadan Nagpur, Maharashtra 440013"} />
          </div> */}
            {/* <h3 className="mb-3 text-font-orange-light mt-4 text-2xl sm:text-4xl sm:mt-0 font-semibold" >Contact Us</h3> */}
            {/* <div className="">
              {
                contactData.map((contact) => {
                  return (
                    <>
                      <Description title={contact.name} description={contact.contact}   
                      mail={contact.mail}
                      isContact={true} />
                    </>
                  )
                })
              }
            </div> */}
        </div>
        <footer id="footer" className='bg-black min-h-[45%] w-full h-auto flex flex-col md:flex-row items-center justify-around text-white'>
              <div className="logo hidden md:block">
                <img src={logo} alt="logo" />
              </div>
              <div className="links flex flex-col gap-5 w-full md:w-auto">
                <h1 className="text-3xl font-bold ml-10 md:ml-0">
                  All Links
                  <hr className='w-[15%] md:w-[50%] border-white border-2 mt-2'  />
                </h1>
                <div className="flex gap-5 w-full justify-around md:justify-between">
                  <ul className='list1'>
                    <li>
                      <NavLink to='/'>
                        Home
                      </NavLink>
                    </li>
                    <li>
                  <NavLink to='/#partner'>
                    Partner
                  </NavLink>
                    </li>
                    <li>
                  <NavLink to='/#contact'>
                    Contact
                  </NavLink>
                    </li>
                  </ul>
                  <ul className='list1'>
                    <li>
                  <NavLink to='/#about'>
                    About
                  </NavLink>
                    </li>
                    <li>
                  <NavLink to='/'>
                    Learn
                  </NavLink>
                    </li>
                    {/* <li>
                  <NavLink to='/#partner'>
                    Partner
                  </NavLink>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="socials flex flex-col gap-3 mt-2 ">
                  
                <div className="flex flex-col">
                  <p className='font-bold text-lg'>Follow us</p>
                  <ul className='flex gap-5'>
                    <li>
                      <a href="tel:+918855886289">
                        <img src={Whatsapp} alt="whatsapp" width=     {27} />
                      </a>
                    </li>
                    <li>
                      <img src={Linkedin} alt="whatsapp" width={27} />
                    </li>
                    <li>
                      <img src={Insta} alt="whatsapp" width={27} />
                    </li>
                  </ul>
                </div>
                 <div className="flex gap-5 md:flex-col">
                    <div className="">

                      <p className='font-bold text-lg'>Phone</p>
                      <a href="tel:+918855886289">
                        +9199xxxxx99
                      </a>
                    </div>
                    <div className="">
                      <p className='font-bold text-lg'>Email</p>
                <a href="mailto:lifesambulance@gmail.com">
                  lifesambulance@gmail.com
                  </a>
                    </div>
                 </div>
                  
              </div>
        </footer>
      </fieldset>
    </div>
  )
}

export default ContactUs