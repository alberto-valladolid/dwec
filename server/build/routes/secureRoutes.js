"use strict";
//const fs = require('fs');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    //1 min student , 2 min teacher, 3 min admin
    '/api/auth/login': {
        'post': { 'lvl': 1 },
    },
    '/api/auth/me': {
        'post': { 'lvl': 1 },
    },
    '/api/teachers/': {
        'get': { 'lvl': 1 },
        'post': { 'lvl': 3 },
        'delete': { 'lvl': 3 },
        'put': { 'lvl': 3 },
    },
};
