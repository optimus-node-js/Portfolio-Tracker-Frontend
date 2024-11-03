// src/recoil/atoms.ts
import { atom } from 'recoil';
import { Filters } from '../types';  // Ensure Filters type is imported

export const themeAtom = atom({
  key: 'themeAtom',
  default: 'light',  // Default to light theme; toggleable later
});

export const filterAtom = atom<Filters>({
  key: 'filterAtom',
  default: {
    startDate: '',  // Set initial values according to your application's needs
    endDate: '',    // Example initial value; update as needed
    // Add any additional default filter properties here
  },
});
