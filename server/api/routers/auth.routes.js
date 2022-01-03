const router = require('express').Router()
const user = require('../../models/users');

const apiUrl = require('../../constants/api-constants')
const AuthHandler = require('../handlers/auth');

router.post(apiUrl.LOGIN, AuthHandler.login);

router.post(apiUrl.REGISTER, AuthHandler.register);

router.get(apiUrl.LOGOUT, AuthHandler.logout);

module.exports = router;