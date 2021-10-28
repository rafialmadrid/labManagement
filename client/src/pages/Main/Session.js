import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";



const Session = () => {


  const [state, setState] = useState({

      id: "",
      component: ""
      
    })


  const changeComponent = (component, id) => {

    setState({
      id: id,
      component: component
    })

  }

  console.log(state.component, state.id)



  const renderComponent = () => {

    switch(state.component){
      case "":
        return
        break;
      case "":
        return
        break;
      case "":
        return
        break;
      case "":
        return
        break;
    }

  }


  return (
    <>

    Session

    </>
  );
   
}

export default Session;