import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useStore from '../Flow/flow.store';

function DrawerContent() {
  const updateNodeLabel = useStore((state) => state.updateNodeLabel);
  const selectedNodeId = useStore((state) => state.selectedNodeId);
  const nodes = useStore((state) => state.nodes);
  const selectedNode = nodes.find(node => node.id === selectedNodeId)
  const selectedNodeData = selectedNode.data || null
  const selectedNodeLabel =  selectedNodeData.label || "";
  const handleChange = (event) => {
    updateNodeLabel(selectedNodeId, event.target.value)
  }
const test = () => 
{ 
  console.log("test",selectedNodeData, selectedNodeLabel);
}
  return (
    <div>
      <h2>
        {selectedNodeId || "no node selected" }
      </h2>
      <Button onClick={() => test()}>Test</Button>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="Name"
        value={selectedNodeLabel}
        onChange={handleChange}
      />
    </Box>
    </div>
  );
}

export default DrawerContent;
