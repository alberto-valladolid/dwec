"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        if (typeof process.env.PORT == 'undefined') {
            this.app.set('port', 3000);
        }
        else {
            this.app.set('port', process.env.PORT);
        }
    };
    Server.prototype.routes = function () {
        this.app.use("/", indexRoutes_1.default);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log('Server iniciado en el puerto ' + _this.app.get('port'));
        });
    };
    return Server;
}());
var server = new Server();
server.start();
