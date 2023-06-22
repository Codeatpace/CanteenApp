const mongoose = require('mongoose')

const dotenv = require('dotenv')

dotenv.config({path:'./Info.env'})

const mongoURI = process.env.DB

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log('connected to MongoDB Atlas');
        const collection = mongoose.connection.db.collection('food_items');
        const data = await collection.find().toArray();
        const cat = mongoose.connection.db.collection('foodCategory');
        const catData = await cat.find().toArray();
        global.food_items = data; 
        //console.log(data);
        global.foodCategory = catData; 
        //console.log(catData);
        //mongoose.connection.close();
    } catch (err) {
        console.log('error connecting to MongoDB Atlas:', err);
    }
};


module.exports = mongoDB();