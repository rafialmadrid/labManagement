import React, {useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';
 import { withStyles } from "@material-ui/core/styles";
import API from "../../utils/API"
import ConfigNav from "../../components/ConfigNav";
import ComponentContext from "../../utils/ComponentContext";





import {Formik, Form, Field, FieldArray, useFormikContext} from "formik";



const NewParameter = () => {
  const component = useContext(ComponentContext);
  const [areas, setAreas] = useState([""]);
  const [editable, setEditable] = useState(false);
  
  if (component.data) {
    var _id = component.data._id;
    var code = component.data.code;
    var name = component.data.name;
    var area = component.data.area;
    var units = component.data.units;
    var valueTypes = component.data.valueTypes;
    var type = Object.keys(valueTypes[0])[0];
   }
  const initialValues = {
    parameter:{ 
      _id: _id,
      code: code,
      name: name,
      area: area,
      units: units,
    },
    valueTypes:valueTypes,
    type:type,
    // type:type,
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
      render={({ values, touched, errors, isSubmitting }) => (
        <Form>

            <div>{values.type}</div>

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
                component.onClick("Parameters");
              }}>CLOSE
              </button>
            </Grid>

            <Field 
            name="parameter.code"
            placeholder="Code"
            />          
            <Field            
            name="parameter.name"
            placeholder="Name"/>
            
            <Field
              component="select"
              className="form-control"
              name="parameter.area"
            >
            <option>Area</option>
            {areas.map(item => (
            <option value={item._id}>{item.name}</option>
            ))}
            </Field>
          
            <Field
            component="select"
            name="type"
            className="form-control"
            >
            <option value="valuetype">Value type</option>
            <option value="numeric">Numerico</option>
            <option value="numericWAge">Numerico por edad</option>
            <option value="numericWSex">Numerico por sexo</option>
            <option value="numericWAgeSex">Numerico por edad y sexo</option>
            <option value="multipleChoice">Opción Múltiple</option>
            </Field>
          
            <Field 
            name="parameter.units"
            placeholder="Units"
            />

          <div>Valores de referencia</div>
          <div>{values.type}</div>
          <FieldArray
            name="valueTypes"
            render={arrayHelpers => (
              <div>
                {values.valueTypes && values.valueTypes.length > 0 ? 


                  values.type ==="numeric" ? (
                  values.valueTypes.map((valueType, index) => (
                    <div key={index}>
                      <Field name={`valueTypes.${index}.numeric.min`} />
                      <Field name={`valueTypes.${index}.numeric.max`} />
                    </div>
                  )))

                  : values.type === "numericWSex" ? (
                  values.valueTypes.map((valueType, index) => (
                    <div key={index}>

                      <div>MALE</div>
                      <Field name={`valueTypes.${index}.numericWSex.male.min`} />
                      <Field name={`valueTypes.${index}.numericWSex.male.max`} />


                      <div>FEMALE</div>
                      <Field name={`valueTypes.${index}.numericWSex.female.min`} />
                      <Field name={`valueTypes.${index}.numericWSex.female.max`} />
                    </div>
                  )))

                  : values.type === "numericWAge" ? (
                  values.valueTypes.map((valueType, index) => (
                    <div key={index}>

                      <div>Range</div>
                      <Field name={`valueTypes.${index}.numericWAge.range.min`} />
                      <Field name={`valueTypes.${index}.numericWAge.range.max`} />
                      <div>Age</div>
                      <Field name={`valueTypes.${index}.numericWAge.age.min`} />
                      <Field name={`valueTypes.${index}.numericWAge.age.max`} />

                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))) 
                  : values.type === "numericWAgeSex" ?
                      (values.valueTypes.map((valueType, index) => (
                        <div key={index}>

                          <div>MALE</div>
                          <div>Range</div>
                          <Field name={`valueTypes.${index}.numericWAgeSex.male.range.min`} />
                          <Field name={`valueTypes.${index}.numericWAgeSex.male.range.max`} />
                          <div>Age</div>
                          <Field name={`valueTypes.${index}.numericWAgeSex.male.age.min`} />
                          <Field name={`valueTypes.${index}.numericWAgeSex.male.age.max`} />

                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </button>
                          <button
                            type="button"
                            onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                          >
                            +
                          </button>

                          <div>FEMALE</div>
                          <div>Range</div>
                          <Field name={`valueTypes.${index}.numericWAgeSex.female.range.min`} />
                          <Field name={`valueTypes.${index}.numericWAgeSex.female.range.max`} />
                          <div>Age</div>
                          <Field name={`valueTypes.${index}.numericWAgeSex.female.age.min`} />
                          <Field name={`valueTypes.${index}.numericWAgeSex.female.age.max`} />

                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </button>
                          <button
                            type="button"
                            onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                          >
                            +
                          </button>


                        </div>
                      )))
                      : values.type === "multipleChoice" ? 

                      (values.valueTypes.map((valueType, index) => (
                      <div key={index}>
                        <Field name={`valueTypes.${index}.multipleChoice.text`} />
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </button>
                          <button
                            type="button"
                            onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                          >
                            +
                          </button>
                      </div>
                      )))

                      : <div></div>

                  :(
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

export default NewParameter;





