import * as React from "react";
import styles from '../../Styles/Atoms/allergieCard.module.css'
import classNames from 'classNames'

interface PropTypes {
    allergieName: string
}
export const AllergieCard = ({allergieName}: PropTypes) => {
    return <div className={styles.allergieCard}>
        {allergieName}
    </div>;
};
