async function dashboard(req, res) {
    res.send(req.rootUser);
}

module.exports = dashboard;