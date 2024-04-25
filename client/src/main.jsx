import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import  from './pages/';
import StaticHome from "./pages/views/StaticHome";
import App from "./App";
import Profile from "./pages/user/Profile";
import Cart from "./pages/cart/Cart";
import Login from "./pages/loginRegister/Login";
import Register from "./pages/loginRegister/Register";
import CoOpRegister from "./pages/coop/CoOpRegister";
import ProducerRegister from "./pages/producer/ProducerRegister";
import ProfileSettings from "./pages/user/ProfileSettings";
import OrderHistory from "./pages/cart/OrderHistory";
import Cow from "./unused/components/cow";
import ShopEZH from "./pages/views/ShopEZH";
import CoOpStore from "./pages/coop/CoOpStore.jsx";
import CoOpSettings from "./pages/coop/CoOpSettings.jsx";
import AddProduct from "./pages/coop/AddProduct.jsx";
import DropDownButtons from "./components/shop/DropDownButtons.jsx";
import ConsumerToCoOp from "./pages/loginRegister/ConsumerToCoOp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <StaticHome />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/co-op-store",
        element: <CoOpStore />,
      },
      {
        path: "/co-op-settings",
        element: <CoOpSettings />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/co-op-register",
        element: <CoOpRegister />,
      },
      {
        path: "/producer-register",
        element: <ProducerRegister />,
      },
      {
        path: "/profile-settings",
        element: <ProfileSettings />,
      },
      {
        path: "/order-history",
        element: <OrderHistory />,
      },
      {
        path: "/shop-ezh",
        element: <ShopEZH />,
      },
      {
        path: "/cow",
        element: <Cow />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/become-a-co-op",
        element: <ConsumerToCoOp />,
      },
      {
        path: "/drop",
        element: <DropDownButtons />,
      },
      // {
      //   path: '/',
      //   element: < />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
