import { Box, Stack, Typography } from '@mui/joy';
import ImageCard from '../components/ImageCard';
import { Image } from '../utils/image';

const images: Image[] = [
  { link: 'https://i.imgur.com/9AV8Pm5.jpg', name: 'Central Park', id: 'central_park' },
  { link: 'https://i.imgur.com/GcajWP8.jpg', name: 'Green Goblin', id: 'green_goblin' },
  { link: 'https://i.imgur.com/2TYdu9B.jpg', name: 'Mister Negative', id: 'mister_negative' },
  { link: 'https://i.imgur.com/F0yqph0.jpg', name: 'Vulture', id: 'vulture' }
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
