import React from 'react';
import { Box, Typography, Container, Grid, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';



const GradientTypography = styled(Typography)(({ theme }) => ({
  backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  backgroundClip: 'text',
  textFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'scale(1.1)',
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  padding: '10px 20px',
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  fontWeight: 500,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'scale(1.05)',
    boxShadow: `0 4px 20px 0 rgba(100, 255, 218, 0.25)`,
  },
}));

const Contact = () => {

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: { xs: 14, md: 16 },
        pb: { xs: 10, md: 12 },
        px: 3,
        position: 'relative',
        bgcolor: '#0a0a0a',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 5 }} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <GradientTypography variant="h2" component="h1" sx={{ mb: 1 }}>
              Vishwajit Kumar
            </GradientTypography>

            <Typography variant="h6" color="text.secondary" sx={{ mb: 3, maxWidth: 'md' }}>
              Aspiring Software Engineer
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' }, mb: 3 }}>
              <SocialIconButton href="mailto:vk7403654@gmail.com" aria-label="Email">
                <EmailIcon />
              </SocialIconButton>
              <SocialIconButton href="https://www.linkedin.com/in/vishwajit-kale-3040a4250/" target="_blank" aria-label="LinkedIn">
                <LinkedInIcon />
              </SocialIconButton>
              <SocialIconButton href="https://github.com/Vishwajit8521" target="_blank" aria-label="GitHub">
                <GitHubIcon />
              </SocialIconButton>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <ActionButton 
                href="/path-to-resume.pdf" 
                download 
                startIcon={<DownloadIcon />}
              >
                Resume
              </ActionButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ 
              width: 280, 
              height: 280, 
              borderRadius: '50%', 
              overflow: 'hidden',
              border: '4px solid transparent',
              backgroundImage: theme => `linear-gradient(${theme.palette.background.default}, ${theme.palette.background.default}), 
                             linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box',
              padding: '4px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
            }}>
              <Box 
                component="img"
                src="/images/profile.jpg"
                alt="Vishwajit Kumar"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
                onError={(e) => {
                  e.target.src = '';
                  e.target.onerror = null;
                  e.target.parentNode.innerHTML = '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #121212; color: #fff; font-size: 48px;">VK</div>';
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box 
        sx={{ 
          position: 'absolute', 
          bottom: 16, 
          left: '50%', 
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          color: 'text.secondary',
          fontSize: '0.875rem'
        }}
      >
        <Typography variant="body2" color="text.secondary" component="span">Made with</Typography>
        <Typography variant="body2" color="error.main" component="span">❤️</Typography>
        <Typography variant="body2" color="text.secondary" component="span">by Vishwajit Kumar</Typography>
      </Box>
    </Box>
  );
};

export default Contact;
