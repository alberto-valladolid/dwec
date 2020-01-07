import {Request,Response} from 'express';

class IndexController{

    public index(req : Request,res : Response){
        //res.send('hola mundo'); 
        res.json({text: 'bienvenido a mi servidor api'});   
    }

}

export const indexController = new IndexController();