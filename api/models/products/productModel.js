const mongodb = require('mongoose');
const Product = require('./productSchema');

exports.getProducts = (req, res) => {
    Product.find({}, (err, data) => {
        if(err){
            return res.status(500).json({
                statusCode: 500,
                status: false,
                message: err.message || 'Something went wrong when fetching the products'
            })
        }

        res.status(200).json(data)
    })
}

exports.getOneProduct = (req, res) => {

    Product.exists({ _id: req.params.id }, (err, result) => {
        if(err){
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request'
            })
        }
        if(result){
            Product.findById(req.params.id)
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json({
                statusCode: 500,
                status: false,
                message: err.message
            }))
        }
        else{
            res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Product does not exist'
            })
        }
    })
}

exports.createProduct = (req, res) => {

    Product.exists({ name: req.body.name }, (err, result) => {
        if(err){
            return res.status(400).json(err)
        }

        if(result){
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'A product by that name already exist'
            })
        }
        
        const newProduct = new Product({
            name: req.body.name,
            desc: req.body.desc,
            price: req.body.price,
            image: req.body.image
        })

        newProduct.save()
        .then(() => {
            res.status(201).json({
                statusCode: 201, 
                    status: true,
                    message: 'A product is created'
            })
        })
        .catch(() => {
            res.status(500).json({
                statusCode: 500, 
                    status: false,
                    message: 'Failed to create product'
            })
        })
    })
}

exports.updateProduct = (req, res) => {

    Product.exists({ _id: req.params.id }, (err, result) => {
        if(err){
            return res.status(400).json(err)
        }

        if(result){
            Product.updateOne({ _id: req.params.id }, {
                ...req.body,
                modified: Date.now()
            })
            .then(() => {
                res.status(200).json({
                    statusCode: 200, 
                    status: true,
                    message: 'Product updated.'
                })
            })
            .catch(() => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to update product'
                })
            })
        }
        else{
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Could not find the product'
            })
        }
    })
}

exports.deleteProduct = (req, res) => {

    Product.exists({ _id: req.params.id }, (err, result) => {
        if(err){
            return res.status(400).json(err)
        }
        if(result){
            Product.deleteOne({ _id: req.params.id })
                .then(() => {
                    res.status(200).json({
                        statusCode: 200,
                        status: true,
                        message: 'Product deleted'
                    })
                })
                .catch(() => {
                    res.status(500).json({
                        statusCode: 500,
                        status: false,
                        message: 'Failed to delete the product'
                    })
                })
        }
        else{
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Could not find the product'
            })
        }
    })
}