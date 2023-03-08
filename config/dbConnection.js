const mongoose = require('mongoose');

const connectDb= async () => {
    try{
        console.log(process.env.CONNECTION_STRING)
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`Database connected:\n${connect.connection.host}\n${connect.connection.name}`)
    }
    catch (err){ 
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDb;