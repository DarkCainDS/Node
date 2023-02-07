const express = require('express');
const app = express();
const router = express.Router();
const faker = require('faker');

router.get("/", (req, res) =>{
    const products = [];
    const { size } = req.query;
    const limit = size || 10; 
    for(let index = 0; index < limit; index++){
        products.push({
            name: faker.commerce.productName(),
            price: parseInt( faker.commerce.price(), 10),
            image: faker.image.imageUrl(),
        });
    }
    res.json(products);
});
// Todo lo que sea un endpoint especifico debe ir antes de lo dinamico, si llegara a chocar

router.get("/filter", (req, res) =>{
    res.send('I am a filter');
});
router.get("/:id", (req, res) =>{
    const { id } = req.params;

    res.json({
        id,
        name: 'Product 2', 
        price:2000
    });
});
module.exports = router;