import { FunctionComponent, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

// components
import NavigationBar from "../NavigationBar/NavigationBar";
import Stash from "../../features/Stash/Stash";

export type InventoryDataItem = { name: string; amount: number };

export const RootLayout: FunctionComponent = () => {
  const [stashVisibility, setStashVisibility] = useState<boolean>(false);

  return (
    <div className="root-layout">
      <header>
        <NavigationBar setStashVisibility={setStashVisibility} />
      </header>

      {/* TODO: Rework CSS */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <main className="content-container">
          <Outlet />
        </main>

        {stashVisibility ? <Stash setStashVisibility={setStashVisibility} /> : null}
      </div>
    </div>
  );
};
