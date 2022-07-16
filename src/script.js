const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement(
      "h1",
      null,
      "Welcome to the react-native-firebase project"
    ),
    React.createElement(Pet, {
      name: "Copo",
      animal: "Dog",
      breed: "German shepherd  ",
    }),
    React.createElement(Pet, {
      name: "Coqueta",
      animal: "Chicken",
      breed: "Hen",
    }),
    React.createElement(Pet, {
      name: "Copo",
      animal: "Dog",
      breed: "German shepherd  ",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
