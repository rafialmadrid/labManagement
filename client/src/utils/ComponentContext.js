import React from "react";
const ComponentContext = React.createContext({
  name:"",
  data:"",
  onClick: () => undefined
});
export default ComponentContext;