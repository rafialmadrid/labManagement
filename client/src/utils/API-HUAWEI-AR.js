import axios from "axios";

export default {  


  addDepartment: function ( data ) {
    return axios.post("/api/departments", data);
  },

  getDepartments: function (data) {
    var _id = data._id;
    var code = data.code;
    var name = data.name;
    return axios.get(`/api/departments/?code=${code}&name=${name}&id=${_id}`);
  },

  updateDepartment: function ( data ) { 
    var _id = data.department._id;
    var code = data.department.code;
    var name = data.department.name;
    return axios.put(`/api/departments/?code=${code}&name=${name}&_id=${_id}`);
  },



  addArea: function ( data ) {
    return axios.post("/api/areas", data);
  },

  getAreas: function ( data ) {
    var _id = data._id;
    var code = data.code;
    var name = data.name;
    return axios.get(`/api/areas/?code=${code}&name=${name}&id=${_id}`);
  },

  updateArea: function ( data ) { 
    var _id = data.area._id;
    var code = data.area.code;
    var name = data.area.name;
    var department = data.area.department
    return axios.put(`/api/areas/?code=${code}&name=${name}&_id=${_id}&department=${department}`);
  },



  addParameter: function ( data ) {
    return axios.post("/api/parameters", data);
  },

  getParameters: function( data ) {
    var _id = data._id;
    var code = data.code;
    var name = data.name;
    return axios.get(`/api/parameters/?code=${code}&name=${name}&id=${_id}`);
  },

  updateParameter: function ( data ) { 
    console.log(data)
    var _id = data.parameter._id;
    var code = data.parameter.code;
    var name = data.parameter.name;
    var area = data.parameter.area;
    var current = [];
    var previous = [];
    if(data.valueTypes){
      data.valueTypes.forEach(element => {
        if(element._id) {
          previous.push(element)
        }else{
          current.push(element);
        }
      })

    current = JSON.stringify(current);
    previous = JSON.stringify(previous);
    }


    return axios.put(`/api/parameters/?code=${code}&name=${name}&_id=${_id}&area=${area}&current=${current}&previous=${previous}`);
  },



  getValueTypes: function ( data ) {
    return axios.get(`/api/valueTypes`);    
  },

  updateValueTypes: function (data ) {
    var _id = data.valueTypes._id;
    return axios.put(`/api/valueTypes/?`)
  },


  getTestCatalogue: function (data) {
    var _id = data._id;
    var code = data.code;
    var name = data.name;
    return axios.get(`/api/testCatalogue/?code=${code}&name=${name}&id=${_id}`);
  },



  getPatients: function () {
    return axios.get("/api/patients");
  },

  getPatient: function (data) {
    var firstName = data.firstName;
    var lastName = data.lastName;
    var _id = data._id;
    return axios.get(`/api/patients/patient/?firstName=${firstName}&lastName=${lastName}&id=${_id}`);
  },



  getOrders: function(values) {
    return axios.get("/api/orders");
  },

  getOrder: function(id) {
    return axios.get("/api/orders/" + id);
  },





  updateResults: function(resultsData) {
    return axios.put("/api/results", resultsData);
  },

  createPatientAndOrder: function(createData) {
    console.log(createData);
    return axios.post("/api/controller/patientorder", createData);
  },



};
