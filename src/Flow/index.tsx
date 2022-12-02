import ReactFlow, {
  Node,
  Edge,
} from 'reactflow';
import shallow from 'zustand/shallow';
import useStore from './flow.store';

import CustomNode from './CustomNode';

// this is important! You need to import the styles from the lib to make it work
import 'reactflow/dist/style.css';

import './Flow.css';

const nodeTypes = {
  custom: CustomNode,
};


const selector = (state: any) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  setSelectedNodeId: state.setSelectedNodeId
});

function Flow({toggleDrawer}: {toggleDrawer: any}) {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, setSelectedNodeId } = useStore(selector, shallow);
  const onNodeClick = (event: React.MouseEvent, node: Node) => {
    setSelectedNodeId(node.id)
    toggleDrawer()
  };

  return (
    <div className="Flow">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
      />
    </div>
  );
}

export default Flow;
