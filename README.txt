Aplicación creada por Alberto Ibáñez Gamarra. 

Este repositorio contiene el código de un servidor api securizado que actúa de backend en el proyecto final de la asginatura DWEC (Desarrollo web en entorno cliente). 

Módulos / dependencias usados: 

    -typescript: lenguaje que añade tipos estáticos y objetos basados en clases. Facilita el desarrollo de aplicaciones de gran envergadura. Su compilador convierte el código typescript en código javascript original ejecutable por el servidor. 
    -@types/cors":  permite al visual studio code comprender el código de cors, autocompletar y  que no muestre error
    -@types/morgan:  permite al visual studio code comprender el código de morgan, autocompletar y  que no muestre error   
    -cors: // facilita la comunicacion entre varios servidores, en mi aplicacion tendré el servidor principal con angular que mandará peticiones a otro servidor, en otro puerto, que denominaré "servidor API"
    "express": "^4.17.1", //módulo, framework o marco de aplicacion que facilita la creación de aplicaciones de node.js evitando tener que configurar muchas cosas de forma manual
    "morgan": "^1.9.1", //módulo que nos permite mostrar las peticiones que reciben los servidores por parte de los clientes. 
    "promise-mysql": "^4.1.1" evita los callbacks que ensucian el código con la dependencia mysql y basa la peticiones con promesas.  
