import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"


export default function countriesApiRoutes(){
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
    </Routes>
  )
}