import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://digital-library-4nv8cpmkf-masumrana44.vercel.app/api/v1/",
  }),
  endpoints: (builder) => ({}),
});

export default api;
