const mongoose = require('mongoose');

const conectarDB = async () => {

    try {
        await mongoose.connect('mongodb://localhost/crud-mean', {
        })
        console.log('BD Conectada');

    } catch(error){
            console.log(error);
            process.exit(1);
        }
};
exports.conectarDB = conectarDB;
