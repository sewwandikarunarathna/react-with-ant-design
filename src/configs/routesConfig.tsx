import { lazy } from "react";

const WelcomePage = lazy(() => import("../components/WelcomePage.tsx"));
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
