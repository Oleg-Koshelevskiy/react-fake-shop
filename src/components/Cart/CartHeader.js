import React from 'react'

const CartHeader = ({ totalCount, totalPrice }) => {
    return (
        <div>
            <div>{totalCount}</div>
            <div>$ {totalPrice}</div>
        </div>
    )
}

export default CartHeader
