import styles from '../../Styles/Atoms/categoryBtn.module.css'

interface PropTypes {
    label: string
}

export const CategoryBtn = ({ label }: PropTypes) => {
    
    return (
        <button className={styles.test}>
            {label}
        </button>
    )
}

