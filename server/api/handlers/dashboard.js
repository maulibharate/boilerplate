const getDashboardService = require('./services/get-dashboard');

const DashboardHandler = {
    dashboard: (req, res) => {
        return getDashboardService(req, res);
    }
}

module.exports = DashboardHandler;