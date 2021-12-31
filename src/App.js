import React from 'react';
import Routers from './router';
import { SitesProvider } from './contexts/sites';
import { CurrentSiteProvider } from './contexts/currentsite';
import { ToastProvider } from 'react-toast-notifications';
import { ShowSiteProvider } from './contexts/showsite';
import './App.css';
import './index.css';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: [
      'RivieraNightsTrial Regular',
    ].join(','),
  }
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <ShowSiteProvider>
            <SitesProvider>
              <CurrentSiteProvider>
                <Routers />
              </CurrentSiteProvider>
            </SitesProvider>
          </ShowSiteProvider>
        </ToastProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
