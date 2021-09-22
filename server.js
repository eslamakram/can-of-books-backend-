"use strict";

const express = require('express') 
const app = express() 
const cors = require('cors');
app.use(cors()); 
require('dotenv').config();
const mongoose =require("mongoose"); 


app.use(express.json())  
const PORT =process.env.PORT;
const MONGO_SERVER=process.env.MONGO_SERVER;
// const {seedBook} = require('./models/Book.model');
const {  getBooksController ,
         createBookController , 
         deleteBookController,
         updateBookController}=require("./controllers/book.controller");



//  mongoose.connect(`${MONGO_SERVER}`,{useNewUrlParser: true, useUnifiedTopology: true});


mongoose.connect(`${MONGO_SERVER}`,{useNewUrlParser: true, useUnifiedTopology: true});




//---------------initial data ----------------------------------------------------------------------
// create collections once we insert or created objects in books collection we commeted it 
// app.get('/seed-data',  (req,res)=>{
//   seedBook();
//   res.json({
//     'message': 'book objects Created Successfully'
//   })}
// );
//---------------initial data ----------------------------------------------------------------------


// // get data 
 app.get('/get-books', getBooksController);

// //create element
app.post('/create-book',createBookController);

// // delete element 
app.delete('/delete-book/:id',deleteBookController);

// // update element 
app.put('/update-book/:id', updateBookController)

// a server endpoint 
app.get('/', // our endpoint name
 (req, res) => { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})
 
app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}   `);
    mongoose.connect(`${MONGO_SERVER}`,{useNewUrlParser: true, useUnifiedTopology: true});

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    console.log("connected to db")
    }); 


}) // kick start the express server to work









