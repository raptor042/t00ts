import DownArrowIcon from "@iconscout/react-unicons/icons/uil-arrow-down"
import SearchIcon from "@iconscout/react-unicons/icons/uil-search-alt"

export default function SearchBar() {
    return (
        <div className="flex flex-row items-center justify-between bg-gray-200 shadow-inner w-full p-4 rounded-md">
            <div className="flex flex-row justify-start items-center justify-self-start space-x-2">
                <div className="flex justify-center items-center animate-pulse">
                    <SearchIcon size={32} color="#000"/>
                </div>
                <div className="flex justify-center items-center">
                <span className="font-mono font-bold text-xl text-black">Search Tokens....</span>
                </div>
            </div>
            <div className="justify-self-end animate-bounce">
                <DownArrowIcon size={32} color="#000"/>
            </div>
        </div>
    )
}