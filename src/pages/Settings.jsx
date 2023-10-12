import { useEffect, useState } from "react";
import Banks from "../components/Bank";
import ChangePassword from "../components/ChangePassword";
import MainLayout from "../components/layout/MainLayout";
import ProfileNav from "../components/layout/ProfileNav";
import Profile from "../components/Profile";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchDetails, userInfoActions } from "../store/user-details";

const Settings =  () => {
    const  {component_name} = useParams()
    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(fetchDetails())
    }, [])
    
    return ( <>
        <MainLayout>
            <div className="content">
                <div className="intro-y flex items-center mt-8 text-uppercase">
               
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <ProfileNav activeTab={component_name}/>
                    {component_name === 'password' && <ChangePassword />}
                    {component_name === 'banks' && <Banks  />}
                    {component_name === 'profile' && <Profile />}
                </div>
            </div>
           
        </MainLayout>
    </> );
}
 
export default Settings