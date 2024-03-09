
import Home from "./pages/Home.tsx";
import Login from "./pages/login/Login.tsx";

import {Route,  Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    
  );
}

export default App;
