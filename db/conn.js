const { MongoClient } = require('mongodb')
const uri = "mongodb://localhost:27017/Ecommerce"
const client = new MongoClient(uri);
const mongoDB = () => {
    try {
        const database = client.db('Ecommerce');
        console.log("DB Connected");

    } catch (error) {
        console.log("Error :-", error);

    }
}

module.exports = { mongoDB }