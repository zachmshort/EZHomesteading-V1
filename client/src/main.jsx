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
import Login from './pages/Login'
import ChooseRole from './pages/ChooseRole'
import ConsumerRegister from './pages/ConsumerRegister'
import CoOpRegister from './pages/Co-OpRegister'
import ProducerRegister from './pages/ProducerRegister'
import ProfileSettings from "./pages/ProfileSettings";
// import coOpStore from './pages/CoOpStore.jsx';

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
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <ChooseRole />,
      },
      {
        path: '/consumer-registration',
        element: <ConsumerRegister />,
      },
      {
        path: '/co-op-registration',
        element: <CoOpRegister />,
      },
      {
        path: '/producer-registration',
        element: <ProducerRegister />,
      },
      {
        path: '/profile-settings',
        element: <ProfileSettings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);