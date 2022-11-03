import * as React from "react";
import styles from '../../Styles/Atoms/foodCard.module.css'
import fonts from '../../Styles/Utils/fonts.module.css'
import classNames from "classnames/dedupe";

interface PropTypes {
    name: string,
    description: string,
    onClick: () => void
}

export const FoodCard = ({ name, description, onClick }: PropTypes) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <img className={styles.img} src="https://images0.persgroep.net/rcs/5XA03cGALr-SKZ0BlzVGmD6vMo8/diocontent/114943802/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8" alt=""/>
            <div className={styles.gradient}></div>
            <div className={styles.textContainer}>
                <div className={styles.titleContainer}>
                    <p className={fonts.xl_card}>{name}</p>
                    <div className={styles.svgWrap}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13.594" height="13.262" viewBox="0 0 13.594 13.262">
                            <g id="Group_130" data-name="Group 130" transform="translate(-209.154 -539.125)">
                                <path id="Path_114" data-name="Path 114" d="M-23615.367-18173.264l4.863,4.863-4.863,4.861" transform="translate(23832 18714.158)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}/>
                                <path id="Path_115" data-name="Path 115" d="M-23610.51-18167.242h-10.791" transform="translate(23831.455 18713)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <p className={fonts.m_card}>{description}</p>
            </div>
        </div>
    )
}

