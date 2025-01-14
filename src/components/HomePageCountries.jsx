import { useState, useEffect } from "react";
import inititialFetch from "../hooks/initialFetch";
import CountriesCard from "./countriesCard";
import { useDispatch } from "react-redux"
import { SET_COUNTRIES } from "../store/countries.slice.js"


export default function HomePageCountries() {
    const [countries, setCountries] = useState([])
    const dispatch= useDispatch()

    useEffect(() => {
        async function fetchCountries() {
            const countriesData = await inititialFetch()

            if (countriesData.length !== 0) setCountries(countriesData)
            dispatch(SET_COUNTRIES(countriesData))
        }
        fetchCountries()
    }, [])

    return (
        <div className="grid grid-cols-4 gap-3 mx-4 my-5 bg-[rgba(250,250,250,1)]" >
            {countries.length !== 0 ? (
                countries.map((country, index) => (
                    <CountriesCard key={index} image={country.flags.png} name={country.name.common} population={country.population} region={country.region} capital={country.capital ? country.capital[0] : "N/A"} />
                ))
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}