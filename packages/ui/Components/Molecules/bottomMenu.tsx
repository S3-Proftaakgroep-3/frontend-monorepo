import { IconBtn } from "../Atoms/iconBtn"
import styles from '../../Styles/Molecules/bottomMenu.module.css'
import { CSSProperties } from "react"
import { Button } from "../Atoms"

export const BottomMenu = () => {
    return (
        <div className={styles.bottomMenu} style={{"--bottomMenu-height": "80px"} as CSSProperties}>
            <div className={styles.bottomMenuContentWrap}>
                <IconBtn type="food" btnActive={true}/>
                <IconBtn type="drinks" btnActive={false}/>
                <Button label="Go to order" style="primary"/>
            </div>
        </div>
    )
} 