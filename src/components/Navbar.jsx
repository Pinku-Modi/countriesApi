import darkImage from "../assets/moon-svgrepo-com.svg"
import lightImage from "../assets/sun.svg"
import { useSelector, useDispatch } from "react-redux"
import { SET_THEME } from "../store/theme.slice.js"

export default function Navbar() {

    const dispatch = useDispatch()
    let themeFrromStore = useSelector((state) => state.theme.themes)

    const handleChangeTheme = () => {
        (themeFrromStore === "dark") ? dispatch(SET_THEME("light")) : dispatch(SET_THEME("dark"))
    }

    return (
        <div className={`flex justify-between content-between px-12 py-5 ${themeFrromStore === "dark" ? "bg-black text-white" : "bg-white text-black"
            }`}>
            <p className="font-bold text-2xl">Where in the world?</p>
            <div className="flex justify-evenly content-center items-center gap-2 h-max w-max">
                {
                    (themeFrromStore === "dark") ?
                        <img src={darkImage} alt="dark.img" className="h-8 cursor-pointer" onClick={handleChangeTheme} /> :
                        <img src={lightImage} alt="light.img" className="h-8 cursor-pointer" onClick={handleChangeTheme} />
                }
                <p className="font-bold text-lg">{themeFrromStore}</p>
            </div>
        </div>
    )
}