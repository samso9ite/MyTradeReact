const ProfileNav = () => {
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
                        <div class="dropdown">
                            <a class="dropdown-toggle w-5 h-5 block" href="javascript:;" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="more-horizontal" class="w-5 h-5 text-slate-500"></i> </a>
                            <div class="dropdown-menu w-56">
                                <ul class="dropdown-content">
                                    <li>
                                        <h6 class="dropdown-header">
                                            Export Options
                                        </h6>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="activity" class="w-4 h-4 mr-2"></i> English </a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item">
                                            <i data-lucide="box" class="w-4 h-4 mr-2"></i> Indonesia 
                                            <div class="text-xs text-white px-1 rounded-full bg-danger ml-auto">10</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="layout" class="w-4 h-4 mr-2"></i> English </a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="sidebar" class="w-4 h-4 mr-2"></i> Indonesia </a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <div class="flex p-1">
                                            <button type="button" class="btn btn-primary py-1 px-2">Settings</button>
                                            <button type="button" class="btn btn-secondary py-1 px-2 ml-auto">View Profile</button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                        <a class="flex items-center mt-5  " href=""> <i data-lucide="box" class="w-4 h-4 mr-2"></i> Account Settings </a><br />
                        <a class="flex items-center mt-5 " href=""> <i data-lucide="settings" class="w-4 h-4 mr-2"></i> Bank Account </a><br />
                        <a class="flex items-center mt-5 " href=""> <i data-lucide="lock" class="w-4 h-4 mr-2"></i> Change Password </a><br />
                        <a class="flex items-center mt-5" href=""> <i data-lucide="settings" class="w-4 h-4 mr-2"></i> Others </a>
                    </div>
                    </div>
            </div>
        </>
     );
}
 
export default ProfileNav;