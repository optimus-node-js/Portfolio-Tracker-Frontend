// src/theme/index.ts

import { Theme as EmotionTheme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      background: string;
      text: string;
      // Add any other color properties as needed
    };
  }
}

// Define light and dark themes using the extended Theme interface
export const lightTheme: EmotionTheme = {
  colors: {
    primary: '#0072F5',
    background: '#f5f5f5',
    text: '#000000',
    // Add more color customizations as needed
  },
};

export const darkTheme: EmotionTheme = {
  colors: {
    primary: '#0072F5',
    background: '#000000',
    text: '#FFFFFF',
    // Add more color customizations as needed
  },
};
