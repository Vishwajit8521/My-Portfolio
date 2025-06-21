import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    transform: scale(1.05);
    filter: brightness(1.2);
  }
  100% {
    transform: scale(1);
    filter: brightness(1);
  }
`;

const glowText = keyframes`
  0% {
    text-shadow: 0 0 10px rgba(100, 255, 218, 0);
  }
  50% {
    text-shadow: 0 0 20px rgba(100, 255, 218, 0.5);
  }
  100% {
    text-shadow: 0 0 10px rgba(100, 255, 218, 0);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const LoadingContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.background.default,
  zIndex: 9999,
  animation: `${fadeIn} 0.5s ease-in-out`,
}));

const WelcomeText = styled(Typography)(({ theme }) => ({
  fontSize: '4rem',
  fontWeight: '800',
  fontFamily: "'Poppins', sans-serif",
  background: `linear-gradient(45deg, 
    ${theme.palette.primary.main}, 
    ${theme.palette.secondary.main}, 
    ${theme.palette.primary.main})`,
  backgroundSize: '200% auto',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  marginBottom: theme.spacing(4),
  animation: `
    ${pulse} 2s infinite ease-in-out,
    ${glowText} 2s infinite ease-in-out
  `,
  textAlign: 'center',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '100%',
    width: '50%',
    left: '25%',
    height: '2px',
    background: `linear-gradient(90deg, 
      transparent,
      ${theme.palette.primary.main},
      transparent
    )`,
    animation: `${pulse} 2s infinite ease-in-out`,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

const Spinner = styled('svg')(({ theme }) => ({
  animation: `${rotate} 2s linear infinite`,
  width: '50px',
  height: '50px',
  '& .path': {
    stroke: theme.palette.primary.main,
    strokeLinecap: 'round',
    animation: `${dash} 1.5s ease-in-out infinite`,
  },
}));

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <WelcomeText>
        {'<'}Vishwajit{'>'}
      </WelcomeText>
      <Spinner viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </Spinner>
    </LoadingContainer>
  );
};

export default LoadingScreen;