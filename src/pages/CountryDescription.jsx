import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import backImage from "../assets/left-arrow.svg"

export default function CountryDescription() {
    const { name } = useParams();
    const [country, setCountry] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCountry(name) {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
                setCountry(response.data[0]);
                console.log(response.data[0])
            } catch (error) {
                console.error("Error fetching country data:", error);
            }
        }

        fetchCountry(name);
    }, [name]);

    return (
        <div>
            <Navbar />
            <div>
                <div className="flex h-[36px] w-[90px] justify-center content-center my-3 ml-10 cursor-pointer" onClick={() => navigate("/")}>
                    <img className="" src={backImage} alt="img" />
                    <button className="font-semibold">Back</button>
                </div>

                {country ? (
                    <div className="flex relative mt-16 w-full min-h-min">
                        <img src={country.flags.png} alt={country.name.common} className="absolute left-16 w-1/3 h-[350px]" />
                        <div className="absolute right-16 w-2/4 h-[350px] px-4 py-3">
                            <p className="countryName font-bold text-2xl ">{country.name.common}</p>
                            <div className="flex gap-24 mt-6">
                                <div>
                                    <p><span className="font-semibold text-lg">Native Name:</span> {country.name.nativeName ? Object.values(country.name.nativeName)[0].common : 'N/A'}</p>
                                    <p><span className="font-semibold text-lg">Population:</span> {country.population}</p>
                                    <p><span className="font-semibold text-lg">Region:</span> {country.region}</p>
                                    <p><span className="font-semibold text-lg">Sub Region:</span> {country.subregion}</p>
                                    <p><span className="font-semibold text-lg">Capital:</span> {country.capital ? country.capital[0] : 'N/A'}</p>
                                </div>
                                <div>
                                    <p><span className="font-semibold text-lg">Top Level Domain:</span> {country.tld ? country.tld[0] : 'N/A'}</p>
                                    <p><span className="font-semibold text-lg">Currencies:</span> {country.currencies ? Object.values(country.currencies).map(curr => curr.name).join(', ') : 'N/A'}</p>
                                    <p><span className="font-semibold text-lg">Languages:</span> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
                                </div>
                            </div>
                            <div className="mt-12">
                                <span className="font-semibold text-lg">Border Countries:</span> {country.borders ? country.borders.join(', ') : 'None'}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
