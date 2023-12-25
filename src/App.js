import Signup from "./components/signup";
import Contactlist from "./components/contactlist"
import React from "react";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom" 

function App() {
  return (
  <Router>
      <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" Component={Signup}></Route>
          <Route path="/contactlist" Component={Contactlist}></Route>
        </Routes>
      </header>
    </div>
  </Router>
  );
}

export default App;
