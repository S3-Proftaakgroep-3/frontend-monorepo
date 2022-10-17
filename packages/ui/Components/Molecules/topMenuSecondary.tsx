import styles from '../../Styles/Molecules/topMenuSecondary.module.css'
import { OrderBackButton } from '../Atoms'

interface PropTypes {
    label: string
}

export const TopMenuSecondary = ({ label }: PropTypes) => {
    return (
        <div id={styles.topMenuSecondary}>
            <OrderBackButton/>
            <p id={styles.label}>{label}</p>
        </div>
    )
}