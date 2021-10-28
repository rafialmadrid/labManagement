import React, {useState, useContext} from "react";
import Grid from "@material-ui/core/Grid";
import {
  FormControl,
  FormGroup,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {useFormik} from "formik";
import PropTypes from 'prop-types';
import API from "../../utils/API"
import ComponentContext from "../../utils/ComponentContext";
import DepartmentsContext from "../../utils/DepartmentsContext";
import ConfigNav from "../../components/ConfigNav";
import Table from "../../components/Table";

const styles = (theme) => ({
  });

const Departments = (props) => {
  const { classes } = props;
  const component = useContext(ComponentContext);
  const departments = useContext(DepartmentsContext);
  const [table, setTable]=useState({
    columns: [
      {title: "ID", field: "id"},
      {title: "Code", field: "code"},
      {title: "Name", field: "name"},
      ],
  })
  const formik = useFormik({
    initialValues: {
      search: "",
      code:"",
      name:"",
    },
    onSubmit: values => {
      console.log(values);
      API.getDepartments(values) 
       .then(res => {
          departments.onClick(res.data.data)
                 
       })
      .catch(err => console.log(err));
    }
  })

  return (
    <>
      <ConfigNav />
      < Grid container>      
        <Grid item xs={8}>
          <FormGroup row>
          <FormControl className={classes.root}>
              <TextField 
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.name} 
              id="name"
              name="name"
              placeholder="Search"/>
          </FormControl>

          <FormControl className={classes.button}>
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
          component.onClick("NewDepartment")}}>
          New Record
          </Button>
        </Grid>
      </Grid>

      <Table data={departments.data} columns={departments.columns} component={component} edit="NewDepartment"/>
    </>
  );
}

Departments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Departments);