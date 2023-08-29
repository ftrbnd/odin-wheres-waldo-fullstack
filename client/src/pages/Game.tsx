import { FC, useState, MouseEvent } from 'react';
import useTimer from '../utils/useTimer';
import { AspectRatio, Dropdown, Menu, MenuButton, MenuItem, Skeleton, Stack, Typography } from '@mui/joy';
import { useLocation } from 'react-router-dom';

const Game: FC = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [correctCount, setCorrectCount] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { minutes, seconds } = useTimer(timerStarted);
  const { state } = useLocation();

  const handleImageClick = (e: MouseEvent<HTMLImageElement>) => {
    setX(e.clientX);
    setY(e.clientY);

    console.log(`Clicked on (${e.clientX}, ${e.clientY})`);
  };

  return (
    <Stack alignItems={'center'}>
      <Stack direction={'row'} spacing={2}>
        <Typography level="body-md">{correctCount} / 3</Typography>
        <Typography level="body-md">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </Typography>
        <Typography level="body-md">Targets</Typography>
      </Stack>
      <Dropdown>
        <AspectRatio ratio={'3/2'} sx={{ width: '100%' }}>
          <Skeleton loading={loading}>
            <MenuButton>
              <img src={state.link} alt={state.name} onClick={(e) => handleImageClick(e)} />
            </MenuButton>
          </Skeleton>
        </AspectRatio>
        <Menu>
          <MenuItem>TARGET 1</MenuItem>
          <MenuItem>TARGET 2</MenuItem>
          <MenuItem>TARGET 3</MenuItem>
        </Menu>
      </Dropdown>
    </Stack>
  );
};

export default Game;
