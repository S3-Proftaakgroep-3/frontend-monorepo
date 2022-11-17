import { IconBtn } from "../Atoms/iconBtn"
import styles from '../../Styles/Molecules/bottomMenu.module.css'
import { CSSProperties, Dispatch, SetStateAction } from "react"
import { Button } from "../Atoms"
import {useRouter} from "next/router";

interface PropTypes {
    isBeverage: boolean,
    setIsBeverage: Dispatch<SetStateAction<boolean>>,
    setCategory: Dispatch<SetStateAction<string>>
}

export const BottomMenu = ({ isBeverage, setIsBeverage, setCategory }: PropTypes) => {
    const router = useRouter()

    // Go to order page
     function goToOrderPage(){
         if (!router.isReady) return;
         router.push('/order');
    }

    return (
        <div className={styles.bottomMenu}>
            <div className={styles.bottomMenuContentWrap}>
                <div id={styles.iconContainer}>
                    <IconBtn type="food" setCategory={setCategory} isBeverage={isBeverage} setIsBeverage={setIsBeverage}/>
                    <IconBtn type="drinks" setCategory={setCategory} isBeverage={isBeverage} setIsBeverage={setIsBeverage}/>
                </div>
                <div id={styles.btnWrap}>
                    <Button onClick={goToOrderPage} label="Go to order" style="primary"/>
                </div>                
            </div>
        </div>
    )
} 