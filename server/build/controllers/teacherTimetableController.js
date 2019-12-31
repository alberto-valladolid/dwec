"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class TeacherTimetableController {
    list(req, res) {
        database_1.default.query("DESCRIBE teacher");
        res.json({ text: 'Listando horarios del user' + req.params.userId });
    }
    createTimetable(req, res) {
        res.json({ text: 'Creando nuevo horario' });
    }
    deleteTimetable(req, res) {
        res.json({ text: 'Eliminando horario el horario: ' + req.params.id });
    }
    updateTimetable(req, res) {
        res.json({ text: 'actualizando horario ' + req.params.id });
    }
}
const teacherTimetableController = new TeacherTimetableController();
exports.default = teacherTimetableController;
