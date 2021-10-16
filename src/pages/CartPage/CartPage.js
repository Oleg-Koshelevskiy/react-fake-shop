import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import CartTotal from '../../components/Cart/CartTotal'
import CartProductList from '../../components/Cart/CartProductList'

const useStyles = makeStyles({
    title: {
        margin: '30px 0',
        textTransform: 'uppercase',
    },
})

const CartPage = ({ productsInCart }) => {
    const classes = useStyles()
    return (
        <>
            <Typography
                align="center"
                variant="h4"
                component="h1"
                className={classes.title}
            >
                Cart
            </Typography>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}
export default CartPage
