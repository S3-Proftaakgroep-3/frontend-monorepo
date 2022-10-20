import * as React from "react";
import {DropdownMenu} from "../Molecules";
import {useState} from "react";
import {MenuBtn} from "./menuBtn";
import styles from "../../Styles/Atoms/topNavigation.module.css"

export const TopNavigation = (props: any) => {

    // State - menu active
    const [menuActive, setMenuActive] = useState(false)

    return <div className={styles.container}>
        <div>
        <DropdownMenu menuActive={menuActive}/>
        <MenuBtn menuActive={menuActive} setMenuActive={setMenuActive}/>
        </div>
        <div className={styles.image}>
            <img src="https://www.creativefabrica.com/wp-content/uploads/2022/04/17/Pizza-Logo-Design-Graphics-29132095-1.jpg" alt=""/>
        </div>
        <div>
        </div>
    </div>
}
