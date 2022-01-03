const errors = require('../../constants/error.constants');

const LoginValidation = {
    isRequired: async (req, res) => {
        const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json(errors.Invalid_Request_Data);
            }
    }
}

module.exports = LoginValidation;