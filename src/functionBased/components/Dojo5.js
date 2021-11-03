import React from "react"

// stylesheet
import '../App.css';

// router and pages
import { Route, Switch } from "react-router-dom"
import Charts from "../pages/Charts"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import Navbar from "./Navbar"

const Dojo5 = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <div style={{backgroundColor: 'black'}} >
                <img src="/dojo-logo-no-background-final-blue-ring.png" alt="dojo logo" />
              </div>
              <h1>----------------------------------</h1>
              <h1>Access Charts Through Menu</h1>
            </div>
          </div>
        </Route>
        <Route path="/charts">
          <Charts />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  )
}
export default Dojo5