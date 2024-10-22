// Ejemplo de activación de HOT RELOAD
//console.log("Hola desde NodeJS, esto esta en hot reload")
// because type:module, this not: const express = require('express'); // Importar la libreria para crear un servidor web - CommonJS
// Instanciar nuestra aplicación
const app = express(); 
/* if type:module then
*/
import express from 'express';

const port = 3000;

app.listen(port, ()=>{
    console.log(`La aplicación ha iniciado en el puerto: ${port}`);
});

// Routing - Enrutamiento para peticiones

app.get("/", function(req,res){
    res.send("Hola desde el web en NodeJS")
})

app.get("/quieneres", function(req,res){
    res.json(
        {
            "nombre":"Jesús Domínguez Ramírez",
            "carrera":"TI DSM",
            "grado":"4°",
            "grupo":"A"
        }
    )
});

// 