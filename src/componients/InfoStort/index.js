import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";    
import { Pagination, Navigation } from "swiper";
import "../../componients/PageHeader/pageHeader.css"
import tom from "../../assets/images/env.jpeg"
import tree from "../../assets/images/tree.jpg"
import nong from "../../assets/images/thucpham.jpeg"
function InfoStort() {
    return ( 
        <div className="w-full px-36 py-20 box-border bg-111">
            <div className="flex justify-between">
                <div className="w-2/5 bg-opacity-80 h-72 p-10 bg-black">
                    <h2 className="text-white font-bold text-left uppercase text-2xl">THÔNG TIN GIA-KHANH™</h2>
                    <div className="mt-2 pl-5 box-border text-stone-100 italic text-left text-base border-l-blue-900 border-l-4 border-solid">
                        <p>Nơi chia sẻ những thông tin mới về các lĩnh vực xung quanh hoạt động nông nghiệp của Việt Nam. Những thông tin xác đáng sẽ được chúng tôi gửi đến các bạn hàng ngày như một tài liệu tham khảo cho chính hoạt động nông nghiệp của mình….</p>
                    </div>
                </div>
                <div className="w-3/5 pl-10 box-border ">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[ Navigation]}
                        className="mySwiper h-full"
                    >
                        <SwiperSlide  >
                            <div className="h-3/5 overflow-hidden" >
                                <img src={tree} className="w-full h-full object-cover"  />
                            </div>
                            <div className="text-left h-2/5">
                                <div className="py-2">
                                    <a href="" className="font-bold text-sm text-white text-base">Cách làm măng xào tổi</a>
                                    <p className="text-stone-300 text-xs">16 tháng Năm, 2019</p>
                                </div>
                                <div className="border border-solid border-stone-300 w-10"></div>
                                <p className="text-white py-2 box-border text-sm">Nơi cho chính hoạt động nông nghiệp của mình….</p>
                            </div>
                        </SwiperSlide>  
                        <SwiperSlide  >
                            <div className="h-3/5 overflow-hidden" >
                                <img src={tom} className="w-full h-full object-cover"  />
                            </div>
                            <div className="text-left h-2/5">
                                <div className="py-2">
                                    <a href="" className="font-bold text-sm text-white text-base">Cách làm măng xào tổi</a>
                                    <p className="text-stone-300 text-xs">16 tháng Năm, 2019</p>
                                </div>
                                <div className="border border-solid border-stone-300 w-10"></div>
                                <p className="text-white py-2 box-border text-sm">Nơi cho chính hoạt động nông nghiệp của mình….</p>
                            </div>
                        </SwiperSlide>  
                        <SwiperSlide  >
                            <div className="h-3/5 overflow-hidden" >
                                <img src={nong} className="w-full h-full object-cover"  />
                            </div>
                            <div className="text-left h-2/5">
                                <div className="py-2">
                                    <a href="" className="font-bold text-sm text-white text-base">Cách làm măng xào tổi</a>
                                    <p className="text-stone-300 text-xs">16 tháng Năm, 2019</p>
                                </div>
                                <div className="border border-solid border-stone-300 w-10"></div>
                                <p className="text-white py-2 box-border text-sm">Nơi cho chính hoạt động nông nghiệp của mình….</p>
                            </div>
                        </SwiperSlide>  
                        <SwiperSlide  >
                            <div className="h-3/5 overflow-hidden" >
                                <img src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover"  />
                            </div>
                            <div className="text-left h-2/5">
                                <div className="py-2">
                                    <a href="" className="font-bold text-sm text-white text-base">Cách làm măng xào tổi</a>
                                    <p className="text-stone-300 text-xs">16 tháng Năm, 2019</p>
                                </div>
                                <div className="border border-solid border-stone-300 w-10"></div>
                                <p className="text-white py-2 box-border text-sm">Nơi cho chính hoạt động nông nghiệp của mình….</p>
                            </div>
                        </SwiperSlide>  
                    </Swiper>
                </div>
            </div>
        </div>
     );
}

export default InfoStort;