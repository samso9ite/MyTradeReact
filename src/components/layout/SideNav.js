import React from 'react'

const SideNav = (props) => {
    return ( 
        <>
            <nav className="side-nav">
                <ul>
                    <li className="text-center mb-10" style={{color:"white", fontSize:"15px"}}>
                        <center>  <img alt="MyTrade" className="rounded-full mb-3 text-center" src="dist/images/profile-2.jpg" width="50%" /></center>
                        <p className="mb-2">Ajayi Samson </p>
                        <p>samso9ite@gmail.com</p>
                    </li>
                    
                    <li>
                        <a href="" className="side-menu side-menu--active">
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                                Dashboard 
                                <div className="side-menu__sub-icon transform rotate-180">  </div>
                            </div>
                        </a>
                    </li>

                    <li className="mt-3">
                        <a href="transactions.html" className="side-menu ">
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                                All Transactions 
                                <div className="side-menu__sub-icon transform rotate-180">  </div>
                            </div>
                        </a>
                    </li>
                    <li className="mt-3">
                        <a href="rates.html" className="side-menu ">
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                                Rates 
                                <div className="side-menu__sub-icon transform rotate-180">  </div>
                            </div>
                        </a>
                    </li>
                    <li className="mt-3">
                        <a href="redeem.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                                Redeem Cards 
                                <div className="side-menu__sub-icon transform rotate-180">  </div>
                            </div>
                        </a>
                    </li>

                    <li className="mt-3">
                        <a href="profile.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                                Settings
                                <div className="side-menu__sub-icon transform rotate-180">  </div>
                            </div>
                        </a>
                    </li>

                    <li className="mt-3">
                        <a href="profile.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                                Logout
                                <div className="side-menu__sub-icon transform rotate-180">  </div>
                            </div>
                        </a>
                    </li>
                    
                </ul>
            </nav>
        </>
     );
}
 
export default SideNav;