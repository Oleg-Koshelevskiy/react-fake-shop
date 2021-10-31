import { Button, Card, CardContent, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from '../Quantity/Quantity'
import { connect } from 'react-redux'

const useStyles = makeStyles({
    media: {
        width: 100,
        height: 'auto',
        marginRight: 15,
    },
    cartWrap: {
        display: 'flex',
        padding: 15,
    },
    btnRemove: {
        marginTop: 20,
    },
})

const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.cartWrap}>
                <div>
                    <img
                        src={product.image}
                        alt={product.name}
                        className={classes.media}
                    />
                </div>
                <CardContent>
                    <div>{product.name}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                        count={productCount}
                        onDecrementClick={() =>
                            productCount === 1
                                ? removeProductFromCart(product.id)
                                : changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }
                        onIncrementClick={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                        minCount={0}
                    />
                    <Button
                        className={classes.btnRemove}
                        onClick={() => removeProductFromCart(product.id)}
                        variant="outlined"
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

const mapDispatchToProps = (dispatch) => ({
    removeProductFromCart: (id) =>
        dispatch({
            type: 'REMOVE_PRODUCT_FROM_CART',
            id,
        }),
    changeProductQuantity: (id, count) =>
        dispatch({
            type: 'CHANGE_PRODUCT_QUANTITY',
            id,
            count,
        }),
})

export default connect(null, mapDispatchToProps)(CartProductListItemExtended)
