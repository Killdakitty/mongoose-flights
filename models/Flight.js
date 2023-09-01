const mongoose = require('mongoose')
const flightSchema= new mongoose.Schema({

    airline:{
        type:String,
        required: false,
        enum : ['American','Southwest','United']
        
    },
    flightNo:{
        type: Number,
            min: 10 ,
            max: 9999,
            required: true
        
    
        
        
    },
    departs:{
        type: Date,
        required: false, 
        default:  Date.now() + 365*24*60*60000



    }

})

const Flight = mongoose.model('Flight', flightSchema)
module.exports=Flight