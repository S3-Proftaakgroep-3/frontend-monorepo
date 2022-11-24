import styles from '../../../Styles/Company/Atoms/fullOrderCard.module.css'
import { OrderCardRow } from './orderCardRow'

const fakeDish = {
    name: "Pizza Margherita",
    size: "M",
    extras: [
        "Extra kaas",
        "Jalapinõs"
    ],
    message: "Gelieve niet gesneden :)"
}

export const FullOrderCard = ({ fakeOrder }: any) => {

    const { 
        table,
        time
    } = fakeOrder

    return (
        <section id={styles.card}>
            <div id={styles.cardHeader}>
                <p id={styles.tableId}>{`Tafel ${table}`}</p>
                <p id={styles.timeAgo}>{time}</p>
            </div>
            <div>
                <OrderCardRow dish={fakeDish}/>
                <OrderCardRow dish={fakeDish}/>
            </div>
        </section>
    )
}