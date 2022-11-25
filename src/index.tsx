import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import {FlowProvider} from './flow.context'

import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <FlowProvider>
    <App />
    </FlowProvider>
  </StrictMode>
);
