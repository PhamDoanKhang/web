import React from "react";
function TitlePage( {title} ) {
    return ( 
        <div className="py-10 px-36 box-border relative">
            <div className="w-full h-full border-2 border-solid border-stone-400">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                    <p className="uppercase px-4 text-blue-900 text-4xl font-bold bg-white">{title}</p>
                </div>
            </div>
        </div>
     );
}
export default TitlePage;