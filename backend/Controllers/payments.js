const jwt = require('jsonwebtoken');
const jwtKey = 'myPassion';
// import the model
const pay = require('../Models/payments');

// export the controller functionalities

exports.Payment = async (req, res) => {
    let user = new pay(req.body);
    let result = await user.save();
    result = result.toObject();
    console.log(result);
    delete result.password;
    jwt.sign({ result }, jwtKey, { expiresIn: "5h" }, (err, token) => {
        if (err) {
            res.send({ result: "Something went wrong, Please try after some time" })
        }
        res.send("Payment success !!!")
    })
}


function verifyToken(req, res, next) {
    let token = req.headers['authorization'];
    if (token) {
        token = token.split(' ')[1];
        jwt.verify(token, jwtKey, (err, valid)=>{
            if (err) {
                res.status(401).send({result : 'Please provide valid token'});
            }else{
                next();
            }
        })
    }else{
        res.status(403).send({result: 'Please add token with header'});
    }
}
