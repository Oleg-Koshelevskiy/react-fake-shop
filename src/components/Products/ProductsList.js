import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

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
        </>
    )
}

export default ProductsList
