import React from "react";
import Sidebar from "./Sidebar";
import Header from "./componet/Header";
import Home from "./page/home/Home";
import { Route, Routes } from "react-router";
import Login from "./page/login";



function App() {

const userdetails={
  name:"Skill spark",
  image:"public/icon"
}
  return (
    <>
<Routes>
<Route path="/" element={ <Home/>}/>
<Route path="/login" element={ <Login/>}/>
{/* <Route path="/about" element={<div>This is about page</div>}/> */}
</Routes>
    
 
    </>
  );
}

export default App;
