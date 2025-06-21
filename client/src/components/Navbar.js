import React, { useState, useMemo } from 'react';
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
  const [activeSection, setActiveSection] = useState('#home');
  
  const navItems = useMemo(() => [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Skills', path: '#skills' },
    { name: 'Contact', path: '#contact' }
  ], []);
  
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.path.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection('#' + section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (path) => {
    const element = document.querySelector(path);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(path);
      handleDrawerToggle();
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.name} 
            button 
            onClick={() => scrollToSection(item.path)}
          >
            <ListItemText 
              primary={item.name}
              sx={{
                color: activeSection === item.path ? 'primary.main' : 'text.primary',
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
          <Box 
            onClick={() => scrollToSection('#home')} 
            sx={{ textDecoration: 'none', flexGrow: 1, cursor: 'pointer' }}
          >
            <Logo>
              <span className="bracket">{'{'}</span>
              Vishwajit
              <span className="bracket">{'}'}</span>
            </Logo>
          </Box>

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
                  onClick={() => scrollToSection(item.path)}
                  sx={{
                    color: activeSection === item.path ? 'primary.main' : 'text.primary',
                    cursor: 'pointer'
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