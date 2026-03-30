import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { BaZi } from "./pages/BaZi";
import { IChing } from "./pages/IChing";
import { Tarot } from "./pages/Tarot";
import { FaceReading } from "./pages/FaceReading";
import { DailyFortune } from "./pages/DailyFortune";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Profile } from "./pages/Profile";
import { Subscription } from "./pages/Subscription";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/subscription",
    Component: Subscription,
  },
  {
    path: "/bazi",
    Component: BaZi,
  },
  {
    path: "/iching",
    Component: IChing,
  },
  {
    path: "/tarot",
    Component: Tarot,
  },
  {
    path: "/face-reading",
    Component: FaceReading,
  },
  {
    path: "/daily-fortune",
    Component: DailyFortune,
  },
]);