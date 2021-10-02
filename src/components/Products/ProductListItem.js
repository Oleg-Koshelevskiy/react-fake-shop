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
}) => {
    const [count, setCount] = useState(1)

    const onDecrementClick = () => {
        setCount(count - 1)
    }

    const onIncrementClick = () => {
        setCount(count + 1)
    }

    const [color, setColor] = useState('green')

    const changeColor = () => {
        setColor((value) => (value === 'red' ? 'green' : 'red'))
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
                <p>Color: {color}</p>
                <button onClick={() => changeColor()}>Change color</button>
                <div className="product-quantity">
                    <Button
                        variant="outlined"
                        onClick={() => onDecrementClick()}
                    >
                        -
                    </Button>
                    <TextField variant="outlined" size="small" value={count} />
                    <Button
                        variant="outlined"
                        onClick={() => onIncrementClick()}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="wrap-btn-add-to-cart">
                <Button variant="contained">Add to Cart</Button>
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
