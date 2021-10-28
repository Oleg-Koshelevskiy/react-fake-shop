import React from 'react'
import { Button, TextField } from '@mui/material'

const Quantity = ({ count, onDecrementClick, onIncrementClick }) => {
    return (
        <>
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
        </>
    )
}
export default Quantity
