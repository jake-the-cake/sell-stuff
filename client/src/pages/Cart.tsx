import React, { FC } from "react"
import { pageTitle } from "../functions/common/pageSettings"

interface CartProps {
	title: string,
}

export const Cart:FC<CartProps> = ({ title }) => {
    pageTitle(title)

    return (
        <div className="cart-content">
            Cart Page
        </div>
    )
}