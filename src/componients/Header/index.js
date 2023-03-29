import React from "react";
import logo from "../../assets/images/logo.png"
import pathName from "../../routers/path";
import { SearchOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
function Header() {
    const navigate = useNavigate()
    const HandelChangePath = (menu)=>{ menu?.key ? navigate(menu.key) : navigate('/') }
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
            key: 4,
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
            <div className="container flex justify-between items-center box-border px-36 py-5 h-24 bg-slate-50">
                <div className="h-full flex items-center">
                    <img 
                        width={130}
                        height={130}
                        // className="h w-3/4"
                        src={logo}
                        alt="Nông nghiệp gia khánh"
                    />

                </div>
                <div className="h-full flex items-center">
                    
                    {menus.map((menu,index)=>{
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