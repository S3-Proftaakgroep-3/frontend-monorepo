import styles from '../../Styles/Atoms/topNavigation.module.css'
import {OrderBackButton} from '../Atoms'
import * as React from "react";

export const TopMenuBackLogo = () => {
    return (
        <div id={styles.container}>
            <div id={styles.menuBtnWrap}>
                <OrderBackButton/>
            </div>
            <div id={styles.imgWrap}>
                <img src="https://www.sosfactory.com/wp-content/uploads/2016/12/restaurant-logo-mr-bolat.png" alt=""/>
            </div>
        </div>
    )
}