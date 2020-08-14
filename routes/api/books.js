const axios = require("axios");
const router = require("express").Router();

// matches with URL route '/api/books/search' 
router.get("/search", (req, res) => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=<Book Name>", { params: req.query })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });
  module.exports = router;

