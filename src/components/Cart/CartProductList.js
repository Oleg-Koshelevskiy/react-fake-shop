import React from 'react'
import { keys } from 'lodash'
import productsArray, { getProductsObject } from '../Products/productsArray'
import CartProductListItem from './CartProductListItem'

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
}) => {
    return (
        <>
            {keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[productId]}
                    productCount={productsInCart[productId]}
                />
            ))}
        </>
    )
}
export default CartProductList
