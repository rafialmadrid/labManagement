import React, {useState, useContext } from "react";
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
import Table from "../../components/Table";
import ComponentContext from "../../utils/ComponentContext";
import AreasContext from "../../utils/AreasContext";

const styles = (theme) => ({
  });

//
const Areas = (props) => {
    
  const areas = useContext(AreasContext);
  const { classes } = props;  
  const component = useContext(ComponentContext);
  
  
  const formik = useFormik({
    initialValues: {
      search: "",
      code:"",
      name:"",
    },

    onSubmit: values => {  
      API.getAreas(values) 
     .then(res => {
        areas.onClick(res.data.data);
      })
      .catch(err => console.log(err));
    }

  })

  return (
    <>
      <ConfigNav />
      <Grid container>
        <Grid item xs={8}>
          <FormGroup row>
          <FormControl className={classes.root}>
              <TextField 
              onChange={formik.handleChange}
              value={formik.values.name} 
              id="name"
              name="name"
              placeholder="Search"
              />
          </FormControl>

          <FormControl className={classes.button}>
              <Button variant="contained" color="primary" type="submit" size="small" onClick={formik.handleSubmit}>Submit</Button>
          </FormControl>
          </FormGroup>
        </Grid>

        <Grid item xs={4}>
          <Button 
          variant="contained" 
          color="primary" 
          type="submit" 
          size="small" 
          onClick={()=>{
            component.onClick("NewArea")
          }}>New Record</Button>
        </Grid>
      </Grid>

      <Table data={areas.data} columns={areas.columns} component={component} edit="NewArea"/>

    </>
  );
   
}

Areas.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Areas);