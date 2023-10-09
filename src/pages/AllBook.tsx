import { useGetBooksQuery } from "../redux/api/apiSlice";
import BookCard from "../components/ui/BookCard";
import { IBook } from "../types/globalTypes";
import Spinner from "../components/ui/spinner";

const AllBook = () => {
  const { data, error, isLoading } = useGetBooksQuery(undefined);

  return (
    <div className="box-border">
      {/* Searching bar */}
      <div className="flex items-center justify-center">
        <input
          type="search"
          className="w-96 bg-gray-200 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
          placeholder="Search for anything..."
        />
        <button
          type="submit"
          className="ml-2 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Search
        </button>
      </div>

      {/* Home container */}
      <div className="border-1 border-red-500 min-h-screen mx-auto p-10 grid grid-cols-12 gap-4">
        <div className="col-span-3 bg-green-500 rounded-lg container border-2 border-green-500 min-h-screen">
          <div className="px-2">
            <h3 className="text-4xl font-extrabold mb-2">Genre</h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Comedy
              </button>
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Fiction
              </button>
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Non-Fiction
              </button>
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                History
              </button>
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Science
              </button>
            </div>
          </div>
        </div>

        {/* Book card section */}
        <div className="col-span-9 rounded-lg container border-2 border-green-500 min-h-screen relative">
          {/* Pagination bar */}
          <nav className="flex justify-center items-center gap-4 absolute bottom-0 start-96 end-96">
            <button
              type="button"
              className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full"
            >
              Previous
            </button>
            <button
              type="button"
              className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full"
            >
              1
            </button>
            <button
              type="button"
              className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full"
            >
              2
            </button>
            <button
              type="button"
              className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full"
            >
              3
            </button>
            <button
              type="button"
              className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full"
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AllBook;
