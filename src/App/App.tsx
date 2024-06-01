import "./App.css";
import { FunctionComponent } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"; // Import your Redux store

// Components
import { RootLayout } from "../infrastructure/Layouts/RootLayout";
import HideoutTracker from "../pages/HideoutTracker";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HideoutTracker />} />
      <Route path="/hideout-tracker" element={<HideoutTracker />} />
    </Route>
  )
);

const App: FunctionComponent = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

export default App;
