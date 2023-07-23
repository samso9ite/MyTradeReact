const MobileNav = () => {
    return (  
        <>
        <div className="mobile-menu md:hidden">
            <div className="mobile-menu-bar">
                <a href="" className="flex mr-auto">
                    <img alt="MyTrade" className="w-6" src="dist/images/logo.svg" />
                </a>
                <a href="" className="mobile-menu-toggler"> <i data-lucide="bar-chart-2" className="w-8 h-8 text-white transform -rotate-90"></i> </a>
            </div>
            <div className="scrollable">
                <a href="" className="mobile-menu-toggler"> <i data-lucide="x-circle" className="w-8 h-8 text-white transform -rotate-90"></i> </a>
                <ul className="scrollable__content py-2">
                    <li>
                        <a href="" className="menu menu--active">
                            <div className="menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="menu__title"> Dashboard <i data-lucide="chevron-down" className="menu__sub-icon transform rotate-180"></i> </div>
                        </a>
                     
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}
 
export default MobileNav;