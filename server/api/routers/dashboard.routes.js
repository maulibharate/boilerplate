const router = require('express').Router();
const JWTTokenProvider = require('../../lib/jwt-token-provider');
const DashboardHandler = require('../handlers/dashboard');

const apiUrl = require('../../constants/api-constants');

router.get(apiUrl.DASHBOARD, JWTTokenProvider.verifyToken, DashboardHandler.dashboard);

module.exports = router;