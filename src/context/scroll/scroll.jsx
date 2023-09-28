import { createContext, useRef } from "react";

export const scrollContext = createContext()

const ScrollState = (props) => {
    const homeSectionRef = useRef(null)
    const aboutSectionRef = useRef(null)
    const servicesSectionRef = useRef(null)
    const contactSectionRef = useRef(null)
    
    const scrollDown = (ref) => {
        console.log(ref.current)
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <scrollContext.Provider value={{ aboutSectionRef, servicesSectionRef, contactSectionRef, homeSectionRef, scrollDown }}>
        {props.children}
         </scrollContext.Provider>
    )
}

export default ScrollState;