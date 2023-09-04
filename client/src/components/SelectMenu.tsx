import { List, ListItem, ListItemButton, ListItemContent } from '@mui/joy';
import { FC } from 'react';
import { ClickedTarget, TargetMap, Target } from '../utils/target';
import axios from 'axios';

interface IProps {
  exactX: number;
  exactY: number;
  adjustedX: number;
  adjustedY: number;
  clicked: boolean;
  targets: Target[];
  map: TargetMap;
  handlePlacedTarget: (target: ClickedTarget) => void;
}

const SelectMenu: FC<IProps> = ({ exactX, exactY, adjustedX, adjustedY, clicked, targets, map, handlePlacedTarget }) => {
  const handleTargetClick = async (target: Target) => {
    try {
      const response = await axios.post(`http://localhost:3000/api/targets/${target._id}`, {
        map: map.name,
        x: exactX,
        y: exactY
      });

      if (response.data.message === 'Found target!') {
        const clickedTarget: ClickedTarget = {
          ...target,
          found: true,
          x: adjustedX + 144 >= 144 ? adjustedX : adjustedX + 144,
          y: adjustedY + 143 >= 143 ? adjustedY : adjustedY + 143
        };

        handlePlacedTarget(clickedTarget);
      } else if (response.data.message === 'Not a target.') {
        const clickedTarget: ClickedTarget = {
          ...target,
          found: false,
          x: adjustedX + 144 >= 144 ? adjustedX : adjustedX + 144,
          y: adjustedY + 143 >= 143 ? adjustedY : adjustedY + 143
        };
        handlePlacedTarget(clickedTarget);
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
