import { FC, useState, MouseEvent, useRef, useEffect } from 'react';
import useTimer from '../utils/useTimer';
import { AspectRatio, Skeleton, Stack, Typography } from '@mui/joy';
import { useLocation } from 'react-router-dom';
import SelectMenu from '../components/SelectMenu';
import axios from 'axios';
import { Map, Target } from '../utils/target';

const emptyMap: Map = {
  name: '',
  x_range: [-1, -1],
  y_range: [-1, -1]
};

const Game: FC = () => {
  const exactX = useRef(-1);
  const exactY = useRef(-1);
  const [adjustedX, setAdjustedX] = useState(-1);
  const [adjustedY, setAdjustedY] = useState(-1);
  const [clicked, setClicked] = useState(false);

  const [targets, setTargets] = useState<Target[]>([]);
  const [map, setMap] = useState<Map>(emptyMap);

  const [correctCount, setCorrectCount] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const { minutes, seconds } = useTimer(timerStarted);
  const { state } = useLocation();

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/targets')
      .then((res) => {
        console.log(res.data.targets);
        setTargets(res.data.targets);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    setMap(state);
  }, [state]);

  const handleImageClick = (e: MouseEvent<HTMLImageElement>) => {
    // prevent menu from going off-screen on edges
    if (imgRef && imgRef.current) {
      setClicked((prevClicked) => !prevClicked);

      imgRef.current.offsetWidth - e.pageX < 144 ? setAdjustedX(e.pageX - 144) : setAdjustedX(e.pageX);
      imgRef.current.offsetHeight - e.pageY < 143 ? setAdjustedY(e.pageY - 143) : setAdjustedY(e.pageY);

      exactX.current = e.pageX / imgRef.current.offsetWidth;
      exactY.current = e.pageY / imgRef.current.offsetHeight;
    }

    console.log(`Clicked on (${exactX.current}, ${exactY.current})`);
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
      <SelectMenu exactX={exactX.current} exactY={exactY.current} adjustedX={adjustedX} adjustedY={adjustedY} clicked={clicked} targets={targets} map={map} />
      <AspectRatio ratio={'3/2'} sx={{ width: '100%' }}>
        <Skeleton loading={loading}>
          <img src={state.link} alt={state.name} ref={imgRef} onClick={(e) => handleImageClick(e)} />
        </Skeleton>
      </AspectRatio>
    </Stack>
  );
};

export default Game;
