import * as React from "react";
import {Button} from "../Atoms";
import styles from "../../Styles/Molecules/newOrderMenu.module.css"
import {BottomLine} from "../Atoms/bottomLine";

export const NewOrderMenu = ({
    onClick,
    price
}: {
    onClick: React.MouseEventHandler;
    price: number;
}) => {
    return <div>
        <div className={styles.newOrderMenu}>
            <div className={styles.priceSection}>
                <h5>Totaal</h5>
                <p>&euro;{price}</p>
            </div>
            <div className={styles.buttonSection}>
                <Button onClick={onClick} label={"Order"} style={"primary"}/>
            </div>
        </div>
        <BottomLine/>
    </div>;
};
