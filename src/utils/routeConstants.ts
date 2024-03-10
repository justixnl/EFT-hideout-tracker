// Components
import HideoutTracker from "../pages/HideoutTracker";
import { MenuItem, RouteItem } from "./interfaces";

// ROUTES
export const routes = {
  home: "/",
}
// ROUTES - MenuItems
export const MENU_ITEMS: MenuItem[] = [
    { label: "Home", path: routes.home },
]
// ROUTES - Each individual Route
export const ROUTE_ITEMS: RouteItem[] = [
    { path: routes.home , component: HideoutTracker },
]