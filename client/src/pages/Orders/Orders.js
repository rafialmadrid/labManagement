import React, {useState} from "react";

import Grid from "@material-ui/core/Grid";


import NewOrders from "./NewOrders";
import ExistingOrders from "./ExistingOrders";
import Patients from "./Patients";


const Orders = () => {


	const [state, setState] = useState({
			id: "",
			component: "Patients"
		});


	const renderComponent = () => {

		switch(state.component){
			case "Patients":
				return <Patients />
				break;
			case "Existing Orders":
				return <ExistingOrders />
				break;
			case "New Orders":
				return <NewOrders />
		}

	}


  return (
  	<>
		<Grid container spacing={3}>

			<Grid item xs={2}>
					<Grid xs={12} onClick={()=> {
						setState({component:"Patients"})
					}}>
					 Patients
					</Grid>

					<Grid xs={12} onClick={()=> {
						setState({component: "New Orders"})
					}}>
					 New Orders
					</Grid>

					<Grid xs={12} onClick={()=> {
						setState({component:"Existing Orders"})
					}}>
					 Existing Orders
					</Grid>
			</Grid>

			<Grid xs={10}>
				{renderComponent()}
			</Grid>

		</Grid>

    </>
  );
   
}

export default Orders;