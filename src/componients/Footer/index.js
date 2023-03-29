import React from "react";
import { List, Input } from "antd"
import logo from "../../assets/images/logo.png"
import { MailOutlined} from "@ant-design/icons"
import { FaMapMarkerAlt, FaPhone , FaMailBulk } from "react-icons/fa";
import Social from "../Social";
function Footer() {
    const contacts = [
        {
            icons: FaMapMarkerAlt,
            description: "169-Tân Thạnh-Tân Long-Thanh Bình-Đồng Tháp" 
        },
        {
            icons: FaPhone,
            description: "0925535027" 
        },
        {
            icons: FaMailBulk,
            description: "khangpdk2000@gmail.com" 
        },
    ]
    const dirProducts = [
        {
            name: "Thực phẩm"
        },
        {
            name: "Thủy sản"
        },
        {
            name: "Nông nghiệp"
        },
        {
            name: "Chăn nuôi"
        },
        {
            name: "Môi trường"
        },
    ]
    const menu = [
        {
            name: 'Trang chủ'
        },
        {
            name: 'Giới thiệu'
        },
        {
            name: 'Cửa hàng'
        },
        {
            name: 'Kiến thức'
        },
        {
            name: 'Liên hệ'
        },
    ]
    return ( 
        <>
            <div className="container bg-stone-600 min-h-fit px-36 py-6 box-border text-white">
                <div className="h-full flex flex-grow">
                    <div className="basis-[28.5714286%] text-left">
                        <div className="">
                        <img src={logo} width={200} height={150}></img>
                        </div>
                        <div>
                            <ul className=" text-lef">
                                {contacts && contacts.map((contact)=>{
                                    return (
                                        <li className="flex items-start text-left my-4 w-10/12">
                                            <contact.icons className="mr-4 text-white"></contact.icons>
                                            <a className="text-stone-300 text-sm hover:text-green-500" href="#">{contact.description}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="basis-[14.2857143%] text-left">
                        <div className="uppercase font-bold text-lg py-5">Sản phẩm</div>
                        <ul>
                            {dirProducts && dirProducts.map((dir)=>{
                                return (
                                    <li className="py-2 text-stone-300">
                                        <a className="hover:text-green-500 text-sm" href="#">{dir.name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    
                    <div className="basis-[14.2857143%] text-left">
                        <div className="uppercase font-bold text-lg py-5">Danh mục</div>
                        <ul>
                            {menu && menu.map((menu)=>{
                                return (
                                    <li className="py-2 text-stone-300">
                                        <a className="hover:text-green-500 text-sm" href="#">{menu.name}</a>
                                    </li>
                                )
                            })}
            
                        </ul>
                    </div>
                    
                    <div className="basis-[14.2857143%] text-left">
                        <div className="uppercase font-bold text-lg py-5">Dịch vụ</div>
                        <ul>
                            {dirProducts && dirProducts.map((dir)=>{
                                return (
                                    <li className="py-2 text-stone-200">
                                        <a className="hover:text-green-500 text-sm" href="#">{dir.name}</a>
                                    </li>
                                )
                            })}
                
                        </ul>
                    </div>
                    
                    <div className="basis-[28.5714286%] text-left">
                        <div className="uppercase text-lg font-bold py-5">Đăng ký</div>
                        <p className="text-sm py-2 text-stone-200">Đăng ký để nhận được thông tin mới từ chúng tôi</p>
                        <div className="relative h-10">
                            <Input className="h-full border-none rounded-sm" placeholder="Email..."></Input>
                            <MailOutlined className="absolute top-1/2 right-4 transform -translate-y-1/2 text-green-700 cursor-pointer z-10"></MailOutlined>
                        </div>
                        {/* <Social /> */}
                    </div>
                </div>
            </div>
            <div className="h-10 flex bg-black justify-center items-center">
                <span className="text-stone-200">@Bản quyền thuộc về. Thiết kế website PDK</span>
            </div>
        </>
     );
}

export default Footer;