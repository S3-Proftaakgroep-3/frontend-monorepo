import * as React from "react";
import {AllergieCard} from "../Atoms/allergieCard";
import styles from "../../Styles/Molecules/allergies.module.css"
import fonts from '../../Styles/Utils/fonts.module.css'

interface PropTypes {
    children: JSX.Element | JSX.Element[]
}

export const Allergies = ({ children }: PropTypes) => {
    return <div className={styles.allergies}>
        <h4 className={fonts.s_primary}>
            Allergies
        </h4>
        <div className={styles.allergiesCardList}>
            {children}
        </div>
    </div>;
};
