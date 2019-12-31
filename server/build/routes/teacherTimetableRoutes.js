"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teacherTimetableController_1 = __importDefault(require("../controllers/teacherTimetableController"));
class TeacherTimetableRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', teacherTimetableController_1.default.index);
        this.router.post('/', teacherTimetableController_1.default.createTimetable);
        this.router.delete('/:id', teacherTimetableController_1.default.deleteTimetable);
        this.router.put('/:id', teacherTimetableController_1.default.updateTimetable);
    }
}
const teacherTimetableRoutes = new TeacherTimetableRoutes();
exports.default = teacherTimetableRoutes.router;
