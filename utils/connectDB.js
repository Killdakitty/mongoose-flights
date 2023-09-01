const mongoose = require ('mongoose');
module.exports= function connectDB(){
    //connecting to mongoDB
    mongoose.connect(process.env.MONGO_URI)


//check for connection
const db=mongoose.connection

db.on('error', (e)=>console.log(e));
db.on('open', ()=>console.log('connected to MongoDB'));
db.on('closed', ()=>console.log('MongoDB disconnected'))



}