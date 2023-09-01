import { useColorScheme } from '@mui/joy/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@mui/joy';

const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <IconButton variant="soft" onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
      <FontAwesomeIcon icon={mode === 'dark' ? faSun : faMoon} style={{ color: mode === 'dark' ? '#ffffff' : '#000000' }} />
    </IconButton>
  );
};

export default ModeToggle;
