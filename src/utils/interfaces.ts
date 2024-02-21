import { FunctionComponent } from "react";

export interface MenuItem {
    label: string;
    path: string;
}

export interface RouteItem {
    path: string;
    component: FunctionComponent;
}