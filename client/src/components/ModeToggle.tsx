import { useColorScheme } from '@mui/joy/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { IconButton, Tooltip } from '@mui/joy';

const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <Tooltip title={mode === 'dark' ? 'Light Mode' : 'Dark Mode'} variant="soft">
      <IconButton variant="soft" onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
        <FontAwesomeIcon icon={mode === 'dark' ? faSun : faMoon} style={{ color: mode === 'dark' ? '#ffffff' : '#000000' }} />
      </IconButton>
    </Tooltip>
  );
};

export default ModeToggle;
