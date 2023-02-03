import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import BlogPage from '../../presentation/pages/BlogPage';
import HomePage from '../../presentation/pages/HomePage';
import ROUTES from './routes';

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <HomePage />,
  },
  {
    path: ROUTES.blog,
    element: <BlogPage />,
  },
]);

export default router;
