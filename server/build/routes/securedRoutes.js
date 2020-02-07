"use strict";
//const fs = require('fs');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    //1 min student , 2 min teacher, 3 min admin
    '/api/auth/login': {
        'POST': 1,
    },
    '/api/auth/me': {
        'POST': 1,
    },
    '/api/teachers': {
        'GET': 1,
        'POST': 3,
        'DELETE': 3,
        'PUT': 3,
    },
};
