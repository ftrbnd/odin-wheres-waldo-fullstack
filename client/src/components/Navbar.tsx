import { Avatar, List, ListDivider, ListItem, ListItemDecorator } from '@mui/joy';
import UndecoratedNavLink from './UndecoratedNavLink';

const Navbar = () => {
  return (
    <List
      orientation="horizontal"
      variant="outlined"
      sx={{
        flexGrow: 0,
        mx: 'auto',
        '--ListItemDecorator-size': '48px',
        '--ListItem-paddingY': '1rem',
        borderRadius: 'sm'
      }}
    >
      <ListItem>
        <ListItemDecorator>
          <Avatar size="lg" src="https://i.imgur.com/W9TpN21.png" alt="game logo" />
        </ListItemDecorator>
        <UndecoratedNavLink to="/">Where's Spidey?</UndecoratedNavLink>
      </ListItem>
      <ListDivider inset="gutter" />
      <ListItem>
        <UndecoratedNavLink to={'/leaderboard'}>Leaderboard</UndecoratedNavLink>
      </ListItem>
      <ListDivider inset="gutter" />
      <ListItem>
        <UndecoratedNavLink to={'/auth'}>Auth</UndecoratedNavLink>
      </ListItem>
    </List>
  );
};

export default Navbar;
