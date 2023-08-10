import { useState } from "react"
import { Link, NavLink } from "react-router-dom"


const ProfileNav = (props) => {
    const [activeComponent, setActiveComponent] = useState('profile')
    const changeComponent = (componentName) => {
        setActiveComponent(componentName)
    }

    return ( 
        <>
            <div class="col-span-12 lg:col-span-4 2xl:col-span-3 flex lg:block flex-col-reverse">
                <div class="intro-y box mt-5">
                    <div class="relative flex items-center p-5">
                        <div class="w-12 h-12 image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-4.jpg" />
                        </div>
                        <div class="ml-4 mr-auto">
                            <div class="font-medium text-base">Robert De Niro</div>
                            <div class="text-slate-500">Backend Engineer</div>
                        </div>
                       
                    </div>
                    <div class="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                        <Link  class="flex items-center mt-5" to="/settings/profile">  <i data-lucide="box" class="w-4 h-4 mr-2"></i>     Account Settings </Link> <br />
                        <Link  class="flex items-center mt-5" to="/settings/banks">  <i data-lucide="settings" class="w-4 h-4 mr-2"></i>   Bank Account </Link> <br />
                        <Link  class="flex items-center mt-5" to="/settings/password">  <i data-lucide="lock" class="w-4 h-4 mr-2"></i>   Change Password </Link> <br />
                        <Link  class="flex items-center mt-5" to="/ settings/others">  <i data-lucide="settings" class="w-4 h-4 mr-2"></i> Others </Link>
                    </div>
                    </div>
            </div>
        </>
     );
}
 
export default ProfileNav;