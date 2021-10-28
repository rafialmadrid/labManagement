import React from "react";
import ReactDOM from 'react-dom';


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
  Checkbox,
  FormControlLabel
} from "@material-ui/core";


const useStyles = makeStyles((theme)=>({
  root: {
    '& > * ': {
      margin: theme.spacing(1),
      width: "10ch",
    },
  }
}));


function PatientForm({ formik }) {
const classes = useStyles();
  

  return (
<>

<FormGroup row className={classes.root} onSubmit={formik.handleSubmit}>

<FormControl>
    <TextField 
      value={formik.values.patient.firstName} 
      onChange={formik.handleChange}
      id="patient.firstName" 
      name="patient.firstName" 
      label="Name"
      />
</FormControl>

<FormControl>
    <TextField 
      value={formik.values.patient.lastName} 
      onChange={formik.handleChange}
      id="patient.lastName" 
      name="patient.lastName" 
      label="Last Name" 
    />
</FormControl>

<FormControl>
  <InputLabel>Sex</InputLabel>
    <Select 
    value={formik.values.patient.gender} 
    onChange={formik.handleChange}
    id="patient.gender" 
    name="patient.gender"
    >
<MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"M"}>Male</MenuItem>
          <MenuItem value={"F"}>Female</MenuItem>
    </Select>
</FormControl>

<FormControl>
    <TextField 
    value={formik.values.patient.age} 
    onChange={formik.handleChange}
    id="patient.age" 
    name="patient.age" 
    type="number" 
    label="Age" 
    />
</FormControl>

<FormControl>
    <TextField 
    value={formik.values.patient.dateOfBirth} 
    onChange={formik.handleChange}
    id="patient.dateOfBirth" 
    name="patient.dateOfBirth" 
    type="date" 
    label="DOB" 
    />
</FormControl>

<FormControl>
    <TextField 
    value={formik.values.patient.email} 
    onChange={formik.handleChange}
    id="patient.email" 
    name="patient.email" 
    type="email" 
    label="Email" 
    />
</FormControl>

<FormControl>
    <TextField 
    value={formik.values.patient.phone} 
    onChange={formik.handleChange}
    id="patient.phone" 
    name="patient.phone" 
    type="number" 
    label="Phone" 
    />
</FormControl>


<FormControlLabel
    control={
      <Checkbox
        onChange={formik.handleChange}
        color="primary"
      />
    }
    label="patient"
  />


<FormControl>
    <TextField  
    value={formik.values.patient.adress} 
    onChange={formik.handleChange}
    id="patient.adress" 
    name="patient.adress" 
    label="Address" 
    />
</FormControl>

<FormControl>
    <Button 
    variant="contained" 
    color="primary" 
    type="submit" 
    size="small" 
    onClick={formik.handleSubmit}>Submit</Button>
</FormControl>

</FormGroup>



</>
 )
   
}

export default PatientForm;