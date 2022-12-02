import { useContext} from 'react';
import Button from '@mui/material/Button';
import useStore, { NodeData } from '../Flow/flow.store';

function DrawerContent() {
  const updateNodeLabel = useStore((state) => state.updateNodeLabel);
const test = () => 
{ 
  console.log("test");
  updateNodeLabel('1', 'COUCOU !!!');
}
  return (
    <div>
      <h1>Hey this is some drawer content</h1>
      <Button onClick={() => test()}>Test</Button>
    </div>
  );
}

export default DrawerContent;
