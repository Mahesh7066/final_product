// import the model
const Order = require('../Models/viewOrder');

// export the controller functionalities

exports.viewOrderSchema = (req, res) => {
    Order.find().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: 'Error in Database',
            Order: error
        });
    });
}
exports.updateOrderSchema = async (req, res) => {
    let result = await Order.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    res.send(result);
}