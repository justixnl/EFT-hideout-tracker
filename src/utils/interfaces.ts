import { FunctionComponent } from "react";

export interface MenuItem {
    label: string;
    path: string;
}

export interface RouteItem {
    path: string;
    component: FunctionComponent;
}

// StashResources
export interface InventoryData {
  data: {
    barters: InventoryBarters[];
  };
}

export interface InventoryBarters {
  requiredItems: InventoryRequiredItem[];
}

export interface InventoryRequiredItem {
  item: InventoryItem;
}

export interface InventoryItem {
  name: string;
  category: {
    name: string;
  };
}
