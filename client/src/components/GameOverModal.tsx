import { Modal, ModalDialog, ModalClose, Typography, Button, FormControl, FormLabel, Input, Stack } from '@mui/joy';
import axios from 'axios';
import { FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  time: number;
  map: string;
}

const GameOverModal: FC<IProps> = ({ open, setOpen, time, map }) => {
  const [name, setName] = useState('');
  const finalTime = time;

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/api/scores/new', {
        name,
        time,
        map
      });

      setOpen(false);
      navigate('/leaderboard');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <Modal
      aria-labelledby="Game Over Modal"
      aria-describedby="Opens when the game is over"
      open={open}
      onClose={() => setOpen(false)}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <ModalDialog aria-labelledby="basic-modal-dialog-title" aria-describedby="basic-modal-dialog-description" sx={{ maxWidth: 500 }}>
        <ModalClose />
        <Typography id="basic-modal-dialog-title" level="h2">
          You found all 3 targets in {finalTime} seconds!
        </Typography>
        <Typography id="basic-modal-dialog-description">Enter a name to be displayed on the leaderboard</Typography>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Stack spacing={2}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input autoFocus required value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  );
};

export default GameOverModal;
