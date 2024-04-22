import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home/Home";
import MoreInfo from "@pages/MoreInfo/MoreInfo";

export const routes = {
  home: "/*",
  moreInfo: "/character/:id",
};
export default createBrowserRouter([
  { path: routes.home, element: <Home /> },
  {
    path: routes.moreInfo,
    element: <MoreInfo />,
  },
]);
