const user = require('../../../models/users');
const bcrypt = require('bcryptjs');
const errors = require('../../../constants/error.constants')

async function login(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json(errors.Invalid_Request_Data);
        }

        const userLogin = await user.findOne({ email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.genreateWebToken();
            console.log(token);

            res.cookie('jwtoken', token, {
                expires: new Date(Date.now() + 30000000),
                httpOnly: true
            });

            if(!isMatch) {
                res.status(400).json(errors.Invalid_Credentials);
            } else {
                 res.json({ message: "user Signin Successfully"});
            }
        } else {
             res.status(400).json(errors.Invalid_Credentials);
        }

        } catch(err) {
             console.log(err);
    }
}

module.exports = login;
