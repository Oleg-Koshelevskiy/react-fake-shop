import { array } from 'prop-types'

const productsArray = [
    {
        id: 1,
        name: 'iPhone XS',
        description: 'This is iPhone XS',
        type: 'phone',
        capacity: 64,
        price: 500,
        image: '/images/11-white.jpg',
    },
    {
        id: 2,
        name: 'iPhone X',
        description: 'This is iPhone X',
        type: 'phone',
        capacity: 128,
        price: 1000,
        image: '/images/12-mini-violet.jpg',
    },
    {
        id: 3,
        name: 'iPhone 12',
        description: 'This is iPhone 12',
        type: 'phone',
        capacity: 256,
        price: 1000,
        image: '/images/12-pro-max.jpg',
    },
    {
        id: 4,
        name: 'iPhone 8',
        description: 'This is iPhone 8',
        type: 'phone',
        capacity: 32,
        price: 250,
        image: '/images/12-red.jpg',
    },
    {
        id: 5,
        name: 'iPhone 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: 512,
        price: 1500,
        image: '/images/12pro-graphite.jpg',
    },
    {
        id: 6,
        name: 'iPhone 11',
        description: 'This is iPhone 11',
        type: 'phone',
        capacity: 256,
        price: 800,
        image: '/images/se-black.png',
    },
]

export const getProductsObject = (array) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default productsArray
