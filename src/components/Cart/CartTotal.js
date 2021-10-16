import React from 'react'
import { keys } from 'lodash'
import productsArray, { getProductsObject } from '../Products/productsArray'

const CartTotal = ({
    productsInCart,
    productObject = getProductsObject(productsArray),
}) => {
    return (
        <div>
            Total:{' '}
            {keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productObject[productId].price * productsInCart[productId],
                0
            )}
            $
        </div>
    )
}

export default CartTotal
