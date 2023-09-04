import { Box, Stack, Typography } from '@mui/joy';
import ImageCard from '../components/ImageCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GameMap } from '../utils/map';

const App = () => {
  const [maps, setMaps] = useState<GameMap[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMaps() {
      try {
        setLoading(true);
        const res = await axios.get<GameMap[]>('http://localhost:3000/api/maps');

        setMaps(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchMaps();
  }, []);

  return (
    <Stack spacing={2} alignItems={'center'}>
      <Typography level="h2" textAlign={'center'}>
        Choose an image to get started!
      </Typography>
      <Box component="ul" sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}>
        {maps.map((map) => (
          <ImageCard key={map._id} link={map.link} name={map.name} loading={loading} />
        ))}
      </Box>
    </Stack>
  );
};

export default App;
