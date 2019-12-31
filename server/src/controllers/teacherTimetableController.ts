import {Request,Response} from 'express';

import pool from '../database';

class TeacherTimetableController{

    public index(req : Request,res : Response){

        pool.query("DESCRIBE teacher");
        res.json({text:'metodo index the timetableControler'});

    }

    public createTimetable(req : Request,res : Response){

        res.json({text: 'Creando nuevo horario'});

    }

    public deleteTimetable(req : Request,res : Response){

        res.json({text: 'Eliminando horario el horario: ' + req.params.id});

    }  

    public updateTimetable(req : Request,res : Response){

        res.json({text: 'actualizando horario ' + req.params.id});

    }
}

const teacherTimetableController = new TeacherTimetableController();
export default teacherTimetableController; 