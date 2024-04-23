import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home/Home";
import MoreInfo from "@pages/MoreInfo/MoreInfo";
import routes from "@routes";

const Router = createBrowserRouter([
  { path: routes.home, element: <Home /> },
  {
    path: routes.moreInfo,
    element: <MoreInfo />,
  },
]);

export default Router;
