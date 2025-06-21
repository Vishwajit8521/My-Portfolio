import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedDeveloper from './AnimatedDeveloper';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 10, md: 0 },
        pb: { xs: 6, md: 0 },
        backgroundColor: '#0a0a0a',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 700,
                  mb: 1,
                  color: '#ffffff',
                  lineHeight: 1.2,
                }}
              >
                Hi there! I am
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>

            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', md: '4.5rem' },
                  fontWeight: 800,
                  mb: 3,
                  background: 'linear-gradient(45deg, #00d4ff, #5a67d8, #667eea)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                Vishwajit Kumar
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>

            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: '#a0a0a0',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  maxWidth: '600px',
                  lineHeight: 1.6,
                }}
              >
                I'm a dedicated Software Developer skilled in full-stack development using React, Node.js, and MongoDB. I focus on building responsive, user-friendly applications. With strong problem-solving abilities and a passion for learning, I strive to create efficient solutions and continuously enhance my skills to contribute effectively to modern software projects.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              variants={itemVariants}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
              }}
            >
              <AnimatedDeveloper />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
