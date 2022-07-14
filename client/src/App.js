import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Home />
    </div>
  );
}

export default App;
