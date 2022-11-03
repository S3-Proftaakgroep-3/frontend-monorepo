import * as React from "react";
import styles from '../../Styles/Atoms/foodCard.module.css'
import fonts from '../../Styles/Utils/fonts.module.css'
import classNames from "classnames/dedupe";

interface PropTypes {
    name: string,
    image: string,
    description: string,
    onClick: () => void
}

export const FoodCard = ({ name, description, onClick, image }: PropTypes) => {
    return <div className={styles.column} onClick={onClick}>
                <div className={styles.container}>
                    <img className={styles.image} src={image} alt=""/>
                    <div className={styles.darkContainer}>
                        <div className={styles.titleContainer}>
                            <p className={classNames(styles.title, fonts.xl_card)}>{name}</p>
                            <p className={classNames(styles.description, fonts.m_card)}>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
}