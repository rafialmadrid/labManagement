import React from "react";
import "./index.css";
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


const useStyles = makeStyles((theme)=>({
  root: {
    '& > * ': {
      margin: theme.spacing(1),
      width: "20ch",
    }, 
  }
}));


function SearchForm({ formik }) {
const classes = useStyles();
  

  return (
<>
<FormGroup row onSubmit={formik.handleSubmit}>

<FormControl>
  <InputLabel className={classes.root} style={{fontSize:20}}>Month</InputLabel>
    <Select      
    variant="filled"

    onChange={formik.handleChange}
    value={formik.values.month} 
    id="month"
    name="month"
    >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>01</MenuItem>
          <MenuItem value={2}>02</MenuItem>
          <MenuItem value={3}>03</MenuItem>
          <MenuItem value={4}>04</MenuItem>
          <MenuItem value={5}>05</MenuItem>
          <MenuItem value={6}>06</MenuItem>
          <MenuItem value={7}>07</MenuItem>
          <MenuItem value={8}>08</MenuItem>
          <MenuItem value={9}>09</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
    </Select>
</FormControl>

<FormControl>
  <InputLabel>From</InputLabel>
    <Select
    variant="filled"
    onChange={formik.handleChange}
    value={formik.values.from} 
    id="from"
    name="from"
    >
<MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={21}>21</MenuItem>
          <MenuItem value={22}>22</MenuItem>
          <MenuItem value={23}>23</MenuItem>
          <MenuItem value={24}>24</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={26}>26</MenuItem>
          <MenuItem value={27}>27</MenuItem>
          <MenuItem value={28}>28</MenuItem>
          <MenuItem value={29}>29</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={31}>31</MenuItem>
    </Select>
</FormControl>

<FormControl>
  <InputLabel>To</InputLabel>
    <Select
    variant="filled"
    onChange={formik.handleChange}
    value={formik.values.to} 
    id="to"
    name="to"
    >
        <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={21}>21</MenuItem>
          <MenuItem value={22}>22</MenuItem>
          <MenuItem value={23}>23</MenuItem>
          <MenuItem value={24}>24</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={26}>26</MenuItem>
          <MenuItem value={27}>27</MenuItem>
          <MenuItem value={28}>28</MenuItem>
          <MenuItem value={29}>29</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={31}>31</MenuItem>
    </Select>
</FormControl>

<FormControl>
    <TextField 
    variant="filled"
    onChange={formik.handleChange}
    
    value={formik.values.firstName} 
    id="firstName"
    name="firstName"
    placeholder="First Name"
    />
</FormControl>

<FormControl>
    <TextField 
    variant="filled"
    onChange={formik.handleChange}
    value={formik.values.lastName} 
    id="lastName"
    name="lastName"
    placeholder="Last Name"
    />
</FormControl>

<FormControl>
    <TextField 
    variant="filled"
    onChange={formik.handleChange}
    value={formik.values._id} 
    id="_id"
    name="_id"
    placeholder="ID"
    />
</FormControl>

<FormControl>
    <Button 

      variant="contained" 
      color="primary" 
      type="submit" 
      size="small" 
      onClick={formik.handleSubmit}>
      Submit
    </Button>
</FormControl>

<FormControl>
  <InputLabel>Year</InputLabel>
    <Select
    variant="filled"
    onChange={formik.handleChange}
    value={formik.values.year} 
    id="year"
    name="year"
    >
<MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>2021</MenuItem>
          <MenuItem value={2}>2022</MenuItem>
          <MenuItem value={3}>2023</MenuItem>
    </Select>
</FormControl>

</FormGroup>



</>
 )
   
}

export default SearchForm;