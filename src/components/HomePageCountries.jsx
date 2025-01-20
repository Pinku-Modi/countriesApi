import { useState, useEffect } from "react";
import inititialFetch from "../hooks/initialFetch";
import CountriesCard from "./countriesCard";
import { useDispatch, useSelector } from "react-redux";
import { SET_COUNTRIES } from "../store/countries.slice.js";

// Material UI imports
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider, useColorScheme } from "@mui/material/styles"

export default function HomePageCountries() {
  const [countries, setCountries] = useState([]);
  const dispatch = useDispatch();
  const countryFromStore = useSelector((state) => state.countries.countries);
  const regionFromStore = useSelector((state) => state.countries.region);
  const searchedCountryFromStore = useSelector((state) => state.countries.country);
  let themeFromStore = useSelector((state) => state.theme.themes);

  const { mode, setMode } = useColorScheme() // materialUI component -> for themes settings

  useEffect(() => {
    async function fetchCountries() {
      try {
        if (countryFromStore.length === 0) {
          const countriesData = await inititialFetch();
          if (countriesData.length !== 0) setCountries(countriesData);
          dispatch(SET_COUNTRIES(countriesData));
          return;
        }

        let countryFilter = countryFromStore;

        if (regionFromStore !== "All_Region") {
          countryFilter = countryFromStore.filter((country) => {
            return country.region.toLowerCase() === regionFromStore.toLowerCase();
          });
        }

        if (searchedCountryFromStore !== "") {
          const searchInput = searchedCountryFromStore.toLowerCase();
          countryFilter = countryFilter.filter((country) => {
            return country.name?.common?.toLowerCase().includes(searchInput);
          });
        }

        setCountries(countryFilter);

      } catch (error) {
        console.log(error);
      }
    }
    fetchCountries();
  }, [countryFromStore, regionFromStore, searchedCountryFromStore]);

  return (
    // <div className={`mx-4 my-5 ${themeFromStore === "dark" ? "text-white bg-[#201c1c]" : "bg-[rgba(250,250,250,1)] text-black"}`}>
    <Container >
      {countries.length !== 0 ? (
        <Grid container spacing={3}>
          {countries.map((country, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CountriesCard
                image={country.flags.png}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital ? country.capital[0] : "N/A"}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>Loading...</div>
      )}
    </Container>
    // </div>
  );
}
