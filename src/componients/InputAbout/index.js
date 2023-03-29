import React from "react";
import { Input , Button} from "antd"
import { SearchOutlined } from "@ant-design/icons"
function InputAbout() {
    return ( 
        <div className="">
            <Input></Input>
            <Button icon={<SearchOutlined />} type="primary"></Button>
        </div>
     );
}

export default InputAbout;