async function logout(req, res) {
    res.clearCookie('jwtoken', {path: '/'});
    res.status(200).send("User logout");
}

module.exports = logout;