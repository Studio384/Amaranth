import { extendTheme } from '@mui/joy/styles';

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
  }
});

export default joyTheme;
