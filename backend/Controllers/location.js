// import the model
const Locations = require('../Models/location');

// export the controller functionalities

exports.Location = (req, res) => {
    Locations.find().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: 'Error in Database',
            Location: error
        });
    });
}