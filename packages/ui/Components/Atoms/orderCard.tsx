import styles from '../../Styles/Atoms/orderCard.module.css'
import fonts from '../../Styles/Utils/fonts.module.css'
import {useState} from "react";
import classNames from "classnames/dedupe";
import {ICartItem} from "../../Interfaces/ICartItem";
import * as React from "react";
import {IExtra} from "../../Interfaces";

interface PropTypes {
    item: ICartItem
}

export const OrderCard = ({ item }: PropTypes) => {
    const [openMenu, setOpenMenu] = useState(false);
        
    function openMenuToggle() {
        if (openMenu) {
            setOpenMenu(false);
        } else {
            setOpenMenu(true)
        }
    }

    return (
        <div id={styles.orderContainer}>
            <div id={styles.orderCard}>
                <div>
                    <p id={styles.title}>{item.name}</p>
                    <p id={styles.description} className={fonts.s_secondary}>{`${item.quantity} x €${item.price.toFixed(2)}`}</p>
                </div>
                <div onClick={openMenuToggle} id={styles.btn}>
                    <svg className={classNames(styles.arrow, openMenu && styles.rotate_arrow)} xmlns="http://www.w3.org/2000/svg" width="20%" height="100%" viewBox="0 0 6.959 12.173"><path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M13.348,12.279l4.606-4.6a.87.87,0,0,0-1.232-1.228L11.5,11.662a.868.868,0,0,0-.025,1.2l5.24,5.251a.87.87,0,0,0,1.232-1.228Z" transform="translate(-11.251 -6.194)"/></svg>
                </div>
            </div>
            <div className={classNames(
                styles.menu,
                openMenu && styles.open_menu
            )} >
                <p className={fonts.s_secondary}>Size: {item.size}</p>
                <p className={fonts.s_secondary}>Extras:
                { 
                    item.extras != null &&
                    item.extras.map((extra: IExtra, key: number, extras) => {
                        if (key + 1 == extras.length) {
                            return ` ${extra.name}`
                        } else {
                            return ` ${extra.name},`
                        }
                    })
                }
                </p>
                {(() => {
                    if (item.message != "") {
                        return <p className={fonts.s_secondary}>Message: {item.message}</p>
                    } else {
                        return <p className={fonts.s_secondary}>Message: No message</p>
                    }
                })()}
            </div>
        </div>
    )
}