import { Button, Box, Typography, ColorPaletteProp } from '@mui/joy';
import * as Toast from '@radix-ui/react-toast';
import { Dispatch, FC, ReactElement, SetStateAction, useEffect, useState } from 'react';
import JoySnackbar from '../components/JoySnackbar';
import CloseIcon from '@mui/icons-material/Close';
import WarningIcon from '@mui/icons-material/Warning';
import ReportIcon from '@mui/icons-material/Report';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface IProps {
  status: ColorPaletteProp;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const RadixToast: FC<IProps> = ({ status, open, setOpen }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState<ReactElement>(<></>);

  useEffect(() => {
    switch (status) {
      case 'danger':
        setTitle('Incorrect');
        setDescription('Not a target.');
        setIcon(<ReportIcon />);
        break;
      case 'warning':
        setTitle('Warning');
        setDescription('Already found this target.');
        setIcon(<WarningIcon />);
        break;
      case 'success':
        setTitle('Success');
        setDescription('Found a target!');
        setIcon(<CheckCircleIcon />);
        break;
    }
  }, [status]);

  return (
    <Toast.Provider swipeDirection="right">
      <JoySnackbar
        color={status}
        variant="soft"
        open={open}
        onOpenChange={setOpen}
        startDecorator={icon}
        endDecorator={
          <Button component={Toast.Action} altText="Close button" variant="soft" color={status} sx={{ ml: 2 }}>
            <CloseIcon />
          </Button>
        }
      >
        <Box>
          <Typography>
            <b>{title}</b>
          </Typography>
          <Typography level="body-sm">{description}</Typography>
        </Box>
      </JoySnackbar>
      <Box
        component={Toast.Viewport}
        sx={{
          '--viewport-padding': '25px',
          position: 'fixed',
          bottom: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          padding: 'var(--viewport-padding)',
          gap: '10px',
          width: '390px',
          maxWidth: '100vw',
          margin: 0,
          listStyle: 'none',
          zIndex: 2147483647,
          outline: 'none'
        }}
      />
    </Toast.Provider>
  );
};

export default RadixToast;
