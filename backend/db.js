const mongoose = require('mongoose');

// const uri = "mongodb://localhost:27017/mnbazaar";
const uri = "mongodb+srv://<username>:<password>@mycloudmongodb.bgzmpaa.mongodb.net/mnbazaar?retryWrites=true&w=majority&appName=myCloudMongoDB";


const createConnection = async () => {
    try {
        await mongoose.connect(uri);
        /* console.log("Connection Successful"); */
    } catch (err) {
        /* console.error("Error connecting to MongoDB\n", err.message); */
        process.exit(0);
    }
};
const closeConnection = async () => {
    try {
        await mongoose.connection.close();
        /* console.log("Connection close successfully"); */
    } catch (err) {
        /* console.log("Error closing connection\n", err.message); */
    }
};


module.exports = { createConnection, closeConnection };
