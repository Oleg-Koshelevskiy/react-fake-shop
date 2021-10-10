import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
const Menu = () => {
    return (
        <>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Products</Button>
            <Button color="inherit">Payment</Button>
            <Button color="inherit">Shipping</Button>
            <Button color="inherit">
                <Link to="/Cart">Cart</Link>
            </Button>
        </>
    )
}

export default Menu
