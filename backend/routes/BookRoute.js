const express= require("express");

const {
  handleGetAllBooks,
  handleAddBook,
  handleGetABookById,
  handleUpdateBookById,
  handleDeleteBookById,
} = require("../controllers/book.js");

const router = express.Router();

//saving new book into database
router.post("/", handleAddBook);

//route for fetching all books
router.get("/", handleGetAllBooks);

//route for fetching one book
//tis is a query request (one with ?)
router.get("/one", handleGetABookById);

//update book
router.put("/:id", handleUpdateBookById);

//delete a book
router.delete("/:id", handleDeleteBookById);

module.exports = router;
