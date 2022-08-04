const jwt = require('jsonwebtoken');
const jwtKey = 'myPassion';
// import the model
const User = require('../Models/user');

// export the controller functionalities

exports.Register = async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    console.log(result);
    delete result.password;
    jwt.sign({ result }, jwtKey, { expiresIn: "5h" }, (err, token) => {
        if (err) {
            res.send({ result: "Something went wrong, Please try after some time" })
        }
        res.send("Register success !!!")
    })
}

exports.Login = async (req, res) => {
    if (req.body.email && req.body.password) {
        // let user = await User.findOne(req.body).select("-password");
        let user = await User.findOne(req.body);
        if (user) {
            console.log(user);
            jwt.sign({ user }, jwtKey, { expiresIn: "5h" }, (err, auth, token) => {
                if (err) {
                    res.send({ result: "Something went wrong, Please try after some time" })
                }
                res.send({ auth:true, token: auth })
            })
        } else {
            res.send({ result: "No user found" })
        }
    }
    else {
        res.send({ result: "No User Found" })
    }
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
