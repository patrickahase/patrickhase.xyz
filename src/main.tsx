import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
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
        index: true, // path is root "/"
        element: <Navigate to="/about/" replace />,
      },
      {
        path: "about/",
        element: <AboutPage />
      },
      {
        path: "blog/:blogPostID?",
        element: <BlogPage />
      },
      {
        path: "projects/:projectID?",
        element: <ProjectsPage />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />,
)
