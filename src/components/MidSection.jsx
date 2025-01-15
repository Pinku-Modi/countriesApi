import Search from "../assets/search.png"; // Image import
import { useDispatch } from "react-redux"
import { SET_COUNTRY, SET_REGION } from "../store/countries.slice";
import { useSelector } from "react-redux";

export default function MidSection() {

    const dispatch = useDispatch()

    const searchInput = useSelector((state) => state.countries.country)
    const regionFromStore = useSelector((state) => state.countries.region)
    
    function handleSearch(e){
        dispatch(SET_COUNTRY(e.target.value))
    }

    function handleRegionChange(e){
        dispatch(SET_REGION(e.target.value))
    }

    return (
        <div className="flex justify-between content-center my-6 w-full ">
            <div className="flex gap-2 bg-white ml-14 w-1/4 min-h-min px-2 py-1 border border-slate-200 rounded-md">
                <img src={Search} alt="search icon" className="h-8" />
                <input type="search" placeholder="Search for a country..." className="bg-white border-none focus:outline-none font-sans text-base font-[600] h-full w-full" onChange={(e)=>{handleSearch(e)}} value={searchInput}/>
            </div>
            <div className="mr-14 py-1 rounded-md w-1/6">
                <select name="region" id="region" className="focus:outline-none h-full w-full rounded-md px-2 text-black" onChange={(e)=>handleRegionChange(e)} value={regionFromStore}>
                    <option value="All_Region">All Regions</option>
                    <option value="America">America</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    );
}
