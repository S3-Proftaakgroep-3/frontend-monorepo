import styles from '../../Styles/Molecules/topMenuSecondary.module.css'
import { OrderBackButton } from '../Atoms'
import {ViewCompleteOrderButton} from "../Atoms/Buttons/viewCompleteOrderButton";
import {useRouter} from "next/router";

interface PropTypes {
    label: string,
    restaurantId: string,
    tableId: string,
}

export const TopMenuSecondary = ({ label, restaurantId, tableId }: PropTypes) => {
    const router = useRouter()
    restaurantId = restaurantId.toString()
    function goToCompleteOrderPage(){
        if (!router.isReady) return;
        router.push(`/order/all?tableId=${tableId}&restaurantId=${restaurantId}`)
    }

    return (
        <div id={styles.topMenuSecondary}>
            <OrderBackButton/>
            <p id={styles.label}>{label}</p>
            <ViewCompleteOrderButton onClick={goToCompleteOrderPage}/>
        </div>
    )
}