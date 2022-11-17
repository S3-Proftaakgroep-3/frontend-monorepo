import {ICartItem} from "../../Interfaces/ICartItem";
import styles from "../../Styles/Molecules/sectionProductsPerOrder.module.css";
import classNames from "classnames/dedupe";
import React, {useState} from "react";
import fonts from "../../Styles/Utils/fonts.module.css";
import {IOrder} from "../../Interfaces/IOrder";
import {OrderCard} from "../Atoms";
import {IProduct} from "../../Interfaces";

export const SectionProductsPerOrder = ({
    orderName,
    products
}: {
    orderName: string,
    products: ICartItem[]
}) => {
    const [openMenu, setOpenMenu] = useState(false);

    function openMenuToggle() {
        if (openMenu) {
            setOpenMenu(false);
        } else {
            setOpenMenu(true)
        }
    }
    return(
        <div className={styles.container}>
            <div className={styles.orderTop}>
                <p id={styles.title}>{orderName}</p>
                <div onClick={openMenuToggle} id={styles.btn}>
                    <svg className={classNames(styles.arrow, openMenu && styles.rotate_arrow)} xmlns="http://www.w3.org/2000/svg" width="20%" height="100%" viewBox="0 0 6.959 12.173"><path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M13.348,12.279l4.606-4.6a.87.87,0,0,0-1.232-1.228L11.5,11.662a.868.868,0,0,0-.025,1.2l5.24,5.251a.87.87,0,0,0,1.232-1.228Z" transform="translate(-11.251 -6.194)"/></svg>
                </div>
            </div>
            <div className={classNames(
                styles.menu,
                openMenu && styles.open_menu
            )} >
                {
                    products?.map((product: ICartItem, key: number) => {
                        return <OrderCard key={key} item={product}/>
                    })
                }

            </div>

        </div>
    )

}