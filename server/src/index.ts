import express, {Application} from 'express'; 
import morgan from 'morgan'; 
import cors from 'cors';  


import indexRoutes from './routes/indexRoutes'; 
import teacherTimetableRoutes from './routes/teacherRoutes'; 
import authRoutes from './routes/authRoutes'; 

class Server {
    public app : Application; 
    constructor(){
        this.app = express(); 
        this.config(); 
        this.routes(); 
    }

    config():void{

        //permite automatizar el servidor
        if(typeof process.env.PORT == 'undefined' ){
            this.app.set('port',  3000); 
        }  
        else{
            this.app.set('port',   process.env.PORT); 
        }

        this.app.use(morgan("dev")); //permite  ver los logs de las peticiones api (post, get, put etc) que recibe esta clase. 
        this.app.use(cors()); //para manejar las cabeceras de las peticiones
        this.app.use(express.json()); //para recibir objetos json de las peticiones cliente
        this.app.use(express.urlencoded({extended:false})); 

    } 

    
    routes():void{
        this.app.use("/",indexRoutes); 
        this.app.use("/api/teachers", teacherTimetableRoutes); 
        this.app.use("/api/auth", authRoutes); 
        
    } 

    start():void{

        this.app.listen(this.app.get('port'), () =>{
            console.log ('Server iniciado en el puerto '  + this.app.get('port')); 
        }); 

    }

}


const server = new Server(); 
server.start(); 