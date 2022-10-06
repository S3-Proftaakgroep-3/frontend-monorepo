import * as React from "react";
import styles from '../../Styles/Atoms/foodCard.module.css'

export const FoodCard = (props: any) => {
    return <div className={styles.page}>
        <div className="row">
            <div className={styles.column}>
                <div className={styles.card}>
                    <div className="container">
                        <img className={styles.image} src="https://images0.persgroep.net/rcs/5XA03cGALr-SKZ0BlzVGmD6vMo8/diocontent/114943802/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8" alt=""/>
                        <h2>Walkout</h2>
                        <p>Lekkere Pizza</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className={styles.column}>
                <div className={styles.card}>
                    <div className="container">
                        <img className={styles.image} src="https://images0.persgroep.net/rcs/5XA03cGALr-SKZ0BlzVGmD6vMo8/diocontent/114943802/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8" alt=""/>
                        <h2>Walkout</h2>
                        <p>Lekkere Pizza</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className={styles.column}>
                <div className={styles.card}>
                    <div className="container">
                        <img className={styles.image} src="https://images0.persgroep.net/rcs/5XA03cGALr-SKZ0BlzVGmD6vMo8/diocontent/114943802/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8" alt=""/>
                        <h2>Walkout</h2>
                        <p>Lekkere Pizza</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}