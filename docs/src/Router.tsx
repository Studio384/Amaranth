import { createBrowserRouter } from 'react-router-dom';

import Docs from './app/Docs';
import Error from './app/Error';
import Home from './app/Home';
import Icon from './app/Icon';
import Icons from './app/Icons';
import DocsLayout from './design/layout/DocsLayout';
import IconLayout from './design/layout/IconLayout';
import Layout from './design/layout/Layout';
import NewLayout from './design/layout/NewLayout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/icons',
        element: <Icons />
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
    element: <IconLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/icons/:slug',
        element: <Icon />
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
