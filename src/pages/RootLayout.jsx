import { Outlet, useNavigation } from "react-router-dom";

const RootLayout = () => {
    return ( 
        <>
            <Outlet />
        </>
     );
}
 
export default RootLayout;