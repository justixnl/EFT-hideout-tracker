import { hideOutQuery, inventoryResourcesQuery } from "./query";

// API call
export const HideoutLoader = async () => {
  const response = await fetch("https://api.tarkov.dev/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: hideOutQuery,
    }),
  })
    .then((r) => r.json())
    .then((data) => {
      return data;
    });

  return response;
};

export const InventoryResourcesLoader = async () => {
  const response = await fetch("https://api.tarkov.dev/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: inventoryResourcesQuery,
    }),
  })
    .then((r) => r.json())
    .then((data) => {
      return data;
    });

  return response;
};