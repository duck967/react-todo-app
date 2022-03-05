import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"

//component file
import TodoContainer from "./functionBased/components/TodoContainer"
import About from "./functionBased/pages/About"
import AboutApp from "./functionBased/pages/AboutApp"
import NotMatch from "./functionBased/pages/NotMatch"
import Navbar from "./functionBased/components/Navbar"


//stylesheet
import "./functionBased/App.css"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer/>}>
        </Route>
        <Route path="/about/about-app/*" element={<AboutApp />}>
        </Route>
        <Route path="/about/*" element={<About />}>
        </Route>
        <Route path="*" element={<NotMatch />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)