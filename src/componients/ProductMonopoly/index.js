import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";    
import { Pagination, Navigation } from "swiper";
function ProductMonopoly() {
    return ( 
        <div className="h-full">
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[ Navigation]}
                className="mySwiper h-full"
            >
                <SwiperSlide>
                    <div className="w-full h-full hover:-translate-y-1 transition duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-2xl hover:text-blue-800 border hover:border-stone-300 hover:border-2 border-solid border-stone-100">
                        <div className="h-3/4 bg-black overflow-hidden " >
                            <img src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover"  />
                        </div>
                        <div className="p-4">
                            <a href="" className="font-bold text-sm">BioWISH & AQUA</a>
                            <div className="pt-2 font-bold text-green-700 text-sm"><span>170.000đ</span></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-slate-100 cursor-pointer rounded-sm overflow-hidden shadow-2xl border-stone-200 border-solid border">
                    <div className="h-3/4 bg-black overflow-hidden" >
                        <img src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover"  />
                    </div>
                    <div className="p-4">
                        <a href="" className="font-bold text-sm hover:text-blue-800">BioWISH & AQUA</a>
                        <div className="pt-2 font-bold text-green-700 text-sm"><span>120.000đ</span></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-slate-100 cursor-pointer rounded-sm overflow-hidden shadow-2xl border-stone-200 border-solid border">
                    <div className="h-3/4 bg-black overflow-hidden" >
                        <img src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover"  />
                    </div>
                    <div className="p-4">
                        <a href="" className="font-bold text-sm hover:text-blue-800">BioWISH & AQUA</a>
                        <div className="pt-2 font-bold text-green-700 text-sm"><span>800.000đ</span></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-slate-100 cursor-pointer rounded-sm overflow-hidden shadow-2xl border-stone-200 border-solid border">
                    <div className="h-3/4 bg-black overflow-hidden" >
                        <img src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover"  />
                    </div>
                    <div className="p-4">
                        <a href="" className="font-bold text-sm hover:text-blue-800">BioWISH & AQUA</a>
                        <div className="pt-2 font-bold text-green-700 text-sm"><span>7000.000đ</span></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-slate-100 cursor-pointer rounded-sm overflow-hidden shadow-2xl border-stone-200 border-solid border">
                    <div className="h-3/4 bg-black overflow-hidden" >
                        <img src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover"  />
                    </div>
                    <div className="p-4">
                        <a href="" className="font-bold text-sm hover:text-blue-800">BioWISH & AQUA</a>
                        <div className="pt-2 font-bold text-green-700 text-sm"><span>600.000đ</span></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-slate-100 cursor-pointer rounded-sm overflow-hidden shadow-2xl border-stone-200 border-solid border">
                    <div className="h-3/4 bg-black overflow-hidden" >
                        <img src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover"  />
                    </div>
                    <div className="p-4">
                        <a href="" className="font-bold text-sm hover:text-blue-800">BioWISH & AQUA</a>
                        <div className="pt-2 font-bold text-green-700 text-sm"><span>200.000đ</span></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-slate-100 cursor-pointer rounded-sm overflow-hidden shadow-2xl border-stone-200 border-solid border">
                    <div className="h-3/4 bg-black overflow-hidden" >
                        <img src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover"  />
                    </div>
                    <div className="p-4">
                        <a href="" className="font-bold text-sm hover:text-blue-800">BioWISH & AQUA</a>
                        <div className="pt-2 font-bold text-green-700 text-sm"><span>100.000đ</span></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-slate-100 cursor-pointer rounded-sm overflow-hidden shadow-2xl border-stone-200 border-solid border">
                    <div className="h-3/4 bg-black overflow-hidden" >
                        <img src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover"  />
                    </div>
                    <div className="p-4">
                        <a href="" className="font-bold text-sm hover:text-blue-800">BioWISH & AQUA</a>
                        <div className="pt-2 font-bold text-green-700 text-sm"><span>150.000đ</span></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-slate-100 cursor-pointer rounded-sm overflow-hidden shadow-2xl border-stone-200 border-solid border">
                    <div className="h-3/4 bg-black overflow-hidden" >
                        <img src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover"  />
                    </div>
                    <div className="p-4">
                        <a href="" className="font-bold text-sm hover:text-blue-800">BioWISH & AQUA</a>
                        <div className="pt-2 font-bold text-green-700 text-sm"><span>180.000đ</span></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-slate-100 cursor-pointer rounded-sm overflow-hidden shadow-2xl border-stone-200 border-solid border">
                    <div className="h-3/4 bg-black overflow-hidden" >
                        <img src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover"  />
                    </div>
                    <div className="p-4">
                        <a href="" className="font-bold text-sm hover:text-blue-800">BioWISH & AQUA</a>
                        <div className="pt-2 font-bold text-green-700 text-sm"><span>250.000đ</span></div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
     );
}

export default ProductMonopoly;