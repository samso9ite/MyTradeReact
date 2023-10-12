import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import {useSelector} from 'react-redux'
import styles from './ProfileNav.module.css';


const ProfileNav = (props) => {
  const userDetails = useSelector(state => state.auth.userDetails.userDetails)
    return ( 
        <>
            <div class="col-span-12 lg:col-span-4 2xl:col-span-3 flex lg:block flex-col-reverse">
                <div class="intro-y box mt-5">
                    <div class="relative flex items-center p-5">
                        <div class="w-12 h-12 image-fit">
                            <img alt="Profile Image" class="rounded-full" src={process.env.PUBLIC_URL+'/dist/images/avatar.png'} />
                        </div>
                        <div class="ml-4 mr-auto">
                            <div class="font-medium text-base">{userDetails.username}</div>
                            <div class="text-slate-500">{userDetails.email}</div>
                        </div>  
                       
                    </div>
                    <div class="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                        <Link  className={props.activeTab=='profile'? `${styles.activeNav}` : `${styles.inactive}`} to="/settings/profile">  <i data-lucide="box" class="w-4 h-4 mr-2"></i> Account Settings </Link> 
                        <div class="flex mt-10"></div>
                        <Link  to="/settings/banks"  className={props.activeTab=='banks'? `${styles.activeNav}` : `${styles.inactive}`}>  <i data-lucide="settings" class="w-4 h-4 mr-2"></i>   Bank Account </Link> <br />
                        <div class="flex mt-10"></div>
                        <Link  to="/settings/password"className={props.activeTab=='password'? `${styles.activeNav}` : `${styles.inactive}`}  >  <i data-lucide="lock" class="w-4 h-4 mr-2"></i>   Change Password </Link> <br />
                        <div class="flex mt-10"></div>
                        <Link  to="/ settings/others"  className={props.activeTab=='others'? `${styles.activeNav}` : `${styles.inactive}`}>  <i data-lucide="settings" class="w-4 h-4 mr-2"></i> Others </Link>
                    </div>
                    </div>
            </div>
        </>
     );
}
 
export default ProfileNav;