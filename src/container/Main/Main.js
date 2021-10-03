import React from 'react'
import Container from '@mui/material/Container'
import ProductsList from '../../components/Products/ProductsList'

const Main = ({ addProductToCart }) => {
    return (
        <>
            <Container maxWidth="lg">
                <ProductsList addProductToCart={addProductToCart} />
            </Container>
        </>
    )
}

export default Main
