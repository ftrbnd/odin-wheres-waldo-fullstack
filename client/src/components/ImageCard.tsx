import { Card, CardCover, CardContent, Typography } from '@mui/joy';
import { FC } from 'react';
import { Image } from '../utils/image';
import UndecoratedNavLink from './UndecoratedNavLink';

const ImageCard: FC<Image> = (image) => {
  return (
    <UndecoratedNavLink to="/game" state={image}>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <img src={image.link} srcSet={`${image.link} 2x`} loading="lazy" alt={`${image.name}`} />
        </CardCover>
        <CardCover
          sx={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0) 300px)'
          }}
        />
        <CardContent>
          <Typography level="body-lg" fontWeight="lg" color="primary" mt={{ xs: 12, sm: 18 }}>
            {image.name}
          </Typography>
        </CardContent>
      </Card>
    </UndecoratedNavLink>
  );
};

export default ImageCard;
