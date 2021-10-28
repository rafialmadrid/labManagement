import React from "react";
const ParametersContext = React.createContext({
  data: [],
  columns: [
      {title: "ID", field: "id"},
      {title: "Code", field: "code"},
      {title: "Name", field: "name"},
      {title: "Units", field: "units"},
      {title: "Area", field: "area"},
      {title: "Type", field: "type"},
    ],
  onClick: () => undefined
});
export default ParametersContext;