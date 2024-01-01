import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";

import Home from "./pages/home";
import ItemByCategory from "./pages/item-by-category";
import Cart from "./pages/cart";
import ProductDetail from "./pages/product-detail";
import Tips from "./pages/tips";
import Blogs from "./pages/blogs";
import SignIn from "./pages/sign-in";
import Products from "./pages/admin/products";
import AdminLayout from "./components/layouts/admin-layout";
import Categories from "./pages/admin/categories";
import Users from "./pages/admin/users";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AdminSignIn from "./pages/admin/admin-sign-in";
import AdminSignUp from "./pages/admin/admin-sign-up";
import CreateProduct from "./pages/admin/create-product";
import Checkout from "./pages/checkout";
import Profile from "./pages/profile";
import Policy from "./pages/policy";
import EditProduct from "./pages/admin/edit-product";

// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/categories/:categoryName",
    element: <ItemByCategory />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/products",
    element: <ItemByCategory />,
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
  },
  {
    path: "/tips",
    element: <Tips />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/admin/sign-in",
    element: <AdminSignIn />,
  },
  {
    path: "/admin/sign-up",
    element: <AdminSignUp />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/policy",
    element: <Policy />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <EditProduct />,
      },
      {
        path: "products/create",
        element: <CreateProduct />,
      },

      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#84BC4E",
          },
        }}
      >
        <StyleProvider hashPriority="high">
          <RouterProvider router={router} />
          <ReactQueryDevtools
            initialIsOpen={false}
            buttonPosition="bottom-left"
          />
        </StyleProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
