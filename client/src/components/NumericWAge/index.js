/*import React, {useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {
  FormControl,
  FormGroup,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  makeStyles,
  Button,
} from "@material-ui/core";
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import {useFormik, Formik, Form, Field, FieldArray} from "formik";
import API from "../../utils/API"


const styles = (theme) => ({
});


function NumericWAge(props) {  
const { classes } = props;
  return (
<>
<div>Numeric With Age</div>
<div>
<h1>Field List</h1>
<Formik
initialValues={{ 


valueTypes: [{
numericWAge: {

age: {
min: 1,
max: 20,
},

range: {
min: 1,
max: 20,
}
}
}] }}
onSubmit={values =>
setTimeout(() => {
console.log(values);
alert(JSON.stringify(values, null, 2));
}, 500)
}
render={({ values }) => (
<Form>

<FieldArray
name="valueTypes"
render={arrayHelpers => (
<div>
{values.valueTypes && values.valueTypes.length > 0 ? (
values.valueTypes.map((valueType, index) => (
<div key={index}>

<Field name={`valueTypes.${index}.numericWAge.age.min`} />
<Field name={`valueTypes.${index}.numericWAge.age.max`} /> 
<Field name={`valueTypes.${index}.numericWAge.range.min`} />
<Field name={`valueTypes.${index}.numericWAge.range.max`} /> 
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
))
) : (
<button type="button" onClick={() => arrayHelpers.push("")}>
{/* show this when user has removed all friends from the list }
Add a friend
</button>
)}
<div>
<button type="submit">Submit</button>
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

NumericWAge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NumericWAge);*/