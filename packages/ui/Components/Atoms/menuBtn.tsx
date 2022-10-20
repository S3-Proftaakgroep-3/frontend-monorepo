import { useState } from 'react'
import styles from '../../Styles/Atoms/menuBtn.module.css'
import classNames from 'classnames/dedupe'

interface PropTypes {
    menuActive: boolean,
    setMenuActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuBtn = ({ menuActive, setMenuActive }: PropTypes) => {

    return (
        <button 
            className={classNames(
                styles.container,
                menuActive && styles.menu__state_active
            )}
            onClick={() => setMenuActive(!menuActive)}
            >
            <span className={styles.one}/>
            <span className={styles.two}/>
        </button>
    )
}