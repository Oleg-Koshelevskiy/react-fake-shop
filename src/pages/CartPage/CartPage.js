import React from 'react'
import { keys } from 'lodash'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import productsArray, {
    getProductsObject,
} from '../../components/Products/productsArray'
import CartTotal from '../../components/Cart/CartTotal'

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

const CartPage = ({
    productsInCart,
    productObject = getProductsObject(productsArray),
}) => {
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
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}
export default CartPage
