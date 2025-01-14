import darkImage from "../assets/moon-svgrepo-com.svg"

export default function Navbar(){
    return (
        <div className="flex justify-between content-between px-12 py-5" style={{ backgroundColor: 'rgb(255, 255, 255, 1)' }}>
            <p className="font-bold text-xl">Where in the world?</p>
            <div className="flex justify-evenly content-center items-center gap-2">
                <img src={darkImage} alt="dark.img" className="h-4 cursor-pointer" />
                <p className="font-bold">Dark Mode</p>
            </div>
        </div>
    )
}