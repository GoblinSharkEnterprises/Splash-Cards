import React from "react";
import { Route } from "react-router"; 
import Home from "./routes/Home.js";
import Sets from "./routes/Sets.js";
import CreateSet from "./routes/CreateSet.js";


//setting up route to homepage when access app
const App = () => {
  return (
    //setting up Routes for multiple page (act like a router)
    //when a link is called, it's linked back to this App Router and then app will route the link to the page needed
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Sets" element={<Sets/>}/>
          <Route path="/CreateSet" element={<CreateSet/>}/>
          <Route path="/Sets/set:id" element={<Sets/>}/>
        </Routes>
      </div>
  );
};


export default App;
