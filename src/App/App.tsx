import "./App.css";
import { FunctionComponent } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"; // Import your Redux store

// Utils
import { fetchHideoutRequirements } from "../services/API";
import { createHideoutTracker } from "../utils/HideoutTrackerArray";
import { createStashTracker } from "../utils/StashTrackerArray";

// Components
import { RootLayout } from "../infrastructure/Layouts/RootLayout";
import HideoutTracker from "../pages/HideoutTracker";
import { categoriesToFilter } from "../utils/constants";
import { hideoutResources } from "../services/resources";

/**
 * This retrieves either the necessary data from the API
 * Formats it and then returns it to the Stash component (widget).
 * Or it gets retrieve the already existing data from the localStorage
 * @returns returns an list of all Stash resources
 */
const stashLoader = async () => {
  const localStorageData = localStorage.getItem("stashData");
  if (!localStorageData) {
    // If Data doesn't exist in localStorage, retrieve API data
    const stashInventory = createStashTracker(hideoutResources, categoriesToFilter);

    localStorage.setItem("stashData", JSON.stringify(stashInventory));

    return stashInventory;
  } else {
    // If Data exists in localStorage, no need to fetch
    const stashInventory = JSON.parse(localStorageData);

    return stashInventory;
  }
};

/**
 * This retrieves either the necessary data from the API
 * Formats it and then returns it to the hideout component (widget).
 * Or it gets retrieve the already existing data from the localStorage
 * @returns returns an list of all Stash resources
 */
const hideoutLoader = async () => {
  const localStorageData = localStorage.getItem("hideoutData");

  if (!localStorageData) {
    // If Data doesn't exist in localStorage, retrieve API data
    const hideOutRequirementData = await fetchHideoutRequirements();
    const hideOutData = createHideoutTracker(hideOutRequirementData.data.hideoutStations);

    localStorage.setItem("hideoutData", JSON.stringify(hideOutData));

    return hideOutData;
  } else {
    // If Data exists in localStorage, no need to fetch
    const hideOutData = JSON.parse(localStorageData);

    return hideOutData;
  }
};

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
