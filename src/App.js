import React, { Children, lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/ProfileClass";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import ShimmerUI from "./components/ShimmerUI";

const Cart = lazy(() => import('./components/Cart'));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element : <Body user = {{
          name : 'sai vamshi',
          email : 'saivamshi.k.24@gmail.com'
        }}/>,
        errorElement : <Error />
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Error />,
        children : [
          {
            path: 'profile',
            element: <ProfileClass/>
          }
        ]
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: 'restaurant/:id',
        element: <RestaurantMenu />
      },
      {
        path: 'cart',
        element : <Suspense fallback={<ShimmerUI/>}><Cart /></Suspense>
      }
    ],
  },
]);
// In order to avoid the error we wrap the Component we need to render inside Suspense.
// the fallback prop inside it will be rendered until the lazy loaded component is loaded.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
