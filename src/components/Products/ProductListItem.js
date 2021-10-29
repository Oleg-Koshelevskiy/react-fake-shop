import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button, CardActions } from '@mui/material'
import './ProductListItem.css'
import PropTypes from 'prop-types'
import Quantity from '../Quantity/Quantity'

const ProductListItem = ({
    id,
    name,
    description,
    type,
    capacity,
    price,
    image,
    addProductToCart,
}) => {
    const [count, setCount] = useState(1)

    const onDecrementClick = () => {
        setCount(count - 1)
    }

    const onIncrementClick = () => {
        setCount(count + 1)
    }

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
                <Quantity
                    count={count}
                    onDecrementClick={onDecrementClick}
                    onIncrementClick={onIncrementClick}
                    minCount={1}
                />
            </CardContent>
            <CardActions className="wrap-btn-add-to-cart">
                <Button
                    variant="contained"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    )
}

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
}

ProductListItem.defaultProps = {
    description: 'No description ...',
    image: '/images/no-image.jpg',
}

export default ProductListItem
