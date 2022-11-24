import styles from '../../Styles/Molecules/topMenuSecondary.module.css'
import { OrderBackButton } from '../Atoms'
import {ViewCompleteOrderButton} from "../Atoms/Buttons/viewCompleteOrderButton";
import {useRouter} from "next/router";

interface PropTypes {
    label: string,
    restaurantId?: string,
    tableId?: string,
    allOrderHidden: boolean
}

export const TopMenuSecondary = ({ label, restaurantId, tableId, allOrderHidden }: PropTypes) => {
    const router = useRouter()

    function goToCompleteOrderPage(){
        if (!router.isReady) return;
        router.push(`/order/all?tableId=${tableId}&restaurantId=${restaurantId}`)
    }

    return (
        <div id={styles.topMenuSecondary}>
            <OrderBackButton/>
            <p id={styles.label}>{label}</p>
            <ViewCompleteOrderButton allOrderHidden={allOrderHidden} onClick={goToCompleteOrderPage}/>
        </div>
    )
}