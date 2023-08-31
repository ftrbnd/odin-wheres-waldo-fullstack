import { Modal, ModalDialog, ModalClose, Typography, Button, FormControl, FormLabel, Input, Stack } from '@mui/joy';
import { FC, FormEvent, useState } from 'react';

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameOverModal: FC<IProps> = ({ open, setOpen }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(false);

    // make POST request to api

    console.log(`${name} finished the game`);
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
          You found all 3 targets!
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
