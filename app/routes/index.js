const epxress = require('express')
const router = epxress.Router()
const fs = require('fs')

const pathRouter = `${__dirname}`

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}


fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file)
    const skip = ['index'].includes(fileWithOutExt)
    if (!skip){//cargue de rutas dinamicas
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`)) //TODO: localhost/users
        console.log('CARGAR RUTA --->', fileWithOutExt)//englobacion parte padre 
    }
})

router.get('*', (req, res) => {
    res.status(404)
    res.send({error: 'Not found'})
})

module.exports = router

