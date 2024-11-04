import { defineTokens } from '@chakra-ui/react';

export const colors = defineTokens({
  colors: {
    teal: {
      50: { value: '#e0f7f7' },
      100: { value: '#b3e7e7' },
      200: { value: '#80d4d4' },
      300: { value: '#4dc1c1' },
      400: { value: '#26b3b3' },
      DEFAULT: { value: '#008080' }, // Primary Teal
      600: { value: '#007272' },
      700: { value: '#006161' },
      800: { value: '#005050' },
      900: { value: '#003838' },
    },
    green: {
      50: { value: '#e1fbee' },
      100: { value: '#b3f3d4' },
      200: { value: '#80e9b8' },
      300: { value: '#4ddf9c' },
      400: { value: '#26d886' },
      DEFAULT: { value: '#00C853' }, // Accent Green
      600: { value: '#00b74a' },
      700: { value: '#009f3f' },
      800: { value: '#008634' },
      900: { value: '#006626' },
    },
    navy: {
      50: { value: '#e0eaf5' },
      100: { value: '#b3c9e6' },
      200: { value: '#80a6d6' },
      300: { value: '#4d83c6' },
      400: { value: '#2668ba' },
      DEFAULT: { value: '#002D72' }, // Secondary Navy
      600: { value: '#002969' },
      700: { value: '#00215d' },
      800: { value: '#001a52' },
      900: { value: '#00103e' },
    },
    gray: {
      50: { value: '#f7f7f7' },
      DEFAULT: { value: '#f0f0f0' }, // Light Gray
      200: { value: '#d9d9d9' },
      300: { value: '#c2c2c2' },
      400: { value: '#a3a3a3' },
      500: { value: '#8c8c8c' },
      600: { value: '#707070' },
      700: { value: '#595959' },
      800: { value: '#404040' },
      900: { value: '#333333' }, // Dark Gray
    },
    black: {
      DEFAULT: { value: '#000000' }, // Black
      secondary: { value: '#333333' }, // Dark Gray for lighter subtext
    },
  },
});

export const semanticColors = defineTokens({
  colors: {
    primary: { value: '{color.teal.DEFAULT}' },
    secondary: { value: '{color.navy.DEFAULT}' },
    accent: { value: '{color.green.DEFAULT}' },
    neutral: { value: '{color.gray.DEFAULT}' },
    text: { value: '{color.black.DEFAULT}' },
  },
});
