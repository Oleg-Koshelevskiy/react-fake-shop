import React from 'react'
import Container from '@mui/material/Container'
import ProductsList from '../../components/Products/ProductsList'
import { Route, Switch } from 'react-router'
import CartPage from '../../pages/CartPage/CartPage'

const Main = ({ addProductToCart }) => {
    return (
        <>
            <Container maxWidth="lg">
                <Switch>
                    <Route path="/" exact>
                        <ProductsList addProductToCart={addProductToCart} />
                    </Route>
                    <Route path="/cart" exact>
                        <CartPage />
                    </Route>
                </Switch>
            </Container>
        </>
    )
}

export default Main
