import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar bg='dark' variant='dark' style={{ height: '60px' }}>
        <Container>
          <NavLink to='/' className='text-decoration-none text-light mx-3'>
            Add to Cart
          </NavLink>
          <Nav className='me-auto'>
            <NavLink to='/' className='text-decoration-none text-light'>
              Home
            </NavLink>
          </Nav>

          <Badge
            badgeContent={4}
            color='primary'
            id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <i
              className='fa-solid fa-cart-shopping text-light'
              style={{ fontSize: 25, cursor: 'pointer' }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
