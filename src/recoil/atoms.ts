// src/recoil/atoms.ts
import { atom } from 'recoil';

export const themeAtom = atom({
  key: 'themeAtom',
  default: 'light',  // Default to light theme; toggleable later
});

export const filterAtom = atom({
  key: 'filterAtom',
  default: {},  // Store filter options as an object; we'll update this as needed
});
