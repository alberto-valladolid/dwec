import express, {Application} from 'express'; 
import indexRoutes from './routes/indexRoutes'; 


class Server {
    public app : Application; 
    private port; 
    constructor(){
        this.app = express(); 
        this.config(); 
        this.routes(); 
    }

    config():void{
        if(typeof process.env.PORT == 'undefined' ){
            this.app.set('port',  3000); 
        }  
        else{
            this.app.set('port',   process.env.PORT); 
        }
    }

    routes():void{
        this.app.use("/",indexRoutes); 
        
    } 

    start():void{

        this.app.listen(this.app.get('port'), () =>{
            console.log ('Server iniciado en el puerto '  + this.app.get('port')); 
        }); 

    }

}


const server = new Server(); 
server.start(); 