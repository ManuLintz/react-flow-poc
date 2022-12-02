import { Edge } from 'reactflow';

export default  [
  { id: 'e1-2', source: '1', target: '2', label: 'edge label' },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e3-5', source: '3', target: '5', animated: true, label: 'another edge label' },
  { id: 'e3-6', source: '3', target: '6' },
] as Edge[];
