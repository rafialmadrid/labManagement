import React, {useState, useEffect} from "react";

import SearchForm from '../../components/SearchForm';
/*import OrdersTable from '../../components/OrdersTable';*/
import {useFormik} from "formik";

import API from "../../utils/API";


function ExistingOrders() {

  const [state, setState] = useState({

    data: [""]

  })

  const formik = useFormik({

    initialValues: {

      month:"",
      from:"",
      firstName:"",
      lastName:"",
      to:"",
      _id:"",

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



      /*<OrdersTable data={state.data}/>*/

  return (
    <>
      <SearchForm formik={formik}/> 
    </>
  )
   
}

export default ExistingOrders;