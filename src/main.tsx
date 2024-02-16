import { ReactElement } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  RouteObject
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './error-page';
import AboutPage from './routes/about-page';
import BlogPage from './routes/blog-page';
import ProjectsPage from './routes/projects-page';

import { projectList, projectType } from './assets/projectList.tsx';
import { blogPostList, blogPostType } from './assets/blogList.tsx';

import './main.css';

type childRouteType = {
  index: boolean;
  path?: never;
  element: ReactElement;
  handle: RouteObject["handle"];
} | {
  index?: never;
  path: string;
  element: ReactElement;
  handle: RouteObject["handle"];
}

let indexAboutRoutes: childRouteType[] = [
  {
    index: true, // path is root "/"
    element: <Navigate to="/about/" replace />,
    handle: {}
  },
  {
    path: "about/",
    element: <AboutPage />,
    handle: {}
  }
];

const projectIDRoutes: childRouteType[] = 
      projectList.map((project: projectType) => 
        ({
          path: `/projects/${project.id}`,
          element: <ProjectsPage openProjectID={project.id} />,
          handle: {openProject: true}
        })  
);

const projectBaseRoutes: childRouteType[] = [
  {
    path: "projects/:projectID?",
    element: <Navigate to="/projects/" replace />,
    handle: {}
  },
  {
    path: "projects/",
    element: <ProjectsPage />,
    handle: {}
  },
];

const blogIDRoutes: childRouteType[] = 
      blogPostList.map((blogPost: blogPostType) => 
        ({
          path: `/blog/${blogPost.id}`,
          element: <BlogPage openProjectID={blogPost.id} />,
          handle: {openProject: true}
        })  
);

const blogBaseRoutes: childRouteType[] = [
  {
    path: "blog/:blogPostID?",
    element: <Navigate to="/blog/" replace />,
    handle: {}
  },
  {
    path: "blog/",
    element: <BlogPage />,
    handle: {}
  },
];

const childrenRoutes: childRouteType[] = 
      indexAboutRoutes.concat(
      projectIDRoutes,
      projectBaseRoutes,
      blogIDRoutes,
      blogBaseRoutes);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: childrenRoutes,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />,
)
