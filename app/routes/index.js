const express = require('express')
const router = express.Router()
const fs = require('fs')

const pathRouter = `${__dirname}`

fs.readdirSync(pathRouter).filter((file) => {
    console.log('--->', file)
})