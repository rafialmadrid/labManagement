import React from "react";
const NavbarContext = React.createContext({
  name:"",
  onClick: () => undefined
});
export default NavbarContext;
