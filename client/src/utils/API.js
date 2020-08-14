import axios from "axios";

export default {
    // Should return all saved books as JSON
    getPosts: function() {
        return axios.get("/api/books");
    },
    // Will be used to save a new book to the database with the given id
    getPost: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Will be used to delete a book from the database by Mongo `_id`
    deletePost: function(id) {
        return axios.delete("/api/books/:id" + id);
    }
};