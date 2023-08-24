import { useEffect, useState } from "react";
import Banks from "../components/Bank";
import ChangePassword from "../components/ChangePassword";
import MainLayout from "../components/layout/MainLayout";
import ProfileNav from "../components/layout/ProfileNav";
import Profile from "../components/Profile";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userInfoActions } from "../store/user-details";
import Api from "../Api";


const Settings =  () => {
    const  {component_name} = useParams()
    const dispatch = useDispatch()
    const userData = async () => {
         await Api.axios_instance.get(Api.baseUrl+'/user/get_info')
         .then(res => {
            dispatch(userInfoActions.storeAccountInfo(
                 res.data.data
             ))
         })
    }
    
    userData()
    
    return ( <>
        <MainLayout>
        <div className="content">
                    <div className="intro-y flex items-center mt-8">
                        <h2 className="text-lg font-medium mr-auto">
                            {component_name}
                        </h2>
                    </div>
                    <div className="grid grid-cols-12 gap-6">
                       <ProfileNav />
                        {component_name === 'password' && <ChangePassword />}
                        {component_name === 'banks' && <Banks  />}
                        {component_name === 'profile' && <Profile />}
                    </div>
                </div>
                <style>

                </style>
           
        </MainLayout>
    </> );
}
 
export default Settings