// here we are going to fetch the data of the country initially to render and store it in redux
import axios from "axios"

async function inititialFetch(){
    try {
        console.log("Fetching country data...");
        const response = await axios.get("https://restcountries.com/v3.1/all");
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error("Error fetching country data:", error);
    }
}

export default inititialFetch