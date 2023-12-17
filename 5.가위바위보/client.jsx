import React from 'react';
import { createRoot } from 'react-dom/client';
import RSP  from './RSP';



const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<RSP />);