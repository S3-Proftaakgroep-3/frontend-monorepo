import classNames from 'classnames/dedupe'
import styles from '../../Styles/Atoms/textarea.module.css'
import fonts from '../../Styles/Utils/fonts.module.css'
import React from "react";

export const Textarea = ({
    onChange,
    id,
    label,
    placeholder,
    rows
}: {
    onChange: React.ChangeEventHandler,
    id: string,
    label: string,
    placeholder: string,
    rows: number
}) => {
    return (
        <div id={styles.textareaContainer}>
            <label className={classNames(styles.label, fonts.s_primary)} htmlFor={id}>{label}</label>
            <textarea onChange={onChange} className={styles.textarea} id={id} rows={rows} placeholder={placeholder}/>
        </div>
    )
}