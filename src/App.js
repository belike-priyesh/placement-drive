import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import Routes from "./Routes";
import { BrowserRouter, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
