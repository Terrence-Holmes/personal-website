import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "./libs/font-awesome/css/font-awesome.css";


import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
  );
}

export default App;
