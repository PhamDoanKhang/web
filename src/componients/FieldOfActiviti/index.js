import { Image } from "antd"
import { FieldOf } from "../../SimpleData/HomeData";
function FieldOfActiviti() {
    return ( 
        <div className="px-36 box-border py-8">
            <div className="grid grid-cols-6 gap-4">
                {FieldOf && FieldOf.map((fieldOf,index)=>{
                    return (
                        <div className="col-span-1 relative h-48 cursor-pointer hover:text-white">
                            <img className="w-full h-full" src={fieldOf.image}></img>
                            <div className="absolute w-full h-16 bg-opacity-75 bg-white  top-1/2 cursor-pointer hover:bg-blue-900">
                                <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                                        <h3 className="uppercase w-full text-sm font-bold">{fieldOf.title}</h3>
                                        <h4 className="uppercase text-xs">{fieldOf.countSl} sản phẩm</h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
     );
}

export default FieldOfActiviti;