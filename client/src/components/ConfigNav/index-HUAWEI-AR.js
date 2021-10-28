import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ComponentContext from "../../utils/ComponentContext";


const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});

function ConfigNav(props) {
  const { classes, onDrawerToggle } = props;
  const component = useContext(ComponentContext);

  return (
    <React.Fragment>
      
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={0} textColor="inherit">
          <Tab textColor="inherit" label="Departamentos"
          onClick={()=>{component.onClick("Departments")}}
          />
          <Tab textColor="inherit" label="Areas" 
          onClick={()=>{component.onClick("Areas")}}
          />
          <Tab textColor="inherit" label="Parametros" 
          onClick={()=>{component.onClick("Parameters")}}
          />
          <Tab textColor="inherit" label="Estudios" 
          onClick={()=>{component.onClick("Tests")}}
          />
          <Tab textColor="inherit" label="Usage" 

          />
        </Tabs>
      </AppBar>    
        
    </React.Fragment>
  );
}

ConfigNav.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(ConfigNav);
