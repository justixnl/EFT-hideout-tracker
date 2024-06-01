import { hideoutRequirementsQuery, inventoryCatalogueQuery } from "./query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { request, gql, ClientError } from "graphql-request";
import { ApiHideoutRequirements } from "../utils/ApiHideOut";

const graphqlBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ body }: { body: string }) => {
    try {
      const result = await request(baseUrl, body);
      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } };
      }
      return { error: { status: 500, data: error } };
    }
  };

// RTK Query Api calls
export const api = createApi({
  reducerPath: "api", // This is the api.reducer value for in the App/store.ts file
  baseQuery: graphqlBaseQuery({
    baseUrl: "https://api.tarkov.dev/graphql",
  }),
  endpoints: (builder) => ({
    // You have to type the builder.query and in this case we are not passing in any
    // arguments so its void
    hideoutRequirements: builder.query<ApiHideoutRequirements, void>({
      query: () => ({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: gql`
          ${hideoutRequirementsQuery}
        `,
      }),
    }),
    inventoryCatalogue: builder.query<void, void>({
      query: () => ({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: gql`
          ${inventoryCatalogueQuery}
        `,
      }),
    }),
  }),
});

// NOTE! you have to add use & Query in the name
export const { useHideoutRequirementsQuery, useInventoryCatalogueQuery } = api;

// API call
// TODO: REMOVE EVERYTHING BELOW ONCE THE ABOVE IS PROPERLY WORKING
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
