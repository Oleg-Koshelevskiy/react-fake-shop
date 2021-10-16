import React from 'react'
import { keys } from 'lodash'
import productsArray, { getProductsObject } from '../Products/productsArray'

const CartProductList = ({
    productsInCart,
    productObject = getProductsObject(productsArray),
}) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productObject[productId].name} :{productsInCart[productId]}
                </div>
            ))}
        </div>
    )
}
export default CartProductList
