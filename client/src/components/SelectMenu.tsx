import { List, ListItem, ListItemButton, ListItemContent } from '@mui/joy';
import { FC } from 'react';
import { FoundTarget, Map, Target } from '../utils/target';
import axios from 'axios';

interface IProps {
  exactX: number;
  exactY: number;
  adjustedX: number;
  adjustedY: number;
  clicked: boolean;
  targets: Target[];
  map: Map;
  placeMarker: (target: FoundTarget) => void;
}

const SelectMenu: FC<IProps> = ({ exactX, exactY, adjustedX, adjustedY, clicked, targets, map, placeMarker }) => {
  const handleTargetClick = async (target: Target) => {
    try {
      const response = await axios.post(`http://localhost:3000/api/targets/${target._id}`, {
        map: map.name,
        x: exactX,
        y: exactY
      });

      console.log(response.data.message);
      if (response.data.message === 'Found target!') {
        const foundTarget: FoundTarget = {
          ...target,
          found: true,
          x: adjustedX + 144 >= 144 ? adjustedX : adjustedX + 144,
          y: adjustedY + 143 >= 143 ? adjustedY : adjustedY + 143
        };

        placeMarker(foundTarget);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err.message);
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
