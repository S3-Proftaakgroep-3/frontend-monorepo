import * as React from "react";
import styles from '../../Styles/Atoms/allergieCard.module.css'
import classNames from 'classNames'
import fonts from '../../Styles/Utils/fonts.module.css'

interface PropTypes {
    label: string
}
export const AllergieCard = ({label}: PropTypes) => {
    return <div className={styles.allergieCard}>
        <p className={fonts.s_secondary}>{label}</p>
    </div>;
};
