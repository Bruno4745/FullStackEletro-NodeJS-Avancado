const mongoose = require('mongoose');

function connect() {
    mongoose.
        connect('mongodb://localhost/fullstackeletro', { useNewUrlParser: true, useUnifiedTopology: true }).
        then(() => {
            console.log("Conectado com MongoDB");
        }).catch((error) => {
            console.log(`Erro ${error}`);
        })
}

module.exports = connect();