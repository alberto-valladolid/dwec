"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teacherController_1 = __importDefault(require("../controllers/teacherController"));
class TeacherRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', teacherController_1.default.listATeacher);
        this.router.get('/', teacherController_1.default.listAllTeachers);
        this.router.post('/', teacherController_1.default.createTeacher);
        this.router.delete('/:id', teacherController_1.default.deleteTeacher);
        this.router.put('/:id', teacherController_1.default.updateTeacher);
    }
}
const teacherRoutes = new TeacherRoutes();
exports.default = teacherRoutes.router;
