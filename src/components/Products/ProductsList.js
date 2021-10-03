import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import { Grid } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from './productsArray'

const useStyles = makeStyles({
    title: {
        margin: '30px 0',
        textTransform: 'uppercase',
    },
})

const ProductsList = ({ addProductToCart }) => {
    const classes = useStyles()

    return (
        <>
            <Typography
                align="center"
                variant="h4"
                component="h1"
                className={classes.title}
            >
                Products List
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={3}
            >
                {productsArray.map(
                    ({
                        id,
                        name,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
