import { lazy } from "react";

const WelcomePage = lazy(() => import("../components/WelcomePage.tsx"));
const AboutPage = lazy(() => import("../components/AboutPage.tsx"));
const Form = lazy(() => import("../components/design/form/Form.tsx"));
const NotFound = lazy(() => import("../components/NotFoundPage.tsx"));

const routeConfig: RoutesType[] = [
  {
    path: "/",
    element: (
        <WelcomePage />
    ),
  },
  {
    path: "/form",
    element: (
        <Form />
    ),
  },
   {
    path: "/about",
    element: (
        <AboutPage />
    ),
  },  
  {
    path: "*",
    element: (
        <NotFound />
    ),
  },
];

export default routeConfig;

export type RoutesType = {
  path?: string;
  element?: any;
  children?: RoutesType[];
};
