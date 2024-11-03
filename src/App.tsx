// src/App.tsx

import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import { NextUIProvider } from '@nextui-org/react';
import { AnimatePresence } from 'framer-motion';
import { Dashboard } from './pages/Dashboard';
import { themeAtom } from './recoil/atoms';
import { lightTheme, darkTheme } from './theme';

const ThemedApp: React.FC = () => {
  // Retrieve the current theme from Recoil state
  const currentTheme = useRecoilValue(themeAtom) === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <NextUIProvider>
        <AnimatePresence>
          <Dashboard />
        </AnimatePresence>
      </NextUIProvider>
    </ThemeProvider>
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
