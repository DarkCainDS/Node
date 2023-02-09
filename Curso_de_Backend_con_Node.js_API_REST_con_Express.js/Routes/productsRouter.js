const express = require('express');
const app = express();
const router = express.Router();

const ProductService = require('./../services/productService')
const validatorHandler = require('../middleware/validatorHandler')
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/productSchema');
const service = new ProductService();

router.get("/", async(req, res) =>{
    const products = await service.find();
    res.json(products);
});
// Todo lo que sea un endpoint especifico debe ir antes de lo dinamico, si llegara a chocar

router.get("/filter", (req, res) =>{
    res.send('I am a filter');
});
router.get("/:id", 
validatorHandler(getProductSchema, 'params'),
async (req, res, next) =>{
    try{
        const { id } = req.params;
        const product =  await service.findOne(id);
        res.json(product);
    }
    catch(error){
        next(error);
    }
});

router.post('/',
validatorHandler(createProductSchema, 'body'),
async(req,res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});
router.patch('/:id', 
validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'),
async(req, res, next) => {
    
    try{
        const { id } = req.params;
        const body = req.body;
        const product = await service.update(id, body);
        res.json(product);
    }catch(error) {
        next(error);
    }
});
router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    const erase = await service.delete(id);

    res.json(erase);
});
module.exports = router;