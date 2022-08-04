// import the model
const Filter = require('../Models/filter');

// export the controller functionalities
exports.filterByMealId = (req, res) => {
    const mealId = req.params.mealId;
    Filter.find({
        mealTypes: {
            $elemMatch: {
                mealtype_id: mealId
            }
        }
    }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: 'Error in Database',
            Filter: error
        });
    });
}
exports.restaurantFilter = (req, res) => {

    const {
        mealID,
        location,
        cuisine,
        hcost,
        lcost,
        sort = 1,
        page = 1
    } = req.body;
    let filters = {};

    if (mealID) {
        filters.mealID_id = mealID
    }
    if (location) {
        filters.location_id = location
    }
    if (cuisine) {

        filters["cuisine.name"] = {
            $in: cuisine
        }
    }
    if (hcost) {
        filters.min_price = {
            $lt: hcost
        }
    }
    if (lcost) {

        filters.min_price = {
            $gt: lcost
        }
    }
    if (lcost && hcost) {

        filters.min_price = {
            $lt: hcost,
            $gt: lcost
        }
    }

    Filter.find(filters).sort({ min_price: sort }).then((success) => {

        //pagination
        const pageSize = 2
        var result = success.slice(page * pageSize - pageSize, page * pageSize);


        res.status(200).json({
            message: req.body,
            Filter: result,
            pageNo: page,
            noOfPages: Math.ceil((success.length / pageSize))
        })
    }).catch((err) => {

        res.status(500).json({
            message: "error occured",
            Error: err
        })
    })
}