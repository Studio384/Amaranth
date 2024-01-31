import { extendTheme } from '@mui/joy/styles';

import colors from './colors';
import { darkColorDarkModeVariables, darkColorLightModeVariables } from './generateColor';

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
        background: {
          body: '#F3FBF8'
        }
      }
    },
    dark: {
      palette: {
        primary: darkColorDarkModeVariables('primary', colors.amicons),
        background: {
          body: '#030e18',
          level1: '#051623',
          level2: '#061f2d',
          level3: '#082937',
          surface: '#051623',
          popup: '#030e18',
          tooltip: '#082937'
        }
      }
    }
  },
  components: {
    JoyCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: 'var(--joy-palette-primary-200)',
          [theme.getColorSchemeSelector('dark')]: {
            borderColor: 'var(--joy-palette-primary-800)'
          },
        })
      }
    }
  }
});

export default joyTheme;
