import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button, CardActions } from '@mui/material'

const ProductListItem = (props) => {
    return (
        <Card>
            <CardContent>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <div>{props.type}</div>
                <div>{props.capacity}Gb</div>
                <div>{props.price}$</div>
            </CardContent>
            <CardActions>
                <Button>Add to Cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
