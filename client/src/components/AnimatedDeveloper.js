import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const AnimatedDeveloper = () => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  return (
    <motion.svg
      viewBox="0 0 800 600"
      initial="hidden"
      animate="visible"
      style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
    >
      <motion.circle
        cx="600"
        cy="300"
        r="250"
        fill="#0A0A0A"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {[45, 90, 135].map((rotation, index) => (
        <motion.path
          key={index}
          d="M 700 350 Q 730 320, 750 350 Q 730 380, 700 350"
          fill={primaryColor}
          initial={{ opacity: 0, rotate: rotation }}
          animate={{ opacity: 0.2, rotate: rotation }}
          transition={{ delay: index * 0.2, duration: 1 }}
          style={{ transformOrigin: '700px 350px' }}
        />
      ))}

      <motion.path
        d="M 400 400 L 700 400 L 750 450 L 350 450 Z"
        fill={secondaryColor}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.5 }}
      />

      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <path
          d="M 500 500 L 520 400 L 600 400 L 620 500 Z"
          fill={primaryColor}
          opacity="0.8"
        />
        <path
          d="M 540 400 L 580 400 L 580 300 L 540 300 Z"
          fill={primaryColor}
          opacity="0.9"
        />
      </motion.g>

      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <path
          d="M 550 350 L 570 300 L 530 300 Z"
          fill={primaryColor}
        />
        
        <circle cx="550" cy="280" r="25" fill={primaryColor} />
        
        <motion.path
          d="M 530 320 L 480 360"
          stroke={primaryColor}
          strokeWidth="8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        />
      </motion.g>

      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <rect x="450" y="360" width="120" height="80" fill="#2A2A2A" rx="5" />
        <rect x="460" y="370" width="100" height="60" fill={primaryColor} opacity="0.3" />
      </motion.g>

      <motion.g
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <rect x="600" y="200" width="150" height="100" fill="#2A2A2A" rx="10" />
        <rect x="610" y="220" width="130" height="10" fill={primaryColor} opacity="0.5" />
        <rect x="610" y="240" width="100" height="10" fill={primaryColor} opacity="0.3" />
        <rect x="610" y="260" width="80" height="10" fill={primaryColor} opacity="0.2" />
      </motion.g>

      <motion.g>
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={470 + i * 20}
            cy="390"
            r="3"
            fill={primaryColor}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.2
            }}
          />
        ))}
      </motion.g>
    </motion.svg>
  );
};

export default AnimatedDeveloper;
