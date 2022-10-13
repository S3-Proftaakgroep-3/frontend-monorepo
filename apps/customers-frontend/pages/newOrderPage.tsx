import * as React from "react";
import {NextPage} from "next";
import styles from "../styles/Home.module.css";
import {NewOrderMenu} from "ui/Components/Molecules/newOrderMenu";
const newOrderPage : NextPage = () => {
    return(
        <div className={styles.container}>
            <NewOrderMenu price={19.99}/>
        </div>
    )
}
export default newOrderPage
