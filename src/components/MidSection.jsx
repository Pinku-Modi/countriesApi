import Search from "../assets/search.png"; // Image import

export default function MidSection() {
    return (
        <div className="flex justify-between content-center my-6 w-full ">
            <div className="flex gap-2 border border-neutral-700 bg-white ml-14 w-auto ">
                <img src={Search} alt="search icon" />
                <input type="search" placeholder="Search for a country..." className="bg-white h-full w-full"/>
            </div>
            <div className="mr-14">
                <select name="region" id="region">
                    <option value="America">America</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Asia">Asia</option>
                </select>
            </div>
        </div>
    );
}
