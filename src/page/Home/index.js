import React from "react";
import Layout from "../../componients/Layout";
// import { Image, Button, Space } from "antd"
import { Outlet } from "react-router-dom";
// import { FaPiggyBank , FaTrash , FaOctopusDeploy , FaSeedling } from "react-icons/fa";
function Home() {
    return ( 
       <div className="Home">
            <Layout>
                <Outlet />
            </Layout>
       </div>
     );
}
export default Home;