import React from 'react'
import { keys } from 'lodash'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import productsArray from '../../components/Products/productsArray'

const useStyles = makeStyles({
    title: {
        margin: '30px 0',
        textTransform: 'uppercase',
    },
})

const productObject = productsArray.reduce(
    (object, product) => ({
        ...object,
        [product.id]: product,
    }),
    {}
)

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
            <div>
                {keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productObject[productId].name} :
                        {productsInCart[productId]} :{' '}
                        {productObject[productId].price}
                    </div>
                ))}
            </div>
            <div>
                Total:{' '}
                {keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productObject[productId].price *
                            productsInCart[productId],
                    0
                )}
                $
            </div>
        </>
    )
}
export default CartPage
