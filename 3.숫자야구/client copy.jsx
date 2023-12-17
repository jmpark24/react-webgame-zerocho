import React from 'react';
import { createRoot } from 'react-dom/client';
import ResponseCheck  from './ResponseCheck';



const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<ResponseCheck />);