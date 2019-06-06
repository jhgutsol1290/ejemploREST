const express = require('express')
const routes = require('./routes/index')

const app = express()
require('./database')

app.set('port', process.env.PORT || 3000)

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(routes)

app.listen(app.get('port'), (req, res)=>{
    console.log('Server on port 3000')
})