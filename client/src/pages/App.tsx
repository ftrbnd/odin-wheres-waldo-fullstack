import { Box, Stack, Typography } from '@mui/joy';
import ImageCard from '../components/ImageCard';
import { Image } from '../utils/image';

const images: Image[] = [
  { link: 'https://i.imgur.com/pP2DnvE.jpg', name: 'Central Park', id: 'central_park' },
  { link: 'https://i.imgur.com/7hsWxco.jpg', name: 'Green Goblin', id: 'green_goblin' },
  { link: 'https://i.imgur.com/Qv1AVcm.jpg', name: 'Mister Negative', id: 'mister_negative' },
  { link: 'https://i.imgur.com/4ZbtaK0.jpg', name: 'Vulture', id: 'vulture' }
];

const App = () => {
  return (
    <Stack spacing={2} alignItems={'center'}>
      <Typography level="h2">Choose an image to get started!</Typography>
      <Box component="ul" sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}>
        {images.map((img) => (
          <ImageCard key={img.id} link={img.link} name={img.name} id={img.id} />
        ))}
      </Box>
    </Stack>
  );
};

export default App;
