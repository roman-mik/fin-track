import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import FinTrackRouter from './routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FinTrackRouter />
  </StrictMode>,
)
