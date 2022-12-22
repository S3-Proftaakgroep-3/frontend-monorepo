import {NextPage} from "next";
import styles from "../../../styles/settings.module.css"
import {useEffect, useState} from "react";
import {Button, ColorPicker} from "ui";

const Settings: NextPage<null> = () => {
    const [bgColor, setBgColor] = useState("");
    const [primaryColor, setPrimaryColor] = useState("");
    const [textColor, setTextColor] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        document.documentElement.style.setProperty('--bg-color', bgColor);
        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--text-color', textColor);
    }, [bgColor, primaryColor, textColor])

    const changeBgColor = (e: any) => {
        setBgColor(e)
    }
    const changePrimaryColor = (e: any) => {
        setPrimaryColor(e)
    }
    const changeTextColor = (e: any) => {
        setTextColor(e)
    }

    function saveDataToDataBase(){

    }

    return(
        <div className={styles.settingsPage}>
            <div className={styles.section}>
                <div className={styles.inputSection}>
                    <ColorPicker onChange={(e: any) => {changeBgColor(e)}} label='Background color' explanation='Background, highlights'/>
                    <ColorPicker onChange={(e: any) => {changePrimaryColor(e)}} label='Primary color' explanation='Button, highlights'/>
                    <ColorPicker onChange={(e: any) => {changeTextColor(e)}} label='Accent color' explanation='Text, highlights'/>

                    <Button label={"Save"} onClick={saveDataToDataBase} style={"primary"}></Button>
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