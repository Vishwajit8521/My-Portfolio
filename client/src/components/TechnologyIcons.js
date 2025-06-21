import React, { memo } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';
import BiotechIcon from '@mui/icons-material/Biotech';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ApiIcon from '@mui/icons-material/Api';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import MemoryIcon from '@mui/icons-material/Memory';
import SpeedIcon from '@mui/icons-material/Speed';
import TerminalIcon from '@mui/icons-material/Terminal';

const icons = {
  'Python': CodeIcon,
  'Machine Learning': PsychologyIcon,
  'Flask': DataObjectIcon,
  'EasyOCR': BiotechIcon,
  'YOLO': BiotechIcon,
  'Multi-Regression': PsychologyIcon,
  'Anaconda': TerminalIcon,
  'Spyder': CodeIcon,
  'APIs': ApiIcon,
  'IoT': DeveloperBoardIcon,
  'Real-time Processing': SpeedIcon,
  'Database': StorageIcon,
  'AI': MemoryIcon,
  'React': CodeIcon,
  'Node.js': DataObjectIcon,
  'Material-UI': CodeIcon,
  'MongoDB': StorageIcon,
};


const TechnologyIcon = memo(({ tech }) => {
  const Icon = icons[tech] || CodeIcon;
  return <Icon />;
});

TechnologyIcon.displayName = 'TechnologyIcon';

export { TechnologyIcon as getIconForTech };