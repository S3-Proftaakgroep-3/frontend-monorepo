import { IconBtn } from "../Atoms/iconBtn"
import styles from '../../Styles/Molecules/bottomMenu.module.css'
import { CSSProperties, Dispatch, SetStateAction } from "react"
import { Button } from "../Atoms"

interface PropTypes {
    isFood: boolean,
    setIsFood: Dispatch<SetStateAction<boolean>>
}

export const BottomMenu = ({ isFood, setIsFood }: PropTypes) => {
    return (
        <div className={styles.bottomMenu}>
            <div className={styles.bottomMenuContentWrap}>
                <div id={styles.iconContainer}>
                    <IconBtn type="food" isFood={isFood} setIsFood={setIsFood}/>
                    <IconBtn type="drinks" isFood={isFood} setIsFood={setIsFood}/>
                </div>
                <div id={styles.btnWrap}>
                    <Button label="Go to order" style="primary"/>
                </div>                
            </div>
        </div>
    )
} 