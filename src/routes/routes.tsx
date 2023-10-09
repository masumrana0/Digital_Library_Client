import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllBook from "../pages/AllBook";
import AddBook from "../pages/AddBook";
import MyBookCollection from "../pages/MyBookCollection";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
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
        path: "/allbooks",
        element: <AllBook />,
      },
      {
        path: "/addbook",
        element: <AddBook />,
      },
      {
        path: "/mybooks",
        element: <MyBookCollection />,
      },
    ],
  },
]);

export default routes;
