import React, {useState, useContext} from "react";
import {
  FormControl,
  FormGroup,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  Button,
  ButtonGroup,
  Grid
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {useFormik} from "formik";
import API from "../../utils/API"
import Table from "../../components/Table";
import ConfigNav from "../../components/ConfigNav";
import ComponentContext from "../../utils/ComponentContext";
import ParametersContext from "../../utils/ParametersContext";

const styles = (theme) => ({
});

const Parameters = (props) => {
  const { classes } = props;
  const component = useContext(ComponentContext);
  const parameters = useContext(ParametersContext);
  const formik = useFormik({
    initialValues: {
      area: "All",
      search: "",
      code: "",
      name: "",    
    },
    onSubmit: values => {
      API.getParameters(values) 
       .then(res => {
          parameters.onClick(res.data.data);
          console.log(res.data.data)
        })
       .catch(err => console.log(err));
    }
  })

  return (
    <>
      <ConfigNav />
        <Grid container>  
          <Grid item xs={12}>
            <FormControl>
              <InputLabel>Area</InputLabel>
                <Select
                onChange={formik.handleChange}
                value={formik.values.areas} 
                id="area"
                name="area"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"All"}>All</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                </Select>
            </FormControl>
          </Grid>

          <Grid item xs={8}>
            <FormGroup row>
              <FormControl>
                <TextField 
                onChange={formik.handleChange}
                value={formik.values.name} 
                id="name"
                name="name"
                placeholder="Search"
                />
              </FormControl>

              <FormControl>
                <Button
                 variant="contained"
                 type="submit" 
                 onClick={formik.handleSubmit}>
                 Submit
                 </Button>
              </FormControl>
            </FormGroup>
          </Grid>

          <Grid item xs={4}>
            <Button 
            variant="contained"
            type="submit" 
            onClick={()=>{
            component.onClick("NewParameter")}}
             >New Record</Button>
            <Button 
            type="submit" 
            variant="contained"
            onClick={formik.handleSubmit}>
            List
            </Button>  
          </Grid>
        </Grid>
        <Table data={parameters.data} columns={parameters.columns} component={component} edit="NewParameter"/>
    </>
  );
}

Parameters.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Parameters);
