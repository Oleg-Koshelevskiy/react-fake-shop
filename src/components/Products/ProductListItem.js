import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button, CardActions } from '@mui/material'

const ProductListItem = ({ name, description, type, capacity, price }) => {
    return (
        <Card>
            <CardContent>
                <h4>{name}</h4>
                <p>{description}</p>
                <div>{type}</div>
                <div>{capacity}Gb</div>
                <div>{price}$</div>
            </CardContent>
            <CardActions>
                <Button>Add to Cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
