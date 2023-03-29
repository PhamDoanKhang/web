import { Space, Button , Tooltip } from "antd"
import { FaFacebookF,FaGoogle, FaRocket ,FaRegGem } from "react-icons/fa";
import { TwitterOutlined } from "@ant-design/icons"
function Social() {
    return ( 
        <div className="social my-3">
        <Space wrap>
            <Tooltip title="Facebook">
                <Button type="default" className=" border-black text-black grid place-items-cente" size="large" shape="circle" icon={<FaFacebookF />} />
            </Tooltip>
            <Tooltip title="Google">
                <Button type="default" className=" border-black text-black grid place-items-center" size="large" shape="circle" icon={<FaGoogle />} />
            </Tooltip>
            <Tooltip title="Twitter">
                <Button type="default" className=" border-black text-black grid place-items-center" size="large" shape="circle" icon={<TwitterOutlined />} />
            </Tooltip>
            <Tooltip title="Ruby">
                <Button type="default" className=" border-black text-black grid place-items-center" size="large" shape="circle" icon={<FaRegGem />} />
            </Tooltip>
        </Space>
    </div>
     );
}

export default Social;