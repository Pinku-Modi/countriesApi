import Search from "../assets/search.png"; // Image import

export default function MidSection() {
    return (
        <div className="flex justify-between content-center my-6 w-full ">
            <div className="flex gap-2 bg-white ml-14 w-1/4 min-h-min px-2 py-1">
                <img src={Search} alt="search icon" className="h-8" />
                <input type="search" placeholder="Search for a country..." className="bg-white border-none focus:outline-none font-sans text-base font-[600] h-full w-full" />
            </div>
            <div className="mr-14 px-2 py-1">
                <select name="region" id="region" className="focus:outline-none h-full w-full">
                    <option value="All_Regions" default>All Regions</option>
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
