import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './Header/Header'
import Main from './Main/Main'
import { omit } from 'lodash'

const App = () => {
    const [productsInCart, setProductsInCart] = useState({
        1: 2,
        2: 5,
    })

    const addProductToCart = (id, count) =>
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))

    const removeProductFromCart = (id) =>
        setProductsInCart(omit(productsInCart, [id]))

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />

            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
            />
        </>
    )
}

export default App
