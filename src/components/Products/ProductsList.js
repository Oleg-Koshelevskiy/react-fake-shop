import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import { Grid } from '@mui/material'
import ProductListItem from './ProductListItem'

const useStyles = makeStyles({
    title: {
        margin: '30px 0',
        textTransform: 'uppercase',
    },
})

const ProductsList = () => {
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
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone X"
                        description="This is iPhone X"
                        type="phone"
                        capacity="64"
                        price="500"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone XS"
                        description="This is iPhone XS"
                        type="phone"
                        capacity="128"
                        price="1000"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone 13"
                        description="This is iPhone 13"
                        type="phone"
                        capacity="512"
                        price="2000"
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
