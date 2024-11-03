// src/theme/index.ts

import { Theme } from '@emotion/react';

export const lightTheme: Theme = {
  colors: {
    primary: '#0072F5',
    background: '#f5f5f5',
    text: '#000000',
    // Add more color customizations as needed
    // Example:
    // secondary: '#FF5733',
  },
  // You can add more theme properties here
  // Example:
  // fonts: {
  //   body: 'Helvetica, Arial, sans-serif',
  //   heading: 'Georgia, serif',
  // },
};

export const darkTheme: Theme = {
  colors: {
    primary: '#0072F5',
    background: '#000000',
    text: '#FFFFFF',
    // Add more color customizations as needed
    // Example:
    // secondary: '#FF5733',
  },
  // You can add more theme properties here
  // Example:
  // fonts: {
  //   body: 'Helvetica, Arial, sans-serif',
  //   heading: 'Georgia, serif',
  // },
};
