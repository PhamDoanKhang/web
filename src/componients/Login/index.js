import React, { useRef, useState } from "react";
import { Input, Button } from "antd"
import { UserOutlined,LockOutlined,MailOutlined,SyncOutlined } from "@ant-design/icons"
import Social from "../Social";
import image from "../../assets/images/image.svg"
import "./Login.css"
function Login() {
    const [toggle,setToggle] = useState(true);
    const login = useRef()
    const HandelToggle = ()=>{setToggle(!toggle)}
    return ( 
        <div className="relative inset-0 w-screen h-screen box-border" >
            <div className="container h-full flex justify-between">
                <div className="w-1/2 box-border overflow-hidden">
                    <div className="w-full h-full bg-blue-600 rounded-br-full">
                            <div className="py-20 text-white text-center items-center">
                                <h2 className="font-bold px-0 py-5 text-2xl">New here ?</h2>
                                <p>Lorem ipsum, dolor sit amet consettetur adipisicing elit.</p>
                                <p className="pt-2 pb-4">Debitis, ex ration. Aliquid!</p>
                                <Button type="ghost" onClick={HandelToggle} className="text-white font-bold h-10 px-10 rounded-3xl border-2 border-red-50">{toggle ? "LOGIN" : "SIGN UP" }</Button>
                                <div className="relative p-6 box-border mt-8">
                                    <img src={image} className="absolute right-0" width={500} height={500}></img>
                                </div>
                            </div>
                    </div>             
                </div>
                <div className="w-1/2 p-48 to-blue-50 relative">
                    {toggle ?
                        <div className="container" ref={login}>
                            <h2 className="text-3xl font-bold mb-5">Sign in</h2>
                            <form className="mb-5">
                                <div className="w-full h-12 mb-4 rounded-3xl overflow-hidden bg-slate-100 flex items-center py-2 px-4 box-border">
                                    <UserOutlined 
                                        className="text-slate-700 font-bold"
                                        />
                                    <Input 
                                        bordered={false}
                                        placeholder="UserName"
                                        className="w-full font-bold h-full outline-0 border-none bg-transparent text-black focus:border-none"
                                        />
                                </div>
                                <div className="w-full h-12 mb-4 rounded-3xl overflow-hidden bg-slate-100 flex items-center py-2 px-4 box-border">
                                    <LockOutlined 
                                        className="text-slate-700 font-bold"
                                    />
                                    <Input.Password
                                        placeholder="Password"
                                        bordered={false} 
                                        className="w-full font-bold h-full outline-none border-none bg-transparent text-black focus:border-none"
                                    />
                                </div>
                                <Button
                                    size="large" 
                                    type="primary" 
                                    shape="round" 
                                    className="font-bold text-center items-center w-32 text-white bg-blue-600 hover:text-black">LOGIN</Button>
                            </form>
                            <span className="mt-4">Or Sign in with social platfroms</span>
                            <Social />
                        </div>
                        :
                        <div className="container">
                            <h2 className="text-3xl font-bold mb-5"> Sign Up</h2>
                            <form className="mb-5">
                                <div className="w-full h-12 mb-4 rounded-3xl overflow-hidden bg-slate-100 flex items-center py-2 px-4 box-border">
                                    <UserOutlined 
                                        className="text-slate-700 font-bold"
                                    />
                                    <Input 
                                        placeholder="UserName"
                                        bordered={false}
                                        className="w-full font-bold h-full outline-0 border-none bg-transparent text-black focus:border-none"
                                    />
                                </div>
                                <div className="w-full h-12 mb-4 rounded-3xl overflow-hidden bg-slate-100 flex items-center py-2 px-4 box-border">
                                    <MailOutlined 
                                        className="text-slate-700 font-bold"
                                    />
                                    <Input
                                        placeholder="Email"
                                        bordered={false}
                                        className="w-full font-bold h-full outline-0 border-none bg-transparent text-black focus:border-none"
                                    />
                                </div>
                                <div className="w-full h-12 mb-4 rounded-3xl overflow-hidden bg-slate-100 flex items-center py-2 px-4 box-border">
                                    <LockOutlined 
                                        className="text-slate-700 font-bold"
                                    />
                                    <Input.Password
                                        placeholder="Password"
                                        bordered={false} 
                                        className="w-full font-bold h-full outline-none border-none bg-transparent text-black focus:border-none"
                                    />
                                </div>
                                <Button
                                    // loading
                                    size="large" 
                                    type="primary" 
                                    shape="round" 
                                    className="font-bold text-center items-center w-32 text-white bg-blue-600 hover:text-black"
    
                                >
                                    SIGN UP</Button>
                            </form>
                            <span className="mt-4">Or Sign in with social platfroms</span>
                            <Social />
                        </div>
                    }
                </div>
            </div>
        </div>
     )
}

export default Login;