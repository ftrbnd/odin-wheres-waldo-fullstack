import { Box, Stack, Typography } from '@mui/joy';
import ImageCard from '../components/ImageCard';
import { GameMap } from '../utils/map';
import useAxios from '../hooks/useAxios';
import { SERVER_URL } from '../utils/server-url';

const App = () => {
  const { data: maps, loading } = useAxios<GameMap[]>({ method: 'GET', url: `${SERVER_URL}/maps` });

  return (
    <Stack spacing={2} alignItems={'center'}>
      <Typography level="h2" textAlign={'center'}>
        Choose an image to get started!
      </Typography>
      <Box component="ul" sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}>
        {maps?.map((map) => (
          <ImageCard key={map._id} link={map.link} name={map.name} loading={loading} />
        ))}
      </Box>
    </Stack>
  );
};

export default App;
