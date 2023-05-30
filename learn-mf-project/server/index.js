const express = require('express');
const cors = require('cors');
const { productsData } = require('./dummydata');
const jwt = require('jsonwebtoken')

const app = express();
app.use(cors());
app.use(express.json());


const PORT = 8080;

app.get('/product', (req, res) => {
    return res.status(200).json({ message: 'Products data', products: productsData })
})


app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const data = productsData.find((product) => product.id === parseInt(id));
    return res.status(200).json({ message: 'Products data', products: data })
})



app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const userData = null;
    usersData.map((user) => {
        if (user.username === username && user.password === password) {
            userData = user;
        }
    })

    if (userData) {
        const token = jwt.sign(userData, "secret");
        return res.status(200).json({ message: 'login successfull', user: userData, token })
    } else {
        return res.status(400).json({ message: 'invalid email password' })
    }
});

const initiateCart = (indexes) => {
    const initialCart = indexes.map((index) => ({
        ...productsData[index],
        quantity: 1,
    }));

    return initialCart;
}


app.get('/cart', (req, res) => {
    const cartItems = [];
    cartItems[0] = initiateCart([0, 2, 4]);
    cartItems[1] = initiateCart([1, 3]);
    cartItems[2] = initiateCart([1, 6, 7, 8]);

    return res.status(200).json({ message: 'card data', cartItems })
});

app.post('/cart', (req, res) => {
    const cartItems = [];
    cartItems[0] = initialCart([0, 2, 4]);
    cartItems[1] = initialCart([1, 3]);
    cartItems[2] = initialCart([1, 6, 7, 8]);

    const cart = cartItems[req.user.userId];
    const cartItem = cartItems.find((cartItem) => cartItem.id === parseInt(id));

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cartItems.push({
            ...products.find((product) => product.id === parseInt(id)),
            quantity: 1,
        });
    }
    return res.status(200).json({ message: 'card data', cartItems })
})

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})