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
class TeacherController {
    listATeacher(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const teacher = yield database_1.default.query("select id, user_name,email,phone_number,name from teacher where id = " + req.params.id);
            if (teacher.length > 0) {
                res.json(teacher);
            }
            else {
                res.status(404).json({ text: "El profesor no existe" });
            }
        });
    }
    listAllTeachers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield database_1.default.query("select id, user_name,email,phone_number,name from teacher"));
        });
    }
    createTeacher(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body); 
            yield database_1.default.query("insert into teacher set ?", [req.body]);
            res.json({ text: "Profe añadido" });
        });
    }
    deleteTeacher(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("asdf");
            // await pool.query("delete from teacher where id= ?" , [req.params.id]);
            // res.json({text: 'Profesor ' + req.params.id + " eliminado"});
        });
    }
    updateTeacher(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("update teacher set ? where id = ? ", [req.body, req.params.id]);
            res.json({ text: "Profe con id: " + req.params.id + " modificado" });
        });
    }
}
const teacherController = new TeacherController();
exports.default = teacherController;
