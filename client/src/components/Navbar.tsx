import { Avatar, List, ListItem, ListItemDecorator } from '@mui/joy';
import UndecoratedNavLink from './UndecoratedNavLink';
import ModeToggle from './ModeToggle';

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
        borderRadius: 'sm',
        justifyContent: 'space-between'
      }}
    >
      <ListItem>
        <ListItemDecorator>
          <UndecoratedNavLink to="/">
            <Avatar size="lg" src="https://i.imgur.com/W9TpN21.png" alt="game logo" />
          </UndecoratedNavLink>
        </ListItemDecorator>
        <UndecoratedNavLink to="/">Where's Spidey?</UndecoratedNavLink>
      </ListItem>
      <ListItem>
        <UndecoratedNavLink to={'/leaderboard'}>Leaderboard</UndecoratedNavLink>
      </ListItem>
      <ListItem>
        <ModeToggle />
      </ListItem>
    </List>
  );
};

export default Navbar;
