import * as React from "react";
import styles from '../../Styles/Molecules/compactFoodCard.module.css'
import fonts from '../../Styles/Utils/fonts.module.css'
import classNames from "classnames/dedupe";
import {IProduct} from "../../Interfaces";

export const CompactFoodCard = (
{ 
    item,
    onClick,
}: {
    item: IProduct
    onClick: React.MouseEventHandler;
}) => {
    console.log(item)
    return (
        <div className={styles.card} onClick={onClick}>
            <img className={styles.img} src={item.image} alt=""/>
            <div className={styles.textContainer}>
                <p className={fonts.l_primary}>{item.name}</p>
                <p className={classNames(fonts.m_secondary, styles.description)}>{item.description}</p>
                <p className={classNames(fonts.s_primary)}>€{item.price.toFixed(2)}</p>
            </div>
        </div>
    )
}

