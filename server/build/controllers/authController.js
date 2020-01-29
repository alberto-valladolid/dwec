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
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');
class AuthController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const JWT_Secret = 'your_secret_key';
            var testUser = { username: 'asdf', password: 'asdf' };
            if (req.body) {
                //console.log("select count(*) from teacher where user_name = '" + req.body.username + "' and pw = '" + req.body.password+ "'" ); 
                var user = req.body;
                var accountType = "";
                const resultFromTeachersTable = yield database_1.default.query("select count(*) as count from teacher where user_name = '" + req.body.username + "' and pw = '" + req.body.password + "'");
                const resultFromStudentsTable = yield database_1.default.query("select count(*) as count from student where user_name = '" + req.body.username + "' and pw = '" + req.body.password + "'");
                const resultFromAdminsTable = yield database_1.default.query("select count(*) as count from admin where user_name = '" + req.body.username + "' and pw = '" + req.body.password + "'");
                //console.log(resultFromAdminsTable[0].count); 
                if (resultFromTeachersTable[0].count == 1) {
                    accountType = "teacher";
                }
                else if (resultFromStudentsTable[0].count == 1) {
                    accountType = "student";
                }
                else if (resultFromAdminsTable[0].count == 1) {
                    accountType = "admin";
                }
                if (accountType == "teacher" || accountType == "student" || accountType == "admin") {
                    var token = jwt.sign(user, JWT_Secret);
                    res.status(200).send({
                        signed_user: user,
                        token: token
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
}
const authController = new AuthController();
exports.default = authController;
