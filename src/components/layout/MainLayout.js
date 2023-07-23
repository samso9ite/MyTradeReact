import MobileNav from "../layout/MobileNav";
import SideNav from "../layout/SideNav";
import TopBar from "../layout/TopBar";

import React from 'react'

const MainLayout = (props) => {
    return ( 
        <React.Fragment>
            <MobileNav />
            <TopBar />
            <div className="wrapper">
                <div className="wrapper-box">
                    <SideNav />
                    {props.children}
               </div>
            </div>  
        </React.Fragment>
     );
}
 
export default MainLayout;