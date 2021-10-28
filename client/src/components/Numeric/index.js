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
import {useFormik, useFormikContext} from "formik";
import API from "../../utils/API"


const styles = (theme) => ({
});


function Numeric(props) {  
const { values, submitForm,  } = useFormikContext();
const { classes } = props;
  return (
	<>
    <div>numeric</div>
    <FormControl>
        <TextField 
        onChange={handleChange}
        value={values.valueTypes.numeric.min} 
        id="valueTypes.numeric.min"
        name="valueTypes.numeric.min"
        placeholder="Units"
        />
    </FormControl>
    <FormControl>
        <TextField 
        onChange={handleChange}
        value={values.valueTypes.numeric.max} 
        id="valueTypes.numeric.max"
        name="valueTypes.numeric.max"
        placeholder="Units"
        />
    </FormControl>
	</>
 )   
}

Numeric.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Numeric);*/