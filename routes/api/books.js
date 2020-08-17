const axios = require("axios");
const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// for searching google books API
// matches with URL route '/api/books/search' 
router.get("/search", (req, res) => {
  // console.log(req.query);
  axios
    .get("https://www.googleapis.com/books/v1/volumes/?q=" + req.query.q)
    .then(({ data: { items } }) => {
      const bookObjects = items.map(item => ({
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors.join(", "),
        description: item.volumeInfo.description,
        image: item.volumeInfo.imageLinks.thumbnail,
        link: item.volumeInfo.previewLink,
      }));
      return res.json(bookObjects)
    })
    .catch(err => res.status(422).json(err));
  });
  module.exports = router;

// matches with /api/books
router
  .route("/")
  .get(booksController.findAll) // retrieve all saved books
  .post(booksController.create); // save a book

// matches with /api/books/:id
router
  .route("/:id")
  .delete(booksController.remove); // delete a book

module.exports = router;