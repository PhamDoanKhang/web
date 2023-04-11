import React from "react";
import { Image } from "antd"
import img from "../../assets/images/image.svg"
function NewPost() {
    return ( 
        <div className="text-left mt-8 border-solid border border-stone-200">
            <div className="px-3 py-5 box-border">
                <h2 className="font-bold text-base text-blue-800 uppercase">Bài viết mới</h2>
            </div>
            <div className="border-t-2" >
                <div className="p-1 box-border border-solid border-t-2 border-stone-100 flex justify-between hover:bg-green-500 hover:text-white">
                    <Image className="pl-3 cursor-pointer" width={80} height={60}  src={img}></Image>
                    <div className="p-3 box-border font-bold text-sm">
                        <a className="cursor-pointer" href="#">Người nông dân phải làm sao sao sao sao ?</a>
                    </div>
                </div>
                <div className="p-1 box-border border-solid border-t-2 border-stone-100 flex justify-between hover:bg-green-500 hover:text-white">
                    <Image className="pl-3 cursor-pointer" width={80} height={60}  src={img}></Image>
                    <div className="p-3 box-border font-bold text-sm">
                        <a className="cursor-pointer" href="#">Người nông dân phải làm sao sao sao sao ?</a>
                    </div>
                </div>
                <div className="p-1 box-border border-solid border-t-2 border-stone-100 flex justify-between hover:bg-green-500 hover:text-white">
                    <Image className="pl-3 cursor-pointer" width={80} height={60}  src={img}></Image>
                    <div className="p-3 box-border font-bold text-sm">
                        <a className="cursor-pointer" href="#">Người nông dân phải làm sao sao sao sao ?</a>
                    </div>
                </div>
                <div className="p-1 box-border border-solid border-t-2 border-stone-100 flex justify-between hover:bg-green-500 hover:text-white">
                    <Image className="pl-3 cursor-pointer" width={80} height={60}  src={img}></Image>
                    <div className="p-3 box-border font-bold text-sm">
                        <a className="cursor-pointer" href="#">Người nông dân phải làm sao sao sao sao ?</a>
                    </div>
                </div>
                <div className="p-1 box-border border-solid border-t-2 border-stone-100 flex justify-between hover:bg-green-500 hover:text-white">
                    <Image className="pl-3 cursor-pointer" width={80} height={60}  src={img}></Image>
                    <div className="p-3 box-border font-bold text-sm">
                        <a className="cursor-pointer" href="#">Người nông dân phải làm sao sao sao sao ?</a>
                    </div>
                </div>
               
            </div>
        </div>
     );
}

export default NewPost;