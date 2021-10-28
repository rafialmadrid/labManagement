// import React, {useState} from "react";

// import Grid from "@material-ui/core/Grid";

// import ResultsInput from "./ResultsInput";
// import ResultsPatients from "./ResultsPatients";
// /*import ResultsContext from "../../utils/ResultsContext"*/

// const Results = () => {


// 	const [state, setState] = useState({
// 	    id: "",
// 	    component: "ResultsMain"
// 	  })


// 	const changeComponent = (component, id) => {

// 		setState({
// 			id: id,
// 			component: component
// 		})

// 	}

// 	console.log(state.component, state.id)



// 	const renderComponent = () => {

// 		switch(state.component){
// 			case "ResultsMain":
// 				return <ResultsPatients changeComponent={changeComponent}/>
// 				break;
// 			case "ResultsId":
// 				return(
// 				<ResultsContext.Provider value={state}> 
// 					<ResultsInput />
// 				</ResultsContext.Provider>)
// 				break;
// 		}

// 	}


//   return (
//   	<>

// 		<Grid container spacing={3}>

// 			<Grid item xs={2}>

// 					<Grid item xs={2} onClick={()=> {
// 						setState({component: "ResultsMain"})
// 						console.log(state.component, state.id)
// 					}}>
// 					 Results
// 					</Grid>


// 					<Grid item onClick={()=> {
// 						setState("Validation")
// 					}}>
// 					 Validation
// 					</Grid>


// 			</Grid>

// 			<Grid item size="md-10">
// 				{renderComponent()}
// 			</Grid>

// 		</Grid>

//     </>
//   );
   
// }

// export default Results;