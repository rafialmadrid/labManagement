import React, {useState, useContext} from "react";
import Grid from "@material-ui/core/Grid";
import {
  FormControl,
  FormGroup,
  TextField,
  Button,
} from "@material-ui/core";
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {useFormik} from "formik";
import API from "../../utils/API"
import ConfigNav from "../../components/ConfigNav";
import ComponentContext from "../../utils/ComponentContext";

const styles = (theme) => ({
  });

const NewDepartment = (props) => {
  const { classes } = props;
  const [editable, setEditable] = useState(false)
  const component = useContext(ComponentContext);
  
  if (component.data) {
    var name = component.data.name;
    var _id = component.data._id;
    var code = component.data.code;
   }

  const formik = useFormik({
  initialValues: {
    department: {
      code: code,
      name: name,
      _id: _id
    }
  },
    
  onSubmit: values => {
    if (component.data) {
      API.updateDepartment(values)
      .then(res => {
        console.log(res);
      })
      .catch( err => console.log(err) );
    } else {
      API.addDepartment(values) 
      .then(res => {
            console.log(res);
      })
     .catch(err => console.log(err));
        }
  }

  })

  return (
    <>
      <ConfigNav />
      <Grid container>
        <Grid item xs={8}>
          <FormGroup >
            <FormControl className={classes.root}>
              <TextField disabled={component.data && !editable}
              onChange={formik.handleChange}
              value={ formik.values.department.code } 
              id="department.code"
              name="department.code"
              placeholder="Code"  />
            </FormControl>

            <FormControl className={classes.root}>
              <TextField disabled={component.data && !editable}
              onChange={formik.handleChange}
              value={ formik.values.department.name } 
              id="department.name"
              name="department.name"
              placeholder="Name"
              />
            </FormControl>
          </FormGroup>
        </Grid>

        <Grid item xs={4}>
          {component.data ? <Button variant="contained" color="primary" size="small" onClick={()=>{
            setEditable(true)
          }}>MODIFY</Button>:null}

          <Button 
            variant="contained"
            type="submit"
            onClick={()=>{
            formik.handleSubmit()
            setEditable(false)}}>
          SAVE
          </Button>
          <Button 
            variant="contained" 
            type="submit" 
            onClick={()=>{
              component.onClick("Departments");
            }}>
            CLOSE
          </Button>
        </Grid>
      </Grid>
    </>
  );
   
}

NewDepartment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewDepartment);