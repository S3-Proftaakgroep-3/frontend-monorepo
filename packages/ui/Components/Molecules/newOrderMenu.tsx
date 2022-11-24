import * as React from "react";
import {Button} from "../Atoms";
import styles from "../../Styles/Molecules/newOrderMenu.module.css"

export const NewOrderMenu = ({
    onClick,
    price,
    label
}: {
    onClick: React.MouseEventHandler;
    price: number;
    label: string
}) => {
    return <div>
        <div className={styles.newOrderMenu}>
            <div className={styles.priceSection}>
                <h5>Totaal</h5>
                <p>&euro;{price.toFixed(2)}</p>
            </div>
            <div className={styles.buttonSection}>
                <Button onClick={onClick} label={label} style={"primary"}/>
            </div>
        </div>
    </div>;
};
