import { useContext } from "react"
import { scrollContext } from "../../context/scroll/scroll"



export const menuItems = [
    {
        id: 1, 
        link: '',
        ref: 'home', 
        label: 'Home'
    }, 
    {
        id: 2,
        link: '/services',
        ref: 'services',
        label: 'Services'
    },{ 
        id: 3,
        link:'/about',
        ref:'about',
        label:'About'
    }, {
        id: 4,
        link: '/contact',
        ref: 'contact',
        label: 'Contact'
    }
]
