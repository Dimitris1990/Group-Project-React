import React, {useState,useEffect} from 'react';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavScrollLink,NavRouterLink,NavBtn,NavBtnLink,NavBtnIconLink,NavBtnIconLinkLogOut} from './Elements';
import {FaBars} from 'react-icons/fa';
import {IoPersonCircleOutline} from 'react-icons/io5';
import {animateScroll} from 'react-scroll';
import AuthService from "../../services/auth.service";

function Navbar({toggle}) {
    // Smooth Scroll start--------->
    const [scrollNav, setScrollNav] = useState(false);
    
    function changeNav(){
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    function toggleHome(){
        animateScroll.scrollToTop();
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    },[]);
    // Smooth Scroll <----------end
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
    }, []);

    const logOut = () => {
        AuthService.logout();
    };

    return (
        <>
          <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                  <NavLogo to="/" onClick={toggleHome}>
                      LOGO
                  </NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavScrollLink to="market" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Market</NavScrollLink>
                      </NavItem>
                      <NavItem>
                          <NavScrollLink to="services" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Services</NavScrollLink>
                      </NavItem>
                      <NavItem>
                          <NavScrollLink to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>About</NavScrollLink>
                      </NavItem>
                      {/* <NavItem>
                          <NavRouterLink to="/register">Sign Up</NavRouterLink>
                      </NavItem> */}
                      {showAdminBoard ? (
                      <NavItem>
                          <NavRouterLink to="/customers">Admin Board</NavRouterLink>
                      </NavItem>
                      ): currentUser ?(
                      <NavItem>
                          <NavRouterLink to="/portfolio">Profile </NavRouterLink>
                      </NavItem>
                      ):(<NavItem>
                        <NavRouterLink to="/register">Sign Up</NavRouterLink>
                    </NavItem>)}
                    </NavMenu>
                    {currentUser ? (
                  <NavBtn>
                      <NavBtnIconLinkLogOut to="/login" onClick={logOut}>LogOut</NavBtnIconLinkLogOut>
                  </NavBtn>
                    ):(
                  <NavBtn>
                      <NavBtnIconLink to="/login"><IoPersonCircleOutline/></NavBtnIconLink>
                  </NavBtn>
                    )}
              </NavbarContainer>
          </Nav>  
        </>
    )
}

export default Navbar;
