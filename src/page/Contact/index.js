import React from "react";
import PageHeader from "../../componients/PageHeader";
import { Image,Input,Space } from "antd";
import { MinusOutlined , GitlabOutlined } from "@ant-design/icons"
import { FaMapMarkerAlt, FaPhone  , FaMailBulk } from "react-icons/fa";
import logo from "../../assets/images/logo.png"
function Contact() {
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
            icons:FaMailBulk,
            description: "khangpdk2000@gmail.com" 
        },
    ]
    return ( 
        <div className="Contact">
            <PageHeader menuItems={"Liên hệ"} />
            <div className="px-36 py-10 box-border">
                <div className="flex justify-between">
                    <div className="w-1/2 px-4 box-border">
                    <iframe 
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3924.089060186321!2d105.30157651479769!3d10.414501192567746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDI0JzUyLjIiTiAxMDXCsDE4JzEzLjYiRQ!5e0!3m2!1svi!2s!4v1680443047356!5m2!1svi!2s" 
                        allowfullscreen=""                         loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="w-1/2 px-0 box-border">
                        <div className="flex">
                            <div className="logo w-1/5 pt-3 pr-3 box-border">
                                <Image src={logo}></Image>
                            </div>
                            <div className="w-4/5 pl-3 box-border">
                                <div>
                                    <ul className=" text-lef">
                                        {contacts && contacts.map((contact)=>{
                                            return (
                                                <li className="flex items-start text-left my-4 w-10/12">
                                                    <contact.icons className="mr-4 text-black"></contact.icons>
                                                    <a className="text-black text-sm hover:text-green-500" href="#">{contact.description}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="form text-center my-2">
                            <h2 className="uppercase text-3xl font-bold text-stone-900">Liên hệ với chúng tôi</h2>
                            <div className="text-center my-2">
                                <Space className="text-4xl text-blue-800">
                                    <MinusOutlined />
                                    <GitlabOutlined />
                                    <MinusOutlined />
                                </Space>
                            </div>
                            <div className="form mt-4">
                                <form>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input placeholder="Họ và tên" className="h-10 border-stone-400 rounded-sm" />
                                        <Input placeholder="Email" className="h-10 border-stone-400 rounded-sm" />
                                        <Input placeholder="Số điện thoại" className="h-10 border-stone-400 rounded-sm" />
                                        <Input placeholder="Địa chỉ" className="h-10 border-stone-400 rounded-sm" />
                                    </div>
                                    <div className="h-40">
                                        <Input.TextArea  style={{height: 120}} placeholder="Lời nhấn" className="min-h-max mt-4 border-stone-400 rounded-sm" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}
export default Contact;