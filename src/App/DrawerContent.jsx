import Button from '@mui/material/Button';
import useStore from '../Flow/flow.store';

function DrawerContent() {
  const updateNodeLabel = useStore((state) => state.updateNodeLabel);
  const selectedNodeId = useStore((state) => state.selectedNodeId);
const test = () => 
{ 
  console.log("test");
  updateNodeLabel(selectedNodeId, 'COUCOU !!!');
}
  return (
    <div>
      <h1>Hey this is some drawer content</h1>
      <h2>
        {selectedNodeId || "no node selected" }
      </h2>
      <Button onClick={() => test()}>Test</Button>
    </div>
  );
}

export default DrawerContent;
