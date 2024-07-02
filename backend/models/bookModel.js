const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
    },
    //default value for timestamp is false. gives access to created and modified dates
    {
        timestamps: true
    }
)
const Book = model('Book', bookSchema);
module.exports = Book;
