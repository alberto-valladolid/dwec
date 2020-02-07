"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const jwt = require('jsonwebtoken');
const config_1 = __importDefault(require("./config"));
const securedRoutes_1 = __importDefault(require("./routes/securedRoutes"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const teacherRoutes_1 = __importDefault(require("./routes/teacherRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        //permite automatizar el servidor
        if (typeof process.env.PORT == 'undefined') {
            this.app.set('port', 3000);
        }
        else {
            this.app.set('port', process.env.PORT);
        }
        this.app.use(morgan_1.default("dev")); //permite  ver los logs de las peticiones api (post, get, put etc) que recibe esta clase. 
        this.app.use(cors_1.default()); //para manejar las cabeceras de las peticiones
        this.app.use(express_1.default.json()); //para recibir objetos json de las peticiones cliente
        this.app.use(express_1.default.urlencoded({ extended: false }));
        //delete in the future /api/auth/me route
        this.app.use(function (req, res, next) {
            var _a;
            if (req.url !== '/api/auth/login' && req.url !== '/api/auth/me') {
                var token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.substr(6);
                if (!token)
                    return res.status(401).send({ auth: false, message: 'No token provided.' });
                jwt.verify(token, config_1.default.jwtKey, function (err, decoded) {
                    if (err)
                        return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
                    else {
                        var accType;
                        if (decoded.accountType == "student")
                            accType = 1;
                        if (decoded.accountType == "teacher")
                            accType = 2;
                        if (decoded.accountType == "admin")
                            accType = 3;
                        if (req.url in securedRoutes_1.default) {
                            var securedRoutes2 = securedRoutes_1.default;
                            if (accType >= securedRoutes2[req.url][req.method]) {
                                console.log(decoded);
                                next();
                            }
                            else {
                                return res.status(500).send({ auth: false, message: 'Insufficient permissions' });
                            }
                        }
                    }
                });
            }
            else {
                next();
            }
        });
    }
    routes() {
        this.app.use("/", indexRoutes_1.default);
        this.app.use("/api/teachers", teacherRoutes_1.default);
        this.app.use("/api/auth", authRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server iniciado en el puerto ' + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
