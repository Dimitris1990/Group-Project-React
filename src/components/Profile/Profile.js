import React,{useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import {Link, useHistory} from 'react-router-dom';
import './Profile.css';
import SidebarDataArray from './ProfileData';
import AuthService from '../../services/auth.service';
import {BiHome} from 'react-icons/bi';

function Profile() {
    const currentUser = AuthService.getCurrentUser();
    const [sidebar , setSidebar] = useState(false);
    const showSidebar = ()=> setSidebar(!sidebar);
    const history = useHistory();

    const logOut = () => {
        AuthService.logout();
    };
    return (
        <>
            <div className="navbar">
                <Link to="#" className="burger">
                    <FaBars onClick={showSidebar} className="burger-icon"/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu':'nav-menu active'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="burger">
                            <AiOutlineClose className="burger-icon" onClick={showSidebar}/>
                        </Link>
                    </li>
                    <li>

                    </li>
                    <li className="nav-text">
                        <img src="https://p7.hiclipart.com/preview/518/320/1007/computer-icons-mobile-app-development-android-my-account-icon.jpg" className="profile-icon"/>
                    </li>
                    <li>
                        <h4 className="profile-name">{currentUser.username}</h4>
                    </li>
                    
                        {SidebarDataArray.map((data,index)=>{
                            return(
                                <li key={index} className={data.class}>
                                    <Link to={data.path}>
                                        {data.icon} <span className="title-span">{data.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    <li>
                        <form action="/">
                        <button className="bthome"><BiHome/></button>
                        </form>
                    </li>
                    <li>
                        <form action="/">
                        <button className="logout-btn" onClick={logOut}>Log Out</button>
                        </form>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Profile;
