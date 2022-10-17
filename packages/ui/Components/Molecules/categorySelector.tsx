import styles from '../../Styles/Molecules/categorySelector.module.css'
import fonts from '../../Styles/Utils/fonts.module.css'

interface PropTypes {
    label: string,
    children: JSX.Element | JSX.Element[]
}

export const CategorySelector = ({ label, children }: PropTypes) => {

    return (
        <div>
            <h4 id={styles.label} className={fonts.s_primary}>{label}</h4>
            <div>
                {children}
            </div>
        </div>
    )
}