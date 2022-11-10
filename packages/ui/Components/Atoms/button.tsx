import classNames from 'classnames/dedupe'
import styles from '../../Styles/Atoms/button.module.css'
import React from "react";

export const Button = ({
    label,
    style,
    onClick,
}: {
    label: string,
    style: "primary" | "secondary"
    onClick: React.MouseEventHandler;
}) => {
    return (
        <button
            onClick={onClick}
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