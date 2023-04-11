import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";    
import { Pagination, Navigation } from "swiper";
import { FaStar,FaRegStar } from "react-icons/fa"
import { Breadcrumb } from "antd";
function CommentUser() {
    return ( 
        <div className="h-80 w-full">
            <Swiper
                slidesPerView={1}
                // spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[ Navigation]}
                className="mySwiper h-full"
            >
                <SwiperSlide className="bg-transparent w-full h-full cursor-grabbing">
                    <div className="w-full h-full bg-black bg-opacity-60 px-36 py-20 box-border relative">
                        <div className="w-2/3 h-2/3 absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="text-white flex justify-center mb-4">
                                   <div className="flex text-green-500">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStar />
                                   </div>
                            </div>
                            <div className="flex">
                                <div className="h-24 w-1/6">
                                    <div className="w-24 h-24 overflow-hidden rounded-cirle bg-white">
                                        <img src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" className="h-full object-cover"></img>
                                    </div>
                                </div>
                                <div className="text-stone-300 w-5/6">
                                    <p className="text-xl italic text-left font-medium">Chúng tôi tự hào là doanh nghiệp đem đến những giải pháp ứng dụng công nghệ vi sinh tiên tiến nhất của Mỹ một cách độc quyền; đảm bảo chất lượng cho nguồn lương thực tại Việt Nam…</p>
                                    <Breadcrumb
                                            className="my-4"
                                            separator={<span className="text-white">/</span>}
                                            items={[
                                                {
                                                    title: <span className="font-bold text-white">Ronadlo Jack</span>
                                                },
                                                {
                                                    title: <span className="text-stone-300">Facebook</span>
                                                }
                                            ]}
                                    />
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-transparent w-full h-full cursor-grabbing">
                    <div className="w-full h-full bg-black bg-opacity-60 px-36 py-20 box-border relative">
                        <div className="w-2/3 h2/3 absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="text-white flex justify-center mb-4">
                                   <div className="flex text-green-500">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStar />
                                   </div>
                            </div>
                            <div className="flex">
                                <div className="h-24 w-1/6">
                                    <div className="w-24 h-24 overflow-hidden rounded-cirle bg-white">
                                        <img src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" className="h-full object-cover"></img>
                                    </div>
                                </div>
                                <div className="text-stone-300 w-5/6">
                                    <p className="text-xl italic text-left font-medium">Chúng tôi tự hào là doanh nghiệp đem đến những giải pháp ứng dụng công nghệ vi sinh tiên tiến nhất của Mỹ một cách độc quyền; đảm bảo chất lượng cho nguồn lương thực tại Việt Nam…</p>
                                    <Breadcrumb
                                            className="my-4"
                                            separator={<span className="text-white">/</span>}
                                            items={[
                                                {
                                                    title: <span className="font-bold text-white">Ronadlo Jack</span>
                                                },
                                                {
                                                    title: <span className="text-stone-300">Facebook</span>
                                                }
                                            ]}
                                    />
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-transparent w-full h-full cursor-grabbing">
                    <div className="w-full h-full bg-black bg-opacity-60 px-36 py-20 box-border relative">
                        <div className="w-2/3 h2/3 absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="text-white flex justify-center mb-4">
                                   <div className="flex text-green-500">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStar />
                                   </div>
                            </div>
                            <div className="flex">
                                <div className="h-24 w-1/6">
                                    <div className="w-24 h-24 overflow-hidden rounded-cirle bg-white">
                                        <img src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" className="h-full object-cover"></img>
                                    </div>
                                </div>
                                <div className="text-stone-300 w-5/6">
                                    <p className="text-xl italic text-left font-medium">Chúng tôi tự hào là doanh nghiệp đem đến những giải pháp ứng dụng công nghệ vi sinh tiên tiến nhất của Mỹ một cách độc quyền; đảm bảo chất lượng cho nguồn lương thực tại Việt Nam…</p>
                                    <Breadcrumb
                                            className="my-4"
                                            separator={<span className="text-white">/</span>}
                                            items={[
                                                {
                                                    title: <span className="font-bold text-white">Ronadlo Jack</span>
                                                },
                                                {
                                                    title: <span className="text-stone-300">Facebook</span>
                                                }
                                            ]}
                                    />
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </SwiperSlide>
                
                
            </Swiper>
        </div>
     );
}

export default CommentUser;