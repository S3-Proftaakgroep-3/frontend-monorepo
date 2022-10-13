import * as React from "react";
import {AllergieCard} from "../Atoms/allergieCard";
import styles from "../../Styles/Molecules/allergies.module.css"
export const Allergies = (props: any) => {
    return <div className={styles.allergies}>
        <h4>
            Allergies
        </h4>
        <div className={styles.allergiesCardList}>
            <AllergieCard allergieName={"Lactose"}/>
            <AllergieCard allergieName={"Gluten"}/>
        </div>
    </div>;
};
