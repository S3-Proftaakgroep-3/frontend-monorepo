import { useState } from 'react'
import styles from '../../../Styles/Company/Atoms/colorPicker.module.css'

export const ColorPicker = ({
    label,
    explanation,
    onChange,
}: {
    label: string,
    explanation: string,
    onChange: any,
}) => {

    const [color, setColor] = useState<string>('#000000')

    return (
        <div className={styles.wrapper}>

            <label id={styles.label} htmlFor={label}>
                <p id={styles.primaryText}>{label}</p>
                <p id={styles.secondaryText}>{`(${explanation})`}</p>

                <div id={styles.colorWrap}>
                    <div style={{"backgroundColor":`${color}`}} id={styles.color}/>
                </div>

                {/* Hidden input */}
                <input
                    id={label}
                    className={styles.input}
                    type='color'
                    onChange={(e) => {
                        onChange(e.target.value)
                        setColor(e.target.value)
                    }}
                />
            </label>
        </div>
        
    )
}