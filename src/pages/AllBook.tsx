import { FormEvent } from "react";
import BookCard from "../components/BookCard";
import Spinner from "../components/ui/Spinner";
import {
  useFilterBookBygenreMutation,
  useFilterBookBypublicationYearMutation,
  useGetBooksQuery,
  useSearchBookMutation,
} from "../redux/api/bookSlice";
import { IBook } from "../types/globalTypes";

const AllBook = () => {
  // get main data RKT query
  const { data: MainData, isLoading: MainDataLoading } = useGetBooksQuery({
    refetchOnMountOrArgChange: true,
  });

  // Filter data with genre by RTK mutation
  const [
    setFilterDataWithGenre,
    { isLoading: FilterDataLoading, data: GenreFilterData },
  ] = useFilterBookBygenreMutation();

  // Filter data with publication Year by RTK mutation
  const [setFilterDataWithYear, { data: YearFilterData }] =
    useFilterBookBypublicationYearMutation();

  // hadnle Searching by RTK mutation
  const [setSearchTerm, { data: bookSearchAbledata }] = useSearchBookMutation();

  // handle FIltering with Genre
  const handleFilterBookWithGenre = (event: {
    preventDefault: () => void;
    target: { value: string };
  }) => {
    event.preventDefault();
    const filterData = event.target.value;
    setFilterDataWithGenre(filterData);
  };

  // handle Filtering with Publication year
  const handleFilterBookWithYear = (event: {
    preventDefault: () => void;
    target: { value: string };
  }) => {
    event.preventDefault();
    const filterData = event.target.value;
    setFilterDataWithYear(filterData);
  };

  // handle search with any book data
  const handleBookSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchTerm = event.target.searchTerm.value;
    setSearchTerm(searchTerm);
  };

  // Data assigning
  let data = MainData;
  let isLoading = MainDataLoading;

  if (GenreFilterData) {
    data = GenreFilterData;
    isLoading = FilterDataLoading;
  }

  if (YearFilterData) {
    data = YearFilterData;
  }
  if (bookSearchAbledata) {
    data = bookSearchAbledata;
  }
  console.log(bookSearchAbledata);

  return (
    <div className="box-border ">
      {/* Searching bar */}
      <div className=" mt-5">
        <form
          className="w-full flex items-center justify-center "
          onSubmit={handleBookSearch}
        >
          <input
            type="search"
            className="w-1/2 py-4 bg-gray-200 border border-gray-300 rounded-md  px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            placeholder="Search for anything..."
            name="searchTerm"
          />
          <button
            type="submit"
            className="ml-2 bg-sky-500 hover:bg-sky-700 text-white font-bold py-4 px-4 rounded-md"
          >
            Search
          </button>
        </form>
      </div>

      {/*  Filtering container */}
      <div className="     min-h-screen mx-auto p-10 grid grid-cols-12 gap-10   ">
        <div className="col-span-3  bg-blue-200 rounded-lg container border-2   min-h-screen">
          {/* for genre  */}
          <form action="/submit" method="post">
            <div className="grid grid-cols-1 ">
              <div className="col-span-full pt-5 ">
                <h2 className="text-2xl text-gray-700 font-bold mb-4 text-center">
                  Select your Filtering Field{" "}
                </h2>
                <select
                  className="py-4 px-4  select select-bordered select-sm select-accent-blue-400 w-full"
                  name="publication_year"
                  onChange={handleFilterBookWithYear}
                >
                  <option>Select publication year</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                </select>
              </div>

              <div className="col-span-full">
                <select
                  className="mt-10 py-4 px-4 select select-bordered select-sm select-accent-blue-400 w-full"
                  name="genre"
                  onChange={handleFilterBookWithGenre}
                >
                  <option value="">Select genre</option>
                  <option value="fiction">Fiction</option>
                  <option value="non-fiction">Non-Fiction</option>
                  <option value="poetry">Poetry</option>
                  <option value="drama">Drama</option>
                  <option value="thriller">Thriller</option>
                  <option value="mystery">Mystery</option>
                  <option value="science fiction">Science Fiction</option>
                  <option value="romance">Romance</option>
                  <option value="horror">Horror</option>
                  <option value="childrens">Children's</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        {/* Book card section */}
        <div className="col-span-9 rounded-lg flex  min-h-screen relative bg-blue-200  overflow-y-scroll scroll-smooth  ">
          {data?.data.length === 0 ? (
            <div className=" w-full flex justify-center items-center text-4xl font-bold  ">
              <h2 className=" ">Book Not Found</h2>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-4 mx-auto gap-32 px-10 py-10  pb-32 ">
                {isLoading ? (
                  <Spinner />
                ) : (
                  data?.data.map((book: IBook) => (
                    <BookCard key={book._id} book={book} />
                  ))
                )}
              </div>
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
          )}

          {/* Pagination bar */}
        </div>
      </div>
    </div>
  );
};

export default AllBook;
