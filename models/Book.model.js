"use strict";
const mongoose = require("mongoose");
// id (Auto generated)
// title
// description
//status
//email

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String
});

const bookModel = mongoose.model('books',bookSchema);

let seedBook=()=>{
    let bookOne=new bookModel({
        title:"Antiques Roadkill: A Trash 'n' Treasures Mystery",
        description:"Determined to make a new start in her quaint hometown on the banks of the Mississippi, Brandy Borne never dreams she'll become the prime suspect in a murder case. . . ",
        status:"Available",
        email:"bookOne@example.com"
    });
   

    let bookTwo=new bookModel({
        title:"A Crown of Swords: Book Seven of 'The Wheel of Time'",
        description:"The Wheel of Time Â® is a PBS Great American Read Selection! Now in development for TV! Since its debut in 1990, The Wheel of TimeÂ® by Robert Jordan has captivated ",
        status:"Available",
        email:"bookTwo@example.com"
    });

    let bookThree=new bookModel({
        title:"Kingdom Of Strangers",
        description:"a book authered by Rob Greene and it talks about political stuIbrahim Al-Brehm is a respectable husband a police inspector on Jeddah's murder squad. But for the past year, he has been having an affair with a woman named Maria. One day though, she disappears.Terrified and with nowhere else to turn, Ibrahim goes to Katya, one of the few women on the force. As she ventures into Saudi Arabia's underworld, she uncovers a murder which connects Maria to a human trafficking ring. Soon Ibrahim realises that the killer is closer to home than he had ever imagined.Kingdom of Strangers is a suspenseful story of murder and deception among Saudi Arabia's shaded alleys, gleaming compounds and vast lonely deserts.",
        status:"Sold out",
        email:"bookThree@example.com"
    });

    bookOne.save();
    bookTwo.save();
    bookThree.save();
}

module.exports={
    bookSchema,
    seedBook,
    bookModel
}