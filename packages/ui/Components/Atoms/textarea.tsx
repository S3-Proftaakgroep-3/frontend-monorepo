import classNames from 'classNames'
import styles from '../../Styles/Atoms/textarea.module.css'
import fonts from '../../Styles/Utils/fonts.module.css'

interface PropTypes {
    id: string,
    label: string,
    placeholder: string,
    rows: number
}

export const Textarea = ({ id, label, placeholder, rows }: PropTypes) => {
    return (
        <div id={styles.textareaContainer}>
            <label className={classNames(styles.label, fonts.s_primary)} htmlFor={id}>{label}</label>
            <textarea className={styles.textarea} id={id} rows={rows} placeholder={placeholder}/>
        </div>
    )
}