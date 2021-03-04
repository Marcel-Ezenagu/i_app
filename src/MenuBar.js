import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {  Image, Menu } from "semantic-ui-react";

import "bootstrap/dist/css/bootstrap.min.css";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "./actions/userActions";

import { Navbar, Nav }  from 'react-bootstrap'

function MenuBar(props) {
  const [activeItem, setActiveItem] = useState("");

  const mystyle = {width: "100%", marginRight: "1rem"}

  const dispatch = useDispatch();
  
  const userLogin = useSelector((state) => state.userLogin);

   const { loading, error, userInfo } = userLogin;


  
  const logoutHandler = () => {
    dispatch(logout());
    
    props.history.push('/');
  };

  

  return (
      // <Menu secondary pointing >
      //   <Menu.Item>
      //     <Image
      //       size="tiny"
      //       src="/images/ia.jpg"
      //       alt="Logo"
      //       as={Link}
      //       to="/"
      //       rounded
      //     />
      //   </Menu.Item>

      //   <Menu.Menu position="right">
      //     {!userInfo? (
      //       <>
              
      //         <Menu.Item
      //           name="internships"
      //           active={activeItem === "internships"}
      //           as={Link}
      //           to="/internships"
      //         />

              
      //         <Menu.Item
      //           name="login"
      //           active={activeItem === "login"}
      //           as={Link}
      //           to="/login"
      //           color="blue"
      //         />

      //       </>
      //     ) : (
      //         <>
                
      //         <Menu.Item
      //           name="internships"
      //           active={activeItem === "internships"}
      //           as={Link}
      //           to="/internships"
      //         />
      //         <Menu.Item name="dashboard" as={Link} to="/dashboard" />
                
      //         <Menu.Item
      //           name="logout"
      //           active={activeItem === "logout"}
      //             as='button'
      //             onClick={logoutHandler}
                
      //         />
      //       </>
      //     )}
      //   </Menu.Menu>
      // </Menu>

      <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="light" >
      <Navbar.Brand href="/"><img className='logo' src='/images/logo-dark.jpg' alt="INTERNAPP-AFRICA" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse  >
        
      <Nav className="justify-content-end" style={mystyle}>
          {userInfo ? (
            <>
              <Nav.Link href="/internships">Internships</Nav.Link>
                  
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/" onClick={logoutHandler}>Logout</Nav.Link>
            </>
          )
            :
          (
          <>
            
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="/internships">Internships</Nav.Link>
            <Nav.Link href="#services">Our Services</Nav.Link>
            <Nav.Link href="#team">Our Team</Nav.Link>
              
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </>
          )
          
        }
      </Nav>
        
      </Navbar.Collapse>

  </Navbar>
  )
}

export default MenuBar
