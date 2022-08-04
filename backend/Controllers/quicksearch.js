// import the model
const quicksearch = require('../Models/quicksearch');

// export the controller functionalities

exports.quicksearchSchema = (req, res) => {
    quicksearch.find().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: 'Error in Database',
            quicksearch: error
        });
    });
}