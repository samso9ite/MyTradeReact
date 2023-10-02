import React from 'react'
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux'

const SideNav = (props) => {
    // Get user details from the store 
    let userDetails = useSelector(state => state.auth.userDetails.userDetails)

    const logoutHandler = () => {
        sessionStorage.clear()
        localStorage.clear()
        window.location.replace('/auth')
    }

    return ( 
        <>
            <nav className="side-nav">
                <ul>
                    <li className="text-center mb-10" style={{color:"white", fontSize:"15px"}}>
                        <center>  <img alt="MyTrade" className="rounded-full mb-3 text-center" src={process.env.PUBLIC_URL+'/dist/images/logo.png'} width="30%" /></center>
                        <p className="mb-2">{userDetails.username}</p>
                        <p>{userDetails.email}</p>
                    </li> 
                    
                    <li>
                        <NavLink to="/admin" className={({isActive}) => isActive ?  "side-menu side-menu--active" : "side-menu"} end>
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                                Dashboard 
                                <div className="side-menu__sub-icon transform rotate-180">  </div>
                            </div>
                        </NavLink>
                    </li>
                    <li className="mt-3">
                        <NavLink to="/users" className={({isActive}) => isActive ? "side-menu side-menu--active" : "side-menu"}>
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                               Users
                                <div className="side-menu__sub-icon transform rotate-180">  </div>
                            </div>
                        </NavLink>
                    </li>
                    <li className="mt-3">
                        <NavLink to="/cards" className={({isActive}) => isActive ? "side-menu side-menu--active" : "side-menu"}>
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                               Cards
                                <div className="side-menu__sub-icon transform rotate-180">  </div>
                            </div>
                        </NavLink>
                    </li>
                    <li className="mt-3">
                        <NavLink to="/trations" className={({isActive}) => isActive ? "side-menu side-menu--active" : "side-menu"}>
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                                Crypto Currency 
                                <div className="side-menu__sub-icon transform rotate-180">  </div>
                            </div>
                        </NavLink>
                    </li>
                    <li className="mt-3">
                        <NavLink to="/transaions" className={({isActive}) => isActive ? "side-menu side-menu--active" : "side-menu"}>
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                                Bills Services 
                                <div className="side-menu__sub-icon transform rotate-180">  </div>
                            </div>
                        </NavLink>
                    </li>
                    <li className="mt-3">
                        <NavLink to="/all-transactions" className={({isActive}) => isActive ? "side-menu side-menu--active" : "side-menu"}>
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                                All Transactions 
                                <div className="side-menu__sub-icon transform rotate-180">  </div>
                            </div>
                        </NavLink>
                    </li>
                  
                   

                    <li className="mt-3">
                        <NavLink to="/settin" className={({isActive}) => isActive ? "side-menu side-menu--active" : "side-menu"}>
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                                Feedbacks
                                <div className="side-menu__sub-icon transform rotate-180">  </div>
                            </div>
                        </NavLink>
                    </li>

                    <li className="mt-3">
                        <a className="side-menu" onClick={logoutHandler} style={{cursor:'pointer'}}>
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