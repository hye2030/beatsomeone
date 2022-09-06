import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/side-menu/Main";
import SimpleMenu from "../layouts/simple-menu/Main";
import TopMenu from "../layouts/top-menu/Main";

import BeatLayout from "../layouts/beatsomeone/Main"
import BeatIndex from "../views/index"
import SignUp from "../views/signup/sign_up"

function Router() {
  const routes = [
    {
      path: "/",
      element: <BeatLayout />,
      children: [
        {
          path: "/",
          element: <BeatIndex />,
        },
        {
          path: "/signinup/sign_up",
          element: <SignUp />,
        }
      ],
    },
  ];

  return useRoutes(routes);
}

export default Router;
