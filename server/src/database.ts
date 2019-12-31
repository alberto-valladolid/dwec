import mysql from 'promise-mysql';

import database_properties from './database_properties'; 

const pool = mysql.createPool(database_properties.database);

pool.getConnection()
    .then(connection =>{
        pool.releaseConnection(connection)
        console.log("conexion iniciada");
    })

export default pool; 