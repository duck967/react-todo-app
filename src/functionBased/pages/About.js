import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// import { useRouteMatch } from "react-router-dom"

import AboutApp from "./AboutApp"
import SinglePage from "./SinglePage"

const About = () => {
  //console.log(useRouteMatch())
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to="about-app">About App</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":id" element={<SinglePage />} />
        <Route path="about-app" element={<AboutApp />} />
      </Routes>
  </div>
  )
}
export default About