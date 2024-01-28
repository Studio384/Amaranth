import { createBrowserRouter } from 'react-router-dom';

import Error from './app/Error';
import Home from './app/Home';
import Icon from './app/Icon';
import Usage from './app/Usage';
import Layout from './design/layout/Layout';
import Icons from './app/Icons';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/icons',
        element: <Icons />
      },
      {
        path: '/usage',
        element: <Usage />
      },
      {
        path: '/icons/:slug',
        element: <Icon />
      }
    ]
  }
]);

export default router;
