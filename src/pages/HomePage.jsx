import Navbar from "../components/Navbar.jsx"
import MidSection from "../components/MidSection.jsx"
import HomePageCountries from "../components/HomePageCountries.jsx"

export default function HomePage(){
    return (
        <div className="bg-[rgba(250,250,250,1)]">
            <Navbar />
            <MidSection />
            <HomePageCountries />
        </div>
    )
}