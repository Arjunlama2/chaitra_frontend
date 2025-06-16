import React from "react";
import Sidebar from "./Sidebar";
import Header from "./componet/Header";
import Home from "./page/home/Home";
import { Route, Routes } from "react-router";
import Login from "./page/login";
import Form from "./page/Form";




function App() {

  return (
    <>
<Routes>
<Route path="/" element={ <Home/>}/>
<Route path="/login" element={ <Login/>}/>
<Route path="/form" element={ <Form/>}/>
{/* <Route path="/about" element={<div>This is about page</div>}/> */}
</Routes>
    
 
    </>
  );
}

export default App;
