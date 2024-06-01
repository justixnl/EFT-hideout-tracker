import { hideoutRequirementsQuery, inventoryCatalogueQuery } from "./query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { request, gql, ClientError } from "graphql-request";

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

export const api = createApi({
  reducerPath: "api",
  baseQuery: graphqlBaseQuery({
    baseUrl: "https://api.tarkov.dev/graphql",
  }),
  endpoints: (builder) => ({
    hideoutRequirements: builder.query<void, void>({
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
