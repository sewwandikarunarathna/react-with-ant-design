import { Routes, Route } from "react-router-dom";
import routeConfig from "./routesConfig";
import { Suspense } from "react";

const AppRoutes = () => {
  return (
    <Routes>
      {routeConfig.map(({ path, element, children }) => (
        // allowedRoles as string[])?.includes("Guest") ? (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
          }
        >
          {children?.map((child) => (
            <Route key={child.path} path={child.path} element={<Suspense fallback={<div>Loading...</div>}>{child.element}</Suspense>} />
          ))}
        </Route>
        // ) : (
        //   <Route element={<AntLayout />}>
        //     <Route
        //       path={path}
        //       element={
        //         <ProtectedRoute allowedRoles={allowedRoles || []}>
        //           {element}
        //         </ProtectedRoute>
        //       }
        //     >
        //       {children?.map((child) => (
        //         <Route
        //           key={child.path}
        //           path={child.path}
        //           element={
        //             <ProtectedRoute
        //               allowedRoles={child?.allowedRoles || allowedRoles || []}
        //             >
        //               {child.element}
        //             </ProtectedRoute>
        //           }
        //         />
        //       ))}
        //     </Route>
        //   </Route>
        // )
      ))}
    </Routes>
  );
};

export default AppRoutes;
