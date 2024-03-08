const { default: mongoose } = require("mongoose")
require("dotenv").config();

const dbConnect = async () => {
    try{
        const connection = mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDb Successfully");
    }
    catch(err){
        console.log(err);
    }
}

module.exports = dbConnect;