export default function CardCountries(props) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mx-auto my-4 max-w-xs h-[300px]">
            <div className="relative w-full h-[120px]">
                <img 
                    src={props.image} 
                    alt={props.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            <div className="p-4 h-[180px] overflow-hidden">
                <p className="font-semibold text-lg truncate">{props.name}</p>
                <p className="text-sm text-gray-600">Population: {props.population.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Region: {props.region}</p>
                <p className="text-sm text-gray-600">Capital: {props.capital}</p>
            </div>
        </div>
    );
}
