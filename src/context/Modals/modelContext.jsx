import { createContext, useState } from "react";

export const modalContext = createContext()

const ModalState = (props) => {
    const [showTransportModal, setshowTransportModal] = useState(false)
    const [drawerOpen, setdrawerOpen] = useState(false)

    const [showEmergencyModal, setshowEmergencyModal] = useState(true)

    const [showLoginModal, setshowLoginModal] = useState(false)

    const changeShowLoginModal = () => {
        if (showLoginModal) {
            setshowLoginModal(false)
            return
        }
        setshowLoginModal(true)
    }
    const changeTransportModal = () => {
        if (showTransportModal) {
            setshowTransportModal(false)
            return
        }
        setshowTransportModal(true)
    }
    return(
        <modalContext.Provider value={{
            showTransportModal, changeTransportModal,
            showLoginModal,changeShowLoginModal,
            drawerOpen, setdrawerOpen ,// nav drawer
            showEmergencyModal, setshowEmergencyModal
        }}>
            {props.children}
        </modalContext.Provider>
    )
}


export default ModalState;