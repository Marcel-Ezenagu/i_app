import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Image, Menu } from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from './actions/userActions';

import './MenuBar.css';

function MenuBar(props) {
  const [activeItem, setActiveItem] = useState('');

  const dispatch = useDispatch();
  
  const userLogin = useSelector((state) => state.userLogin);

   const { loading, error, userInfo } = userLogin;


  
  const logoutHandler = () => {
    dispatch(logout());
    
    props.history.push('/');
  };

  

  return (
      <Menu secondary pointing>
        <Menu.Item>
          <Image
            size="tiny"
            src="/images/ia.jpg"
            alt="Logo"
            as={Link}
            to="/"
            rounded
          />
        </Menu.Item>

        <Menu.Menu position="right">
          {!userInfo? (
            <>
              
              <Menu.Item
                name="internships"
                active={activeItem === "internships"}
                as={Link}
                to="/internships"
              />

              
              <Menu.Item
                name="login"
                active={activeItem === "login"}
                as={Link}
                to="/login"
                color="blue"
              />

            </>
          ) : (
              <>
                
              <Menu.Item
                name="internships"
                active={activeItem === "internships"}
                as={Link}
                to="/internships"
              />
              <Menu.Item name="dashboard" as={Link} to="/dashboard" />
                
              <Menu.Item
                name="logout"
                active={activeItem === "logout"}
                  as='button'
                  onClick={logoutHandler}
                
              />
            </>
          )}
        </Menu.Menu>
      </Menu>
  );
}

export default MenuBar
