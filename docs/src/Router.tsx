import { createBrowserRouter } from 'react-router-dom';

import Docs from './app/Docs';
import Error from './app/Error';
import Home from './app/Home';
import Icon from './app/Icon';
import Icons from './app/Icons';
import Layout from './design/layout/Layout';
import Changelog from './app/Changelog';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
    ]
  },
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
        path: '/icons/:slug',
        element: <Icon />
      },
      {
        path: '/docs',
        element: <Docs />
      },
      {
        path: '/changelog',
        element: <Changelog />
      }
    ]
  }
]);

export default router;
