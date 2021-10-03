import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button, CardActions, TextField } from '@mui/material'
import './ProductListItem.css'
import PropTypes from 'prop-types'

const ProductListItem = ({
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
                <div className="product-quantity">
                    <Button
                        variant="contained"
                        onClick={() => onDecrementClick()}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField variant="outlined" size="small" value={count} />
                    <Button
                        variant="contained"
                        onClick={() => onIncrementClick()}
                        disabled={count >= 10}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="wrap-btn-add-to-cart">
                <Button
                    variant="contained"
                    onClick={() => addProductToCart(count, price)}
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
