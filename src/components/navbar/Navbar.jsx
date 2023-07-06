import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../navbar/Navbar.css'
import { useSelector } from 'react-redux';

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);
  const state = useSelector((state) => state.handleCart)

  return (
    <MDBNavbar className='navbar-light bg-white py-3 shadow-sm' expand='lg' light bgColor='light'>
      <MDBContainer container>
        <MDBNavbarBrand className='navbar-brand fw-bold fs-4' href='/'>Luxurius Collection</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
                <FontAwesomeIcon icon={faBars} />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/product'>Product</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/about'>About</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/contact'>Contact</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <div style={{gap: '6px'}} className='d-flex flex-sm-row flex-column buttons'>
            <a href="/login" className='btn btn-outline-dark'> 
            <i className='fa fa-sign-in me-1'></i> Login</a>
            <a href="/signup" className='btn btn-outline-dark'> 
            <i className='fa fa-user-plus  me-1'></i> Register</a>
            <a href="/cart" className='btn btn-outline-dark'>
             <i className='fa fa-shopping-cart me-1 '></i> Cart({state.length})</a>
          </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}