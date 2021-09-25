import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button, CardActions } from '@mui/material'
import './ProductListItem.css'

const ProductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
    image,
}) => {
    return (
        <Card>
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <h4>{name}</h4>
                <p>{description}</p>
                <div className="product-features">Type:{type}</div>
                <div className="product-price">Capacity:{capacity}Gb</div>
                <div className="product-price">Price:{price}$</div>
            </CardContent>
            <CardActions className="wrap-btn-add-to-cart">
                <Button variant="contained">Add to Cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
