import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://digital-library-brackend-5-hju2aamnh-masumrana44.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `books`,
    }),
  }),
});

export const { useGetBooksQuery } = api;

export default api;
