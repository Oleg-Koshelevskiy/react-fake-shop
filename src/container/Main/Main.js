import React from 'react'
import Container from '@mui/material/Container'
import ProductsList from '../../components/Products/ProductsList'

const Main = () => {
    return (
        <>
            <Container maxWidth="lg">
                <ProductsList />
            </Container>
        </>
    )
}

export default Main
