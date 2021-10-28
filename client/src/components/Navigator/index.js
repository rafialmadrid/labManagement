import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Divider,
  Drawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"
import {
  People,
  PermMediaOutlined,
  Public,
  SettingsEthernet,
  SettingsInputComponent,
  Timer,
  Home,
  Settings,
  PhonelinkSetup,
} from "@material-ui/icons/";
import { withStyles } from '@material-ui/core/styles';
import NavbarContext from "../../utils/NavbarContext";
import ComponentContext from "../../utils/ComponentContext";

let categories = [
  {
    id: 'Sesion',
    children: [{ id: 'Sesion', icon: <People />, active: true }],
  },
  {
      id: 'Documentacion',
      children: [{ id: 'Manuales', icon: <Timer /> }],
    },
  {
      id: 'Configuracion',
      children: [
        { id: 'Sistema', icon: <Settings /> },
        { id: 'Admision', icon: <Timer /> },
        { id: 'Estudios', icon: <PhonelinkSetup /> },
        { id: 'Compañías', icon: <PhonelinkSetup /> },
      ],
  },
];
    
const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});

function Navigator(props) {
  const { classes, ...other } = props;
  const navbar = useContext(NavbarContext);
  const component = useContext(ComponentContext);
  switch(navbar.name){
    case "Main":
          categories = [
        {
          id: 'Sesion',
          children: [
            { id: 'Sesion', icon: <People />, active: true },
          ],
        },
        {
            id: 'Documentacion',
            children: [
              { id: 'Manuales', icon: <Timer /> },
            ],
          },
        {
            id: 'Configuracion',
            children: [
              { id: 'Sistema', icon: <Settings /> },
              { id: 'Admision', icon: <Timer /> },
              { id: 'Estudios', icon: <PhonelinkSetup /> },
              { id: 'Compañías', icon: <PhonelinkSetup /> },
            ],
          },
      ];
    break;
    case "Orders":
      categories = [
        {
          id: 'Recepcion',
          children: [
            { id: 'Pacientes', icon: <People />, active: true },
            { id: 'Solicitudes', icon: <PermMediaOutlined /> },
            { id: 'Nueva solicitud' },
          ],
        },
      ];
    break;
    case "Results":
      categories = [
        {
          id: 'Resultados',
          children: [
            { id: 'Sesion', icon: <People />, active: true },
            { id: 'Documentacion'},
            { id: 'Configuracion', icon: <PermMediaOutlined /> },
          ],
        },
      ];
    break;
  }

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          Paperbase
        </ListItem>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <Home />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            Project Overview
          </ListItemText>
        </ListItem>
        
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem
                key={childId}
                button
                className={clsx(classes.item, active && classes.itemActiveItem)}
                onClick={()=>{component.onClick(childId)}}
              >
                
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
        
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);