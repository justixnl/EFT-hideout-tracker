import "./App.css";
import { FunctionComponent } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// Components
import { RootLayout } from "./infrastructure/Layouts/RootLayout";
import HideoutTracker from "./pages/HideoutTracker";
import { HideoutLoader } from "./services/API";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HideoutTracker />} />
      <Route path="/hideout-tracker" element={<HideoutTracker />} loader={HideoutLoader} />
    </Route>
  )
);

const App: FunctionComponent = () => <RouterProvider router={router} />;

export default App;
