import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

// components
import NavigationBar from "../NavigationBar/NavigationBar";

export const RootLayout: FunctionComponent = () => (
  <div className="root-layout">
    <header>
      <NavigationBar />
    </header>

    <main className="content-container">
      <Outlet />
    </main>
  </div>
);
