//const fs = require('fs');

export  default {

  //1 min student , 2 min teacher, 3 min admin
        
        '/api/auth/login' : 
        {
            'POST' : { 'lvl' : 1 } , 
        } , 

        '/api/auth/me' : 
        {
            'POST' : { 'lvl' : 1 } , 
        } , 

        '/api/teachers'  : 
        {
            'GET' : { 'lvl' : 1 } , 
            'POST' : { 'lvl' : 3 } , 
            'DELETE' : { 'lvl' : 3 } , 
            'PUT' : { 'lvl' : 3 } , 
        } , 
    
  

}