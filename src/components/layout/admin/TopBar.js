const TopBar = () => {
    return ( 
        <>
        <div className="top-bar-boxed h-[70px] z-[51] relative border-b border-white/[0.08] mt-12 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 md:pt-0 mb-12">
            <div className="h-full flex items-center">
                <a href="" className="-intro-x hidden md:flex">
                    <img alt="MyTrade" className="w-6" src={process.env.PUBLIC_URL+'/dist/images/logo.svg'} />
                    <span className="text-white text-lg ml-3"> MyTrade </span> 
                </a>
                <nav aria-label="breadcrumb" className="-intro-x h-full mr-auto">
                    <ol className="breadcrumb breadcrumb-light">
                        <li className="breadcrumb-item"><a href="#">Application</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>
                <div className="intro-x relative mr-3 sm:mr-6">
                    <div className="search hidden sm:block">    
                        <input type="text" className="search__input form-control border-transparent" placeholder="Search..." />
                        <i data-lucide="search" className="search__icon dark:text-slate-500"></i> 
                    </div>
                    <a className="notification notification--light sm:hidden" href=""> <i data-lucide="search" className="notification__icon dark:text-slate-500"></i> </a>
                    <div className="search-result">
                        <div className="search-result__content">
                            <div className="search-result__content__title">Pages</div>
                            <div className="mb-5">
                                <a href="" className="flex items-center">
                                    <div className="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-lucide="inbox"></i> </div>
                                    <div className="ml-3">Mail Settings</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-lucide="users"></i> </div>
                                    <div className="ml-3">Users & Permissions</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-lucide="credit-card"></i> </div>
                                    <div className="ml-3">Transactions Report</div>
                                </a>
                            </div>
                            <div className="search-result__content__title">Users</div>
                            <div className="mb-5">
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="MyTrade" className="rounded-full" src="dist/images/profile-2.jpg" />
                                    </div>
                                    <div className="ml-3">Al Pacino</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">alpacino@left4code.com</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="MyTrade" className="rounded-full" src="dist/images/profile-6.jpg" />
                                    </div>
                                    <div className="ml-3">Russell Crowe</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">russellcrowe@left4code.com</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="MyTrade" className="rounded-full" src="dist/images/profile-12.jpg" />
                                    </div>
                                    <div className="ml-3">Brad Pitt</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">bradpitt@left4code.com</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="MyTrade" className="rounded-full" src="dist/images/profile-3.jpg" />
                                    </div>
                                    <div className="ml-3">Johnny Depp</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">johnnydepp@left4code.com</div>
                                </a>
                            </div>
                 
                    </div>
                </div>
             
            </div>
        </div>
        </div>
        </>
     );
}
 
export default TopBar;