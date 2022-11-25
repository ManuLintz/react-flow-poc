import * as React from 'react';
import Flow from '../Flow';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import DrawerContent from './DrawerContent'

import './App.css';

function App() {
  const [state, setState] = React.useState({
    isDrawerOpen: false,
  });

  const toggleDrawer =
    () =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, isDrawerOpen: !state.isDrawerOpen });
    };

  return (
    <div className="App">
      <header className="App-header">React Flow - CRA Example</header>
      <Button onClick={toggleDrawer()}>{state.isDrawerOpen ? "open": "closed"}</Button>
      <Flow />
      <Drawer
        anchor="right"
        open={state.isDrawerOpen}
        onClose={toggleDrawer()}
      >

        <h1>Drawer</h1>
        <DrawerContent/>
      </Drawer>
    </div>
  );
}

export default App;
