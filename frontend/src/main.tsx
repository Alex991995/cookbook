import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Cookbook from './Cookbook';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cookbook />
  </StrictMode>,
);
