import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import  from './pages/';
import StaticHome from "./pages/views/StaticHome";
import App from './App';
import Profile from './pages/user/Profile';
import Cart from './pages/cart/Cart';
import Login from './pages/loginRegister/Login'
import ChooseRole from './pages/loginRegister/ChooseRole'
import ConsumerRegister from './pages/consumer/ConsumerRegister'
import CoOpRegister from './pages/coop/CoOpRegister'
import ProducerRegister from './pages/producer/ProducerRegister'
import ProfileSettings from "./pages/user/ProfileSettings";
import OrderHistory from "./pages/cart/OrderHistory";
import ShopEZH from './pages/views/ShopEZH';
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
      {
        path: '/order-history',
        element: <OrderHistory />,
      },
      {
        path: '/shop-ezh',
        element: <ShopEZH />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);