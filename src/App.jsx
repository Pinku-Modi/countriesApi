import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import CountryDescription from "./pages/CountryDescription.jsx"


export default function countriesApiRoutes(){
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/:name" element={<CountryDescription />} /> 
    </Routes>
  )
}