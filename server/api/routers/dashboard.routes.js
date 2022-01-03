const router = require('express').Router();
const JWTTokenProvider = require('../../lib/jwt-token-provider');

router.get('/dashboard', JWTTokenProvider, (req, res) => {
    res.send(req.rootUser);
})

module.exports = router;