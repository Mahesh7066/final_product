// import the model
const Filter = require('../Models/details');

// export the controller functionalities
exports.restDetails = (req, res) => {
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
exports.restByStateId = (req, res) => {
    const stateId = req.params.stateId;
    Filter.find({
        state_id : stateId
    }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: 'Error in Database',
            Filter: error
        });
    });
}