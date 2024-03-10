import { hideoutRequirementsQuery, inventoryCatalogueQuery } from "./query";

// API call
export const fetchHideoutRequirements = async () => {
  const response = await fetch("https://api.tarkov.dev/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: hideoutRequirementsQuery,
    }),
  })
    .then((r) => r.json())
    .then((data) => {
      return data;
    });

  return response;
};

export const fetchInventoryCatalogue = async () => {
  const response = await fetch("https://api.tarkov.dev/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: inventoryCatalogueQuery,
    }),
  })
    .then((r) => r.json())
    .then((data) => {
      return data;
    });    

  return response;
};