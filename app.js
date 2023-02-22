require('dotenv').config() //inicializamos paquete dotenv
const epxress = require('express') //colocamos librerias
const cors = require('cors')
const app= epxress() //creamos variable
const {dbConnect} = require('./config/mongo')//funcion que hace la conexion de mi bdt.

const PORT = process.env.PORT || 3000 //declaramos puerto
app.use(cors())//se hace uso de cors
app.use(epxress.json())

app.use('/api/1.0', require('./app/routes'))

dbConnect()
app.listen(PORT, () => { //escucha o inicializa mi api
    console.log('API lista por el puerto', PORT)
})