import React from 'react';
import { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Axios from 'axios';
const img = require('./logo.png');

const divStyle1 = {
  width: '327px',
  height: '69px',
  backgroundImage: `url(${img})`,
};

const Styles = styled.div`
  .navbar {
    background-color: #2196f3!important;
}
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #ffffff;
    font-family: Sans-Serif;
    &:hover {
      color: blue;
    }
  }
  .navbar-image {
    background-image: url(./logo.png);
    background-repeat: no-repeat;
    width: 10px;
    height: 20px;
  }
  .navbar-brand {
    font-size: 1.5em;
    color: #9fffcb;
    &:hover {
      color: green;
    }
  }
  .form-center {
    position: absolute;
    left: 25%;
    right: 25%;
  }

  .navbar-style {
    width: 100%;
    font-size: 18px;
    font-family: helevita;
    margin-right: 10px;
    text-align: right;
    flex-direction: row;
    color: grey;
    background-attachment: fixed;
  }
  .log-t{
    position: absolute;
    right: 0;
  }
  .navbar-mainstyle {
    font-size: 20px;
    font-family: sans-serif;
    color: rgb(255, 255, 255);
  }
`;
export const NavigationBar = () => {
  const [role, setRole] = useState(localStorage.getItem('role'));
  const [name, setName] = useState(localStorage.getItem('username'));
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn'));
  
  const [color, setColor] = useState('');
  const signOut = () => {
//     Axios.get('http://localhost:3001/users/signout').then((response) => {
      localStorage.clear();
      window.location.pathname = '/signin';
//       console.log(response);
//     });
  };

  return (
    <Styles
      style={{
   
        position: 'sticky',
        top: 0,
        zIndex: '100',
      }}
    >
      <nav>
        <Navbar
          style={{
            backgroundColor: '#131921',
            height: '70px',
          }}
          expand='sm'
        >
          <Navbar.Brand href='/products'>
            <div></div>
            <div style={{ marginRight: '30px' }}>
              <h3>Corporate Classifieds </h3>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
         <Navbar.Collapse id='basic-navbar-nav'>
            {role == 1 && (
              <Nav className='navbar-mainstyle'>
                <Nav.Item>
                  <Nav.Link href='/products'>Home</Nav.Link>
                </Nav.Item>
                
                <Nav.Item style={{ marginLeft: '230px' }}>
                  <Nav.Link>
                    <h5 style={{ color: '#e8ffff' }}>Welcome {name}</h5>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Link
                  className='text-danger log-t' 
                  href='/signout'
                  onClick={signOut}
                >
                  Signout 
                </Nav.Link>
              </Nav>
            )}
            {role != 1 && role != 2 && (
              <Nav className='navbar-style'>
                <Nav.Item>
                  <Nav.Link href='/signin'>SignIn</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/signup'>SignUp</Nav.Link>
                </Nav.Item>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </Styles>
  );
};
