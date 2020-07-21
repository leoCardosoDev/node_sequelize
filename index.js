const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const Sequelize = require('sequelize')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(methodOverride('_method'))

const sequelize = new Sequelize('sequelize', 'root', '12345678', {
  host: "localhost",
  dialect: "mysql"
})
sequelize.authenticate()
         .then( () => console.log('OK'))
         .catch( () => console.error('Error'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src/view'))

require('./src/index')(app)

app.listen(3000, () => {
  console.log('Express has been ignite')
})
