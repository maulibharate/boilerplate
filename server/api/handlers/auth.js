const loginService = require('./services/login');
const registerService = require('./services/register');
const logoutService = require('./services/logout');

const AuthHandler = {
    login: async (req, res) => {
        return loginService(req, res);
    },

    register: async (req, res) => {
        return registerService(req, res);
    },

    logout: async (req, res) => {
        return logoutService(req, res);
    }
};

module.exports = AuthHandler;
