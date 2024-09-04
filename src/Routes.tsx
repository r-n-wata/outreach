import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/organisms/Home/Home";
import Contact from "./components/organisms/Contact/Contact";
import WaterSportRetreats from "./components/organisms/WaterSportsRetreats/WaterSportRetreats";
import MountainRetreats from "./components/organisms/MountainRetreats/MountainRetreats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/retreats/watersport",
    element: <WaterSportRetreats />,
  },
  {
    path: "/retreats/mountain",
    element: <MountainRetreats />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
