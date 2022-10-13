import classNames from 'classNames'
import styles from '../../Styles/Molecules/dropdownMenu.module.css'

interface PropTypes {
    menuActive: boolean
}

export const DropdownMenu = ({ menuActive }: PropTypes) => {
    return (
        <div 
            className={classNames(
                styles.menu,
                menuActive && styles.menu__state_active
            )}
            aria-hidden={!menuActive}
        >
            <p>My Menu</p>
        </div>
    )
}