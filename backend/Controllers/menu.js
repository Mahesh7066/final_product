// import the model
const Filter = require('../Models/menu');

// export the controller functionalities
exports.restMenu = (req, res) => {
    const restId = req.params.restId;
    Filter.find({
        restaurant_id : restId
    }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: 'Error in Database',
            Filter: error
        });
    });
}