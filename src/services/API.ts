import { query } from "./query";

// API call
export const HideoutLoader = async () => {
  const response = await fetch("https://api.tarkov.dev/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
    }),
  })
    .then((r) => r.json())
    .then((data) => {
      return data;
    });

  return response;
};