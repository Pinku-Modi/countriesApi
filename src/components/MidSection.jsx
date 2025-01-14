import Search from "../assets/search.png"; // Image import

export default function MidSection() {
    return (
        <div className="flex justify-between content-center mx-14 my-6">
            <div className="flex">
                <img src={Search} alt="search icon" />
                <input type="search" placeholder="Search for a country..." className=""/>
            </div>
            <div>
                <select name="region" id="region">
                    <option value="America">America</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Asia">Asia</option>
                </select>
            </div>
        </div>
    );
}
