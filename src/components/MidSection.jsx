import { useState } from "react"
import SearchBlack from "../assets/searchBlack.png"
import SearchWhite from "../assets/searchWhite.svg"
import { useDispatch } from "react-redux"
import { SET_COUNTRY, SET_REGION } from "../store/countries.slice"
import { useSelector } from "react-redux"

// materialUI import
import Container from "@mui/material/Container"
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"

export default function MidSection() {

    const dispatch = useDispatch()

    const searchInput = useSelector((state) => state.countries.country)
    const regionFromStore = useSelector((state) => state.countries.region)
    let themeFromStore = useSelector((state) => state.theme.themes)
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    function handleSearch(e) {
        dispatch(SET_COUNTRY(e.target.value))
    }

    function handleRegionChange(e) {
        dispatch(SET_REGION(e.target.value))
    }

    return (
        <div>
            {/* <div className={`flex flex-col justify-center gap-3 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid-cols-2 my-3 md:my-6 lg:my-6 w-full`}> */}
            {/* <div className="flex justify-center md:justify-start lg:justify-start">
            <div className={`flex justify-center items-center gap-2 w-5/6 sm:w-3/4 md:w-2/4 lg:w-2/4 min-h-min m-0 sm:ml-6 md:ml-6 lg:ml-6 px-2 py-1 border rounded-md ${themeFromStore === "dark" ? "border-gray-950 bg-black" : "border-slate-200 bg-white"}`}>
            {
                (themeFromStore === "dark") ? <img src={SearchWhite} alt="search icon" className="h-8" /> : <img src={SearchBlack} alt="search icon" className="h-8" />
                    }

                    <input
                        type="search"
                        placeholder="Search for a country..."
                        className={`border-none focus:outline-none font-sans text-base font-[600] h-full w-full ${themeFromStore === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
                        onChange={(e) => { handleSearch(e) }}
                        value={searchInput}
                        />
                        </div>
                    </div> */}

            {/* <div className="w-full flex justify-center p-0 sm:justify-center md:justify-end md:px-6 lg:justify-end lg:px-10"> */}
            {/* <div className="py-1 rounded-md w-5/6 sm:w-3/4 md:w-2/4 lg:w-2/4">
            <select name="region" id="region" className={`focus:outline-none h-full w-full py-2 rounded-md px-2 ${themeFromStore === "dark" ? "bg-black text-white" : "bg-white text-black"}`} onChange={(e) => handleRegionChange(e)} value={regionFromStore}>
            <option value="All_Region">All Regions</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            </select>
            </div> */}
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ paddingY: 3, paddingX: { xs:0, md:5, lg:5 } }}>

                <Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: "flex", justifyContent: { xs:"center", md:"flex-start", lg:"flex-start" }, paddingLeft: 5, alignItems: "center",  }}>
                    <TextField
                        sx={{
                            minWidth: 250,
                            backgroundColor: themeFromStore === "dark" ? "#333" : "white",
                            color: themeFromStore === "dark" ? "white" : "black", 
                            borderRadius: 1,
                            height: 45,
                        }}

                        InputProps={{
                            style: {
                                color: themeFromStore === "dark" ? "white" : "black",
                            },
                        }}
                        
                        InputLabelProps={{
                            style: {
                                color: themeFromStore === "dark" ? "white" : "black",
                            },
                        }}
                        

                        label="Search input"
                        onChange={handleSearch}
                        value={searchInput}
                        variant="outlined"
                        size="small"
                    />
                </Grid>


                <Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: "flex", justifyContent: { xs:"center", md:"flex-end", lg:"flex-end" }, paddingRight: { xs:0, md:5,lg:5 }, alignItems: "center" }}>
                    <Box sx={{ minWidth: 250 }}>
                        <FormControl fullWidth>
                            <InputLabel id="region-select-label">Region</InputLabel>
                            <Select
                                labelId="region-select-label"
                                id="region-select"
                                value={regionFromStore}
                                label="Region"
                                onChange={handleRegionChange}
                                sx={{
                                    backgroundColor: themeFromStore === "dark" ? "#333" : "white",
                                    color: themeFromStore === "dark" ? "white" : "black",
                                    borderRadius: 1,
                                    height: 45,
                                    '& .MuiSelect-icon': {
                                        top: '50%',
                                    }
                                }}
                            >
                                <MenuItem value="All_Region">All Regions</MenuItem>
                                <MenuItem value="Africa">Africa</MenuItem>
                                <MenuItem value="Americas">Americas</MenuItem>
                                <MenuItem value="Asia">Asia</MenuItem>
                                <MenuItem value="Europe">Europe</MenuItem>
                                <MenuItem value="Oceania">Oceania</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            {/* </div> */}
        </div>
    );
}
