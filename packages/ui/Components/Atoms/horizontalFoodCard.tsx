import styles from "../../Styles/Atoms/horizontalFoodCard.module.css"
import * as React from "react";
import fonts from "../../Styles/Utils/fonts.module.css";
import classNames from "classnames/dedupe";

export const HorizontalFoodCard = (props: any) => {
    return <div>
        <div className="row">
            <div className={styles.column}>
                <div className={styles.container}>
                    <img className={styles.image} src="https://images0.persgroep.net/rcs/5XA03cGALr-SKZ0BlzVGmD6vMo8/diocontent/114943802/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8" alt=""/>
                    <div className={styles.text}>
                        <div className={fonts.m_primary}>Pizza Pepperoni</div><br/>
                        <div className={fonts.s_secondary}>Zalige pizza met smeuïge mozzarella en dungesneden pepperoni</div>
                    </div>
                    <div className={classNames(styles.price, fonts.s_secondary)}>$12,50</div>
                </div>
            </div>
        </div>
    </div>
}
