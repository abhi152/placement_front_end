
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Statistic from './components/Statistic';


function App() {
  return (

   <BrowserRouter>

   <Route exact path='/'>
    <Home/>
   </Route>

   <Route path="/res">
    <Statistic/>
   </Route>
   </BrowserRouter>
  );
}

export default App;
