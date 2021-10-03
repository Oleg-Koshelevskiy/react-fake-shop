import React from 'react'
import { keys } from 'lodash'

const CartHeader = ({ productsInCart }) => {
    return <div>{console.log(keys(productsInCart))}</div>
}

export default CartHeader
