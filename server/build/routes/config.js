"use strict";
//const fs = require('fs');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jwtKey: "G(xhfiG^vv-Y)JQ7cMsz{=)/YnpJ0[",
    apiURL: "localhost:3000",
    routesLvlSecurity: {
        '/api/auth/login': {
            'post': { 'lvl': 1 },
        },
        '/api/teachers/': {
            'get': { 'lvl': 1 },
            'post': { 'lvl': 3 },
            'delete': { 'lvl': 3 },
            'put': { 'lvl': 3 },
        },
    }
};
