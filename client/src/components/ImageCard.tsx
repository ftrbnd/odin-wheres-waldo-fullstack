import { Card, CardContent, Typography, AspectRatio, Skeleton } from '@mui/joy';
import { FC } from 'react';
import UndecoratedNavLink from './UndecoratedNavLink';

interface IProps {
  link: string;
  name: string;
  loading: boolean;
}

const ImageCard: FC<IProps> = ({ link, name, loading }) => {
  return (
    <UndecoratedNavLink to="/game" state={{ link, name }}>
      <Card variant="outlined" sx={{ minWidth: 300, flexGrow: 1 }}>
        <AspectRatio>
          <Skeleton loading={loading}>
            <img src={link} srcSet={`${link} 2x`} alt={`${name}`} />
          </Skeleton>
        </AspectRatio>

        <CardContent orientation="horizontal">
          <Typography level="body-lg" fontWeight="lg" color="primary">
            <Skeleton loading={loading}>{name}</Skeleton>
          </Typography>
        </CardContent>
      </Card>
    </UndecoratedNavLink>
  );
};

export default ImageCard;
