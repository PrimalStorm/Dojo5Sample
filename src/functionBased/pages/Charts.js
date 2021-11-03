import React from "react"
import { Link, useRouteMatch, Route } from "react-router-dom"
import ChartsSingle from "./ChartsSingle"

const Charts = () => {
  const { url, path } = useRouteMatch()
  return (
    <div className="charts__content">
      <ul className="charts__list">
        <li>
          <Link to={`${url}/charts-line`}>Line Chart</Link>
        </li>
        <li>
          <Link to={`${url}/charts-next`}>Bar Chart</Link>
        </li>
      </ul>
      <Route path={`${path}/:slug`}>
        <ChartsSingle />
      </Route>
    </div>
  )
}
export default Charts