import express, {Application} from 'express'; 

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

    } 

    start():void{

        this.app.listen(this.app.get('port'), () =>{
            console.log ('Server iniciado en el puerto '  + this.app.get('port')); 
        }); 

    }

}


const server = new Server(); 
server.start(); 