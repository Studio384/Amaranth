import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { CssBaseline, CssVarsProvider, GlobalStyles } from '@mui/joy';

import joyTheme from './design/joyTheme';
import router from './Router';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <CssVarsProvider theme={joyTheme} defaultMode="system">
        <CssBaseline />
        <GlobalStyles
          styles={{
            '*': {
              scrollBehavior: 'smooth'
            }
          }}
        />
        <RouterProvider router={router} />
      </CssVarsProvider>
    </Provider>
  );
}
