import MobileNav from "./MobileNav";
import SideNav from "./SideNav";
import React from 'react'
import TopBar from "./TopBar";

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