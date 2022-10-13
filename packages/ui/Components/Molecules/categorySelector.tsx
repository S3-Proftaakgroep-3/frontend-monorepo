import { useState } from "react"
import styles from '../../Styles/Molecules/categorySelector.module.css';

interface PropTypes {
    children: JSX.Element | JSX.Element[]
}

export const CategorySelector = ({ children }: PropTypes) => {

    return (
        <div className={styles.selectorContainer}>
            {children}
        </div>
    )
}