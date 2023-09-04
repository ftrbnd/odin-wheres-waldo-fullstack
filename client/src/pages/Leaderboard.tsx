import { FC } from 'react';
import { Score } from '../utils/score';
import { Sheet, Skeleton, Table, Typography } from '@mui/joy';
import useAxios from '../hooks/useAxios';

const Leaderboard: FC = () => {
  const { data: scores, loading } = useAxios<Score[]>({ method: 'GET', url: 'http://localhost:3000/api/scores' });

  return (
    <Sheet>
      <Table aria-label="basic table" stripe={'even'}>
        <thead>
          <tr>
            <th style={{ width: '40%' }}>Player</th>
            <th>Time</th>
            <th>Map</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {scores?.map((score) => (
            <tr key={`${score.player}-${score.time}`}>
              <td>
                <Typography>
                  <Skeleton loading={loading}>{score.player}</Skeleton>
                </Typography>
              </td>
              <td>
                <Typography>
                  <Skeleton loading={loading}>{score.time}</Skeleton>
                </Typography>
              </td>
              <td>
                <Typography>
                  <Skeleton loading={loading}>{score.map}</Skeleton>
                </Typography>
              </td>
              <td>
                <Typography>
                  <Skeleton loading={loading}>{new Date(score.date).toDateString()}</Skeleton>
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
};

export default Leaderboard;
