import { Route } from "react-router-dom";
import React from 'react';
 
import Home from "./components/Home";
import AvailableHere from "./components/AvailableHere";

const AppRouters = () => (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/available-here" exact component={AvailableHere} />
  </div>
);

export default AppRouters;