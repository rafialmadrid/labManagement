import React from "react";
const TestsContext = React.createContext({
  data: [],
  columns: [
      {title: "ID", field: "id"},
      {title: "Code", field: "code"},
      {title: "Name", field: "name"},
      {title: "Days", field: "days"},
      {title: "Area", field: "area"},
      {title: "Type", field: "type"},
    ],
  onClick: () => undefined
});
export default TestsContext;