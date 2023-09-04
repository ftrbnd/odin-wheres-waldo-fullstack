import { FC, useState, MouseEvent, useRef, useEffect } from 'react';
import useTimer from '../hooks/useTimer';
import { AspectRatio, Card, ColorPaletteProp, Divider, Skeleton, Stack, Typography } from '@mui/joy';
import { useLocation } from 'react-router-dom';
import SelectMenu from '../components/SelectMenu';
import axios from 'axios';
import { ClickedTarget, TargetMap, Target } from '../utils/target';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import GameOverModal from '../components/GameOverModal';
import RadixToast from '../components/RadixToast';

const emptyMap: TargetMap = {
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
  const [map, setMap] = useState<TargetMap>(emptyMap);
  const [foundTargets, setFoundTargets] = useState<ClickedTarget[]>([]);

  const [timerStarted, setTimerStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const [finishedTime, setFinishedTime] = useState(0);

  const [openToast, setOpenToast] = useState(false);
  const [toastStatus, setToastStatus] = useState<ColorPaletteProp>('success');
  const timerRef = useRef(0);

  const { minutes, seconds } = useTimer(timerStarted);
  const { state } = useLocation();

  useEffect(() => {
    async function fetchTargets() {
      try {
        setLoading(true);

        const res = await axios.get<Target[]>('http://localhost:3000/api/targets');

        setTargets(res.data);
        setTimerStarted(true);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchTargets();
  }, []);

  useEffect(() => {
    setMap(state);
  }, [state]);

  useEffect(() => {
    if (foundTargets.length === 3) {
      setOpenModal(true);
      setFinishedTime(minutes * 60 + seconds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foundTargets]);

  const handleImageClick = (e: MouseEvent<HTMLImageElement>) => {
    // prevent menu from going off-screen on edges
    if (imgRef && imgRef.current) {
      setClicked((prevClicked) => !prevClicked);

      imgRef.current.offsetWidth - e.pageX < 144 ? setAdjustedX(e.pageX - 144) : setAdjustedX(e.pageX);
      imgRef.current.offsetHeight - e.pageY < 143 ? setAdjustedY(e.pageY - 143) : setAdjustedY(e.pageY);

      exactX.current = e.pageX / imgRef.current.offsetWidth;
      exactY.current = e.pageY / imgRef.current.offsetHeight;
    }

    console.log(`Clicked on (${e.pageX}, ${e.pageY})`);
  };

  const showToast = (status: ColorPaletteProp) => {
    setOpenToast(false);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setOpenToast(true);

      setToastStatus(status);
    }, 100);
  };

  const handlePlacedTarget = (target: ClickedTarget) => {
    if (target.found && !foundTargets.find((t) => t.name === target.name)) {
      setFoundTargets((prevTargets) => [...prevTargets, target]);
      showToast('success');
    } else if (target.found && foundTargets.find((t) => t.name === target.name)) {
      showToast('warning');
    } else {
      showToast('danger');
    }
  };

  return (
    <Stack alignItems={'center'}>
      <Card sx={{ p: 1, m: 1 }} variant="outlined">
        <Stack direction={'row'} spacing={2} p={1}>
          <Typography level="body-md">{foundTargets.length} / 3</Typography>
          <Divider orientation="vertical" />
          <Typography level="body-md">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </Typography>
          <Divider orientation="vertical" />
          <Typography level="body-md">Targets</Typography>
        </Stack>
      </Card>

      <GameOverModal open={openModal} setOpen={setOpenModal} time={finishedTime} map={map.name} />

      <RadixToast status={toastStatus} open={openToast} setOpen={setOpenToast} />

      <SelectMenu exactX={exactX.current} exactY={exactY.current} adjustedX={adjustedX} adjustedY={adjustedY} clicked={clicked} targets={targets} map={map} handlePlacedTarget={handlePlacedTarget} />

      {foundTargets.map((target) => (
        <FontAwesomeIcon key={target.name} icon={faCircleCheck} beat style={{ color: '#13dd35', position: 'absolute', top: `${target.y}px`, left: `${target.x}px`, zIndex: 1000 }} />
      ))}

      <AspectRatio ratio={'3/2'} sx={{ width: '100%' }}>
        <Skeleton loading={loading}>
          <img src={state.link} alt={state.name} ref={imgRef} onClick={(e) => handleImageClick(e)} />
        </Skeleton>
      </AspectRatio>
    </Stack>
  );
};

export default Game;
