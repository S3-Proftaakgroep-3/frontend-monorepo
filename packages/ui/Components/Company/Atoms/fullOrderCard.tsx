import { useEffect } from 'react'
import { usePathName } from '../../../hooks/usePathName'
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

    const pathName = usePathName(2)

    const handleReadyBtn = () => {
        console.log('Order marked as received!')
    }

    return (
        <section id={styles.card}>
            <div id={styles.cardHeader}>
                <p id={styles.tableId}>{`Tafel ${table}`}</p>
                <p id={styles.timeAgo}>{time}</p>
                {
                    pathName === 'ready' &&
                    <button onClick={handleReadyBtn} id={styles.readyBtn} className={styles.btn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13.564" height="10.336" viewBox="0 0 13.564 10.336"><path d="M4.221,13.663.182,9.624a.621.621,0,0,1,0-.879l.879-.879a.621.621,0,0,1,.879,0L4.66,10.587l5.828-5.828a.621.621,0,0,1,.879,0l.879.879a.621.621,0,0,1,0,.879L5.1,13.663A.621.621,0,0,1,4.221,13.663Z" transform="translate(0.568 -4.077)" stroke="#27f394" strokeWidth={1}/></svg>
                    </button>
                }
            </div>
            <div>
                <OrderCardRow dish={fakeDish}/>
                <OrderCardRow dish={fakeDish}/>
            </div>
        </section>
    )
}