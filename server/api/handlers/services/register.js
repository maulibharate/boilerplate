const user = require('../../../models/users');
const errors = require('../../../constants/error.constants');

async function register(req, res) {
    const { firstName, lastName, email, phone, password, confirmPassword } = req.body;
    
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
        return res.status(422).json(errors.Invalid_Request_Data)
    }

    try {
        const userExist = await user.findOne({ email });
        if (userExist) {
            return res.status(422).json(errors.Email_Already_Exists);
        } else if (password !== confirmPassword) {
            return res.status(422).json(errors.Password_Do_Not_Match); 
        } else {
            const userData = new user({ firstName, lastName, email, phone, password, confirmPassword });

            await userData.save();

            res.status(201).json({ message: 'User registered successfuly '});
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = register;