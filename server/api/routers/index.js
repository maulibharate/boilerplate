const bodyParser = require('body-parser');

const AuthRoutes = require('./auth.routes');
const DashboardRoutes = require('./dashboard.routes');

function ApiRoutes(app) {
    ApiRoutes.prototype.app = app;
}

ApiRoutes.prototype.init = function () {
    ApiRoutes.prototype.app.use(bodyParser.urlencoded({
        extended: false,
    }));
    ApiRoutes.prototype.app.use(bodyParser.json());

    // CORS
    ApiRoutes.prototype.app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', process.env.FRONT_END_URL);
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        );
        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });

    // Register all routes
    ApiRoutes.prototype.app.use('/auth', AuthRoutes);
    ApiRoutes.prototype.app.use('/dashboard', DashboardRoutes);
};

module.exports = ApiRoutes;
