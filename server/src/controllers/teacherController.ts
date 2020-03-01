import {Request,Response} from 'express';

import pool from '../database';

class TeacherController{

    public async listATeacher(req : Request,res : Response){

        const teacher =  await pool.query("select id, user_name,email,phone_number,name from teacher where id = " + req.params.id);

        if(teacher.length > 0 ){
            res.json( teacher)
        }else{
            res.status(404).json({text:"El profesor no existe"}); 
        }
    
    }


    public async listAllTeachers(req : Request,res : Response){

        res.json( await pool.query("select id, user_name,email,phone_number,name from teacher"));
       
    }


    public async createTeacher(req : Request,res : Response){
        //console.log(req.body); 
        await pool.query("insert into teacher set ?" , [req.body]); 
        res.json({text : "Profe añadido"}); 

    }

    public async deleteTeacher(req : Request,res : Response){
     
        await pool.query("delete from teacher where id= ?" , [req.params.id]);
        res.json({text: 'Profesor ' + req.params.id + " eliminado"});

    }  

    public async updateTeacher(req : Request,res : Response){
 
        await pool.query("update teacher set ? where id = ? " , [req.body , req.params.id] ); 
        res.json({text : "Profe con id: " +  req.params.id + " modificado"});
    }
}

const teacherController = new TeacherController();
export default teacherController; 