import React, {useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';
 import { withStyles } from "@material-ui/core/styles";
import API from "../../utils/API"
import ConfigNav from "../../components/ConfigNav";
import ComponentContext from "../../utils/ComponentContext";





import {Formik, Form, Field, FieldArray, useFormikContext} from "formik";



const NewTest = () => {
  const component = useContext(ComponentContext);
  const [areas, setAreas] = useState([""]);
  const [editable, setEditable] = useState(false);
  
  if (component.data) {
    var _id = component.data._id;
    var code = component.data.code;
    var name = component.data.name;
    var area = component.data.area;
    var parameters = component.data.parameters;
   }
  const initialValues = {
    test:{ 
      _id: _id,
      code: code,
      name: name,
      area: area,
    },
  }
  useEffect(() => {
    const fetchData = async () => {
    const areas = await API.getAreas({code:"", name:""});
      setAreas(areas.data.data);
    };
    fetchData();
  },[]);
  return(
  <>
  <ConfigNav />
  <div>
    <h1>Friend List</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={values =>{
        console.log(values)
        if(component.data){
        API.updateParameter(values)
        .then(res => {
        })
        .catch( err => console.log(err) );
        } else {
         API.addParameter(values) 
         .then(res => {
          })
          .catch(err => console.log(err));
        }
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }}
      render={({ values, touched, errors, isSubmitting, onSubmitParameter }) => (
        <Form>

            <Grid item xs={4}>
              <button 
              type="submit">
                SAVE
              </button>

              {component.data ? 
              <button
              type="submit"
              >
              MODIFY
              </button>
              :null
              }

              <button
              type="submit" 
              onClick={()=>{
                component.onClick("Tests");
              }}>CLOSE
              </button>
            </Grid>

            <Field 
            name="test.code"
            placeholder="Code"
            />          
            <Field            
            name="test.name"
            placeholder="Name"/>
            
            <Field
              component="select"
              className="form-control"
              name="test.area"
            >
            <option>Area</option>
            {areas.map(item => (
            <option value={item._id}>{item.name}</option>
            ))}
            </Field>
          
          

          <div>Parametros del estudio</div>
          <FieldArray
            name="parameters"
            render={arrayHelpers => (
              <div>
                {values.parameters && values.parameters.length > 0 ? (
                  values.parameters.map((parameter, index) => (
                    <div key={index}>
                      <Field
                      handleSubmit={e =>{
                          console.log(e.target)
                          API.getParameters(values.parameters)
                          .then(res => {
                          }).catch( err => console.log(err) );
                        }
                      }
                      name={`parameters.${index}.code`} />
                      <div>{parameter.name}</div>
                      <div>{parameter.area}</div>
                    </div>
                  )))

                  : (
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    Add a friend
                  </button>
                  )}

                  <div>
                    <button type="submit">submit</button>
                  </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>

  </>
  )

}

export default NewTest;





