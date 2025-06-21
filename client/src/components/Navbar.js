import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Box,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(10, 10, 10, 0.85)',
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  padding: theme.spacing(1, 0),
}));

const NavButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  fontWeight: 700,
  fontSize: '1.5rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  '& .bracket': {
    color: theme.palette.primary.main,
    transition: 'all 0.3s ease',
  },
  '&:hover .bracket': {
    color: theme.palette.secondary.main,
    transform: 'scale(1.2)',
  },
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/Contact' }
];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} component={Link} to={item.path}>
            <ListItemText 
              primary={item.name}
              sx={{
                color: location.pathname === item.path ? 'primary.main' : 'text.primary',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', flexGrow: 1 }}>
            <Logo>
              <span className="bracket">{'{'}</span>
              Vishwajit
              <span className="bracket">{'}'}</span>
            </Logo>
          </Link>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {navItems.map((item) => (
                <NavButton
                  key={item.name}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                  }}
                >
                  {item.name}
                </NavButton>
              ))}
            </Box>
          )}
        </Toolbar>
      </StyledAppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </div>
  );
};

export default Navbar; 