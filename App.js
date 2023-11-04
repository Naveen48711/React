const heading = React.createElement(
  "h1",
  { id: "h1" },
  [React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "h1" }, "I am H1 Tage"),
    React.createElement("h2", { id: "h2" }, "I am H2 Tag"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "h1" }, "I am H1 Tage"),
    React.createElement("h2", { id: "h2" }, "I am H2 Tag"),
  ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
//console.log(root.render(heading));
