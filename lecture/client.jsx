import React from 'react';
import { createRoot } from 'react-dom/client';
import Lotto  from './Lotto';



const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<Lotto />);