//example call is https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

import axios from "axios";

const apiUrl="https://www.googleapis.com/books/v1/volumes?q="

const apiKey = "&key=AIzaSyA_D9JD2qF_pKJOdQRYHViM85vK-X3h85s"

export default {

    search: function(title){
        return axios.get(apiUrl + title + apiKey)
    }
};
