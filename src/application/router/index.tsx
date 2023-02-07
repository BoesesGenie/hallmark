import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import BlogInnerPage from '../../presentation/pages/BlogInnerPage';
import BlogPage from '../../presentation/pages/BlogPage';
import HomePage from '../../presentation/pages/HomePage';
import ROUTES from './routes';

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <HomePage />,
  },
  {
    path: `${ROUTES.blog}/:postId`,
    element: <BlogInnerPage />,
  },
  {
    path: ROUTES.blog,
    element: <BlogPage />,
  },
]);

export default router;
