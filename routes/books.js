var express = require("express");
var router = express.Router();
var Book = require("../models/book");

/* GET books listing. */
router.get("/", function(req, res) {
  Book.find({})
    .then(books => res.json(books))
    .catch(err => res.json(err));
  // res.json({ message: "xxx respond with all books" });
});
router.get("/:id", function(req, res) {
  Book.findById({ _id: req.params.id })
    .then(book => res.json(book))
    .catch(err => res.json(err));
});

router.post("/", function(req, res) {
  res.json({ message: `create new book using data from ${req.body}` });
});

router.put("/:id", function(req, res) {
  res.json({ message: `update book with id ${req.params.id}` });
});

router.delete("/:id", function(req, res) {
  res.json({ message: `delete book with id ${req.params.id}` });
});

module.exports = router;
