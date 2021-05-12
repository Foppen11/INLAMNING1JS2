const mongodb = require('mongoose');
const Order = require('./orderSchema');

exports.getOrders = (req, res) => {
    Order.find({}, (err, data) => {
      if(err) {
        return res.status(500).json({
          statusCode: 500,
          status: false,
          message: err.message || 'Something went wrong when fetching the orders'
        })
      }
  
      res.status(200).json(data);
  
    })
  }
exports.getUserOrders = (req, res) => {
    Order.find({ email: req.params.email }, (err, data) => {
      if(err) {
        return res.status(500).json({
          statusCode: 500,
          status: false,
          message: err.message || 'Something went wrong when fetching the orders'
        })
      }
      res.status(200).json(data);
    })
  }

  exports.createOrder = (req, res) => {

      const newOrder = new Order({
  
        email: req.body.email,
        list:   req.body.list,
        price:  req.body.price
  
      })
  
      newOrder.save()
        .then(() => {
          res.status(201).json({
            statusCode: 201,
            status: true,
            message: 'Order created successfully'
          })
        })
        .catch(err => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to create order',
            err
          })
        })
  }