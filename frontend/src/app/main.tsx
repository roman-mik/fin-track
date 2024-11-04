import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import FinTrackRouter from './routes'
import ThemeProvider from './styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <FinTrackRouter />
    </ThemeProvider>
  </StrictMode>
);
