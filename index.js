// Ejemplo de activación de HOT RELOAD
// npm i -D nodemon
// agregar a package.json 


import express from 'express';
import generalRoutes from './routes/generalRoutes.js';
import userRoutes from './routes/userRoutes.js';
const app = express(); 

// Habilitar Pug
app.set('view engine','pug')
app.set('views','./views')

// Definir la carpeta pública de recursos estáticos (assets)

app.use(express.static('public'))

// COnfiguramos nuestro servidor web
const port = 3000;
app.listen(port, ()=>{
    console.log(`La aplicación ha iniciado en el puerto: ${port}`);
});

// Routing - Enrutamiento para peticiones
app.use('/',generalRoutes);
app.use('/usuario',userRoutes);

// 