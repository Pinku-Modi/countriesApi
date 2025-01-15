import { useState, useEffect } from "react";
import inititialFetch from "../hooks/initialFetch";
import CountriesCard from "./countriesCard";
import { useDispatch, useSelector } from "react-redux"
import { SET_COUNTRIES } from "../store/countries.slice.js"


export default function HomePageCountries() {
    const [countries, setCountries] = useState([])
    const dispatch = useDispatch()
    const countryFromStore = useSelector((state) => state.countries.countries)
    const regionFromStore = useSelector((state) => state.countries.region)
    const searchedCountryFromStore = useSelector((state) => state.countries.country)
    let themeFromStore = useSelector((state) => state.theme.themes)
    // console.log(countryFromStore)
    // console.log(regionFromStore)
    // console.log(searchedCountryFromStore)

    useEffect(() => {
        async function fetchCountries() {
            try {
                if (countryFromStore.length === 0) {
                    const countriesData = await inititialFetch()

                    if (countriesData.length !== 0) setCountries(countriesData)
                    dispatch(SET_COUNTRIES(countriesData))
                    return
                }

                let countryFilter = countryFromStore

                if (regionFromStore !== "All_Region") {
                    countryFilter = countryFromStore.filter((country)=>{
                        return country.region.toLowerCase() === regionFromStore.toLowerCase()
                    })
                }

                if(searchedCountryFromStore!==""){
                    const searchInput = searchedCountryFromStore.toLowerCase()
                    countryFilter = countryFilter.filter((country)=>{
                       return country.name?.common?.toLowerCase().includes(searchInput)
                    })
                }

                setCountries(countryFilter)

            } catch (error) {
                console.log(error)
            }
        }
        fetchCountries()
    }, [countryFromStore, regionFromStore, searchedCountryFromStore])

    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-5 md:gap-6 lg:gap-8 mx-4 my-5 {${themeFromStore === "dark" ? "text-white bg-[#201c1c]" : "bg-[rgba(250,250,250,1)] text-black" }`} >
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