import React , {useContext, forwardRef} from "react";
import ConfigNav from "../../components/ConfigNav";
import {
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
  AddBox
} from "@material-ui/icons"
import MaterialTable from 'material-table'
import Grid from "@material-ui/core/Grid";
import ComponentContext from "../../utils/ComponentContext";


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };



function Tablea(props) {
  
  const component = useContext(ComponentContext);
  
  return (
    <>
     <Grid container>   
      <Grid item xs={12}>
       <MaterialTable
          columns={
            props.columns
          }
          data={props.data}
          options={{
            paging: false,
            toolbar: false,
            sorting: false,
          }}
          actions={[
            {
              icon: Edit,
              tooltip: 'Edit',
              onClick: (event, rowData) => { 
                component.onClick(props.edit,rowData);
              }
            }
          ]}/>
        </Grid>
      </Grid>
    </>
  );
}

export default Tablea;