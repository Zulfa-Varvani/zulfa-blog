import React from 'react';
import { AppBar, Toolbar, Button, Typography, Menu, MenuItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Fastfood } from '@mui/icons-material';

const NavigationBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const location = useLocation();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToAboutMe = () => {
    if(location.pathname === '/'){
      const aboutMeSection = document.getElementById('about-me');
      if (aboutMeSection) {
        window.scrollTo({
          top: aboutMeSection.offsetTop,
          behavior: 'smooth',
        });
      }
    } else {
      window.location.href = '/zulfa-blog/';
    }
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/zulfa-blog/" style={{ textDecoration: 'none', flexGrow: 1 }}>
          <Fastfood fontSize="large" style={{ marginRight: '5px' }} color='secondary'/>
          Zulfa's Food Blog
        </Typography>
        <Button style={{ marginRight: '20px' }} onClick={scrollToAboutMe} color='secondary'>About Me</Button>
        <Button
          aria-controls="country-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={{ marginRight: '20px' }}
          color='secondary'
        >
          Select Country
        </Button>
        <Menu
          id="country-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <MenuItem component={Link} to="/kenya" onClick={handleClose}>Kenya</MenuItem>
          <MenuItem component={Link} to="/palestine" onClick={handleClose}>Palestine</MenuItem>
          <MenuItem component={Link} to="/egypt" onClick={handleClose}>Egypt</MenuItem>
        </Menu>
        <Button component={Link} to="/contact-us" variant="contained" color='secondary'>Contact Us</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
