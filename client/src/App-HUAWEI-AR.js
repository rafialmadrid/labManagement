import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Pages need to be named as the sidebar options
import { createMuiTheme, ThemeProvider, withStyles, makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Button,
  Typography,
  Link,
  CssBaseline,
  Hidden,
  Grid,
} from "@material-ui/core"

import NavbarContext from "./utils/NavbarContext";
import PropTypes from 'prop-types';

import Navigator from './components/Navigator';
import Content from './components/Content';
import Header from './components/Header';
import Paperbase from "./components/Paperbase";

import System from "./pages/Main/System";
import Areas from "./pages/Main/Areas";
import NewArea from "./pages/Main/NewArea";
import Departments from "./pages/Main/Departments";
import NewDepartment from "./pages/Main/NewDepartment";
import Parameters from "./pages/Main/Parameters";
import NewParameter from "./pages/Main/NewParameter";
import Tests from "./pages/Main/Tests";
import NewTest from "./pages/Main/NewTest";
import Indications from "./pages/Main/indications";
import Methods from "./pages/Main//Methods";
import Panels from "./pages/Main/Panels";
import NoMatch from "./pages/NoMatch";
import Patients from "./pages/Orders/Patients";
import Orders from "./pages/Orders/Orders";
import Results from "./pages/Results/Results";
import ComponentContext from "./utils/ComponentContext";
import AreasContext from "./utils/AreasContext";
import DepartmentsContext from "./utils/DepartmentsContext";
import ParametersContext from "./utils/ParametersContext";
import TestsContext from "./utils/TestsContext";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      root: {
       color: "#89CFF0",
       fontSize: '1rem',
      },  
      label: {
        textTransform: 'none',
      },
      contained: {
        background: "linear-gradient(to bottom,rgb(191 215 236 / 98%) 5%,#89CFF0 100%)",
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
    MuiTextField: {
      root: {
        variant: "outlined",
      }
    }
  },
};

const drawerWidth = 256;

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#eaeff1',
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
};


function App(props) {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
   setMobileOpen(!mobileOpen);
  };

  const [component, setComponent]=useState({
    name:"",
    data:"",
    onClick:(name,data)=>{  
      setComponent({...component,name,data});
    }
  });
  const [navbar, setNavbar]=useState({
    name:"",
    onClick:(name)=>{
      setNavbar({...navbar,name});
    }
  });
  const [areas,setAreas]=useState({
    data: [],
      columns: [
        {title: "ID", field: "_id"},
        {title: "Code", field: "code"},
        {title: "Name", field: "name"},
        {title: "Department", field: "department.name"},
        ],
    onClick:(data)=>{
      setAreas({...areas,data});  
    }
  });
  const [departments,setDepartments]=useState({
    data: [],
      columns: [
      {title: "ID", field: "_id"},
      {title: "Code", field: "code"},
      {title: "Name", field: "name"},
      ],
    onClick:(data)=>{
      setDepartments({...departments,data});  
    }
  });
  const [parameters, setParameters]=useState({
    data: [],
    columns: [
        {title: "ID", field: "_id"},
        {title: "Code", field: "code"},
        {title: "Name", field: "name"},
        {title: "Units", field: "units"},
        {title: "Area", field: "area"},
        {title: "Type", field: "type"},
      ],
    onClick:(data)=>{
      setParameters({...parameters,data});  
    }
  });
  const [tests, setTests]=useState({
    data:[],
    columns: [
        {title: "ID", field: "_id"},
        {title: "Code", field: "code"},
        {title: "Name", field: "name"},
        {title: "Days", field: "days"},
        {title: "Area", field: "area"},
        {title: "Type", field: "type"},
      ],
    onClick:(data)=>{
      setTests({...tests,data});  
    }
  })
  
const renderComponent=()=>{
   switch(component.name){
    case "Estudios":
      return <Departments />
      break;
    case "Departments":
      return <Departments />
      break;
    case "NewDepartment":
      return <NewDepartment />
      break;
    case "Areas":
      return <Areas />
      break;
    case "NewArea":
      return <NewArea />
      break; 
    case "Parameters":
      return <Parameters />
      break;
    case "NewParameter":
      return <NewParameter />
    break;
    case "Tests": 
      return <Tests />
    break;
    case "Pacientes": 
      return <Patients />
    break;
    case "NewTest": 
      return <NewTest />
    break;

    default:
       return <Content />
    break;
   }
}

  return (
    <>

    <AreasContext.Provider value={areas}>
    <DepartmentsContext.Provider value={departments}>
    <ParametersContext.Provider value={parameters}>
    <TestsContext.Provider value={tests}>
    <NavbarContext.Provider value={navbar}>
    <ComponentContext.Provider value={component}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          
          <nav className={classes.drawer}>
            <Hidden smUp implementation="js">
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}/>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Navigator PaperProps={{ style: { width: drawerWidth } }} />
            </Hidden>
          </nav>

          <div className={classes.app}>
            <Header 
            onDrawerToggle={handleDrawerToggle} 
            />
            <main className={classes.main}>
              {renderComponent()}
            </main>
            <footer className={classes.footer}>
              <Copyright />
            </footer>
          </div>
        </div>
      </ThemeProvider>
    </ComponentContext.Provider>
    </NavbarContext.Provider>
    </TestsContext.Provider>
    </ParametersContext.Provider>
    </DepartmentsContext.Provider>
    </AreasContext.Provider>
    

    </>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);



