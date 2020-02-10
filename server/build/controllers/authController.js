"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const config_1 = __importDefault(require("../config"));
// const cors = require('cors');
// const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
// const express = require('express');
class AuthController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //var testUser = { username: 'asdf', password: 'asdf'};
            if (req.body) {
                //console.log("select count(*) from teacher where user_name = '" + req.body.username + "' and pw = '" + req.body.password+ "'" ); 
                var user = req.body;
                var accountType = 0;
                const resultFromTeachersTable = yield database_1.default.query("select count(*) as count from teacher where user_name = '" + req.body.username + "' and pw = '" + req.body.password + "'");
                const resultFromStudentsTable = yield database_1.default.query("select count(*) as count from student where user_name = '" + req.body.username + "' and pw = '" + req.body.password + "'");
                const resultFromAdminsTable = yield database_1.default.query("select count(*) as count from admin where user_name = '" + req.body.username + "' and pw = '" + req.body.password + "'");
                //console.log(resultFromAdminsTable[0].count); 
                if (resultFromTeachersTable[0].count == 1) {
                    accountType = 2;
                }
                else if (resultFromStudentsTable[0].count == 1) {
                    accountType = 1;
                }
                else if (resultFromAdminsTable[0].count == 1) {
                    accountType = 3;
                }
                if (accountType == 1 || accountType == 2 || accountType == 3) {
                    var token = jwt.sign({ id: user.username, accountType: accountType, id2: user.username }, config_1.default.jwtKey, {
                        expiresIn: 86400 // expires in 24 hours
                    });
                    //var token = jwt.sign(user, JWT_Secret);
                    res.status(200).send({
                        //signed_user: user,
                        token: token,
                        accType: accountType
                    });
                }
                else {
                    res.status(403).send({
                        errorMessage: 'Authorisation required!'
                    });
                }
            }
            else {
                res.status(403).send({
                    errorMessage: 'Please provide email and password'
                });
            }
            //res.json( await pool.query("select * from teacher") + "funciona");
        });
    }
    //delete in the future this method
    me(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.headers.authorization?.substr(6)); 
            var token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.substr(6);
            if (!token)
                return res.status(401).send({ auth: false, message: 'No token provided.' });
            jwt.verify(token, config_1.default.jwtKey, function (err, decoded) {
                if (err)
                    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
                res.status(200).send(decoded.accountType);
            });
        });
    }
}
const authController = new AuthController();
exports.default = authController;
