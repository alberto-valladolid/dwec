import {Router} from 'express';

import teacherController from '../controllers/teacherController'; 


class TeacherRoutes {
    public router : Router = Router(); 
    
    constructor(){
        this.config();  
    }

    config():void{
        this.router.get('/:id', teacherController.listATeacher  ) ;  
        this.router.get('/', teacherController.listAllTeachers  ) ;  
        this.router.post('/', teacherController.createTeacher);
        this.router.delete('/:id', teacherController.deleteTeacher); 
        this.router.put('/:id', teacherController.updateTeacher); 
    }
}

const teacherRoutes = new TeacherRoutes(); 
export default teacherRoutes.router; 