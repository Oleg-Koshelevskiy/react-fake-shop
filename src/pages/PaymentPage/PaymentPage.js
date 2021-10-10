import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    title: {
        margin: '30px 0',
        textTransform: 'uppercase',
    },
})
const PaymentPage = () => {
    const classes = useStyles()
    return (
        <>
            <Typography
                align="center"
                variant="h4"
                component="h1"
                className={classes.title}
            >
                Payment
            </Typography>
            <p>
                Оплата готівкою при отриманні товару можлива в усіх магазинах
                мережі на території України. Оплата здійснюється виключно у
                національній валюті. Для підтвердження оплати ми видаємо Вам
                товарний чек.
            </p>
        </>
    )
}
export default PaymentPage
