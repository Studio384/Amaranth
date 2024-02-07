import { extendTheme } from '@mui/joy/styles';

import light from './light';
import dark from './dark';
import { darkColorVariables, neutralColorVariables } from './generateColor';

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
        background: {
          channel: '255 255 255'
        },
        primary: darkColorVariables('primary', light.primary),
        neutral: neutralColorVariables('neutral', light.neutral)
      }
    },
    dark: {
      palette: {
        primary: darkColorVariables('primary', dark.primary),
        neutral: neutralColorVariables('neutral', dark.neutral),
        background: {
          body: '#000',
          surface: 'var(--joy-palette-neutral-100)',
          level1: '#08080b',
          channel: '0 0 0',
          darkBackdrop: 'rgba(0 0 0 / .5)',
          hover: 'rgba(var(--joy-palette-primary-mainChannel) / .125)'
        },
        text: {
          primary: '#fff',
          secondary: '#fff',
          tertiary: 'var(--joy-palette-neutral-800)',
          icon: '#fff'
        }
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
