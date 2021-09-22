"use strict";
const { bookModel} = require("../models/Book.model");





const getBooksController = async (req, res) => {
  await  bookModel.find({}).then(data => {
        res.json(data);
    })
}

// const getbooksController= (req,res)=>{
//     let bookid = req.query.id
//     bookmodel.findOne({_id:bookid}).then(data=>{
//         res.json(data);
//     })  

// }


const createBookController = async (req, res) => {
    let createdData = req.body;
    let newBook = new bookModel({
        title: createdData.title,
        description: createdData.description,
        status: createdData.status,
        email: createdData.email,
    });
    try {
        newBook.save();
        let booksList = await bookModel.find({});
        res.json(booksList);
    } catch (error) {
        res.status(500).send(error);
    }


}

const deleteBookController = (req, res) => {
    let id = req.params.id;
    bookModel.findByIdAndDelete(id, async (err, data) => {
        if (err) {
            res.status(500).send("an error occured");
        }
        let booksList = await bookModel.find({});
        res.json(booksList);

    })
}

const updateBookController =async (req,res) =>{
    let id = req.params.id;
    let updatedBook = req.body;
    bookModel.findOne({_id:id}).then( book =>{
        
            book.title = updatedBook.title;
            book.description = updatedBook.description;
            book.status= updatedBook.status;
            book.email=updatedBook.email;
            book.save();
        });
        let updatedBooksList = await bookModel.find({});
            res.status(200).send(updatedBooksList);
    }






module.exports = {
    
    getBooksController,
    createBookController,
    deleteBookController,
    updateBookController
}