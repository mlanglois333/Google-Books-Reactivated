//example call is https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

import axios from "axios";

const apiUrl="https://www.googleapis.com/books/v1/volumes?q="

const apiKey = "&key=AIzaSyA_D9JD2qF_pKJOdQRYHViM85vK-X3h85s"

export default {

    search: function(title){
        return axios.get(apiUrl + title + apiKey)
    },

    getBooks: function(){
        return axios.get("/api/books");
    },
    saveBook: function(bookData){
        return axios.post("/api/books", bookData);
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};
