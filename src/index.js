import React from 'react';
import ReactDOM from 'react-dom';
import Dojo5 from "./functionBased/components/Dojo5"
import { BrowserRouter } from "react-router-dom"

// strict wrapper - activate checks and logs a warning message at runtime - not only for the component but also its descendants -  you’ll be able to see warnings in your DevTools console
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Dojo5 />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)