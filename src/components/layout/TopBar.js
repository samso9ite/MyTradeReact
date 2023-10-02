const TopBar = () => {
    return ( 
        <>
        <div className="top-bar-boxed h-[70px] z-[51] relative border-b border-white/[0.08] mt-12 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 md:pt-0 mb-12">
            <div className="h-full flex items-center">
                <a href="" className="-intro-x hidden md:flex">
                    <img alt="MyTrade" className="w-6" src={process.env.PUBLIC_URL+'/dist/images/logo.png'} />
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
                  
             
            </div>
        </div>
        </div>
        </>
     );
}
 
export default TopBar;