import { Outlet, useNavigation } from "react-router-dom";
// import Navigation from '../components/layout/SideNav'

const RootLayout = () => {
    return ( 
        <>
            <Outlet />
        </>
     );
}
 
export default RootLayout;