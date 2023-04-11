import React, { useRef } from "react";
import SearchInputFrom from "../../componients/CustumForm/SearchInputFrom";
import NewPost from "../../componients/NewPost";
function Knowledge() {
    return ( 
        <div className="px-36 py-5 box-border">
            <div className="text-center p-10 box-border">
                    <h2 className="uppercase text-3xl text-black font-bold">Kiến thức</h2>
            </div>
            <div className="flex justify-between">
                <div className="w-1/4 pl-5 box-border">
                    <SearchInputFrom />
                    <NewPost />
                </div>
                <div className="w-3/4 pl-10 mb-10 box-border">
                    <div className="grid grid-cols-3 gap-5">
                        <div className="col-span-1 h-80 border border-solid border-stone-300 hover:shadow-2xl cursor-pointer hover:text-blue-800">
                            <div className="h-3/5 relative overflow-hidden">
                                <div className="absolute top-4 w-12 h-12 bg-blue-900 p-1 box-border">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                                        <p className="text-white font-bold">16</p>
                                        <p className="text-sm text-white">Th5</p>
                                    </div>
                                </div>
                                <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" />
                            </div>
                            <div className="h-2/5 py-3 px-5 text-left box-border">
                                <div className="font-bold">
                                    <h2 className="text-base text-black">Người nông dân phải làm sao</h2>
                                </div>
                                <div className="w-10 h-1 bg-stone-200 mb-2 mt-5 "></div>
                                <div className="">
                                    <p className="text-sm">Cach day hon 200 nam , nam van chi rung da duoc biet den va su dung</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 h-80 border border-solid border-stone-300 hover:shadow-2xl cursor-pointer hover:text-blue-800">
                            <div className="h-3/5 relative overflow-hidden">
                                <div className="absolute top-4 w-12 h-12 bg-blue-900 p-1 box-border">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                                        <p className="text-white font-bold">16</p>
                                        <p className="text-sm text-white">Th5</p>
                                    </div>
                                </div>
                                <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" />
                            </div>
                            <div className="h-2/5 py-3 px-5 text-left box-border">
                                <div className="font-bold">
                                    <h2 className="text-base text-black">Người nông dân phải làm sao</h2>
                                </div>
                                <div className="w-10 h-1 bg-stone-200 mb-2 mt-5 "></div>
                                <div className="">
                                    <p className="text-sm">Cach day hon 200 nam , nam van chi rung da duoc biet den va su dung</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 h-80 border border-solid border-stone-300 hover:shadow-2xl cursor-pointer hover:text-blue-800">
                            <div className="h-3/5 relative overflow-hidden">
                                <div className="absolute top-4 w-12 h-12 bg-blue-900 p-1 box-border">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                                        <p className="text-white font-bold">16</p>
                                        <p className="text-sm text-white">Th5</p>
                                    </div>
                                </div>
                                <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" />
                            </div>
                            <div className="h-2/5 py-3 px-5 text-left box-border">
                                <div className="font-bold">
                                    <h2 className="text-base text-black">Người nông dân phải làm sao</h2>
                                </div>
                                <div className="w-10 h-1 bg-stone-200 mb-2 mt-5 "></div>
                                <div className="">
                                    <p className="text-sm">Cach day hon 200 nam , nam van chi rung da duoc biet den va su dung</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 h-80 border border-solid border-stone-300 hover:shadow-2xl cursor-pointer hover:text-blue-800">
                            <div className="h-3/5 relative overflow-hidden">
                                <div className="absolute top-4 w-12 h-12 bg-blue-900 p-1 box-border">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                                        <p className="text-white font-bold">16</p>
                                        <p className="text-sm text-white">Th5</p>
                                    </div>
                                </div>
                                <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" />
                            </div>
                            <div className="h-2/5 py-3 px-5 text-left box-border">
                                <div className="font-bold">
                                    <h2 className="text-base text-black">Người nông dân phải làm sao</h2>
                                </div>
                                <div className="w-10 h-1 bg-stone-200 mb-2 mt-5 "></div>
                                <div className="">
                                    <p className="text-sm">Cach day hon 200 nam , nam van chi rung da duoc biet den va su dung</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 h-80 border border-solid border-stone-300 hover:shadow-2xl cursor-pointer hover:text-blue-800">
                            <div className="h-3/5 relative overflow-hidden">
                                <div className="absolute top-4 w-12 h-12 bg-blue-900 p-1 box-border">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                                        <p className="text-white font-bold">16</p>
                                        <p className="text-sm text-white">Th5</p>
                                    </div>
                                </div>
                                <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" />
                            </div>
                            <div className="h-2/5 py-3 px-5 text-left box-border">
                                <div className="font-bold">
                                    <h2 className="text-base text-black">Người nông dân phải làm sao</h2>
                                </div>
                                <div className="w-10 h-1 bg-stone-200 mb-2 mt-5 "></div>
                                <div className="">
                                    <p className="text-sm">Cach day hon 200 nam , nam van chi rung da duoc biet den va su dung</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 h-80 border border-solid border-stone-300 hover:shadow-2xl cursor-pointer hover:text-blue-800">
                            <div className="h-3/5 relative overflow-hidden">
                                <div className="absolute top-4 w-12 h-12 bg-blue-900 p-1 box-border">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                                        <p className="text-white font-bold">16</p>
                                        <p className="text-sm text-white">Th5</p>
                                    </div>
                                </div>
                                <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" />
                            </div>
                            <div className="h-2/5 py-3 px-5 text-left box-border">
                                <div className="font-bold">
                                    <h2 className="text-base text-black">Người nông dân phải làm sao</h2>
                                </div>
                                <div className="w-10 h-1 bg-stone-200 mb-2 mt-5 "></div>
                                <div className="">
                                    <p className="text-sm">Cach day hon 200 nam , nam van chi rung da duoc biet den va su dung</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Knowledge;