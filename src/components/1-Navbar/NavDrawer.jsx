import React from 'react'
import styles from './NavBar.module.css'

const NavDrawer = ({ showMenu , setshowMenu}) => {
    return (
    <div
        className={
            showMenu
                ? `${styles.drawer}   left-0 top-0 flex flex-col gap-1 justify-center items-center 2xl:hidden`
                : `hidden`
        }
    >
        <div
            className={`${showMenu ? "block" : "hidden"
                } left-[15px] top-[25px]`}
            onClick={() => setshowMenu(false)}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </div>
        <ul className="flex flex-col items-center mt-10 gap-5">
                <li
                    className={`text-md py-1`}
                >
                    <a
                        href={'/#'}
                        className={``}
                        onClick={() => setshowMenu(false)}
                    >
                       Home
                    </a>
                </li>
                {/* <li
                    className={`text-md py-1`}
                >
                    <a
                        href={'/#services'}
                        className={``}
                        onClick={() => setshowMenu(false)}
                    >
                       Services
                    </a>
                </li> */}
                <li
                    className={`text-md py-1`}
                >
                    <a
                        href={'/#partner'}
                        className={``}
                        onClick={() => setshowMenu(false)}
                    >
                       Partner
                    </a>
                </li>
                <li
                    className={`text-md py-1`}
                >
                    <a
                        href={'/#contact'}
                        className={``}
                        onClick={() => setshowMenu(false)}
                    >
                       About
                    </a>
                </li>
                <li
                    className={`text-md py-1`}
                >
                    <a
                        href={'/#footer'}
                        className={``}
                        onClick={() => setshowMenu(false)}
                    >
                       Contact
                    </a>
                </li>

        </ul>
    </div>
  )
}

export default NavDrawer