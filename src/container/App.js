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

    const removeProductFromCart = (id) => {
        let prevProductsInCart = { ...productsInCart }
        delete prevProductsInCart[id]
        return setProductsInCart(prevProductsInCart)
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => removeProductFromCart(1)}>Delete</button>
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
            />
        </>
    )
}

export default App
