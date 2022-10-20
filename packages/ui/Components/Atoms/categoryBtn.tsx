import styles from '../../Styles/Atoms/categoryBtn.module.css'
import fonts from '../../Styles/Utils/fonts.module.css'
import classNames from 'classnames/dedupe'

interface PropTypes {
    label: string,
    active: boolean,
    onClick: () => void
}

export const CategoryBtn = ({ label, active, onClick }: PropTypes) => {
    
    return (
        <button 
            className={classNames(
                styles.btn,
                active && styles.btn__state_active
            )}
            onClick={onClick}
        >
            <p className={fonts.s_secondary}>{label}</p>
        </button>
    )
}


