import "./pageHeader.css"
import React from "react";
import { Breadcrumb } from 'antd'
function PageHeader( { menuItems }) {
    return ( 
        <div className="max-2xl: h-44 bg_image relative" >
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="py-2">
                    <h2 className="py-4 text-center uppercase font-bold text-white text-2xl">{menuItems}</h2>
                    <Breadcrumb
                            className="text-white text-base uppercase"
                            separator={<span className="text-white">/</span>}
                            items={[
                                {
                                    title: <a href="#" className="uppercase text-base text-white color-menu">Trang chủ</a>
                                },
                                {
                                    title: <a href="#" className="uppercase font-bold text-base text-white color-menu">{menuItems}</a>
                                }
                            ]}
                    />
                </div>
           </div>
            
        </div>
     );
}

export default PageHeader;