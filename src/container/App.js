import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './Header/Header'
import Main from './Main/Main'

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

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
            />
        </>
    )
}

export default App
