import logo from "./logo.svg";
import "./App.css";

function App() {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=2475382daad64999b19224831221407&q=Houston"
  )
    .then((response) => response.json())
    .then((data) => console.log(data, data.current.temp_f));

  return <div className="App"></div>;
}

export default App;
