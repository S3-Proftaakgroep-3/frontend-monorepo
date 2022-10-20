import classNames from 'classnames/dedupe'
import styles from '../../Styles/Atoms/button.module.css'

interface PropTypes {
    label: string,
    style: "primary" | "secondary"
}

export const Button = ({ label, style }: PropTypes) => {
    return (
        <button
            className={classNames(
                styles.btn,
                style === "primary" && styles.btn__style_primary,
                style === "secondary" && styles.btn__style_secondary
            )}
        >
            {label}
        </button>
    )
}