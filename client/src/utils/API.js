import axios from "axios";

export default {
    // Should return all saved books as JSON
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Will be used to get details about a book from the database with the given id
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    searchBooks: function(bookSearch) {
        return axios.get('/api/books/search?q=' + bookSearch)
    },
    // Will be used to save a new book
    addBook: function() {
      return axios.post("/api/books");
    },
    // Will be used to delete a book from the database by Mongo `_id`
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
};