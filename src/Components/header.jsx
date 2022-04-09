import React from 'react';
import { 
    Nav, 
    Navbarcontainer, 
    NavMenu,
    NavItem,
    NavLinks,
    Menu,
    Box
    } from './cheader'; 
    import logo from'../logo/logosmall.svg'

    import dd from '../Icon/dd.svg'

const Header = () => {
  return (
    <div>
         <Nav>

         <img src={logo}  alt="Main image"/>  

          <Navbarcontainer>
                                      
              <NavMenu>

                  <NavItem>
                      <NavLinks to = ""> Home </NavLinks>
                  </NavItem>

                  <NavItem>
                      <NavLinks to = "">About </NavLinks>
                  </NavItem>       

                    <NavItem>
                      <NavLinks to = "">Services </NavLinks>
                  </NavItem>   

                  <NavItem>
                      <NavLinks to = "">Blogs </NavLinks>
                  </NavItem>   

                  <NavItem>
                      <NavLinks to = "">About </NavLinks>
                  </NavItem>   

                  <NavItem>
                      <NavLinks to = "">NPR </NavLinks>
                  </NavItem> 

                  <NavItem>
                  <Box>                  
                     <Menu  >
                       Login 
                       <img src={dd}  alt="drop down icon"/> 
                       <div class="menu"></div>
                      </Menu>
                  </Box>
                  </NavItem>

              </NavMenu>

            </Navbarcontainer>
        </Nav>
    </div>
  );
}

export default Header;