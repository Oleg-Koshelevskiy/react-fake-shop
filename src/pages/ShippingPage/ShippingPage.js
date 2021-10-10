import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    title: {
        margin: '30px 0',
        textTransform: 'uppercase',
    },
})
const ShippingPage = () => {
    const classes = useStyles()
    return (
        <>
            <Typography
                align="center"
                variant="h4"
                component="h1"
                className={classes.title}
            >
                Shipping
            </Typography>
            <p>
                Самовивіз товару з магазинів мережі Цитрус Ви маєте можливість
                оформити замовлення на товар, який зацікавив вас на нашому сайті
                та забрати свою покупку в найближчому магазині «Цитрус». При
                оформленні замовлення оператор контакт-центру citrus.ua уточнює
                зручне для Вас місце і час приїзду за покупкою. Доставка нашого
                замовлення до найближчого магазину «Цитрус» здійснюється
                безкоштовно*
            </p>
        </>
    )
}
export default ShippingPage
