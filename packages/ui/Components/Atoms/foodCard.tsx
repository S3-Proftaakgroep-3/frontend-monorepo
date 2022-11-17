import * as React from "react";
import styles from '../../Styles/Atoms/foodCard.module.css'
import fonts from '../../Styles/Utils/fonts.module.css'
import classNames from "classnames/dedupe";

interface PropTypes {
    name: string,
    image: string,
    description: string,
    onClick: () => void
}

export const FoodCard = ({ name, description, onClick, image }: PropTypes) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <img className={styles.img} src={image} alt=""/>
            <div className={styles.gradient}/>
            <div className={styles.textContainer}>
                <div className={styles.titleContainer}>
                    <p className={fonts.xl_card}>{name}</p>
                    <div className={styles.svgWrap}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13.594" height="13.262" viewBox="0 0 13.594 13.262">
                            <g id="Group_130" data-name="Group 130" transform="translate(-209.154 -539.125)">
                                <path id="Path_114" data-name="Path 114" d="M-23615.367-18173.264l4.863,4.863-4.863,4.861" transform="translate(23832 18714.158)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/>
                                <path id="Path_115" data-name="Path 115" d="M-23610.51-18167.242h-10.791" transform="translate(23831.455 18713)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <p className={classNames(fonts.m_card, styles.description)}>{description}</p>
            </div>
        </div>
    )
}

