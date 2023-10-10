import { useParams } from "react-router-dom";
import { useGetOneBookQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/globalTypes";
import Spinner from "../components/ui/Spinner";
import { useState } from "react";
import TableBookDetails from "../components/TableBookDetails";
import BookReview from "../components/BookReview";

const BookDetails = () => {
  const [openDetails, setOpenDetails] = useState(true);
  const { id } = useParams();
  const { data, isLoading } = useGetOneBookQuery(id);
  const book = data?.data as IBook;

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center ">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-4">
            <img className="" src={book?.bookPhotoUrl} alt="" />
          </div>
          <div className="col-span-8">
            <h3 className="text-4xl text-violet-800 font-bold mb-5 mt-20">
              {book?.title}
            </h3>
            {/* about writer and publisher */}
            <div className="flex justify-between items-ceter mb-5">
              <div>
                <p className="text-gray-400">Written by</p>
                <h3 className="font-bold text-xl">{book?.author}</h3>
              </div>
              <div>
                <p className="text-gray-400">Publisher</p>
                <h3 className="font-bold text-xl">
                  {book?.publisher?.name?.firstName}
                </h3>
              </div>
              <div>
                <p className="text-gray-400">Publication Date</p>
                <h3 className="font-bold text-xl">{book?.publicationData}</h3>
              </div>
            </div>

            {/* summary */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold  mb-1">Book Summary</h3>
              <p>{book?.bookSummary}</p>
            </div>

            {/* price and wishlist */}
            <div className="flex justify-around">
              <h2 className="text-3xl text-amber-600">${book?.price}</h2>
              <button className="w-48 transition-colors hover:bg-violet-500 hover:text-white focus:bg-violet-800 text-black font-bold py-2 px-4 rounded-md outline outline-violet-500">
                Add to wishlist
              </button>
            </div>
            <div className="mt-5 flex gap-5">
              <button className="w-25 transition-colors hover:bg-violet-500 hover:text-white focus:bg-violet-800 text-black font-bold py-2 px-4 rounded-md outline outline-violet-500">
                Delete Book
              </button>
              <button className="w-25 transition-colors hover:bg-violet-500 hover:text-white focus:bg-violet-800 text-black font-bold py-2 px-4 rounded-md outline outline-violet-500">
                Edit Book
              </button>
            </div>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-12 gap-10 mb-20">
          {/* Book details and customer reviews */}
          <div className="col-span-8">
            <div className="flex gap-10 border-b border-gray-300 mb-3 ">
              <h4
                onClick={() => setOpenDetails(true)}
                className={`text-xl font-semibold text-blue-900 cursor-pointer ${
                  openDetails ? "border-b-4 border-amber-500" : ""
                }`}
              >
                Details Book
              </h4>
              <h4
                onClick={() => setOpenDetails(false)}
                className={`text-xl font-semibold text-blue-900 cursor-pointer ${
                  openDetails ? "" : "border-b-4 border-amber-500"
                }`}
              >
                Customer Reviews
              </h4>
            </div>

            {/* book details */}
            <div>
              {openDetails ? (
                <TableBookDetails book={book} />
              ) : (
                <BookReview book={book} />
              )}
            </div>
          </div>
          <div className="col-span-4">
            <h2 className="border-l-4 border-amber-500 px-3 text-xl font-bold mb-3 text-violet-800">
              RELATED BOOKS
            </h2>

            {/* related book card */}
            <div className="  rounded  w-72 h-56 p-2 flex justify-center items-center  gap-3 ">
              <div className="w-1/2">
                <img
                  className="w-full h-35 rounded-lg "
                  src="../../assets/book2.png"
                  alt=""
                />
              </div>
              <div className="w-1/2">
                <h3 className="font-bold text-blue-800">Terrible Mandness</h3>
                <p className="font-semibold text-amber-600">Genre: comedy</p>
                <p className="font-extrabold text-2xl text-amber-600 mb-2">
                  $45.4
                </p>
                <button className="w-full transition-colors hover:bg-violet-500 hover:text-white focus:bg-violet-800 text-black font-bold py-1 px-2 rounded-md  outline outline-violet-500 ">
                  Add to wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
