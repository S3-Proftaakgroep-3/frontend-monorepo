import {NextPage} from "next";
import styles from "../../../styles/settings.module.css"
import {useEffect, useState} from "react";
import {Button, ColorPicker} from "ui";
import {useRouter} from "next/router";

interface WhiteLabelInterface{
    restaurantId: string,
    backgroundColour: string,
    primaryColour: string,
    textColour: string,
    logoString: string,
}

interface ContextTypes{
    query: any,
}

export async function getServerSideProps({query}: ContextTypes) {
    const restaurantId = query.restaurant;
    const res = await fetch(`https://mdmawhitelabelservice.azurewebsites.net/api/whitelabel/get/${restaurantId}`)
    const data = await res.json();

    return {
        props: {
            whitelabelData: data
        }
    }
}

interface Proptypes {
    whitelabelData: WhiteLabelInterface
}

const Settings: NextPage<Proptypes> = ({whitelabelData}: Proptypes) => {
    const [bgColor, setBgColor] = useState(whitelabelData.backgroundColour);
    const [primaryColor, setPrimaryColor] = useState(whitelabelData.primaryColour);
    const [textColor, setTextColor] = useState(whitelabelData.textColour);
    const [image, setImage] = useState("");

    useEffect(() => {
        document.documentElement.style.setProperty('--bg-color', bgColor);
        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--text-color', textColor);
    }, [bgColor, primaryColor, textColor])

    const router = useRouter()
    const [restaurantId, setRestaurantId] = useState<string>('')

    useEffect(() => {

        if (router.isReady) {
            const id: string = router.pathname.split('/')[0]
            setRestaurantId(id)
        }
    }, [router.isReady])


    const changeBgColor = (e: any) => {
        setBgColor(e)
    }
    const changePrimaryColor = (e: any) => {
        setPrimaryColor(e)
    }
    const changeTextColor = (e: any) => {
        setTextColor(e)
    }

    const saveDataToDataBase = async () => {
        const whiteLabel: WhiteLabelInterface = {
            restaurantId: restaurantId,
            backgroundColour: bgColor,
            primaryColour: primaryColor,
            textColour: textColor,
            logoString: "",
        }

        // await fetch(`https://mdmaorderservice.azurewebsites.net/api/order/create`, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(whiteLabel)
        // })
    }

    return(
        <div className={styles.settingsPage}>
            <div className={styles.section}>
                <div className={styles.inputSection}>
                    <ColorPicker initialColor={bgColor} onChange={(e: any) => {changeBgColor(e)}} label='Background color' explanation='Background, highlights'/>
                    <ColorPicker initialColor={primaryColor} onChange={(e: any) => {changePrimaryColor(e)}} label='Primary color' explanation='Button, highlights'/>
                    <ColorPicker initialColor={textColor} onChange={(e: any) => {changeTextColor(e)}} label='Text color' explanation='Text, highlights'/>
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