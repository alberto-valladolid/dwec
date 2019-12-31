import {Request,Response} from 'express';

class IndexController{

    public index(req : Request,res : Response){
        //res.send('Hello indexController'); 
        res.json({text: 'Visita /api/horarios'});   
    }

}

export const indexController = new IndexController();