import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../views/LoginPage";
import HomePage from "../views/HomePage";
import AddBusiness from "../views/AddBusiness";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/add-business",
        element: <AddBusiness />,
      },
    ],
  },
]);

export default router;
