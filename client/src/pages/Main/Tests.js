import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";

import {useFormik} from "formik";
import API from "../../utils/API"


import Table from "../../components/Table";

const Tests = ( ) => {


  const [state, setState] = useState({

      component: "",
      data:[""]
      
    })

    const formik = useFormik({

    initialValues: {

      _id:"",
      department:"",
      test:"",

    },

    onSubmit: values => {
      

           API.getOrders(values) 

           .then(res => {

              console.log(res.data.data);

              setState({

                data: res.data.data
                
              })     

            })

           .catch(err => console.log(err));

    }
  })



  return (
    <>

          
          

    </>
  );
   
}

export default Tests;