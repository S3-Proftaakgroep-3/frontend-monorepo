import { IconBtn } from "../Atoms/iconBtn"
import styles from '../../Styles/Molecules/bottomMenu.module.css'
import { CSSProperties, Dispatch, SetStateAction } from "react"
import { Button } from "../Atoms"

interface PropTypes {
    isBeverage: boolean,
    setIsBeverage: Dispatch<SetStateAction<boolean>>
}

export const BottomMenu = ({ isBeverage, setIsBeverage }: PropTypes) => {
    return (
        <div className={styles.bottomMenu}>
            <div className={styles.bottomMenuContentWrap}>
                <div id={styles.iconContainer}>
                    <IconBtn type="food" isBeverage={isBeverage} setIsBeverage={setIsBeverage}/>
                    <IconBtn type="drinks" isBeverage={isBeverage} setIsBeverage={setIsBeverage}/>
                </div>
                <div id={styles.btnWrap}>
                    <Button label="Go to order" style="primary"/>
                </div>                
            </div>
        </div>
    )
} 