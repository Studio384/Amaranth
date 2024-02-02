import { extendTheme } from '@mui/joy/styles';

import colors from './colors';
import { darkColorDarkModeVariables, darkColorLightModeVariables, neutralColorDarkModeVariables, neutralColorLightModeVariables } from './generateColor';

const joyTheme = extendTheme({
  fontFamily: {
    body: "-apple-system, BlinkMacSystemFont, 'Segoe UI Variable Text', 'Segoe UI', Roboto, Noto Sans, Helvetica Neue, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    display:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI Variable Display', 'Segoe UI', Roboto, Noto Sans, Helvetica Neue, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
  },
  typography: {
    h1: {
      fontFamily: 'var(--joy-fontFamily-display)',
      fontWeight: 'var(--joy-fontWeight-lg)'
    },
    h2: {
      fontFamily: 'var(--joy-fontFamily-display)',
      fontWeight: 'var(--joy-fontWeight-lg)'
    },
    h3: {
      fontFamily: 'var(--joy-fontFamily-display)'
    },
    h4: {
      fontFamily: 'var(--joy-fontFamily-display)'
    },
    'title-lg': {
      fontFamily: 'var(--joy-fontFamily-display)'
    },
    'title-md': {
      fontFamily: 'var(--joy-fontFamily-display)'
    },
    'title-sm': {
      fontFamily: 'var(--joy-fontFamily-display)'
    }
  },
  colorSchemes: {
    light: {
      palette: {
        primary: darkColorLightModeVariables('primary', colors.amicons),
        neutral: neutralColorLightModeVariables('neutral', colors.neutral)
      }
    },
    dark: {
      palette: {
        primary: darkColorDarkModeVariables('primary', colors.amicons),
        neutral: neutralColorDarkModeVariables('neutral', colors.neutral)
      }
    }
  },
  components: {
    JoyCard: {
      styleOverrides: {
        root: {
          boxShadow: 'var(--joy-shadow-md)'
        }
      }
    }
  }
});

export default joyTheme;
