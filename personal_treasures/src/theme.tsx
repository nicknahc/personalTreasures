// src/theme.tsx

import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'orange',
    accent: 'orange',
    background: '#000000',
    text: '#ffffff',
    surface: '#111111',
    placeholder: 'rgba(255, 255, 255, 0.5)',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    onSurface: '#ffffff',
    disabled: 'rgba(255, 255, 255, 0.5)',
    error: '#f13a59',
    notification: '#f50057',
  },
};

export default theme;
