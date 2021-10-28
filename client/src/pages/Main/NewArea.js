import React, {useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import {
  FormControl,
  FormGroup,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel
} from "@material-ui/core";
import PropTypes from 'prop-types';
 import { withStyles } from "@material-ui/core/styles";
import {useFormik} from "formik";
import API from "../../utils/API"
import ConfigNav from "../../components/ConfigNav";
import ComponentContext from "../../utils/ComponentContext";

const styles = (theme) => ({
  });

const NewArea = (props) => {
  const { classes } = props;
  const component = useContext(ComponentContext);
  const [editable, setEditable] = useState(false)
  const [departments, setDepartments] = useState({data:[""]});
  
  if (component.data) {
    var name = component.data.name;
    var _id = component.data._id;
    var code = component.data.code;
    var department = component.data.department._id
    console.log(department)
   }

  useEffect(() => {
    const fetchData = async () => {
    const result = await API.getDepartments({code:"",name:""});
    setDepartments({data:result.data.data});
    };
    fetchData();
  },[]);

  const formik = useFormik({
  initialValues: {
    area: {
      code: code,
      name: name,
      _id: _id,
      department: department,
    },
  },
  onSubmit: values => {
    if(component.data){
      console.log(values)
      API.updateArea(values)
      .then(res => {
        console.log(res.data.data);
      })
      .catch( err => console.log(err) );
      } else {
       API.addArea(values) 
       .then(res => {
          console.log(res.data.data);
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
                <TextField 
                disabled={component.data && !editable}
                onChange={formik.handleChange}
                value={formik.values.area.code} 
                id="area.code"
                name="area.code"
                placeholder="Code"
                />
            </FormControl>

            <FormControl className={classes.root}>
                <TextField 
                disabled={component.data && !editable}
                onChange={formik.handleChange}
                value={formik.values.area.name} 
                id="area.name"
                name="area.name"
                placeholder="Name"
                />
            </FormControl>

            <FormControl className={classes.root}>
              <InputLabel id="demo-simple-select-label">Department</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="area.department"
                id="area.department"
                onChange={formik.handleChange}>
                {departments.data.map(item => (
                <MenuItem value={item._id}>{item.name}</MenuItem>
                  ))}
              </Select>
            </FormControl>
            
          </FormGroup>
          </Grid>

          <Grid item xs={4}>
            <Button 
            variant="contained" 
            type="submit" 
            size="small" 
            onClick={()=>{
              formik.handleSubmit()
              setEditable(false)}}>
              SAVE
              </Button>
            {component.data ? 
              <Button 
              variant="contained" 
              color="primary" 
              size="small" 
              onClick={()=>{
            setEditable(true)
            }}>MODIFY</Button>:null}
            <Button 
            variant="contained" 
            color="primary" 
            type="submit" 
            size="small" 
            onClick={()=>{
              component.onClick("Areas");
            }}>CLOSE</Button>
          </Grid>
      </Grid>
    </>
  );
   
}

NewArea.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewArea);