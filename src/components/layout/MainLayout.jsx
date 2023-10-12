import MobileNav from "./MobileNav";
import SideNav from "./SideNav";
import TopBar from "./TopBar";

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