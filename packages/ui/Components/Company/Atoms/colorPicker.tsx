import { useState } from 'react'
import styles from '../../../Styles/Company/Atoms/colorPicker.module.css'

export const ColorPicker = ({
    label,
    explanation
}: {
    label: string,
    explanation: string
}) => {

    const [color, setColor] = useState<string>('#000000')

    return (
        <div>

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
                        setColor(e.target.value)
                    }}
                />
            </label>
        </div>
        
    )
}