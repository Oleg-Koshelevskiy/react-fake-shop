import React from 'react'
import CartTotal from './CartTotal'
import CartProductList from './CartProductList'

const CartHeader = ({ productsInCart }) => {
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartHeader
