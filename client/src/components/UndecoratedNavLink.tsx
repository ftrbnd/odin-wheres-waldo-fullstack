import { Tooltip } from '@mui/joy';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LinkProps {
  to: string;
  state?: object;
  children?: ReactNode;
}

const UndecoratedNavLink: FC<LinkProps> = (props) => {
  const handleTooltip = (url: string) => {
    switch (url) {
      case '/':
        return 'Home';
      case '/game':
        return 'Start!';
      case '/leaderboard':
        return 'View Scores';
      default:
        return url;
    }
  };

  return (
    <Tooltip title={handleTooltip(props.to)} variant="soft">
      <Link style={{ textDecoration: 'none', color: 'inherit' }} to={props.to} state={props.state}>
        {props.children}
      </Link>
    </Tooltip>
  );
};

export default UndecoratedNavLink;
