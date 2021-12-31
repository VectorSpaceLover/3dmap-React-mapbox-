import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as UserIcon } from '../images/account/user.svg';

import { APP_NAME } from '../constant';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as LogoIcon } from '../images/logo.svg';

import '../css/style.css';

export default function PrimarySearchAppBar() {

  const pathName = window.location.pathname;
  const history = useNavigate();

  
  const accountClick = () => {
    history(`/showsite/accountsetting/`)
  }

  return (
    <>
    {pathName !== '/login' &&
      <Box >
        <AppBar position="static" style = {{backgroundColor: 'white', color: 'black'}}>
          <Toolbar>
            <Box sx={{display: {xs: 'flex', md: 'flex'}}} style = {{alignItems: 'center'}}>
              <a href = '/'><LogoIcon style = {{ marginRight: 20 }}/></a>
              {/* <img style = {{width: '40px', marginRight: 5}} src = '/logo.png' alt = 'logo'/> */}
              <span className='font14-500'>{APP_NAME}</span>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'flex', md: 'flex' } }} style = {{alignItems: 'center', position: 'absolute', right: 29}}>
              <span className='font14-500' style = {{marginRight: 29}}>Account Settings</span>
              <IconButton 
                color="primary" 
                aria-label="upload picture" 
                component="span"
                onClick={accountClick}
              >
                <UserIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    }
    </>
    
  );
}
