import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import PropiedadesMaldonado from './PropiedadesMaldonado.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PropiedadesMaldonado />
  </StrictMode>
);
