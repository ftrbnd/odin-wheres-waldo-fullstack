import { List, ListItem, ListItemButton, ListItemContent } from '@mui/joy';
import { FC, useEffect } from 'react';

interface IProps {
  x: number;
  y: number;
  clicked: boolean;
}

const SelectMenu: FC<IProps> = ({ x, y, clicked }) => {
  useEffect(() => {
    // fetch targets from db ? or in Game.tsx
  }, [x, y]);

  const handleItemClick = () => {
    // check if the clicked location is on a target
  };

  return (
    <List sx={{ visibility: clicked ? 'visible' : 'hidden', position: 'absolute', top: `${y}px`, left: `${x}px`, zIndex: 1000 }}>
      <ListItem>
        <ListItemButton variant="soft" onClick={handleItemClick}>
          <ListItemContent>TARGET 1</ListItemContent>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton variant="soft" onClick={handleItemClick}>
          <ListItemContent>TARGET 2</ListItemContent>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton variant="soft" onClick={handleItemClick}>
          <ListItemContent>TARGET 3</ListItemContent>
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default SelectMenu;
