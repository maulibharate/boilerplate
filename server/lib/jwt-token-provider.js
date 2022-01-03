const jwt = require('jsonwebtoken');
const User = require('../models/users');

const secretKey = process.env.JWT_SECRET_KEY;
const errors = require('../constants/error.constants');

const JWTTokenProvider =  {
    verifyToken: async (req, res, next) => {
        try {

            const token = req.cookies.jwtoken;
            const verifyToken = jwt.verify(token, secretKey);

            const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token });

            if(!rootUser) { throw new Error(errors.User_Not_Found)}

            req.token = token;
            req.rootUser = rootUser;
            req.userID = rootUser._id;

            next();
        } catch(err) {
            res.status(401).send("Unauthorized: No token provided");
            console.log(err);
        }
    }
}

module.exports = JWTTokenProvider;