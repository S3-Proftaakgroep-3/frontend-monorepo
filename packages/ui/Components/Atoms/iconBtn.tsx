import styles from '../../Styles/Atoms/iconBtn.module.css'
import classNames from 'classNames'
import { Dispatch, SetStateAction, useEffect } from 'react'

interface PropTypes {
    type: "food" | "drinks",
    isFood: boolean,
    setIsFood: Dispatch<SetStateAction<boolean>>
}

export const IconBtn = ({ isFood, type, setIsFood }: PropTypes) => {

    const handleClick = () => {
        setIsFood(type === "food")
    }

    return (
        <button 
        className={classNames(
            styles.btn,
            (type === "food" && isFood) && styles.btn__state_active, 
            (type === "drinks" && !isFood) && styles.btn__state_active
        )}       
        onClick={handleClick}    
        >
            {
                type === "food"
                ? <svg xmlns="http://www.w3.org/2000/svg" width="20.608" height="24.424" viewBox="0 0 20.608 24.424"><path d="M8.114,1.928c-2.529,0-4.58,2.392-4.58,5.343a5.242,5.242,0,0,0,3.523,5.2L6.3,24.829a1.422,1.422,0,0,0,1.433,1.524H8.5a1.422,1.422,0,0,0,1.433-1.524L9.171,12.47a5.242,5.242,0,0,0,3.523-5.2C12.694,4.32,10.644,1.928,8.114,1.928Zm15.392,0L22.235,9.561H21.28l-.636-7.633h-.636l-.636,7.633h-.954L17.146,1.928H16.51V11.85a.763.763,0,0,0,.763.763h1.988l-.749,12.215a1.422,1.422,0,0,0,1.433,1.524h.763a1.422,1.422,0,0,0,1.433-1.524l-.749-12.215h1.988a.763.763,0,0,0,.763-.763V1.928Z" transform="translate(-3.535 -1.928)"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="26.083" height="23.185" viewBox="0 0 26.083 23.185"><path d="M13.4,21.011H10.868v-5.67L18.509,7.7a1.115,1.115,0,0,0-.789-1.9H1.117A1.115,1.115,0,0,0,.329,7.7L7.97,15.341v5.67H5.434a1.811,1.811,0,0,0-1.811,1.811.362.362,0,0,0,.362.362H14.853a.362.362,0,0,0,.362-.362A1.811,1.811,0,0,0,13.4,21.011ZM19.562,0a6.5,6.5,0,0,0-6.121,4.347H15.82a4.347,4.347,0,1,1,1.962,6.13l-1.6,1.6A6.512,6.512,0,1,0,19.562,0Z" transform="translate(0)"/></svg>
            }
        </button>
    )
}