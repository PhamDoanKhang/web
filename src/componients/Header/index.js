import React, { useRef } from "react";
import logo from "../../assets/images/logo.png"
import pathName from "../../routers/path";
import { SearchOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
function Header() {
    const navigate = useNavigate()
    const fixedHeader = useRef()
    const HandelChangePath = (menu)=>{ menu?.key ? navigate(menu.key) : navigate('/') }
    window.addEventListener("scroll",()=>{
        if(window.scrollY >= fixedHeader.current.clientHeight){
            ["fixed","opacity-95","shadow-2xl","transition","ease-in-out","top-0"].forEach((ab)=>{
                fixedHeader.current.classList.add(ab)
            }) 
        }else{
            ["fixed","opacity-95","shadow-2xl"].forEach((ab)=>{
                fixedHeader.current.classList.remove(ab)
            })
        }
    })
    const menus = [
        {
            label: 'Trang chủ',
            active: true,
            key: pathName.home,
        },
        {
            label: 'Giới thiệu',
            active: false,
            key: pathName.about,
        },
        {
            label: 'Sản phẩm',
            active: false,
            key: 3,
        },
        {
            label: 'Kiến thức',
            active: false,
            key: pathName.knowledge,
        },
        {
            label: 'Liên hệ',
            active: false,
            key: pathName.contact,
        },
        {
            label: 'Tin tức',
            active: false,
            key: 6,
        },
        {
            label: <SearchOutlined />,
            active: false,
            key: 7,
        },
    ]
    return ( 
            <div ref={fixedHeader} className="container flex justify-between items-center box-border px-36 py-5 h-24 bg-white z-10">
                <div className="h-full flex items-center">
                   <a href="#">
                        <img 
                            className="cursor-pointer"
                            width={130}
                            height={130}
                            src={logo}
                            alt="Nông nghiệp gia khánh"
                        />
                   </a>
                </div>
                <div className="h-full flex items-center">
                    
                    {menus.map((menu)=>{
                        return (        
                            <>
                                <div key={menu.key} onClick={()=>HandelChangePath(menu)} className={`box-border hover:text-orange-400 mr-1 text-blue-800 px-4 h-5/6 flex items-center rounded-3xl cursor-pointer font-semibold ${menu.active ? `ring-2 ring-blue-800 hover:ring-orange-400`  : ""}`}>
                                    {menu.label}
                                </div>
                            </>
                        )
                    })}
                    
                </div>
            </div>
     );
}

export default Header;