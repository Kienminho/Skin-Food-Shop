import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";

import Home from "./pages/home";
import ItemByCategory from "./pages/item-by-category";
import Cart from "./pages/cart";
import ProductDetail from "./pages/product-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/item-by-category",
    element: <ItemByCategory />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "products/:id",
    element: <ProductDetail />,
  },
]);

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#84BC4E",
        },
      }}
    >
      <StyleProvider hashPriority="high">
        <RouterProvider router={router} />
      </StyleProvider>
    </ConfigProvider>
  );
}

export default App;
