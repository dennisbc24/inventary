const express = require("express");
const validationSchema = require("../../middlewares/validation.handler");
const createProductSchema = require("../../schemas/products.schema");
const router = express.Router();


const { getProducts, postProduct} = require('../../controllers/products.controllers')

router.get("/", getProducts)
router.post("/", postProduct);



module.exports = router;
