import React from 'react';
import { createRoot } from 'react-dom/client'; // version 18^

import './index.scss';
import App from './app.jsx';

const root = createRoot(document.getElementById('root')); // version 18^
root.render(<App />); // Version 18^
