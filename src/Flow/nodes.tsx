import { Node } from 'reactflow';

export default [
    {
      id: '1',
      type: 'input',
      data: { label: 'Node 1' },
      position: { x: 250, y: 5 },
    },
    {
      id: '2',
      data: { label: 'Node 2' },
      position: { x: 100, y: 100 },
    },
    {
      id: '3',
      data: { label: 'Node 3' },
      position: { x: 400, y: 100 },
    },
    {
      id: '4',
      data: { label: 'Node 4' },
      position: { x: 450, y: 250 },
      type: 'custom',
    },
    {
      id: '5',
      data: { label: 'Node 5' },
      position: { x: 200, y: 200 },
    },
    {
      id: '6',
      data: { label: 'Node 6' },
      position: { x: 300, y: 300 },
    },
  ] as Node[];