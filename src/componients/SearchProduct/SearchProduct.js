import React from "react";
import { CloseCircleOutlined,SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"
function SearchProduct() {
    return ( 
        <div className="fixed w-screen h-screen bg-black">
            <div className="absolute text-white hover:text-slate-300 text-3xl top-4 cursor-pointer right-4">
                <CloseCircleOutlined />
            </div>
            <div className="absolute top-1/2 h-16 w-1/2 rounded-3xl  overflow-hidden left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <div className="w-full h-full relative z-10">
                    <Input className="h-full text-slate-50 bg-zinc-600 focus:border-none outline-none border-0 w-full text-2xl font-bold placeholder:text-slate-50"  placeholder="Tìm kiếm..." />
                    <SearchOutlined className="absolute text-4xl text-white top-1/2 right-2 -translate-y-1/2 transform text-black" />
                </div>
            </div>
        </div>
     );
}

export default SearchProduct;