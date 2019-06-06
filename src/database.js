const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ejemploCRUD', {useNewUrlParser: true})
        .then(db=>console.log('DB connected'))
        .catch(e=>console.error(e))