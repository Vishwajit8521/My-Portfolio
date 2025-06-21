import React, { memo, useMemo, Suspense } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Link as MuiLink,
  Tooltip,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { getIconForTech as TechnologyIcon } from './TechnologyIcons';
import { containerVariants, itemVariants, hoverVariants, getMotionVariants } from '../utils/animations';
import { lazyLoadImage, preloadCriticalImages } from '../utils/imageOptimizer';


const ProjectCard = styled(motion(Card))(({ theme }) => ({
  background: `linear-gradient(120deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  willChange: 'transform',
  border: `1px solid ${theme.palette.background.paper}`,
}));

const ProjectMedia = styled(Box)(({ theme }) => ({
  height: 0,
  paddingTop: '56.25%',
  position: 'relative',
  overflow: 'hidden',
  background: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.background.paper}`,
  '& > svg': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    willChange: 'transform',
  },
}));

const LoadingFallback = () => (
  <Box display="flex" justifyContent="center" alignItems="center" p={4}>
    <CircularProgress />
  </Box>
);

const projectsData = [
  {
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Material-UI. Features a clean design, smooth animations, dark mode support, and showcases projects, skills, and contact information.',
    image: (
      <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="20" width="320" height="185" rx="8" fill="#111111" />
        <rect x="40" y="20" width="320" height="30" rx="8" fill="#222222" />
        <circle cx="65" cy="35" r="5" fill="#FF5F56" />
        <circle cx="85" cy="35" r="5" fill="#FFBD2E" />
        <circle cx="105" cy="35" r="5" fill="#27C93F" />
        <rect x="60" y="70" width="120" height="15" rx="2" fill="#64ffda" opacity="0.8" />
        <rect x="60" y="95" width="280" height="8" rx="2" fill="#666666" />
        <rect x="60" y="110" width="240" height="8" rx="2" fill="#666666" />
        <rect x="60" y="125" width="260" height="8" rx="2" fill="#666666" />
        <rect x="60" y="145" width="80" height="40" rx="4" fill="#7928ca" opacity="0.6" />
        <rect x="150" y="145" width="80" height="40" rx="4" fill="#7928ca" opacity="0.6" />
        <rect x="240" y="145" width="80" height="40" rx="4" fill="#7928ca" opacity="0.6" />
      </svg>
    ),
    technologies: ['React', 'Node.js', 'Material-UI', 'MongoDB'],
    github: 'https://github.com/Vishwajit8521/PortFolio',
    live: '#',
  },
  {
    title: 'AI-Based Fraud Management System for UID (Aadhaar)',
    description: 'Developed a fraud detection system for Aadhaar authentication using AI and machine learning. Integrated EasyOCR for text extraction and YOLO-based object detection to enhance security validation and fraud prevention.',
    image: (
      <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="40" width="200" height="120" rx="10" fill="#64ffda" opacity="0.1" />
        <rect x="100" y="40" width="200" height="120" rx="10" stroke="#64ffda" strokeWidth="2" />
        <rect x="90" y="30" width="220" height="140" rx="12" stroke="#7928ca" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="150" cy="80" r="20" stroke="#64ffda" strokeWidth="2" fill="none" />
        <rect x="190" y="70" width="80" height="20" rx="4" fill="#7928ca" opacity="0.6" />
        <circle cx="150" cy="80" r="2" fill="#64ffda" />
        <circle cx="250" cy="120" r="2" fill="#64ffda" />
        <circle cx="130" cy="140" r="2" fill="#64ffda" />
        <line x1="150" y1="80" x2="250" y2="120" stroke="#64ffda" strokeWidth="1" opacity="0.5" />
        <line x1="150" y1="80" x2="130" y2="140" stroke="#64ffda" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    technologies: ['Python', 'Machine Learning', 'Flask', 'EasyOCR', 'YOLO'],
    github: 'https://github.com/Vishwajit8521/AI-based--fraud-management-system-for-UID-aadhar',
    live: '#',
  },
  {
    title: 'Prediction of Multiple Disease',
    description: 'Developed a powerful disease prediction tool using Python and Machine Learning (Multi-Regression). Implemented a user-friendly interface using Spyder tool under Anaconda to help doctors and patients in various aspects.',
    image: (
      <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="180" y="40" width="40" height="120" rx="4" fill="#64ffda" opacity="0.8" />
        <rect x="140" y="80" width="120" height="40" rx="4" fill="#64ffda" opacity="0.8" />
        <path d="M40 140 L100 140 L120 80 L140 180 L160 120 L180 140 L360 140" 
          stroke="#7928ca" strokeWidth="3" fill="none" />
        <circle cx="120" cy="80" r="4" fill="#7928ca" />
        <circle cx="140" cy="180" r="4" fill="#7928ca" />
        <circle cx="160" cy="120" r="4" fill="#7928ca" />
        <rect x="60" y="160" width="40" height="20" rx="4" fill="#64ffda" opacity="0.3" />
        <rect x="180" y="160" width="40" height="20" rx="4" fill="#64ffda" opacity="0.3" />
        <rect x="300" y="160" width="40" height="20" rx="4" fill="#64ffda" opacity="0.3" />
      </svg>
    ),
    technologies: ['Python', 'Machine Learning', 'Multi-Regression', 'Anaconda', 'Spyder'],
    github: 'https://github.com/Vishwajit8521/Multiple_Disease_Prediction',
    live: '#',
  },
  {
    title: 'Advanced Fitness Analytics and Real-Time Tracking',
    description: 'Developed a fitness tracking system using custom algorithms and real-time data processing. Implemented API integrations for seamless data collection from IoT fitness devices and mobile applications, with predictive models for personalized workout recommendations.',
    image: (
      <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="160" y="60" width="80" height="100" rx="20" fill="#111111" />
        <rect x="170" y="70" width="60" height="80" rx="10" fill="#64ffda" opacity="0.1" />
        <circle cx="200" cy="110" r="25" stroke="#7928ca" strokeWidth="6" strokeDasharray="157 157" strokeDashoffset="40" />
        <circle cx="200" cy="110" r="18" stroke="#64ffda" strokeWidth="6" strokeDasharray="113 113" strokeDashoffset="30" />
        <path d="M260 110 C280 110, 290 90, 310 90 C330 90, 340 130, 360 130" 
          stroke="#64ffda" strokeWidth="2" fill="none" />
        <path d="M260 120 C280 120, 290 140, 310 140 C330 140, 340 100, 360 100" 
          stroke="#7928ca" strokeWidth="2" fill="none" />
        <circle cx="310" cy="90" r="3" fill="#64ffda" />
        <circle cx="310" cy="140" r="3" fill="#7928ca" />
      </svg>
    ),
    technologies: ['Python', 'APIs', 'Machine Learning', 'IoT', 'Real-time Processing'],
    github: 'https://github.com/Vishwajit8521',
    live: '#',
  },
];

const Projects = memo(() => {
  const memoizedProjects = useMemo(() => projectsData, []);
  const motionVariants = useMemo(() => getMotionVariants(containerVariants), []);

  
  React.useEffect(() => {
    const criticalImages = memoizedProjects
      .slice(0, 2)
      .map(project => project.image);
    preloadCriticalImages(criticalImages);
  }, [memoizedProjects]);

  return (
    <Box
      component={motion.div}
      variants={motionVariants}
      initial="hidden"
      animate="visible"
      sx={{
        minHeight: '100vh',
        pt: { xs: 14, md: 16 },
        pb: { xs: 10, md: 12 },
        backgroundColor: '#0a0a0a',
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
            Projects
          </Typography>
        </motion.div>

        <AnimatePresence>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            {memoizedProjects.map((project) => (
              <Grid item xs={12} md={6} lg={4} key={project.title}>
                <ProjectCard
                  variants={itemVariants}
                  whileHover={hoverVariants.hover}
                  initial="initial"
                  elevation={0}
                >
                  <Suspense fallback={<LoadingFallback />}>
                    <ProjectMedia>
                      {typeof project.image === 'string' 
                        ? lazyLoadImage(project.image, project.title)
                        : project.image
                      }
                    </ProjectMedia>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography 
                        variant="h5" 
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech) => (
                          <Tooltip title={tech} key={tech} arrow>
                            <IconButton 
                              size="small" 
                              component={motion.button}
                              whileHover={{ 
                                scale: 1.1,
                                y: -2,
                                transition: { duration: 0.2 }
                              }}
                              sx={{ color: 'text.secondary' }}
                            >
                              <TechnologyIcon tech={tech} />
                            </IconButton>
                          </Tooltip>
                        ))}
                      </Box>
                      <Box>
                        <IconButton
                          component={MuiLink}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          sx={{ color: 'text.primary' }}
                        >
                          <GitHubIcon />
                        </IconButton>
                        <IconButton
                          component={MuiLink}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          sx={{ color: 'text.primary' }}
                        >
                          <LaunchIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Suspense>
                </ProjectCard>
              </Grid>
            ))}
          </Grid>
        </AnimatePresence>
      </Container>
    </Box>
  );
});

Projects.displayName = 'Projects';

export default Projects;