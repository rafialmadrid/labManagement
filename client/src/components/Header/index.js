import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Avatar,
  Button,
  Grid,
  Hidden,
  IconButton,
  Link,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography,

} from "@material-ui/core";
import HelpIcon from '@material-ui/icons/Help';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { withStyles } from '@material-ui/core/styles';
import NavbarContext from "../../utils/NavbarContext";
/*💲*/

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

function Header(props) {
  const { classes, onDrawerToggle } = props;
  const navbarContext = useContext(NavbarContext);

  return (
    <React.Fragment>
      
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Lab Management
              </Typography>
            </Grid>
            <Grid item>
              <Button className={classes.button} variant="outlined" color="inherit" size="small">
                Web setup
              </Button>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={0} textColor="inherit">
          <Tab textColor="inherit" label="Principal"
          onClick={()=>{navbarContext.onClick("Main")}}
          />
          <Tab textColor="inherit" label="Recepción" 
          onClick={()=>{navbarContext.onClick("Orders")}}
          />
          <Tab textColor="inherit" label="Resultados" 
          onClick={()=>{navbarContext.onClick("Results")}}
          />
          <Tab textColor="inherit" label="Usage" 

          />
        </Tabs>
      </AppBar>    
        
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
