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


function NumericWSex(props) {  
const { classes } = props;
  return (
	<>
      <div>Numeric With Sex</div>
      <Grid container>
          <div>Hombres</div>
          <Grid item xs={12}>
          <FormControl>
              <TextField 
              onChange={formik.handleChange}
              value={formik.values.parameter.units} 
              id="parameter.units"
              name="parameter.units"
              placeholder="Units"
              />
          </FormControl>

          <FormControl>
              <TextField 
              onChange={formik.handleChange}
              value={formik.values.parameter.units} 
              id="parameter.units"
              name="parameter.units"
              placeholder="Units"
              />
          </FormControl>
          </Grid>

          <div>Mujeres</div>
          <Grid item xs={12}>
          <FormControl>
              <TextField 
              onChange={formik.handleChange}
              value={formik.values.parameter.units} 
              id="parameter.units"
              name="parameter.units"
              placeholder="Units"
              />
          </FormControl>

          <FormControl>
              <TextField 
              onChange={formik.handleChange}
              value={formik.values.parameter.units} 
              id="parameter.units"
              name="parameter.units"
              placeholder="Units"
              />
          </FormControl>
          </Grid>

        </Grid>

	</>
 )
   
}

NumericWSex.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NumericWSex);*/