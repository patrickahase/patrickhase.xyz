import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './error-page';
import AboutPage from './routes/about-page';
import BlogPage from './routes/blog-page';
import ProjectsPage from './routes/projects-page';

import './main.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about/",
        element: <AboutPage />
      },
      {
        path: "blog/",
        element: <BlogPage />
      },
      {
        path: "projects/",
        element: <ProjectsPage />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
