import {Router} from 'express';

import teacherTimetableController from '../controllers/teacherTimetableController'; 


class TeacherTimetableRoutes {
    public router : Router = Router(); 
    
    constructor(){
        this.config();  
    }

    config():void{
        this.router.get('/', teacherTimetableController.index  ) ;  
        this.router.post('/', teacherTimetableController.createTimetable);
        this.router.delete('/:id', teacherTimetableController.deleteTimetable); 
        this.router.put('/:id', teacherTimetableController.updateTimetable); 
    }
}

const teacherTimetableRoutes = new TeacherTimetableRoutes(); 
export default teacherTimetableRoutes.router; 