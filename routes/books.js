var express = require("express");
var router = express.Router();
var Book = require("../models/model_book");

/* GET books listing. */
router.get("/", async function(req, res, next) {
  res.json({ message: "Here are the list of books" });
  const book = await Book.find({});
  try {
    res.json(book);
  } catch (error) {
    res.json(error);
    next(error);
  }
  // Book.find({})
  //   .then(books => res.json(books))
  //   .catch(err => res.json(err));
});
router.get("/:id", async function(req, res, next) {
  const book = await Book.findById({ _id: req.params.id });
  try {
    res.json(book);
  } catch (err) {
    // res.json(err);    => dangerous?
    next(error);
  }
  // .then(book => res.json(book))
  // .catch(err => res.json(err));
});

router.post("/", async function(req, res, next) {
  res.json({ message: `create new book using data from ${req.body}` });
  try {
    const newBook = req.body.title;
    const savedNewBook = await newBook.save();
    res.status(200);
    res.send(`${newBook} is saved`);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async function(req, res, next) {
  res.json({ message: `update book with id ${req.params.id}` });
  try {
    const bookToBeUpdated = await Book.findByIdAndUpdate(
      { _id: req.params.id },
      { title: req.body.title },
      { new: true }
    );
    res.status(200);
    res.json(bookToBeUpdated);
  } catch (err) {
    res.json(err);
  }
});

router.delete("/:id", async function(req, res, next) {
  res.json({ message: `delete book with id ${req.params.id}` });
  try {
    const deletedBook = await Book.findByIdAndRemove(
      { _id: req.params.id },
      { rawResult: true }
    );
    res.status(200);
    res.json(`id: ${req.params.id} has been deleted`);
  } catch (error) {
    res.json(`id: ${req.params.id} has NOT been deleted`);
    next(error);
  }
});

module.exports = router;
