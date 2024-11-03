// src/App.tsx

import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider, createTheme, PaletteMode } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { NextUIProvider } from '@nextui-org/react';
import { Dashboard } from './pages/Dashboard';
import { themeAtom } from './recoil/atoms';
import { lightTheme, darkTheme } from './theme';

const ThemedApp: React.FC = () => {
  // Get the current theme mode (either 'light' or 'dark') from Recoil state
  const themeMode = useRecoilValue(themeAtom) as PaletteMode; // Cast to PaletteMode
  const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

  // Create a Material-UI theme using the colors from the Emotion theme
  const muiTheme = createTheme({
    palette: {
      mode: themeMode, // Now typed as 'light' | 'dark' | undefined
      primary: {
        main: currentTheme.colors.primary, // Map Emotion primary color to Material-UI
      },
      background: {
        default: currentTheme.colors.background, // Map Emotion background color
      },
      text: {
        primary: currentTheme.colors.text, // Map Emotion text color
      },
    },
  });

  return (
    <MuiThemeProvider theme={muiTheme}>
      <EmotionThemeProvider theme={currentTheme}>
        <NextUIProvider>
          <CssBaseline /> {/* Ensures baseline CSS is applied */}
          <Dashboard />
        </NextUIProvider>
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <ThemedApp />
    </RecoilRoot>
  );
};

export default App;
