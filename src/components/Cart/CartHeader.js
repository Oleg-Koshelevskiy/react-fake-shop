import React from 'react'
import { keys } from 'lodash'
import productsArray from '../Products/productsArray'

const productObject = productsArray.reduce(
    (object, product) => ({
        ...object,
        [product.id]: product,
    }),
    {}
)

console.log(productObject)
console.log(productsArray)

const CartHeader = ({ productsInCart }) => {
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

export default CartHeader
