import { useContext} from 'react';
import { FlowContext } from '../flow.context'

function DrawerContent() {
const { currentFlow } = useContext(FlowContext);
console.log(currentFlow)
  return (
    <div>
      <h1>Hey this is some drawer content</h1>
      <h2>{currentFlow.length}</h2>
    </div>
  );
}

export default DrawerContent;
