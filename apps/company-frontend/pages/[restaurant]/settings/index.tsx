import {NextPage} from "next";
import styles from "../../../styles/settings.module.css"
import {useEffect, useState} from "react";
import {ColorPicker} from "ui";

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

    const changeBgColor = (e: any) => {
        setBgColor(e)
    }
    const changePrimaryColor = (e: any) => {
        setPrimaryColor(e)
    }
    const changeAccentColor = (e: any) => {
        setAccentColor(e)
    }

    return(
        <div className={styles.settingsPage}>
            <div className={styles.section}>
                <div className={styles.inputSection}>
                    <ColorPicker onChange={(e: any) => {changeBgColor(e)}} label='Background color' explanation='Background, highlights'/>
                    <ColorPicker onChange={(e: any) => {changePrimaryColor(e)}} label='Primary color' explanation='Button, highlights'/>
                    <ColorPicker onChange={(e: any) => {changeAccentColor(e)}} label='Accent color' explanation='Icons, highlights'/>
                </div>

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