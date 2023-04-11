import { Image, Button, Space } from "antd"
import TitlePage from "../../componients/TitilePage";
import FieldOfActiviti from "../../componients/FieldOfActiviti";
import ProductMonopoly from "../../componients/ProductMonopoly";
import "../../componients/PageHeader/pageHeader.css"
import CommentUser from "../../componients/CommentUser";
import InfoStort from "../../componients/InfoStort";
import { Fields } from "../../SimpleData/HomeData"
function Home() {
    return ( 
        <>
            <div className="Home_about px-36 box-border py-10">
                    <div className="grid grid-cols-2 gap-1">
                        <div className="text-left">
                            <h1 className="py-2 text-2xl uppercase text-blue-900 font-bold">Chào mừng các bạn đến với...</h1>
                            <div className="logo mb-8">
                                <h1 className="py-2 text-6xl uppercase text-green-700 font-bold"><span className="text-yellow-400">Gia</span> KHÁNH</h1>
                                <h2 className="ml-2 text-3xl text-stone-700 font-bold">Vì lợi ít nhà nông</h2>
                            </div>
                            <div className="border-l-4 py-4 border-solid border-green-600 pl-8 box-border">
                                <p className="text-xl text-justify text-blue-900 italic">Chúng tôi tự hào là doanh nghiệp đem đến những giải pháp ứng dụng công nghệ vi sinh tiên tiến nhất của Mỹ một cách độc quyền; đảm bảo chất lượng cho nguồn lương thực tại Việt Nam…</p>
                            </div>
                            <div className="my-8 py-1 box-border text-left">
                                <Button type="primary" className="bg-blue-900 transition hover:-translate-y-2 duration-300 shadow-md font-bold uppercase text-base h-11 min-w-min text-white shadow-black">Tìm hiểu thêm</Button>
                            </div>
                        </div>
                        <div className="w-full h-auto overflow-hidden">
                            <Image src="https://img2.thuthuatphanmem.vn/uploads/2018/12/31/hinh-anh-dong-de-thuong_112054094.gif"></Image>
                        </div>
                    </div>
                    <div className="py-4">
                        <div>
                            <h1 className="text-blue-900 py-4 text-4xl font-bold">Giải pháp công nghệ</h1>
                            <h2 className="text-green-700 py-4 text-4xl font-bold uppercase">An toàn + Hiệu Quả = Bền Vững</h2>
                        </div>
                        <div className="grid grid-cols-4 gap-2 mt-20">
                            {Fields && Fields.map((field,index)=>{
                                return (
                                    <div className="col-span-1" key={index}>
                                        <div className="flex justify-center items-center">
                                                <div className="border-solid w-32 cursor-pointer transition ease-in-out duration-300 hover:text-white text-blue-700 hover:bg-blue-700 h-32 border-4 border-blue-700 rounded-cirle relative">
                                                    <field.icons className="absolute top-1/2 left-1/2 text-6xl -translate-y-1/2 transform -translate-x-1/2" />
                                                </div>
                                        </div>
                                        <div className="text-xl py-3 font-bold">
                                            <h3>{field.title}</h3>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="text-center box-border my-12 flex justify-center">
                            <div className="border-2 w-1/2 border-solid box-border border-green-400"></div>
                        </div>
                        <div className="px-40 mb-10">
                            <p className="text-center text-xl break-words">Phát sinh từ mong muốn giảm thiểu tối đa rủi ro mà người nông dân có thể gặp phải khi canh tác nông nghiệp cũng như thuỷ, hải sản tại Việt Nam; Đồng thời cũng hiểu được giá trị kinh tế từ thực phẩm đảm bảo chất lượng trước thực trạng xã hội hiện nay…</p>
                        </div>
                        <div className="">
                            <p className="text-2xl font-bold text-center uppercase text-blue-800">BiO-MONA VIETNAM SẼ LÀ GIẢI PHÁP</p>
                            <p className="text-2xl font-bold text-center uppercase text-blue-800">ĐÁP ỨNG NHU CẦU & MONG MUỐN CỦA CÁC BẠN</p>
                            <div className="mt-20">
                                <Space wrap>
                                    <Button type="ghost" className="transition ease-in-out hover:-translate-y-2 hover:scale-105 hover:bg-indigo-500 rounded-md mr-2 uppercase h-11 text-lg shadow-md hover:shadow-2xl hover:shadow-black hover:text-white text-white bg-blue-900 shadow-stone-500">Tham khảo giải pháp</Button>
                                    <Button type="ghost" className="transition ease-in-out hover:-translate-y-2 hover:scale-105 hover:bg-green-500  ml-2 uppercase h-11 text-lg shadow-md hover:shadow-2xl hover:shadow-black hover:text-white text-white rounded-md bg-green-600 shadow-stone-500">Yêu cầu hỗ trợ kỹ thuật</Button>
                                </Space>
                            </div>
                        </div>
                        <div className="text-center box-border my-12 px-80 flex justify-center">
                            <div className="border-2 w-1/2 border-solid box-border border-green-400"></div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <TitlePage title={"Sản phẩm độc quyền"} />
                    <div className="h-96 px-36 box-border py-10" >
                        <ProductMonopoly />
                    </div>
                </div>
                <div className="mb-5">
                    <TitlePage title={"Lĩnh vực hoặt động"} />
                    <FieldOfActiviti />
                </div>
                <div className="bg_image1">
                    <CommentUser />
                </div>
                <div className="">
                    <InfoStort />
                </div>
        </>
     );
}

export default Home;