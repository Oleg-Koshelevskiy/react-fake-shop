import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button, CardActions } from '@mui/material'
import './ProductListItem.css'
import PropTypes from 'prop-types'
import Quantity from '../Quantity/Quantity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { connect } from 'react-redux'

const ProductListItem = ({
    id,
    name,
    description,
    type,
    capacity,
    price,
    image,
    addProductToCart,
    isLiked = false,
    addLike,
    removeLike,
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
                <Button
                    onClick={() => (isLiked ? removeLike(id) : addLike(id))}
                    variant="outlined"
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
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

const mapStateToProps = (state, { id }) => ({
    isLiked: state[id],
})

const mapDispatchToProps = (dispatch) => ({
    addLike: (id) =>
        dispatch({
            type: 'LIKE',
            id,
        }),

    removeLike: (id) =>
        dispatch({
            type: 'DISLIKE',
            id,
        }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListItem)
