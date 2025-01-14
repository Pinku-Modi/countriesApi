// this page will be used to redirect the user to particular country description
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar.jsx"

export default function CountryDescription() {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar />
            <div>
                <button onClick={() => navigate("/")}>Back</button>
                <div>
                    <img src="" alt="" />
                    <div>
                        <p className="countryName"></p>
                        <p className="countryName"></p>
                        <div>
                            <div>
                                <p>Native Name: Belgie</p>
                                <p>Population: 11,319,511</p>
                                <p>Region: Europe</p>
                                <p>Sub Region: Western Europe</p>
                                <p>Capital: Brussels</p>
                            </div>
                            <div>
                                <p>Top Level Domain: .be</p>
                                <p>Currencies: Euro</p>
                                <p>Languages: Dutch, French, German</p>
                            </div>
                        </div>
                        <div>
                            Border Countries: <span>France</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}