const express = require('express')
const app = express()

const routes = require('./routes/index')
const bodyParser = require('body-parser');
const methodOverride = require('method-override')


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('_method'))


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs')
app.use('/', routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})