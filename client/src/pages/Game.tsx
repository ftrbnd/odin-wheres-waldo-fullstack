import { FC, useState, MouseEvent, useRef } from 'react';
import useTimer from '../utils/useTimer';
import { AspectRatio, Skeleton, Stack, Typography } from '@mui/joy';
import { useLocation } from 'react-router-dom';
import SelectMenu from '../components/SelectMenu';

const Game: FC = () => {
  const [x, setX] = useState(-1);
  const [y, setY] = useState(-1);
  const [clicked, setClicked] = useState(false);

  const [correctCount, setCorrectCount] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const { minutes, seconds } = useTimer(timerStarted);
  const { state } = useLocation();

  const handleImageClick = (e: MouseEvent<HTMLImageElement>) => {
    // prevent menu from going off-screen on edges
    if (imgRef && imgRef.current) {
      imgRef.current.offsetWidth - e.pageX < 144 ? setX(e.pageX - 144) : setX(e.pageX);
      imgRef.current.offsetHeight - e.pageY < 143 ? setY(e.pageY - 143) : setY(e.pageY);
      setClicked((prevClicked) => !prevClicked);
    }

    console.log(`Clicked on (${e.pageX}, ${e.pageY})`);
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
      <SelectMenu x={x} y={y} clicked={clicked} />
      <AspectRatio ratio={'3/2'} sx={{ width: '100%' }}>
        <Skeleton loading={loading}>
          <img src={state.link} alt={state.name} ref={imgRef} onClick={(e) => handleImageClick(e)} />
        </Skeleton>
      </AspectRatio>
    </Stack>
  );
};

export default Game;
