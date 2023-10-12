import { useState } from "react";
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux'

const MobileNav = () => {
    const [istoggledNav, setNavToggle] = useState(false)

    let userDetails = useSelector(state => state.auth.userDetails.userDetails)

    const logoutHandler = () => {
        sessionStorage.clear()
        localStorage.clear()
        window.location.replace('/auth')
    }

    return (  
        <>
        <div className={istoggledNav == true ? "mobile-menu--active mobile-menu md:hidden" : 'mobile-menu md:hidden'} >
            <div class="mobile-menu-bar">
                <a href="" class="flex mr-auto">
                    <img alt="MyTrade" src="dist/images/MyTradeLogo.png" width="60%"/>
                </a>
                <span className="mobile-menu-toggler"> <i className="fa fa-bars text-white transform" style={{fontSize:"20px"}}  onClick={() => {setNavToggle(!istoggledNav)}}></i> </span>
            </div>
            <div class="scrollable">
                <span class="mobile-menu-toggler"> <i className="fa fa-times-circle-o text-white transform" style={{fontSize:"25px", cursor:'pointer'}} onClick={() => {setNavToggle(!istoggledNav)}}></i> </span>
                <ul class="scrollable__content py-2">
                    <li className="text-center mb-10" style={{color:"white", fontSize:"15px"}}>
                        <center>  <img alt="MyTrade" className="rounded-full mb-3 text-center" src={process.env.PUBLIC_URL+'/dist/images/avatar.png'} width="30%" /></center>
                        <p className="mb-2">{userDetails.username}</p>
                        <p>{userDetails.email}</p>
                    </li> 
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ?  "menu menu--active" : "menu"} end>
                            <div class="menu__icon"> Dashboard<i data-lucide="home"></i> </div>
                            <div class="menu__title">  <i data-lucide="chevron-down" class="menu__sub-icon transform rotate-180"></i> </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/transactions" className={({isActive}) => isActive ?  "menu menu--active" : "menu"} end>
                            <div class="menu__icon">   Transactions <i data-lucide="home"></i> </div>
                            <div class="menu__title">  <i data-lucide="chevron-down" class="menu__sub-icon transform rotate-180"></i> </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/rate" className={({isActive}) => isActive ?  "menu menu--active" : "menu"} end>
                            <div class="menu__icon"> Rates<i data-lucide="home"></i> </div>
                            <div class="menu__title">  <i data-lucide="chevron-down" class="menu__sub-icon transform rotate-180"></i> </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/redeem/cards" className={({isActive}) => isActive ?  "menu menu--active" : "menu"} end>
                            <div class="menu__icon"> Redeem <i data-lucide="home"></i> </div>
                            <div class="menu__title">  <i data-lucide="chevron-down" class="menu__sub-icon transform rotate-180"></i> </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings/profile" className={({isActive}) => isActive ?  "menu menu--active" : "menu"} end>
                            <div class="menu__icon"> Settings<i data-lucide="home"></i> </div>
                            <div class="menu__title">  <i data-lucide="chevron-down" class="menu__sub-icon transform rotate-180"></i> </div>
                        </NavLink>
                    </li>
                    <li >
                        <a className="menu" onClick={logoutHandler} style={{cursor:'pointer'}}>
                        <div class="menu__icon"> Logout<i data-lucide="home"></i> </div>
                            <div class="menu__title">  <i data-lucide="chevron-down" class="menu__sub-icon transform rotate-180"></i> </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
       

          
        </>
    );
}
 
export default MobileNav;