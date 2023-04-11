import React from "react";
import { FaSearch } from "react-icons/fa";
function SearchInputFrom() {
    return ( 
           <div className="w-full relative overflow-hidden">
                <input className="h-10 w-full pl-2 outline-none border-2 focus:border-stone-300 rounded-md" placeholder="Tìm kiếm..." />
                <button className="absolute top-1/2 right-0 h-10 w-12 text-white bg-blue-500 rounded-r-md transform -translate-y-1/2">
                    <FaSearch className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </button>
           </div>
     );
}

export default SearchInputFrom;