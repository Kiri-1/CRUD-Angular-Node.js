const mongoose = require('mongoose');

const conectarDB = async () => {

    try {
        await mongoose.connect(process.env.DB_MONGO, {
        })
        console.log('BD Conectada');

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
exports.conectarDB = conectarDB;
