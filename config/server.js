// importar modulos
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

// iniciar express
const app = express()

// setar variáveis view e view engines
app.set('view engine', 'ejs')
app.set('views', './app/views')

// middlewares express.static
app.use(express.static('./app/public'))

// middlewares bodyParser
app.use(bodyParser.urlencoded({extended: true}))

// middlewares express-validator
app.use(expressValidator())

//cwd: process.cwd() para heroku encontrar o caminho da app
consign()
    .include({cwd: process.cwd()+'/app/routes'})
    .then({cwd: process.cwd()+'/app/models'})
    .then({cwd: process.cwd()+'/app/controllers'})
    .into(app)

// exportar app
module.exports = app