import { createBrowserRouter } from 'react-router-dom';

import Error from './app/Error';
import Home from './app/Home';
import Icon from './app/Icon';
import Docs from './app/Docs';
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
        path: '/icons/:slug',
        element: <Icon />
      },
      {
        path: '/docs',
        element: <Docs />
      }
    ]
  }
]);

export default router;
