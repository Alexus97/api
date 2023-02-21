const mongoose = require('mongoose') //crea la conexion con la base de datos.

const dbConnect = () => {//funcion connect
    const DB_URI = process.env.DB_URI//declaramos const para  llamar la variable de entorno que contiene la conexion a la bdt.
    mongoose.connect(DB_URI,{//le indicamos al mongo que se conecte a la DB_URI
        useNewUrlParser: true,//y pasar la tipologia y haga uso del parceo
        useUnifiedTopology: true//esto es la configuracion basica para conectarnos con la bdt.
    }, (err, res) => {
        if (!err) {//si no tiene un error
            console.log('**** CONEXION CORRECTA ****')
        } else {//si tiene error 
            console.log('**** ERROR DE CONEXION ****')
        }
    })
}

module.exports = { dbConnect }