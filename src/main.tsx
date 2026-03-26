import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/router.tsx'
import { GlobalLoadingProvider } from './shared/context/gloal-loading-provider';
import { AppThemeProvider } from './theme/AppThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <GlobalLoadingProvider>
        <RouterProvider router={router} />
      </GlobalLoadingProvider>
    </AppThemeProvider>
  </StrictMode>,
)
