"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', function (req, res) {
            res.send("pues funciona y todo");
        });
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
