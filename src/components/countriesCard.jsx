import { useNavigate } from "react-router-dom";

export default function CardCountries(props) {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mx-auto my-4 max-w-sm w-full flex flex-col">
            <div className="relative w-full h-[180px]">
                <img
                    src={props.image}
                    alt={props.name}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <p className="font-semibold text-lg truncate cursor-pointer hover:underline mb-3" onClick={() => navigate(`/${props.name}`)}>
                    {props.name}
                </p>
                <p className="text-sm text-gray-900">
                    <span className="font-semibold">Population:</span> {props.population.toLocaleString()}
                </p>
                <p className="text-sm text-gray-900">
                    <span className="font-semibold">Region:</span> {props.region}
                </p>
                <p className="text-sm text-gray-900">
                    <span className="font-semibold">Capital:</span> {props.capital}
                </p>
            </div>
        </div>
    );
}
