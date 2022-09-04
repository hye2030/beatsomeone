import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/side-menu/Main";
import SimpleMenu from "../layouts/simple-menu/Main";
import TopMenu from "../layouts/top-menu/Main";
import Page1 from "../views/page-1/Main";
import Page2 from "../views/page-2/Main";

import BeatLayout from "../layouts/beatsomeone/Main"
import BeatIndex from "../views/index"

function Router() {
  const routes = [
    {
      path: "/",
      element: <BeatLayout />,
      children: [
        {
          path: "/",
          element: <BeatIndex />,
        }
      ],
    },
  ];

  return useRoutes(routes);
}

export default Router;
