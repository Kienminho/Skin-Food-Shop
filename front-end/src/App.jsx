import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
  return <RouterProvider router={router} />;
}

export default App;
