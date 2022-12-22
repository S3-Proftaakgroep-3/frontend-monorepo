import {NextPage} from "next";
import styles from "../../../styles/settings.module.css"
import {useEffect, useState} from "react";

const Settings: NextPage<null> = () => {
    const [bgColor, setBgColor] = useState("");
    const [primaryColor, setPrimaryColor] = useState("");
    const [accentColor, setAccentColor] = useState("");
    const [image, setImage] = useState("");
    useEffect(() => {
        document.documentElement.style.setProperty('--bg-color', bgColor);
        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--accent-color', accentColor);
    }, [bgColor, primaryColor, accentColor])


    return(
        <div className={styles.settingsPage}>
            <div className={styles.section}>
                <input type={"color"} onChange={(color) => {setBgColor(color.target.value)}}/>
                <input type={"color"} onChange={(color) => {setPrimaryColor(color.target.value)}}/>
                <input type={"color"} onChange={(color) => {setAccentColor(color.target.value)}}/>
                <input type={"url"} onChange={(url) => {setImage(url.target.value)}}/>
            </div>
            <div className={styles.section}>
                <div className={styles.mobile}>
                    <div className={styles.content}>
                        <div className={styles.hamburger}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <img src={image} className={styles.image}></img>

                        <div className={styles.cardSection}>
                            <div className={styles.card}>
                                frietje
                            </div>
                            <div className={styles.card}>
                                frietje
                            </div>
                        </div>

                        <div className={styles.button}>
                            Go to order
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Settings;