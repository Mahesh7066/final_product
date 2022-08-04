// https://zomoapp.herokuapp.com/restaurant?mealtype_id=2
// import the model
const mealType = require('../Models/mealtype');

// export the controller functionalities

exports.getAllMealtypesRest = (req, res) => {
    const mealId = req.params.mealId;
    mealType.find({
        mealtype_id: mealId
    }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: 'Error in Database',
            error: error
        });
    });
}