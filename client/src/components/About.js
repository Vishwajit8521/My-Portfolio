import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { School as SchoolIcon } from '@mui/icons-material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: '2rem',
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  }
}));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const About = () => {
  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        minHeight: '100vh',
        pt: { xs: 12, md: 16 },
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        <motion.div variants={itemVariants}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 8,
              background: (theme) =>
                `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div variants={itemVariants}>
              <StyledPaper>
                <Typography variant="h5" gutterBottom color="primary">
                  Who I Am
                </Typography>
                <Typography variant="body1" paragraph>
                  I'm Vishwajit Kumar, a motivated Computer Science student with a strong foundation in web application development and security principles.
                </Typography>
                <Typography variant="body1">
                  I'm adept at learning new technologies and applying innovative solutions to solve problems. My collaborative mindset, effective communication skills, and keen interest in development and security projects drive me to create impactful solutions.
                </Typography>
              </StyledPaper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div variants={itemVariants}>
              <StyledPaper>
                <Typography variant="h5" gutterBottom color="primary">
                  Education
                </Typography>
                <IconContainer>
                  <SchoolIcon />
                  <Box>
                    <Typography variant="h6" color="text.primary">
                      Kalasalingam Academy of Research and Education
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      B.Tech in Computer Science & Engineering (Cyber Security)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      2021 – 2025
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                      CGPA: 7.75
                    </Typography>
                  </Box>
                </IconContainer>
              </StyledPaper>
            </motion.div>
          </Grid>

          <Grid item xs={12}>
            <motion.div variants={itemVariants}>
              <StyledPaper>
                <Typography variant="h5" gutterBottom color="primary">
                  My Journey
                </Typography>
                <Typography variant="body1" paragraph>
                  My professional journey includes valuable experiences such as the Infosys Springboard Internship 5.0, where I developed an AI-based fraud detection system for Aadhaar. I also participated in the MathWorks Virtual Internship Program (MVIP) in collaboration with AICTE, and completed a Summer Internship at IBM where I developed an Intrusion Detection System for DDoS attacks.
                </Typography>
                <Typography variant="body1">
                  These experiences have strengthened my expertise in both development and security domains, allowing me to create robust and secure applications while staying updated with the latest industry trends and best practices.
                </Typography>
              </StyledPaper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 