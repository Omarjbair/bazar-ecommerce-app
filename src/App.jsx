import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import {getProducts} from "./api/Api";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Product from "./components/Product";
import Login from "./pages/Login";

const LayOut = () =>{
  return(
    <div className="font-bodyFont">
    <Header/>
    <ScrollRestoration/>
    <Outlet/>
    <Footer/>
  </div>
  );
}

const router = createBrowserRouter([{
      path:"/",
      element: <LayOut/>,
      children: [
        {
          path: "/",
          element: <Home/>,
          loader: getProducts,
        },
        {
          path: "/cart",
          element: <Cart/>,
        },
        {
          path: "/product/:id",
          element: <Product/>
        },
        {
          path: "/login",
          element: <Login/>
        },
    ],
  },
]);

function App() {
  return (
      <div className="font-bodyFont">
        <RouterProvider router={router}/>
      </div>
    
  );
}

export default App;
