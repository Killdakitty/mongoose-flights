const express= require ('express');
const connectDB = require('./utils/connectDB');
require('dotenv').config();
const Flight= require('./models/Flight')

//*Variables
const app= express ();
const PORT=3000;


//*
app.get('flights', async(req,res)=>{
    const flightsfromDB = await Flight.find({});
    res.render('flights/Index',{
        flights:flightsfromDB
    })
})



//*Middleware 
app.use(express.urlencoded({extended:false}))
app.use(express.json())



/*
 *Routes 
 */

app.get ('/', (req,res)=>{
    res.send ('wording...')
})

//*===View Routes
/****
 ** Index - all flights
 */

 app.get('/flights',async(req,res)=>{
    try{
const flights=await Flight.find({});
res.send(flights)
    }
    catch(e){
console.log(e);
    }
 })


 /***
  * *Show- a single Flight
  */
 app.get('/flights/:id', async(req,res)=>{
    const {id}= req.params
    try{
        const flight=await Flight.findById(id);
        res.send(flight)
    }catch(e){
        console.log(e);
    }

 })


 //*=====API Routes
 /***
  * *Create POST
  *  
  * */ 
app.post('/flights', async(req,res)=>{
    const createdFlight= await Flight.create(req.body)
    res.send(createdFlight)
})


/*****
 * *Update
 */
app.put('/flights/:id', async(req,res)=>{
    const{id}= req.params;
    try{
        const updatedFlight=await Flight.findByIdAndUpdate(id, req.body, 
            {new:true,})
            res.send(updatedFlight)
    }   catch(e){
        console.log(e);
    }

})

/**
 * *Delete
 */
app.delete('/flights/:id', async (req,res)=>{
    const{id}= req.params;
    try{
        const deletedFlight=await Flight.findByIdAndDelete(id)
        res.send(deletedFlight)
    }catch(e){
        console.log(e);
    }
})







connectDB()
app.listen(PORT, ()=>{console.log(`server is working on ${PORT}`);})

