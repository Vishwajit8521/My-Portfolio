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
      
      // Only close drawer if on mobile
      if (isMobile && mobileOpen) {
        handleDrawerToggle();
      }
    }
  };

  const drawer = (
    <Box 
      sx={{ 
        textAlign: 'center', 
        p: 2, 
        width: 220, 
        height: '100%',
        background: 'linear-gradient(180deg, #0A0A0A 0%, #121212 100%)',
        borderLeft: '1px solid rgba(100, 255, 218, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2
      }}
    >
      <List sx={{ width: '100%', mt: 3 }}>
        {navItems.map((item) => (
          <ListItem 
            key={item.name} 
            button 
            onClick={() => scrollToSection(item.path)}
            sx={{
              borderRadius: 2,
              mb: 1.5,
              py: 1.2,
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              '&:before': activeSection === item.path ? {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '4px',
                background: 'linear-gradient(45deg, #64ffda, #7928ca)',
                borderRadius: '0 4px 4px 0',
              } : {},
              '&:hover': {
                bgcolor: 'rgba(100, 255, 218, 0.05)',
                transform: 'translateX(5px)'
              }
            }}
          >
            <ListItemText 
              primary={item.name}
              primaryTypographyProps={{
                fontWeight: activeSection === item.path ? 700 : 500,
                fontSize: '1rem',
                letterSpacing: '0.5px'
              }}
              sx={{
                color: activeSection === item.path ? 'primary.main' : 'text.primary',
                textAlign: 'left',
                ml: 2
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
            sx={{ 
              textDecoration: 'none', 
              flexGrow: 1, 
              cursor: 'pointer',
              display: 'inline-flex',
              width: 'auto'
            }}
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
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                position: 'relative',
                width: '45px',
                height: '45px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.1), rgba(121, 40, 202, 0.1))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(100, 255, 218, 0.15)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(121, 40, 202, 0.2))',
                  transform: 'scale(1.05)'
                }
              }}
            >
              <MenuIcon sx={{ color: '#64ffda' }} />
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
        PaperProps={{
          sx: {
            boxShadow: '-5px 0 20px rgba(0, 0, 0, 0.5)',
            background: 'transparent'
          }
        }}
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