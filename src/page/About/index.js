import React from "react";
import PageHeader from "../../componients/PageHeader"
import { MinusOutlined , GitlabOutlined } from "@ant-design/icons"
import {  Space } from "antd"
import Logo from "../../assets/images/logo.png"
function About() {
    return ( 
        <div className="About">
            <PageHeader menuItems={`Giới Thiệu`}  />
            <div className="container px-36 py-6 box-border via-gray-400">
                <div className="font-bold my-8 text-center">
                    <Space className="flex justify-center">
                        <img src={Logo} className="w-48 h-auto" />
                        {/* <h1 className="text-center text-5xl text-yellow-500 uppercase">GIA</h1> */}
                        {/* <h1 className="text-center text-5xl text-green-600 uppercase">KHÁNH</h1> */}
                    </Space>
                    <div className="text-center my-4">
                        <Space className="text-4xl text-blue-800">
                            <MinusOutlined />
                            <GitlabOutlined />
                            <MinusOutlined />
                        </Space>
                    </div>
                    <div className="text-center text-base font-medium text-stone-500 box-border px-80 leading-8 tracking-widest">
                        <span>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
                        </span>
                    </div>
                </div>
                <div className="content box-border grid grid-cols-4 grid-rows-2"> 
                    <div className="col-span-1 row-span-2">
                        <div className="p-4 box-border ">
                            <div className="overflow-hidden w-full my-2 flex justify-center">
                                <img className="w-auto h-32 object-center" src="https://tse3.mm.bing.net/th?id=OIP.fmJC4uVRAkH8W3bYe3yHfwHaGf&pid=Api&P=0" />
                            </div>
                            <div className="font-bold text-xl capitalize">
                                <span>New Features</span>
                            </div>
                            <div className="text-stone-500 text-sm py-2 tracking-wide box-border">
                                <span>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
                                </span>
                            </div>
                        </div>
                        <div className="p-4 box-border ">
                            <div className="overflow-hidden w-full flex my-2 justify-center">
                                <img className="w-auto h-32 object-center" src="https://tse3.mm.bing.net/th?id=OIP.fmJC4uVRAkH8W3bYe3yHfwHaGf&pid=Api&P=0" />
                            </div>
                            <div className="font-bold text-xl capitalize">
                                <span>New Features</span>
                            </div>
                            <div className="text-stone-500 text-sm py-2 tracking-wide box-border">
                                <span>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
                                </span>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-span-2 row-span-2 h-full p-10 overflow-hidden box-border">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.fmJC4uVRAkH8W3bYe3yHfwHaGf&pid=Api&P=0" className="object-center h-full w-auto"></img>
                    </div>
                    <div className="col-span-1 row-span-2">
                        <div className="p-4 box-border ">
                            <div className="overflow-hidden w-full my-2 flex justify-center">
                                <img className="w-auto h-32 object-center" src="https://tse3.mm.bing.net/th?id=OIP.fmJC4uVRAkH8W3bYe3yHfwHaGf&pid=Api&P=0" />
                            </div>
                            <div className="font-bold text-xl capitalize">
                                <span>New Features</span>
                            </div>
                            <div className="text-stone-500 text-sm py-2 tracking-wide box-border">
                                <span>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
                                </span>
                            </div>
                        </div>
                        <div className="p-4 box-border ">
                            <div className="overflow-hidden w-full my-2 flex justify-center">
                                <img className="w-auto h-32 object-center" src="https://tse3.mm.bing.net/th?id=OIP.fmJC4uVRAkH8W3bYe3yHfwHaGf&pid=Api&P=0" />
                            </div>
                            <div className="font-bold text-xl capitalize">
                                <span>New Features</span>
                            </div>
                            <div className="text-stone-500 text-sm py-2 tracking-wide box-border">
                                <span>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
                                </span>
                            </div>
                        </div>
                       
                    </div>

                </div>
            </div>
        </div>
     );
}

export default About;