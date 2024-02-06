import { createBrowserRouter } from 'react-router-dom';

import Error from './app/Error';
import Home from './app/Home';
import Icon from './app/Icon';
import Docs from './app/Docs';
import Layout from './design/layout/Layout';
import Icons from './app/Icons';
import NewLayout from './design/layout/NewLayout';
import DocsLayout from './design/layout/DocsLayout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/icons',
        element: <Icons />
      },
      {
        path: '/icons/:slug',
        element: <Icon />
      }
    ]
  },
  {
    element: <NewLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
  {
    element: <DocsLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/docs',
        element: <Docs />
      }
    ]
  }
]);

export default router;
