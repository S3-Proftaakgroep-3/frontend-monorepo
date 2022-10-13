import { useState } from "react"

interface PropTypes {
    children: JSX.Element | JSX.Element[]
}

export const CategorySelector = ({ children }: PropTypes) => {

    return (
        <div>
            {children}
        </div>
    )
}