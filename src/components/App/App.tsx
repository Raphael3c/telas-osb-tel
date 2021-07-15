import React from 'react';
import {Router} from 'components/Router'
import { ThemeProvider } from '@material-ui/core'
import { theme } from '_config/theme'

import './App.scss'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}