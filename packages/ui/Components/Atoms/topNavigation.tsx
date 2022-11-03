import * as React from "react";
import {DropdownMenu} from "../Molecules";
import {useState} from "react";
import {MenuBtn} from "./menuBtn";
import styles from "../../Styles/Atoms/topNavigation.module.css"

export const TopNavigation = (props: any) => {

    // State - menu active
    const [menuActive, setMenuActive] = useState(false)

    return (
        <div id={styles.container}>
            <div id={styles.menuBtnWrap}>
                <DropdownMenu menuActive={menuActive}/>
                <MenuBtn menuActive={menuActive} setMenuActive={setMenuActive}/>
            </div>
            <div id={styles.imgWrap}>
                <img src="https://www.sosfactory.com/wp-content/uploads/2016/12/restaurant-logo-mr-bolat.png" alt=""/>
            </div>
        </div>
    )
}
