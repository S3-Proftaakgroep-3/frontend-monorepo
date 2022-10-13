import * as React from "react";
import styles from '../../Styles/Atoms/foodCard.module.css'
import fonts from '../../Styles/Utils/fonts.module.css'
import classNames from "classnames";

export const FoodCard = (props: any) => {
    return <div className={styles.page}>
        <div className="row">
            <div className={styles.column}>
                <div className={styles.container}>
                    <img className={styles.image} src="https://images0.persgroep.net/rcs/5XA03cGALr-SKZ0BlzVGmD6vMo8/diocontent/114943802/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8" alt=""/>
                    <div className={classNames(styles.title, fonts.xl_card)}>Pizza Pepperoni</div><br/>
                    <div className={classNames(styles.description, fonts.m_card)}>Zalige pizza met mozzarella en dungesneden plakjes Pepperoni</div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className={styles.column}>
                <div className={styles.container}>
                    <img className={styles.image} src="https://images0.persgroep.net/rcs/5XA03cGALr-SKZ0BlzVGmD6vMo8/diocontent/114943802/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8" alt=""/>
                    <div className={classNames(styles.title, fonts.xl_card)}>Pizza Pepperoni</div><br/>
                    <div className={classNames(styles.description, fonts.m_card)}>Zalige pizza met mozzarella en dungesneden plakjes Pepperoni</div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className={styles.column}>
                <div className={styles.container}>
                    <img className={styles.image} src="https://images0.persgroep.net/rcs/5XA03cGALr-SKZ0BlzVGmD6vMo8/diocontent/114943802/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8" alt=""/>
                    <div className={classNames(styles.title, fonts.xl_card)}>Pizza Pepperoni</div><br/>
                    <div className={classNames(styles.description, fonts.m_card)}>Zalige pizza met mozzarella en dungesneden plakjes Pepperoni</div>
                </div>
            </div>
        </div>
    </div>
}