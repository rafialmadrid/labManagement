import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {

    return axios.delete("/api/books/" + id);

  },
  // Saves a book to the database
  saveBook: function(bookData) {

    return axios.post("/api/books", bookData);

  },
  

  getOrders: function() {

    return axios.get("/api/orders");

  },


  getOrder: function(id) {
    return axios.get("/api/orders/" + id);
  },


  updateResults: function(resultsData) {

    return axios.put("/api/results", resultsData);

  },


  createPatientAndOrder: function(createData) {

    return axios.post("/api/controller/patientorder", createData);
  },

  getTestCatalogue: function (code) {

    return axios.get("/api/testCatalogue/" + code);

  }

};
