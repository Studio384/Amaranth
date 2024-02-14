import { createHashRouter } from 'react-router-dom';

import Changelog from './app/Changelog';
import Docs from './app/Docs';
import Error from './app/Error';
import Home from './app/Home';
import Icon from './app/Icon';
import Icons from './app/Icons';
import Layout from './design/layout/Layout';

const router = createHashRouter(
  [
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
          path: '/docs/changelog',
          element: <Changelog />
        }
      ]
    }
  ],
  {
    basename: '/Amaranth'
  }
);

export default router;
