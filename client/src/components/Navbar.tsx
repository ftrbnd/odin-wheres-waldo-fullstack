import { Avatar, List, ListItem, ListItemDecorator, Stack } from '@mui/joy';
import UndecoratedNavLink from './UndecoratedNavLink';
import ModeToggle from './ModeToggle';

const Navbar = () => {
  return (
    <List
      orientation="horizontal"
      variant="soft"
      color="primary"
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
      <Stack direction={'row'}>
        <ListItem>
          <UndecoratedNavLink to={'/leaderboard'}>Leaderboard</UndecoratedNavLink>
        </ListItem>
        <ListItem>
          <ModeToggle />
        </ListItem>
      </Stack>
    </List>
  );
};

export default Navbar;
