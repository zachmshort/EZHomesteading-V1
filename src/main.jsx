import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import StaticHome from "./pages/StaticHome";
import App from './App';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
// import coOpStore from './pages/CoOpStore.jsx';
// import UserRegisterSelection from './pages/UserRegisterSelection.jsx';
// import CoOpRegister from './pages/CoOpRegister.jsx';
// import ConsumerRegister from './pages/ConsumerRegister.jsx';
// import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <StaticHome />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/co-op-store',
        element: <coOpStore />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);