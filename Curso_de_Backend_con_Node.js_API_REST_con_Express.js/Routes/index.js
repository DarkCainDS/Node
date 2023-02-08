const  productsRouter = require('./productsRouter');
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
const express = require('express');

const routerApi = (app) => {
    const router = express.Router();

    app.use('/api/v1', router)
    router.use('/products', productsRouter);
    router.use('/user', userRouter);
    router.use('/category', categoryRouter);
}
module.exports = routerApi;