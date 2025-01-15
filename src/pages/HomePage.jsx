import Navbar from "../components/Navbar.jsx";
import MidSection from "../components/MidSection.jsx";
import HomePageCountries from "../components/HomePageCountries.jsx";
import { useSelector } from "react-redux";

export default function HomePage() {
  const themeFromStore = useSelector((state) => state.theme.themes);
  
  return (
    <div className={themeFromStore === "dark" ? "bg-[#201c1c] text-white" : "bg-[#f6f4f4] text-black"}>
      <Navbar />
      <MidSection />
      <HomePageCountries />
    </div>
  );
}
