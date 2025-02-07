import darkImage from "../assets/moon-svgrepo-com.svg"
import lightImage from "../assets/sun.svg"
import { useSelector, useDispatch } from "react-redux"
import { SET_THEME } from "../store/theme.slice.js"

// import material UI
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { Box, IconButton } from "@mui/material"

export default function Navbar() {

    const dispatch = useDispatch()
    let themeFromStore = useSelector((state) => state.theme.themes)

    const handleChangeTheme = () => {
        (themeFromStore === "dark") ? dispatch(SET_THEME("light")) : dispatch(SET_THEME("dark"))
    }

    return (
        // <div className={`flex justify-between content-between px-4 sm:px-8 md:px-10 lg:px-12 py-5 ${themeFrromStore === "dark" ? "bg-black text-white" : "bg-white text-black"
        //     }`}>
        //     <p className="font-bold text-lg sm:text-lg md:text-xl lg:text-2xl">Where in the world?</p>
        //     <div className="flex justify-evenly items-center gap-2 h-auto w-max">
        //         {
        //             (themeFrromStore === "dark") ?
        //                 <img s
        //                 rc={darkImage} alt="dark.img" className="h-4 sm:h-5 md:h-6 lg:h-8 cursor-pointer" onClick={handleChangeTheme} /> :
        //                 <img src={lightImage} alt="light.img" className="h-4 sm:h-5 md:h-6 lg:h-8 cursor-pointer" onClick={handleChangeTheme} />
        //         }
        //         <p className="font-bold text-lg sm:text-lg md:text-xl lg:text-2xl lg:gap-4">{themeFrromStore}</p>
        //     </div>
        // </div>

        <AppBar position="static" sx={{ backgroundColor: themeFromStore === "dark" ? "black" : "white", color: themeFromStore === "dark" ? "white" : "black" }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Where in the world?
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', paddingX: 5 }}>
                <IconButton onClick={handleChangeTheme}>
                    <img
                        src={themeFromStore === "dark" ? darkImage : lightImage}
                        alt="theme toggle"
                        style={{ height: '24px', width: '24px' }}
                    />
                </IconButton>
                <Typography variant="h6" >
                    {themeFromStore == "dark" ? "dark" : "light"}
                </Typography>
            </Box>
        </Toolbar>
    </AppBar>
    )
}