import { List, ListItem, ListItemButton, ListItemContent } from '@mui/joy';
import { FC } from 'react';
import { Map, Target } from '../utils/target';

interface IProps {
  exactX: number;
  exactY: number;
  adjustedX: number;
  adjustedY: number;
  clicked: boolean;
  targets: Target[];
  map: Map;
}

const SelectMenu: FC<IProps> = ({ exactX, exactY, adjustedX, adjustedY, clicked, targets, map }) => {
  const handleTargetClick = (target: Target) => {
    const targetMap = target.maps.find((m) => m.name === map.name); // get the x-range and y-range from the current map of the target that was clicked
    console.log(targetMap);

    if (targetMap && targetMap.x_range[0] <= exactX && exactX <= targetMap.x_range[1] && targetMap.y_range[0] <= exactY && exactY <= targetMap.y_range[1]) {
      console.log('target found!');
    }
  };

  return (
    <List sx={{ visibility: clicked ? 'visible' : 'hidden', position: 'absolute', top: `${adjustedY}px`, left: `${adjustedX}px`, zIndex: 1000 }}>
      {targets.map((target) => (
        <ListItem key={target.name}>
          <ListItemButton variant="soft" onClick={() => handleTargetClick(target)}>
            <ListItemContent>{target.name}</ListItemContent>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SelectMenu;
