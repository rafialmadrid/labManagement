        /*<TestsTable formik={formik} data={state.data}/>*/
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { useFormik } from "formik";


/*import TestsTable from "../../components/TestsTable";*/
import TextField from "@material-ui/core/TextField"

function NewOrders() {
  // Setting our component's initial state
    const [state, setState] = useState({

      data: [""]

    });

     const formik = useFormik({

         initialValues: {
          
          
          patient: {

             firstName: '',
             lastName: '',
             age: '',
             dateOfBirth: '',
             gender: '',
             email: '',
             adress: ''

          },

          order: {
            type: "U",
            subtotal: 555.00,
            discount: 0.00,
            iva: 0.16,
            tax: 0,
            total: 20.00,
            charge: 98.00,
            branch: "MATRIZ"
          },

           test: 
            [
                {
                  testCatalogueId: "606f57c88d621893a41eebf9",
                  delivery: "2",
                  type: "N"
                },
                {
                  testCatalogueId: "606f5a6a8d621893a41eebfe",
                  delivery: "2",
                  type: "N"
                }
            ]

        
        
         },

       onSubmit: values => {
                  
         API.createPatientAndOrder(values) 

         .then(res => {

            console.log(res);     

            setState({
              data: res.data.data
            })

          })
         .catch(err => console.log(err));

         },



       });
    


  function getTestCatalogue (code) {

    API.getTestCatalogue(code)

      .then(res => {
      
      })
      .catch(err => console.log(err));
  }

  
  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database

    return (
      <>

      </>
    );
}
                
export default NewOrders;

