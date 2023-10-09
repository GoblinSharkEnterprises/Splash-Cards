import React from "react";
import { Route, Routes } from "react-router"; 
import Home from "./routes/Home.js";
import Sets from "./routes/Sets.js";
import CreateSet from "./routes/CreateSet.js";
import ViewThisSet from "./routes/ViewThisSet.js";

//setting up route to homepage when access app
const App = () => {
  return (
    //setting up Routes for multiple page (act like a router)
    //when a link is called, it's linked back to this App Router and then app will route the link to the page needed
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/sets" element={<Sets/>}/>
        <Route path="/createset" element={<CreateSet/>}/>
        <Route path="/sets/set/:id" element={<ViewThisSet/>}/>
      </Routes>
  );
};


export default App;
