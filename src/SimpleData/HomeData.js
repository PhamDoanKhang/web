import { FaPiggyBank , FaTrash , FaOctopusDeploy , FaSeedling } from "react-icons/fa";
import cat from "../assets/images/cat.jpeg"
import env from "../assets/images/env.jpeg"
import nongnghiep from "../assets/images/NongNgiep.jpeg"
import NongNghiep from "../assets/images/NongNghiep.jpeg"
import thucpham from "../assets/images/thucpham.jpeg"
import tom from "../assets/images/tom.jpeg"
export const Fields = [
    {
        icons : FaSeedling ,
        title: "Lĩnh vực nông nghiệp" ,
    },
    {
        icons : FaOctopusDeploy ,
        title: "Lĩnh vực thủy sản" ,
    },
    {
        icons : FaPiggyBank ,
        title: "Lĩnh vực gia súc" ,
    },
    {
        icons : FaTrash ,
        title: "Lĩnh vực môi trường" ,
    }
]

export const FieldOf = [
    {
        image: nongnghiep,
        countSl: 8,
        title: "Chăn nuôi",
    },
    {
        image: env,
        countSl: 20,
        title: "Môi trường",
    },
    {
        image: NongNghiep,
        countSl: 4,
        title: "Nông nghiệp",
    },
    {
        image: cat,
        countSl: 2,
        title: "Thú cưng",
    },
    {
        image: thucpham,
        countSl: 8,
        title: "Thực phẩm",
    },
    {
        image: tom,
        countSl: 1,
        title: "Thủy sản",
    },

]