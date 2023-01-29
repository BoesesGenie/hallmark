import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import BlogPage from '../../presentation/pages/BlogPage';
import ContactsPage from '../../presentation/pages/ContactsPage';
import HomePage from '../../presentation/pages/HomePage';
import PositionsPage from '../../presentation/pages/PositionsPage';
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
  {
    path: ROUTES.positions,
    element: <PositionsPage />,
  },
  {
    path: ROUTES.contacts,
    element: <ContactsPage />,
  },
]);

export default router;
