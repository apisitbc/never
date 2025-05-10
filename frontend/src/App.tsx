import { useState } from "react";
import "./App.css";
import Register from "./register";
import Login from "./login";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Go to Register" : "Go to Login"}
      </button>
      {showLogin ? <Login /> : <Register />}
    </div>
  );
}

export default App;
