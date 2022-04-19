import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home/Home"
import {Route, Routes} from "react-router-dom"

function App() {
  return (
   <Routes>
     <Route exact path="/" element={<Home />}/>
   </Routes>
  );
}

export default App;
