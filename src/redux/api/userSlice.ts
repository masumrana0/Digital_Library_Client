import api from "./apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getOneUserByEmail: builder.query({
      query: (email) => `/users/${email}`,
    }),

    registerUser: builder.mutation({
      query: (data) => ({
        url: `/auth/register`,
        method: "POST",
        body: data,
      }),
    }),

    loginUser: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),

    getUserCredential: builder.query({
      query: (token) => ({
        url: "/users/credential",
        method: "GET",
        headers: {
          Authorization: token,
        },
      }),
    }),
  }),
});

export const {
  useGetOneUserByEmailQuery,
  useGetUserCredentialQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
} = userApi;

export default userApi;
