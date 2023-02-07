const  productsRouter = require('./productsRouter');

const routerApi = (app) => {
    app.use('/products', productsRouter);
}
module.exports = routerApi;