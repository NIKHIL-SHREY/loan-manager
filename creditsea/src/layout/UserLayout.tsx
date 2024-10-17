import React, { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home'; // Import Home icon
import PaymentIcon from '@mui/icons-material/Payment'; // Import Payment icon
import AssessmentIcon from '@mui/icons-material/Assessment'; // Import Budget icon
import CreditCardIcon from '@mui/icons-material/CreditCard'; // Import Card icon
import { Button } from '@mui/material'; // Ensure Button is imported
import { Outlet, useNavigate } from 'react-router-dom';
import { logoutAPi } from '../api';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#6256CA',  // Changed to a rich blue for contrast
  color: 'white',  // Changed text color to white
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',  // Added subtle shadow
}));

const MenuButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#C1E2A4',  // Green background for consistency
  color: 'black',
  borderRadius: '25px',  // Rounded button for a modern look
  '&:hover': {
    backgroundColor: '#86D293',  // Slightly darker shade on hover
    opacity: 0.9,
  },
}));

export default function UserLayout() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedButton, setSelectedButton] = useState('Home');

  const handleLogout = async () => {
    try {
      await logoutAPi();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    switch (button) {
      case 'Home':
        navigate('/user/dashboard');  // Changed to user
        break;
      case 'Payments':
        navigate('/user/payments');  // Changed to user
        break;
      case 'Budgets':
        navigate('/user/budgets');  // Changed to user
        break;
      case 'Cards':
        navigate('/user/cards');  // Changed to user
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              CREDIT APP
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <MenuButton
              startIcon={<HomeIcon />}
              onClick={() => handleButtonClick('Home')}
            >
              Home
            </MenuButton>
            <MenuButton
              startIcon={<PaymentIcon />}
              onClick={() => handleButtonClick('Payments')}
            >
              Payments
            </MenuButton>
            <MenuButton
              startIcon={<AssessmentIcon />}
              onClick={() => handleButtonClick('Budgets')}
            >
              Budget
            </MenuButton>
            <MenuButton
              startIcon={<CreditCardIcon />}
              onClick={() => handleButtonClick('Cards')}
            >
              Cards
            </MenuButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
              <MessageIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar>A</Avatar>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, padding: theme.spacing(3) }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
