import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Html as HtmlIcon,
  Css as CssIcon,
  Web as WebIcon,
  GitHub as GitHubIcon,
  Build as BuildIcon,
  Cloud as CloudIcon,
  DataObject as DataObjectIcon,
} from '@mui/icons-material';

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '15px',
    top: 0,
    bottom: 0,
    width: '2px',
    background: '#2DD4BF',
    opacity: 0.3,
  }
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  background: '#2DD4BF',
  position: 'absolute',
  left: '10px',
  marginTop: '8px',
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  color: '#2DD4BF',
  fontSize: '1.5rem',
  fontWeight: 500,
  marginLeft: '40px',
  marginBottom: theme.spacing(3),
}));

const SkillsGrid = styled(Grid)(({ theme }) => ({
  marginLeft: '40px',
  marginBottom: theme.spacing(6),
}));

const SkillItem = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  width: '100px',
  textAlign: 'center',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '40px',
  height: '40px',
  marginBottom: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& > svg': {
    width: '100%',
    height: '100%',
    fill: 'white',
  },
}));

const getSkillIcon = (name) => {
  switch (name) {
    case 'C++':
      return <CodeIcon />;
    case 'JavaScript':
      return <CodeIcon />;
    case 'HTML':
      return <HtmlIcon />;
    case 'CSS':
      return <CssIcon />;
    case 'React':
      return <WebIcon />;
    case 'Tailwind CSS':
      return <CssIcon />;
    case 'Node.js':
      return <DataObjectIcon />;
    case 'Express.js':
      return <DataObjectIcon />;
    case 'MongoDB':
      return <StorageIcon />;
    case 'MySQL':
      return <StorageIcon />;
    case 'VS Code':
      return <CodeIcon />;
    case 'Git':
    case 'GitHub':
      return <GitHubIcon />;
    case 'Vercel':
      return <CloudIcon />;
    default:
      return <BuildIcon />;
  }
};

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C++' },
      { name: 'JavaScript' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'React' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
    ],
  },
  {
    category: 'Databases & Cloud',
    skills: [
      { name: 'MongoDB' },
      { name: 'MySQL' },
    ],
  },
  {
    category: 'Developer Tools',
    skills: [
      { name: 'VS Code' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Vercel' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const Skills = () => {
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
        background: '#0A0A0A',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        <motion.div variants={itemVariants}>
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              color: 'white',
              textAlign: 'left',
              mb: 8,
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Skills &<br />
            Experience
          </Typography>
        </motion.div>

        <TimelineContainer>
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ delay: index * 0.2 }}
            >
              <TimelineDot />
              <CategoryTitle variant="h5">
                {category.category}
              </CategoryTitle>
              <SkillsGrid container spacing={2}>
                {category.skills.map((skill, skillIndex) => (
                  <Grid item xs={4} sm={3} md={2} key={skillIndex}>
                    <SkillItem whileHover={{ y: -5 }}>
                      <IconWrapper>
                        {getSkillIcon(skill.name)}
                      </IconWrapper>
                      <Typography variant="body2" sx={{ color: 'white', fontSize: '0.875rem' }}>
                        {skill.name}
                      </Typography>
                    </SkillItem>
                  </Grid>
                ))}
              </SkillsGrid>
            </motion.div>
          ))}
        </TimelineContainer>
      </Container>
    </Box>
  );
};

export default Skills;