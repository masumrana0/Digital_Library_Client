import api from "./userSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
    }),

    filterBookBygenre: builder.mutation({
      query: (filterData) => ({
        url: `/books/?genre=${filterData} `,
        method: "GET",
      }),
    }),
    filterBookBypublicationYear: builder.mutation({
      query: (filterData) => ({
        url: `/books/?publicationData=${filterData} `,
        method: "GET",
      }),
    }),
    searchBook: builder.mutation({
      query: (searchData) => ({
        url: `/books/?searchTerm=${searchData} `,
        method: "GET",
      }),
    }),

    getMyBook: builder.query({
      query: (token) => ({
        url: `books/mybooks`,
        method: "GET",
        headers: {
          Authorization: token,
        },
      }),
    }),
    getOneBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/review/${id}`,
        method: "POST",
        body: data,
      }),
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: `/books/create-book`,
        method: "POST",
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useFilterBookBygenreMutation,
  useFilterBookBypublicationYearMutation,
  useSearchBookMutation,
  useGetOneBookQuery,
  usePostReviewMutation,
  usePostBookMutation,
  useGetMyBookQuery,
  useDeleteBookMutation,
} = bookApi;

export default bookApi;
