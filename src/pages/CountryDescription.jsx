import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import backBlackImage from "../assets/left-arrow-Black.svg";
import backWhiteImage from "../assets/left-arrow-White.svg";


// materialUI import
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function CountryDescription() {
    const { name } = useParams();
    const [country, setCountry] = useState(null);
    const navigate = useNavigate();
    const themeFromStore = useSelector((state) => state.theme.themes);

    useEffect(() => {
        async function fetchCountry(name) {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
                setCountry(response.data[0]);
                // console.log(response.data[0]);
            } catch (error) {
                console.error("Error fetching country data:", error);
            }
        }

        fetchCountry(name);
    }, [name]);

    const classBackground = themeFromStore === "dark" ? "bg-[#201c1c] text-white" : "bg-[rgba(245,245,245,1)] text-black";
    const classButton = themeFromStore === "dark" ? "bg-black text-white " : "bg-white text-black";

    return (
        <div className={`min-h-screen lg:overflow-y-hidden ${classBackground}`}>
            <Navbar />
            <div>
                <div className={`flex h-[36px] w-[90px] justify-center items-center my-3 cursor-pointer ml-4 p-2 gap-2 rounded-md ${classButton}`} onClick={() => navigate("/")}>
                    {themeFromStore === "dark" ? <img src={backWhiteImage} alt="Back" className="h-full" /> : <img src={backBlackImage} alt="Back" className="h-full" />}
                    <button className="font-semibold">Back</button>
                </div>
                {country ? (
                    /* 
                    <div className="grid grid-cols-1 justify-center sm:flex sm:justify-center md:flex md:justify-evenly md:flex-wrap lg:flex lg:justify-evenly lg:flex-wrap mt-6 sm:mt-10 md:mt-13 lg:mt-16 w-full">
                        <img src={country.flags.png} alt={country.name.common} className="w-full sm:w-2/4 md:w-1/3 lg:w-1/3 px-4 max-w-full" />

                        <div className={`grid grid-cols-1 w-full md:w-2/4 lg:w-2/4 min-h-min px-4 py-3 ${classBackground}`}>
                            <p className="countryName font-bold text-2xl sm:text-3xl">{country.name.common}</p>
                            <div className="grid grid-cols-1 justify-between sm:flex sm:gap-20 md:flex md:gap-22 lg:flex lg:gap-24 truncate mt-6">
                                <div>
                                    <p className="truncate"><span className="font-semibold text-base md:text-lg lg:text-lg">Native Name:</span> {country.name.nativeName ? Object.values(country.name.nativeName)[0].common : ''}</p>
                                    <p className="truncate"><span className="font-semibold text-base md:text-lg lg:text-lg">Population:</span> {country.population}</p>
                                    <p className="truncate"><span className="font-semibold text-base md:text-lg lg:text-lg">Region:</span> {country.region}</p>
                                    <p className="truncate"><span className="font-semibold text-base md:text-lg lg:text-lg">Sub Region:</span> {country.subregion}</p>
                                    <p className="truncate"><span className="font-semibold text-base md:text-lg lg:text-lg">Capital:</span> {country.capital ? country.capital[0] : ''}</p>
                                </div>
                                <div>
                                    <p className="truncate"><span className="font-semibold text-base md:text-lg lg:text-lg">Top Level Domain:</span> {country.tld ? country.tld[0] : 'N/A'}</p>
                                    <p className="truncate"><span className="font-semibold text-base md:text-lg lg:text-lg">Currencies:</span> {country.currencies ? Object.values(country.currencies).map(curr => curr.name).join(', ') : ''}</p>
                                    <p className="truncate"><span className="font-semibold text-base md:text-lg lg:text-lg">Languages:</span> {country.languages ? Object.values(country.languages).join(', ') : ''}</p>
                                </div>
                            </div>
                            <div className="mt-12 truncate">
                                <span className="font-semibold text-base md:text-lg lg:text-lg">Border Countries:</span> {country.borders ? country.borders.join(', ') : 'None'}
                            </div>
                        </div>
                    </div> */

                    //  materialUI implementation
                    < div >
                    < Fragment >
                        <CssBaseline />
                        <Container maxWidth="sm">
                            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
                        </Container>
                    </Fragment>
                    </div>
                

            ) : (
            <p>Loading...</p>
                )}
        </div>
        </div >
    );
}
