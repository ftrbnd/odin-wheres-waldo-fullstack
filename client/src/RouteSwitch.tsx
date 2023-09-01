import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import Navbar from './components/Navbar';
import Game from './pages/Game';
import Leaderboard from './pages/Leaderboard';
import { CssBaseline, CssVarsProvider } from '@mui/joy';

const RouteSwitch: FC = () => {
  return (
    <CssVarsProvider defaultMode="system">
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/game" element={<Game />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    </CssVarsProvider>
  );
};

export default RouteSwitch;
