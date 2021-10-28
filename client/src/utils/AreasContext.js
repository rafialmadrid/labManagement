import React from "react";
const AreasContext = React.createContext({
  data: [],
  columns: [
        {title: "ID", field: "_id"},
        {title: "Code", field: "code"},
        {title: "Name", field: "name"},
        {title: "Department", field: "department.name"},
        ],
  onClick: () => undefined
});
export default AreasContext;