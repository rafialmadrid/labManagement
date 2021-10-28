import React from "react";
const DepartmentsContext = React.createContext({
  data: [],
  columns: [
      {title: "ID", field: "id"},
      {title: "Code", field: "code"},
      {title: "Name", field: "name"},
      ],
  onClick: () => undefined
});
export default DepartmentsContext;