import React from 'react'
import { keys } from 'lodash'
import productsArray, { getProductsObject } from '../Products/productsArray'
import CartTotal from './CartTotal'

const CartHeader = ({
    productsInCart,
    productObject = getProductsObject(productsArray),
}) => {
    return (
        <div>
            <div>
                {keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productObject[productId].name} :
                        {productsInCart[productId]}
                    </div>
                ))}
            </div>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartHeader
